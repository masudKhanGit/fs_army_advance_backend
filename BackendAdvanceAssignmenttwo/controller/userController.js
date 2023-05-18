import seedDataService from './../services/seedDataService.js';

export const usersController = (_req, res) => {
    const users = seedDataService()
    res.status(200).json(users)
}