> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/enterpriseprogramapi/user](https://developer.apple.com/documentation/enterpriseprogramapi/user)

# User

**Interface language:** Data

**Framework:** Enterprise Program API  
**Kind:** Object

The data structure that represents a Users resource.

## Declaration

```
object User
```

## Properties

- `attributes` — `User.Attributes`: The resource’s attributes.
- `id` — `string` (required): The opaque resource ID that uniquely identifies the resource.
- `type` — `string` (required): The resource type.
  **Allowed values:** `users`
- `links` — `ResourceLinks`: Navigational links that include the self-link.

## Topics

### Objects

- [User.Attributes](user/attributes-data.dictionary.md): Attributes that describe a Users resource.

## See Also

### Objects and Data Types

- [UserUpdateRequest](userupdaterequest.md): The request body you use to update a User.
- [UserResponse](userresponse.md): A response that contains a single Users resource.
- [UsersResponse](usersresponse.md): A response that contains a list of Users resources.
- [UserRole](userrole.md): Strings that represent user roles and permissions in the Apple Developer website.
