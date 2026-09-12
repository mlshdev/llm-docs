> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/enterpriseprogramapi/user-invitations](https://developer.apple.com/documentation/enterpriseprogramapi/user-invitations)

# User Invitations

**Interface language:** Data

**Framework:** Enterprise Program API  
**Kind:** API Collection

Email invitations to join your Enterprise Program team.

<a id="overview"></a>

## Overview

The `userInvitations` resource represents users who have been invited to join a team in the [Apple Developer website](https://developer.apple.com). When you create a user invitation the user receives an email with a link to activate an account and connect it to their Apple Account.

If the user accepts the invitation, the user is added to the team and the invitation is deleted. User invitations expire after three days.

You can also get a list of all invited users and read the invite information of a single user.

## Topics

### Getting Invited Users

- [List Invited Users](list-invited-users.md): Get a list of pending invitations to join your team.
- [Read user invitation information](read-userinvitation-information.md): Get information about a pending invitation to join your team.

### Sending and Canceling Invitations

- [Invite a User](invite-a-user.md): Invite a user with assigned user roles to join your team.
- [Cancel a User Invitation](cancel-a-user-invitation.md): Cancel a pending invitation for a user to join your team.

### Objects

- [UserInvitation](userinvitation.md): The data structure that represents a User Invitations resource.
- [UserInvitationCreateRequest](userinvitationcreaterequest.md): The request body you use to create a User Invitation.
- [UserInvitationResponse](userinvitationresponse.md): A response that contains a single User Invitations resource.
- [UserInvitationsResponse](userinvitationsresponse.md): A response that contains a list of User Invitations resources.

## See Also

### Users and Roles

- [Users](users.md): Manage users on your Enterprise Program team.
