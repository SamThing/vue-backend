# Copyright (c) 2017, Oracle and/or its affiliates. All rights reserved.
#
# This program is free software; you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation; version 2 of the License.
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.
#
# You should have received a copy of the GNU General Public License
# along with this program; if not, write to the Free Software
# Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301 USA
FROM oraclelinux:7-slim

ARG MYSQL_SERVER_PACKAGE=mysql-community-server-minimal-5.5.62
ARG MYSQL_SHELL_PACKAGE=

# Install server
RUN yum install -y https://repo.mysql.com/mysql-community-minimal-release-el7.rpm \
      https://repo.mysql.com/mysql-community-release-el7.rpm \
  && yum-config-manager --enable mysql55-server-minimal \
  && yum install -y \
      curl \
      epel-release \
      $MYSQL_SERVER_PACKAGE \
      $MYSQL_SHELL_PACKAGE \
      libpwquality \
  && mkdir /docker-entrypoint-initdb.d

VOLUME /var/lib/mysql

RUN curl --silent --location https://rpm.nodesource.com/setup_8.x | bash -
RUN yum install -y \
        nodejs \
        gcc-c++ \
        make \
    && yum clean all

COPY node_js /node_js

ENV MYSQL_ROOT_PASSWORD example
ENV MYSQL_DATABASE desafio_leads2b
ENV MYSQL_ROOT_HOST=%

COPY docker-entrypoint.sh /entrypoint.sh
COPY healthcheck.sh /healthcheck.sh
COPY start_back.sh /start_back.sh

ENTRYPOINT ["/entrypoint.sh"]
HEALTHCHECK CMD /healthcheck.sh
EXPOSE 3306
EXPOSE 3000

CMD ["mysqld"]