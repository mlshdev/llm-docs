> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/userinvitationsresponse](https://developer.apple.com/documentation/appstoreconnectapi/userinvitationsresponse)

# UserInvitationsResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.0+

The response body for endpoints that list pending App Store Connect team invitations.

## Declaration

```
object UserInvitationsResponse
```

## Properties

- `data` — `[UserInvitation]` (required): The resource data.
- `links` — `PagedDocumentLinks` (required): Navigational links that include the self-link.
- `meta` — `PagingInformation`: Paging information.
- `included` — `[App]`:

## See Also

### Related Documentation

- [List invited users](get-v1-userinvitations.md): Get a list of pending invitations to join your team.

### Objects

- [UserInvitation](userinvitation.md): A pending invitation for a person to join your App Store Connect team with a specified role and app access.
- [UserInvitationCreateRequest](userinvitationcreaterequest.md): The request body you use to create a User Invitation.
- [UserInvitationResponse](userinvitationresponse.md): The response body for endpoints that read or modify a pending App Store Connect team invitation.
- [UserInvitationVisibleAppsLinkagesResponse](userinvitationvisibleappslinkagesresponse.md)
