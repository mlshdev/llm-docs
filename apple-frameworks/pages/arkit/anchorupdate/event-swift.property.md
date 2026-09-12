> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/anchorupdate/event-swift.property](https://developer.apple.com/documentation/arkit/anchorupdate/event-swift.property)

# event

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** visionOS 1.0+

The event which caused the anchor to update.

## Declaration

```swift
let event: AnchorUpdate<AnchorType>.Event
```

## See Also

### Inspecting anchor updates

- [anchor](anchor.md): The anchor that this anchor update contains information about.
- [timestamp](timestamp.md): The time when this anchor update occurred.
- [AnchorUpdate.Event](event-swift.enum.md): An event that indicates whether an anchor was added, updated, or removed.
- [description](description.md): A textual representation of this anchor update.
