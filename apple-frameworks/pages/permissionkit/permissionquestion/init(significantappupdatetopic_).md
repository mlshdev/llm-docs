> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/permissionkit/permissionquestion/init(significantappupdatetopic:)](https://developer.apple.com/documentation/permissionkit/permissionquestion/init(significantappupdatetopic:))

# init(significantAppUpdateTopic:)

**Framework:** PermissionKit  
**Kind:** Initializer  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+ · macOS 26.2+ · visionOS 26.2+

Creates a permission question that asks parents or guardians for permission to continue using your app after a significant update.

## Declaration

```swift
convenience init(significantAppUpdateTopic: Topic)
```

## Parameters

- `significantAppUpdateTopic`: The topic describing the significant update that requires permission.

## See Also

### Creating permission requests

- [init(handle:)](init%28handle_%29.md): Conforms when `Topic` is `CommunicationTopic`. Creates a permission question that asks parents or guardians for permission to communicate with a person.
- [init(handles:)](init%28handles_%29.md): Conforms when `Topic` is `CommunicationTopic`. Creates a permission question that asks parents or guardians for permission to communicate with multiple people.
- [init(communicationTopic:)](init%28communicationtopic_%29.md): Conforms when `Topic` is `CommunicationTopic`. Creates a permission question that asks parents or guardians for communication permission.
