> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/assignables/useridentitytyperegistry/registeruseridentitytype(typeid:type:)](https://developer.apple.com/documentation/assignables/useridentitytyperegistry/registeruseridentitytype(typeid:type:))

# registerUserIdentityType(typeID:type:)

**Framework:** Assignables  
**Kind:** Type Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · visionOS

Registers a user identity type for use when deserializing the user identity from `Data`.

## Declaration

```swift
static func registerUserIdentityType<UI>(typeID: String, type: UI.Type) where UI : UserIdentity
```

## Parameters

- `typeID`: A unique type identifier for the user identity to register
- `type`: The type of the user identity to register.
