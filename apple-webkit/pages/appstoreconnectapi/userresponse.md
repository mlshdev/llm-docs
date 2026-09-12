> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/userresponse](https://developer.apple.com/documentation/appstoreconnectapi/userresponse)

# UserResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.0+

The response body for endpoints that read or modify a single App Store Connect team member.

## Declaration

```
object UserResponse
```

## Properties

- `data` — `User` (required): The resource data.
- `links` — `DocumentLinks` (required): Navigational links that include the self-link.
- `included` — `[App]`:

## See Also

### Related Documentation

- [Read user information](get-v1-users-_id_.md): Get information about a user on your team, such as name, roles, and app visibility.

### Objects and Data Types

- [User](user.md): A member of your App Store Connect team, with assigned roles and access to specific apps.
- [UserUpdateRequest](userupdaterequest.md): The request body you use to update a User.
- [UsersResponse](usersresponse.md): A response containing a list of team members who have access to your App Store Connect account.
- [UserVisibleAppsLinkagesRequest](uservisibleappslinkagesrequest.md): A request body you use to add or remove visible apps from a user.
- [UserVisibleAppsLinkagesResponse](uservisibleappslinkagesresponse.md): A response body that contains a list of related resource IDs.
- [UserRole](userrole.md): A string that represents user roles and permissions in App Store Connect.
