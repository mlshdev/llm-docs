> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/userupdaterequest](https://developer.apple.com/documentation/appstoreconnectapi/userupdaterequest)

# UserUpdateRequest

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.0+

The request body you use to update a User.

## Declaration

```
object UserUpdateRequest
```

## Properties

- `data` — `UserUpdateRequest.Data` (required): The resource data.

## Topics

### Objects

- [UserUpdateRequest.Data](userupdaterequest/data-data.dictionary.md): The data element of the request body.

## See Also

### Objects and Data Types

- [User](user.md): A member of your App Store Connect team, with assigned roles and access to specific apps.
- [UserResponse](userresponse.md): The response body for endpoints that read or modify a single App Store Connect team member.
- [UsersResponse](usersresponse.md): A response containing a list of team members who have access to your App Store Connect account.
- [UserVisibleAppsLinkagesRequest](uservisibleappslinkagesrequest.md): A request body you use to add or remove visible apps from a user.
- [UserVisibleAppsLinkagesResponse](uservisibleappslinkagesresponse.md): A response body that contains a list of related resource IDs.
- [UserRole](userrole.md): A string that represents user roles and permissions in App Store Connect.
