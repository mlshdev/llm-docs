> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/anchoringcomponent/trackingmode-swift.struct/continuous](https://developer.apple.com/documentation/realitykit/anchoringcomponent/trackingmode-swift.struct/continuous)

# continuous

**Framework:** RealityKit  
**Kind:** Type Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

Continuously anchors the entity to its target based on the target’s realtime location and hides the entity when the target is no longer in frame.

## Declaration

```swift
static let continuous: AnchoringComponent.TrackingMode
```

<a id="discussion"></a>

## Discussion

`continuous` means the `Entity` will track the target anchor continuously.

The `Entity` moves with the anchor and is unanchored if the target anchor disappears or no longer meets the target requirement.
