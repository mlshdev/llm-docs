> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/anchorupdate](https://developer.apple.com/documentation/arkit/anchorupdate)

# AnchorUpdate

**Framework:** ARKit  
**Kind:** Structure  
**Availability:** visionOS 1.0+

Information about the event that updated an anchor.

## Declaration

```swift
struct AnchorUpdate<AnchorType> where AnchorType : Anchor
```

## Topics

### Inspecting anchor updates

- [anchor](anchorupdate/anchor.md): The anchor that this anchor update contains information about.
- [timestamp](anchorupdate/timestamp.md): The time when this anchor update occurred.
- [event](anchorupdate/event-swift.property.md): The event which caused the anchor to update.
- [AnchorUpdate.Event](anchorupdate/event-swift.enum.md): An event that indicates whether an anchor was added, updated, or removed.
- [description](anchorupdate/description.md): A textual representation of this anchor update.

## Relationships

### Conforms To

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Tracking anchors over time

- [AnchorUpdateSequence](anchorupdatesequence.md): An asynchronous sequence of updates to anchors.
