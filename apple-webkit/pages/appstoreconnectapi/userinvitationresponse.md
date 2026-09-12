> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/userinvitationresponse](https://developer.apple.com/documentation/appstoreconnectapi/userinvitationresponse)

# UserInvitationResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.0+

The response body for endpoints that read or modify a pending App Store Connect team invitation.

## Declaration

```
object UserInvitationResponse
```

## Properties

- `data` — `UserInvitation` (required): The resource data.
- `links` — `DocumentLinks` (required): Navigational links that include the self-link.
- `included` — `[App]`:

## See Also

### Related Documentation

- [Invite a user](post-v1-userinvitations.md): Invite a user with assigned user roles to join your team.

### Objects

- [UserInvitation](userinvitation.md): A pending invitation for a person to join your App Store Connect team with a specified role and app access.
- [UserInvitationCreateRequest](userinvitationcreaterequest.md): The request body you use to create a User Invitation.
- [UserInvitationsResponse](userinvitationsresponse.md): The response body for endpoints that list pending App Store Connect team invitations.
- [UserInvitationVisibleAppsLinkagesResponse](userinvitationvisibleappslinkagesresponse.md)
