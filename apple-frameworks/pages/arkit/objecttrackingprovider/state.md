> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/arkit/objecttrackingprovider/state

# state

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** visionOS 2.0+

The state of an object-tracking provider.

## Declaration

```swift
final var state: DataProviderState { get }
```

## See Also

### Inspecting an object-tracking provider

- [allAnchors](allanchors.md): An array of all the object anchors the object-tracking provider is tracking.
- [anchorUpdates](anchorupdates.md): An asynchronous sequence of anchors the framework updates.
- [ObjectTrackingProvider.Error](error.md): Values that represent an object-tracking error.
- [description](description.md): A textual representation of this object tracking provider.
