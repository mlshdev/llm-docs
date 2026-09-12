> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/userinvitation](https://developer.apple.com/documentation/appstoreconnectapi/userinvitation)

# UserInvitation

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.0+

A pending invitation for a person to join your App Store Connect team with a specified role and app access.

## Declaration

```
object UserInvitation
```

## Properties

- `attributes` — `UserInvitation.Attributes`: The resource’s attributes.
- `id` — `string` (required): The opaque resource ID that uniquely identifies the resource.
- `relationships` — `UserInvitation.Relationships`: Navigational links to related data and included resource types and IDs.
- `type` — `string` (required): The resource type.
  **Allowed values:** `userInvitations`
- `links` — `ResourceLinks`: Navigational links that include the self-link.

## Topics

### Objects

- [UserInvitation.Attributes](userinvitation/attributes-data.dictionary.md): Attributes that describe a User Invitations resource.
- [UserInvitation.Relationships](userinvitation/relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.

## See Also

### Objects

- [UserInvitationCreateRequest](userinvitationcreaterequest.md): The request body you use to create a User Invitation.
- [UserInvitationResponse](userinvitationresponse.md): The response body for endpoints that read or modify a pending App Store Connect team invitation.
- [UserInvitationsResponse](userinvitationsresponse.md): The response body for endpoints that list pending App Store Connect team invitations.
- [UserInvitationVisibleAppsLinkagesResponse](userinvitationvisibleappslinkagesresponse.md)
