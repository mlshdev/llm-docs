> Pinned source for Docker main: [content/manuals/accounts/company/manage.md](https://github.com/docker/docs/blob/c69ce0fd3851270bba5473502268ff7661887b2a/content/manuals/accounts/company/manage.md)

# Manage company organizations, owners, and members

**Company requirements**

- Subscription: Business
- For: Administrators

After creating a company, you can manage multiple organizations from
Docker Home. Company owners can use the company portal to invite members to
specific organizations, view seat availability across organizations, and
add new company owners.

## Add more organizations

Company owners can add Docker organizations with a Docker Business plan
to their company, so long as they're also the organization owners for
that organization. There's no limit to the number of organizations you
add to a company.

> \[!IMPORTANT]
>
> Once you add an organization to a company, you can't remove it from the
> company.

1. Sign in to [Docker Home](https://app.docker.com) and select
   your company.
2. Select **Managed organizations**.
3. Select **Add organization**, then select an organization from the
   drop-down list.

A nested organization must keep its Docker Business subscription to stay
managed by the company. If an organization downgrades from Docker
Business, you can no longer manage it through the company, and its owner
must manage it separately.

## Company owners

A company can have multiple owners who manage the company and all of its
organizations. For details about the company owner role and how it affects
seats, see [Company roles](https://docs.docker.com/accounts/company/#company-roles).

### Add a company owner

1. Sign in to [Docker Home](https://app.docker.com) and select your company.
2. Select **Company owners**, then select **Add owner**.
3. Specify the member's Docker ID, then select **Add company owner**.

### Remove a company owner

1. Sign in to [Docker Home](https://app.docker.com) and select your company.
2. Select **Company owners**.
3. Find the company owner you want to remove and select the **Actions**
   menu, then select **Remove as company owner**.

## Company invitations

You add a member to your company by inviting them to an organization within
the company. Company owners can invite members to any organization in the
company using a Docker ID, email address, or in bulk with a CSV file of
email addresses.

Members and invitations belong to individual organizations, not to the
company itself. A pending invitation occupies a seat until the invitee
accepts.

### Invite members to an organization

1. Sign in to [Docker Home](https://app.docker.com) and select your company.
2. Select **Users**, then select **Invite**.

**Email or username**

1. Select **Emails or usernames**.
2. Enter the Docker IDs or email addresses of the invitees.
3. Select an organization for each invitee.

**CSV upload**

1. Select **CSV upload**.
2. Upload a CSV file of email addresses.
3. Select an organization for the invitees.

Invitees receive an email with instructions to accept. After they accept,
new members appear on the **Users** page. The table shows how many
organizations each member belongs to.

### Resend invitations

Company owners can resend invitations from the company-level **Users**
page.

**Individual**

1. Select your company from [Docker Home](https://app.docker.com/).
2. Select **Users**, then locate the invitee from the table.
3. Select the **Actions** menu, then select **Resend**.
   - Before resending, confirm you selected the correct invitee.
   - The resend invitation modal displays the date you originally invited
     the invitee.
4. Select **Invite** to confirm.

**Bulk**

1. Select your company from [Docker Home](https://app.docker.com/).
2. Select **Users**.
3. From the table, use the multi-select checkboxes next to the invitees
   you want to resend to.
4. Select **Resend invites**, then select **Resend** to confirm.

## Export a member list CSV

Company owners can export a CSV file of members across organizations in the
company.

1. Sign in to [Docker Home](https://app.docker.com/) and select your company.
2. Select **Users**.
3. Select the **Download** icon. The CSV file downloads in your browser.

**CSV fields**

- Name: The member's name
  - Username: The member's Docker ID
  - Email: The member's email address
  - Member of Organizations: Organizations the member belongs to within the
    company
  - Invited to Organizations: Organizations where the invitee has a
    pending invitation
  - Account created: The time and date when the account was created

## Add seats to an organization

If you have a self-serve subscription that has no pending subscription
changes, you can add seats using Docker Home. For more information about
adding seats, see
[Manage seats](https://docs.docker.com/accounts/organization/manage/manage-seats/#add-seats-to-your-subscription).

If you have a sales-assisted subscription, you must contact Docker support
or sales to add seats.

## Manage teams

Teams exist at the organization level, not the company level. After inviting
members to an organization, you can add them to teams within that
organization. For more details, see
[Manage members on a team](https://docs.docker.com/accounts/organization/manage/members/#manage-members-on-a-team).

## Next steps

- [Company overview](https://docs.docker.com/accounts/company/)
- [Manage organization members](https://docs.docker.com/accounts/organization/manage/members/)
- [Manage seats](https://docs.docker.com/accounts/organization/manage/manage-seats/)
- [Roles and permissions](https://docs.docker.com/security/roles-and-permissions/)
