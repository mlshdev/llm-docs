> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/permissionkit/communicationtopic/personinformation-swift.struct/init(handle:namecomponents:avatarimage:)](https://developer.apple.com/documentation/permissionkit/communicationtopic/personinformation-swift.struct/init(handle:namecomponents:avatarimage:))

# init(handle:nameComponents:avatarImage:)

**Framework:** PermissionKit  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Creates person information with contact details and optional display information.

## Declaration

```swift
init(handle: CommunicationHandle, nameComponents: PersonNameComponents? = nil, avatarImage: CGImage? = nil)
```

## Parameters

- `handle`: The handle you use to identify the person.
- `nameComponents`: The person’s name components.
- `avatarImage`: An image that represents the person.

## See Also

### Creating contact details

- [init(from:)](init%28from_%29.md): Creates an instance from the given decoder.
