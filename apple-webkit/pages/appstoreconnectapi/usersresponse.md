> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/usersresponse](https://developer.apple.com/documentation/appstoreconnectapi/usersresponse)

# UsersResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.0+

A response containing a list of team members who have access to your App Store Connect account.

## Declaration

```
object UsersResponse
```

## Properties

- `data` — `[User]` (required): The resource data.
- `links` — `PagedDocumentLinks` (required): Navigational links that include the self-link.
- `meta` — `PagingInformation`: Paging information.
- `included` — `[App]`:

## See Also

### Related Documentation

- [List users](get-v1-users.md): Get a list of the users on your team.

### Objects and Data Types

- [User](user.md): A member of your App Store Connect team, with assigned roles and access to specific apps.
- [UserUpdateRequest](userupdaterequest.md): The request body you use to update a User.
- [UserResponse](userresponse.md): The response body for endpoints that read or modify a single App Store Connect team member.
- [UserVisibleAppsLinkagesRequest](uservisibleappslinkagesrequest.md): A request body you use to add or remove visible apps from a user.
- [UserVisibleAppsLinkagesResponse](uservisibleappslinkagesresponse.md): A response body that contains a list of related resource IDs.
- [UserRole](userrole.md): A string that represents user roles and permissions in App Store Connect.
