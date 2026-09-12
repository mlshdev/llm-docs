> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/enterpriseprogramapi/userinvitationsresponse](https://developer.apple.com/documentation/enterpriseprogramapi/userinvitationsresponse)

# UserInvitationsResponse

**Interface language:** Data

**Framework:** Enterprise Program API  
**Kind:** Object

A response that contains a list of User Invitations resources.

## Declaration

```
object UserInvitationsResponse
```

## Properties

- `data` — `[UserInvitation]` (required): The resource data.
- `links` — `PagedDocumentLinks` (required): Navigational links that include the self-link.
- `meta` — `PagingInformation`: Paging information.

## See Also

### Objects

- [UserInvitation](userinvitation.md): The data structure that represents a User Invitations resource.
- [UserInvitationCreateRequest](userinvitationcreaterequest.md): The request body you use to create a User Invitation.
- [UserInvitationResponse](userinvitationresponse.md): A response that contains a single User Invitations resource.
