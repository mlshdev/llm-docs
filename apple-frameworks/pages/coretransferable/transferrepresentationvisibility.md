> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretransferable/transferrepresentationvisibility](https://developer.apple.com/documentation/coretransferable/transferrepresentationvisibility)

# TransferRepresentationVisibility

**Framework:** Core Transferable  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The visibility levels that specify the kinds of apps and processes that can see an item in transit.

## Declaration

```swift
struct TransferRepresentationVisibility
```

## Topics

### Specifying transfer visibility

- [all](transferrepresentationvisibility/all.md): The visibility level that specifies that any app or process can access the item.
- [team](transferrepresentationvisibility/team.md): The visibility level that specifies that the item is visible only to apps created by the current app’s development team.
- [group](transferrepresentationvisibility/group.md): The visibility level that specifies that the item is visible only to macOS apps in the same App Group.
- [ownProcess](transferrepresentationvisibility/ownprocess.md): The visibility level that specifies that the item is visible only within the app that’s the source of the item.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Transfer customization

- [ProxyRepresentation](proxyrepresentation.md): A transfer representation that uses another type’s transfer representation as its own.
