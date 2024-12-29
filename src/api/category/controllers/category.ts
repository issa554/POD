/**
 * category controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::category.category',{
    async findOne(ctx) {
        const { id } = ctx.params;
        const category = await strapi.db.query("api::category.category").findOne({
            where: { id },
            populate: {
                image: true,
                products: {
                    populate: ['images']
                }
            }
        });
        return category;
    }
});
