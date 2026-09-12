> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/userupdaterequest/data-data.dictionary/attributes-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/userupdaterequest/data-data.dictionary/attributes-data.dictionary)

# UserUpdateRequest.Data.Attributes

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.0+

Attributes whose values you’re changing as part of the update request.

## Declaration

```
object UserUpdateRequest.Data.Attributes
```

## Properties

- `allAppsVisible` — `boolean`: Assigned user roles that determine the user’s access to sections of App Store Connect and tasks they can perform.
- `provisioningAllowed` — `boolean`: A Boolean value that indicates the user’s specified role allows access to the provisioning functionality on the Apple Developer website.
- `roles` — `[UserRole]`: Assigned user roles that determine the user’s access to sections of App Store Connect and tasks they can perform.

## See Also

### Related Documentation

- [Users](../../users.md): Manage users on your App Store Connect team.

### Objects

- [UserUpdateRequest.Data.Relationships](relationships-data.dictionary.md): The data and links that describe the relationship between the resources.
