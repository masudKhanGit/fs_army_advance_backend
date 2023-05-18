import { faker } from '@faker-js/faker';
import shortid from 'shortid';

const seedDataService = () => {
    let users = []
    for(let i = 0; i < 100; i++) {
        const user = {
            id: shortid.generate(),
            username: faker.internet.userName(),
            email: faker.internet.email(),
            password: faker.internet.password(),
            birthdate: faker.date.birthdate(),
            createdAt: new Date(),
            updatedAt: new Date()
        }
        users.push(user)
    }
    return users;
}

export default seedDataService;