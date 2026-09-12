> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/permissionkit/permissionquestion/init(communicationtopic:)](https://developer.apple.com/documentation/permissionkit/permissionquestion/init(communicationtopic:))

# init(communicationTopic:)

**Framework:** PermissionKit  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Creates a permission question that asks parents or guardians for communication permission.

## Declaration

```swift
convenience init(communicationTopic: Topic)
```

## Parameters

- `communicationTopic`: The communication topic containing person information and requested actions.

## See Also

### Creating permission requests

- [init(handle:)](init%28handle_%29.md): Conforms when `Topic` is `CommunicationTopic`. Creates a permission question that asks parents or guardians for permission to communicate with a person.
- [init(handles:)](init%28handles_%29.md): Conforms when `Topic` is `CommunicationTopic`. Creates a permission question that asks parents or guardians for permission to communicate with multiple people.
- [init(significantAppUpdateTopic:)](init%28significantappupdatetopic_%29.md): Conforms when `Topic` is `SignificantAppUpdateTopic`. Creates a permission question that asks parents or guardians for permission to continue using your app after a significant update.
