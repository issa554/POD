import type { Schema, Struct } from '@strapi/strapi';

export interface ColorColor extends Struct.ComponentSchema {
  collectionName: 'components_color_colors';
  info: {
    displayName: 'Color';
  };
  attributes: {
    Name: Schema.Attribute.String;
    Stock: Schema.Attribute.Decimal;
  };
}

export interface OrderitemOrderitem extends Struct.ComponentSchema {
  collectionName: 'components_orderitem_orderitems';
  info: {
    description: '';
    displayName: 'orderitem';
  };
  attributes: {
    Color: Schema.Attribute.String;
    product: Schema.Attribute.Relation<'oneToOne', 'api::product.product'>;
    quntity: Schema.Attribute.Integer;
    Size: Schema.Attribute.String;
  };
}

export interface SizeSize extends Struct.ComponentSchema {
  collectionName: 'components_size_sizes';
  info: {
    displayName: 'Size';
    icon: 'scissors';
  };
  attributes: {
    Color: Schema.Attribute.Component<'color.color', true>;
    Name: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'color.color': ColorColor;
      'orderitem.orderitem': OrderitemOrderitem;
      'size.size': SizeSize;
    }
  }
}
