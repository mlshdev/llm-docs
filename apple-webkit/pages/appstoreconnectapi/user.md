> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/user](https://developer.apple.com/documentation/appstoreconnectapi/user)

# User

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.0+

A member of your App Store Connect team, with assigned roles and access to specific apps.

## Declaration

```
object User
```

## Properties

- `attributes` — `User.Attributes`: The resource’s attributes.
- `id` — `string` (required): The opaque resource ID that uniquely identifies the resource.
- `relationships` — `User.Relationships`: Navigational links to related data and included resource types and IDs.
- `type` — `string` (required): The resource type.
  **Allowed values:** `users`
- `links` — `ResourceLinks`: Navigational links that include the self-link.

## Topics

### Objects

- [User.Attributes](user/attributes-data.dictionary.md): Attributes that describe a Users resource.
- [User.Relationships](user/relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.

## See Also

### Related Documentation

- [Users](users.md): Manage users on your App Store Connect team.

### Objects and Data Types

- [UserUpdateRequest](userupdaterequest.md): The request body you use to update a User.
- [UserResponse](userresponse.md): The response body for endpoints that read or modify a single App Store Connect team member.
- [UsersResponse](usersresponse.md): A response containing a list of team members who have access to your App Store Connect account.
- [UserVisibleAppsLinkagesRequest](uservisibleappslinkagesrequest.md): A request body you use to add or remove visible apps from a user.
- [UserVisibleAppsLinkagesResponse](uservisibleappslinkagesresponse.md): A response body that contains a list of related resource IDs.
- [UserRole](userrole.md): A string that represents user roles and permissions in App Store Connect.
