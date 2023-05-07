const { RepositoryError } = require("../util/error/index");

class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    try {
      const result = await this.model.create(data);
      return result;
    } catch (error) {
      throw new RepositoryError(
        `something error occured in the ${this.model} repository layer`,
        `something wrong occured while creating a ${this.model} in db `
      );
    }
  }

  async get(dataId) {
    try {
      const result = await this.model.findByPk(dataId);
      return result;
    } catch (error) {
      throw new RepositoryError(
        `something error occured in the ${this.model} repository layer`,
        `something wrong occured while fetching a ${this.model} in db `
      );
    }
  }

  async getAll() {
    try {
      const result = await this.model.findAll();
      return result;
    } catch (error) {
      throw new RepositoryError(
        `something error occured in the ${this.model} repository layer`,
        `something wrong occured while fetching all ${this.model} in db `
      );
    }
  }

  async update(dataId, data) {
    try {
      await this.model.update(
        { ...data },
        {
          where: {
            id: dataId,
          },
        }
      );

      let result = await this.model.findByPk(dataId);
      return result;
    } catch (error) {
      throw new RepositoryError(
        `something error occured in the ${this.model} repository layer`,
        `something wrong occured while updating a ${this.model} in db `
      );
    }
  }

  async delete(dataId) {
    try {
      const response = await this.model.destroy({
        where: {
          id: dataId,
        },
      });
      return response;
    } catch (error) {
      throw new RepositoryError(
        `something error occured in the ${this.model} repository layer`,
        `something wrong occured while deleting a ${this.model} in db `
      );
    }
  }
}

module.exports = CrudRepository;
