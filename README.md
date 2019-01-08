# Fontes
> https://cloud.docker.com/repository/docker/samthingz/vue-front  
> https://cloud.docker.com/repository/docker/samthingz/vue-back  
> https://github.com/SamThing/vue-backend  
> https://github.com/SamThing/vue-frontend  

# Compile:
> docker-compose up --build

# Acesse http://localhost:8080
> Login: leads2b  
> Senha: senha1234

# TODO LIST

* Features globais:
    * CRUD de usuarios
    * CRUD de funcionários

* Backend
    * Separar métodos de conexão (DB) em outro modulo
    * Separar métodos de conexão (REST) em outro modulo
    * Melhorar tratamento de exceções
    * Testes unitários

* Frontend
    * Filtros e ordenação para a lista
    * Ajustar para ficar responsivo
    * Melhorar tratamento de exceções
    * Separar elementos em componentes
    * Criar etapa de build
    * Separar componentes em arquivos
    * Testes unitários