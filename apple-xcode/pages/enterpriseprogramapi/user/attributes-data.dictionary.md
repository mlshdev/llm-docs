> Snapshot-pinned source payload for Apple Xcode and developer tools snapshot-4fca00e84bae; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/enterpriseprogramapi/user/attributes-data.dictionary

# User.Attributes

**Interface language:** Data

**Framework:** Enterprise Program API  
**Kind:** Object

Attributes that describe a Users resource.

## Declaration

```
object User.Attributes
```

## Properties

- `firstName` — `string`: The user’s first name.
- `lastName` — `string`: The user’s last name.
- `roles` — `[UserRole]`: Assigned user roles that determine the user’s access to sections of the [Apple Developer website](https://developer.apple.com) and tasks they can perform.
- `username` — `string`: The user’s Apple ID.
