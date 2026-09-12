> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/enterpriseprogramapi/userinvitationresponse](https://developer.apple.com/documentation/enterpriseprogramapi/userinvitationresponse)

# UserInvitationResponse

**Interface language:** Data

**Framework:** Enterprise Program API  
**Kind:** Object

A response that contains a single User Invitations resource.

## Declaration

```
object UserInvitationResponse
```

## Properties

- `data` — `UserInvitation` (required): The resource data.
- `links` — `DocumentLinks` (required): Navigational links that include the self-link.

## See Also

### Objects

- [UserInvitation](userinvitation.md): The data structure that represents a User Invitations resource.
- [UserInvitationCreateRequest](userinvitationcreaterequest.md): The request body you use to create a User Invitation.
- [UserInvitationsResponse](userinvitationsresponse.md): A response that contains a list of User Invitations resources.
