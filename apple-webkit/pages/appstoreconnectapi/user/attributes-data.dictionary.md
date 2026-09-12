> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/user/attributes-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/user/attributes-data.dictionary)

# User.Attributes

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.0+

Attributes that describe a Users resource.

## Declaration

```
object User.Attributes
```

## Properties

- `firstName` — `string`: The user’s first name.
- `lastName` — `string`: The user’s last name.
- `roles` — `[UserRole]`: Assigned user roles that determine the user’s access to sections of App Store Connect and tasks they can perform.
- `provisioningAllowed` — `boolean`: A Boolean value that indicates the user’s specified role allows access to the provisioning functionality on the Apple Developer website.
- `allAppsVisible` — `boolean`: A Boolean value that indicates whether a user has access to all apps available to the team.
- `username` — `string`: The user’s Apple Account.

## See Also

### Related Documentation

- [Users](../users.md): Manage users on your App Store Connect team.

### Objects

- [User.Relationships](relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.
