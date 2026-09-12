> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/permissionkit/permissionquestion/init(handle:)](https://developer.apple.com/documentation/permissionkit/permissionquestion/init(handle:))

# init(handle:)

**Framework:** PermissionKit  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Creates a permission question that asks parents or guardians for permission to communicate with a person.

## Declaration

```swift
convenience init(handle: CommunicationHandle)
```

## Parameters

- `handle`: The communication handle for the person the child wants to communicate with, such as a phone number, email address, or custom identifier.

## See Also

### Creating permission requests

- [init(handles:)](init%28handles_%29.md): Conforms when `Topic` is `CommunicationTopic`. Creates a permission question that asks parents or guardians for permission to communicate with multiple people.
- [init(communicationTopic:)](init%28communicationtopic_%29.md): Conforms when `Topic` is `CommunicationTopic`. Creates a permission question that asks parents or guardians for communication permission.
- [init(significantAppUpdateTopic:)](init%28significantappupdatetopic_%29.md): Conforms when `Topic` is `SignificantAppUpdateTopic`. Creates a permission question that asks parents or guardians for permission to continue using your app after a significant update.
