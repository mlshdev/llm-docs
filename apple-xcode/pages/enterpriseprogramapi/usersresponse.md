> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/enterpriseprogramapi/usersresponse](https://developer.apple.com/documentation/enterpriseprogramapi/usersresponse)

# UsersResponse

**Interface language:** Data

**Framework:** Enterprise Program API  
**Kind:** Object

A response that contains a list of Users resources.

## Declaration

```
object UsersResponse
```

## Properties

- `data` — `[User]` (required): The resource data.
- `links` — `PagedDocumentLinks` (required): Navigational links that include the self-link.
- `meta` — `PagingInformation`: Paging information.

## See Also

### Objects and Data Types

- [User](user.md): The data structure that represents a Users resource.
- [UserUpdateRequest](userupdaterequest.md): The request body you use to update a User.
- [UserResponse](userresponse.md): A response that contains a single Users resource.
- [UserRole](userrole.md): Strings that represent user roles and permissions in the Apple Developer website.
