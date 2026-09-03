> Commit-pinned source for Docker main: [content/manuals/admin/company/_index.md](https://github.com/docker/docs/blob/d47e43dee68bd9cbd16af81b1aa6aef45023e17c/content/manuals/admin/company/_index.md)

# Company overview

**Company requirements**

- Subscription: Business
- For: Administrators

A company provides a single point of visibility across multiple
organizations, for centralized organization and settings management.
Organization owners with a Docker Business subscription can create a company
and manage it through Docker Home.

## Company structure

The following diagram shows how a company relates to its associated
organizations.

![Diagram showing how companies relate to Docker organizations](https://docs.docker.com/admin/images/docker-admin-structure.webp)

For the full administration hierarchy, see the
[administration overview](https://docs.docker.com/admin/#company-and-organization-hierarchy).

## Company roles

A company includes one or more company owners. The creator of a company
becomes both a company owner and an organization owner, and occupies a seat
as organization owner. After creation, a company can have multiple owners,
and each owner has visibility across the entire company. They can manage
settings for every organization under it and have the same access rights as
organization owners.

- A company can have up to ten unique company owners.
- Company owners don't occupy a seat unless one of the following applies:
  - They're added as a member of an organization under the company.
  - SSO is enabled and the company owner signs in through SSO, which
    automatically adds them as an organization member.

To add or remove company owners, see
[Manage your company](https://docs.docker.com/admin/company/manage/#company-owners).

## Next steps

Learn how to create and manage a company in the following sections.

- [Create a company](https://docs.docker.com/admin/company/new-company/): Get started by learning how to create a company.
- [Manage your company](https://docs.docker.com/admin/company/manage/): Add organizations, manage company owners, and invite members.
- [Configure SSO and SCIM](https://docs.docker.com/enterprise/security/single-sign-on/): Set up single sign-on and SCIM provisioning for your company.
- [Domain management](https://docs.docker.com/enterprise/security/domain-management/): Add and verify your company's domains.
- [FAQs](https://docs.docker.com/faq/admin/company-faqs/): Explore frequently asked questions about companies.
