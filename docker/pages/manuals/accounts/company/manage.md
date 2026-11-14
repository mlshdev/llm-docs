> Pinned source for Docker main: [content/manuals/accounts/company/manage.md](https://github.com/docker/docs/blob/553482ce632f00c6e7faabab863422b4916e7c18/content/manuals/accounts/company/manage.md)

# Manage your company

**Company requirements**

- Subscription: Business
- For: Administrators

After creating a company, you manage member roles and membership from
Docker Home. To invite members, add organizations, or manage company
owners, see
[Set up a company](https://docs.docker.com/accounts/company/new-company/).

## Change a user's role

1. Sign in to [Docker Home](https://app.docker.com) and select your company.
2. Select **Users**.
3. Find the user and select the **Actions** menu, then select
   **Change role**. If the user belongs to more than one organization, the
   menu label is **Change roles**.
4. Complete the change in one of these ways:
   - **One organization.** Select a role, then select **Save**.
   - **Several organizations.** Select the **Organization**, select a
     role, then select **Save**.

If the user is the only owner of the organization, assign another owner
before you can change that role.

## Remove a user

1. Sign in to [Docker Home](https://app.docker.com) and select your company.
2. Select **Users**.
3. Find the user and select the **Actions** menu, then select **Remove**.
4. Complete the removal in one of these ways:
   - **One organization.** Select **Remove**.
   - **Several organizations.** Select the organizations, then select
     **Remove**.

If the user is the only owner of an organization, assign another owner
before you can remove them from that organization.

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

## Leave a company

1. Sign in to [Docker Home](https://app.docker.com) and select your company.
2. Select **Company owners**.
3. Find your account and select the **Actions** menu, then select
   **Leave company**.
4. Select **Leave**.

If you are the only company owner, add another owner before you can leave.

## Leave an organization in the company

1. Sign in to [Docker Home](https://app.docker.com) and select your company.
2. Select **Users**.
3. Find your account and select the **Actions** menu, then select
   **Leave organization**. If you belong to more than one organization, the
   menu label is **Leave organizations**.
4. Select **Leave**.

If you are the only owner of an organization, assign another owner before
you can leave it.

## Next steps

- [Set up a company](https://docs.docker.com/accounts/company/new-company/) to invite
  members, add owners, or add organizations
- [Manage members on a team](https://docs.docker.com/accounts/organization/manage/members/#manage-members-on-a-team)
  to add company members to organization teams
- [Manage seats](https://docs.docker.com/accounts/organization/manage/manage-seats/) to
  add or remove subscription seats
- [Roles and permissions](https://docs.docker.com/security/roles-and-permissions/)
  for what each role can do
