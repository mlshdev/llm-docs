> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/enterpriseprogramapi/userinvitation](https://developer.apple.com/documentation/enterpriseprogramapi/userinvitation)

# UserInvitation

**Interface language:** Data

**Framework:** Enterprise Program API  
**Kind:** Object

The data structure that represents a User Invitations resource.

## Declaration

```
object UserInvitation
```

## Properties

- `attributes` — `UserInvitation.Attributes`: The resource’s attributes.
- `id` — `string` (required): The opaque resource ID that uniquely identifies the resource.
- `type` — `string` (required): The resource type.
  **Allowed values:** `userInvitations`
- `links` — `ResourceLinks`: Navigational links that include the self-link.

## Topics

### Objects

- [UserInvitation.Attributes](userinvitation/attributes-data.dictionary.md): Attributes that describe a User Invitations resource.

## See Also

### Objects

- [UserInvitationCreateRequest](userinvitationcreaterequest.md): The request body you use to create a User Invitation.
- [UserInvitationResponse](userinvitationresponse.md): A response that contains a single User Invitations resource.
- [UserInvitationsResponse](userinvitationsresponse.md): A response that contains a list of User Invitations resources.
