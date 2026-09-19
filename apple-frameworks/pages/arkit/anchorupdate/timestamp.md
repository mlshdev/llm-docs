> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/arkit/anchorupdate/timestamp

# timestamp

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** visionOS 1.0+

The time when this anchor update occurred.

## Declaration

```swift
var timestamp: TimeInterval { get }
```

## See Also

### Inspecting anchor updates

- [anchor](anchor.md): The anchor that this anchor update contains information about.
- [event](event-swift.property.md): The event which caused the anchor to update.
- [AnchorUpdate.Event](event-swift.enum.md): An event that indicates whether an anchor was added, updated, or removed.
- [description](description.md): A textual representation of this anchor update.
