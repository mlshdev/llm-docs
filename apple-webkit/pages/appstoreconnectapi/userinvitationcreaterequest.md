> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-a0a4b8d281c3; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/userinvitationcreaterequest

# UserInvitationCreateRequest

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.0+

The request body you use to create a User Invitation.

## Declaration

```
object UserInvitationCreateRequest
```

## Properties

- `data` — `UserInvitationCreateRequest.Data` (required): The resource data.

## Topics

### Objects

- [UserInvitationCreateRequest.Data](userinvitationcreaterequest/data-data.dictionary.md): The data element of the request body.

## See Also

### Objects

- [UserInvitation](userinvitation.md): A pending invitation for a person to join your App Store Connect team with a specified role and app access.
- [UserInvitationResponse](userinvitationresponse.md): The response body for endpoints that read or modify a pending App Store Connect team invitation.
- [UserInvitationsResponse](userinvitationsresponse.md): The response body for endpoints that list pending App Store Connect team invitations.
- [UserInvitationVisibleAppsLinkagesResponse](userinvitationvisibleappslinkagesresponse.md)
