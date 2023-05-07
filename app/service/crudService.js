const { ServiceError, NotFoundError } = require("../util/error/index");

class CrudService {
  constructor(repository) {
    this.repository = repository;
  }

  async create(data) {
    try {
      const result = await this.repository.create(data);
      return result;
    } catch (error) {
      if (error.name === `RepositoryError`) throw error;
      else
        throw new ServiceError(
          `something wrong occured in  the ${this.repository.model.name} service layer`,
          `something wrong in the service logic`
        );
    }
  }

  async get(dataId) {
    try {
      const result = await this.repository.get(dataId);
      if (!result) {
        throw new NotFoundError(
          `resource not found`,
          `${this.repository.model.name} with given id not found`
        );
      }
      return result;
    } catch (error) {
      if (error.name === `RepositoryError` || error.name === `NotFoundError`)
        throw error;
      else
        throw new ServiceError(
          `something wrong occured in  the ${this.repository.model.name} service layer`,
          `something wrong in the service logic`
        );
    }
  }

  async getAll() {
    try {
      const result = await this.repository.getAll();
      if (result.length < 1) {
        throw new NotFoundError(
          `resource not found`,
          `${this.repository.model.name} with given id not found`
        );
      }
      return result;
    } catch (error) {
      if (error.name === `RepositoryError` || error.name === `NotFoundError`)
        throw error;
      else
        throw new ServiceError(
          `something wrong occured in  the ${this.repository.model.name} service layer`,
          `something wrong in the service logic`
        );
    }
  }

  async update(dataId, data) {
    try {
      const result = await this.repository.update(dataId, data);
      if (!result) {
        throw new NotFoundError(
          `resource not found`,
          `${this.repository.model.name} with given id not found`
        );
      }
      return result;
    } catch (error) {
      if (error.name === `RepositoryError` || error.name === `NotFoundError`)
        throw error;
      else
        throw new ServiceError(
          `something wrong occured in  the ${this.repository.model.name} service layer`,
          `something wrong in the service logic`
        );
    }
  }

  async delete(dataId) {
    try {
      const response = await this.repository.delete(dataId);
      if (!response) {
        throw new NotFoundError(
          `resource not found`,
          `${this.repository.model.name} with given id not found`
        );
      }
      return response > 0 ? true : false;
    } catch (error) {
      if (error.name === `RepositoryError` || error.name === `NotFoundError`)
        throw error;
      else
        throw new ServiceError(
          `something wrong occured in  the ${this.repository.model.name} service layer`,
          `something wrong in the service logic`
        );
    }
  }
}

module.exports = CrudService;
