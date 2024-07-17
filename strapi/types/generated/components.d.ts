import type { Schema, Attribute } from '@strapi/strapi';

export interface AuthorAuthor extends Schema.Component {
  collectionName: 'components_author_authors';
  info: {
    displayName: 'Author';
    description: '';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    avatar: Attribute.Media;
  };
}

export interface DurationDuration extends Schema.Component {
  collectionName: 'components_duration_durations';
  info: {
    displayName: 'duration';
    icon: 'clock';
  };
  attributes: {
    start: Attribute.Date;
    end: Attribute.Date;
  };
}

export interface LinkLink extends Schema.Component {
  collectionName: 'components_link_links';
  info: {
    displayName: 'Link';
    description: '';
  };
  attributes: {
    value: Attribute.String;
    href: Attribute.String;
  };
}

export interface OrganisationOrganisation extends Schema.Component {
  collectionName: 'components_organisation_organisations';
  info: {
    displayName: 'organisation';
    icon: 'chartBubble';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    logo: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'author.author': AuthorAuthor;
      'duration.duration': DurationDuration;
      'link.link': LinkLink;
      'organisation.organisation': OrganisationOrganisation;
    }
  }
}
