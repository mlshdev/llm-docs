> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/permissionkit/permissionquestion/init(handles:)](https://developer.apple.com/documentation/permissionkit/permissionquestion/init(handles:))

# init(handles:)

**Framework:** PermissionKit  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Creates a permission question that asks parents or guardians for permission to communicate with multiple people.

## Declaration

```swift
convenience init(handles: [CommunicationHandle])
```

## Parameters

- `handles`: The communication handles for the people the child wants to communicate with, such as phone numbers, email addresses, or custom identifiers.

## See Also

### Creating permission requests

- [init(handle:)](init%28handle_%29.md): Conforms when `Topic` is `CommunicationTopic`. Creates a permission question that asks parents or guardians for permission to communicate with a person.
- [init(communicationTopic:)](init%28communicationtopic_%29.md): Conforms when `Topic` is `CommunicationTopic`. Creates a permission question that asks parents or guardians for communication permission.
- [init(significantAppUpdateTopic:)](init%28significantappupdatetopic_%29.md): Conforms when `Topic` is `SignificantAppUpdateTopic`. Creates a permission question that asks parents or guardians for permission to continue using your app after a significant update.
