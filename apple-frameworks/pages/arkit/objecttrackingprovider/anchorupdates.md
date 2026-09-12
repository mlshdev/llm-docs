> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/objecttrackingprovider/anchorupdates](https://developer.apple.com/documentation/arkit/objecttrackingprovider/anchorupdates)

# anchorUpdates

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** visionOS 2.0+

An asynchronous sequence of anchors the framework updates.

## Declaration

```swift
final var anchorUpdates: AnchorUpdateSequence<ObjectAnchor> { get }
```

## See Also

### Inspecting an object-tracking provider

- [state](state.md): The state of an object-tracking provider.
- [allAnchors](allanchors.md): An array of all the object anchors the object-tracking provider is tracking.
- [ObjectTrackingProvider.Error](error.md): Values that represent an object-tracking error.
- [description](description.md): A textual representation of this object tracking provider.
