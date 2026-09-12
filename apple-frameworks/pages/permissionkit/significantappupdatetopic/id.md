> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/permissionkit/significantappupdatetopic/id](https://developer.apple.com/documentation/permissionkit/significantappupdatetopic/id)

# id

**Framework:** PermissionKit  
**Kind:** Type Property  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+ · macOS 26.2+ · visionOS 26.2+

The unique identifier the system uses to categorize this topic type.

## Declaration

```swift
static let id: String
```

<a id="discussion"></a>

## Discussion

The system uses this identifier to group related permission requests and ensure your app receives responses for questions with this topic. You don’t need to modify this value - the system handles topic routing automatically using this predefined identifier.

## See Also

### Accessing properties

- [description](description.md): A description of the significant update that initiates the permission question.
