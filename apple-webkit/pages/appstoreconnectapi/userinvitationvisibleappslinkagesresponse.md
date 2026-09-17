> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-a0a4b8d281c3; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/userinvitationvisibleappslinkagesresponse

# UserInvitationVisibleAppsLinkagesResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.6+

## Declaration

```
object UserInvitationVisibleAppsLinkagesResponse
```

## Properties

- `data` — `[UserInvitationVisibleAppsLinkagesResponse.Data]` (required):
- `links` — `PagedDocumentLinks` (required):
- `meta` — `PagingInformation`:

## Topics

### Dictionaries

- [UserInvitationVisibleAppsLinkagesResponse.Data](userinvitationvisibleappslinkagesresponse/data-data.dictionary.md)

## See Also

### Objects

- [UserInvitation](userinvitation.md): A pending invitation for a person to join your App Store Connect team with a specified role and app access.
- [UserInvitationCreateRequest](userinvitationcreaterequest.md): The request body you use to create a User Invitation.
- [UserInvitationResponse](userinvitationresponse.md): The response body for endpoints that read or modify a pending App Store Connect team invitation.
- [UserInvitationsResponse](userinvitationsresponse.md): The response body for endpoints that list pending App Store Connect team invitations.
