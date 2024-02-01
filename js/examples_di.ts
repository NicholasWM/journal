interface User {
    id: string
}

class UserRepository {
    findAll(): User[] {
        return [{id: '1'}, {id: '2'}]
    }
}

class UserRepositoryMySQL implements UserRepository {
    findAll(): User[] {
        return [{id: '1'}, {id: '2'}]
    }
}

class UserRepositoryPG implements UserRepository {
    findAll(): User[] {
        return [{id: '1'}, {id: '2'}]
    }
}

class UserService {
    private userRepository: UserRepositoryPG;

    constructor() {
        this.userRepository = new UserRepositoryPG()
    }

    getUsers(): User[] {
        return this.userRepository.findAll()
    }
}
const userServiceInstance = new UserService()
userServiceInstance.getUsers

// Class -> Instancia ou Tipo(Contrato)



class UserService2 {
    constructor(private userRepository: UserRepository) {}

    getUsers(): User[] {
        return this.userRepository.findAll()
    }
}

const repositoryInstance = new UserRepositoryPG()

const userServiceInstance2 = new UserService2(repositoryInstance)
userServiceInstance.getUsers