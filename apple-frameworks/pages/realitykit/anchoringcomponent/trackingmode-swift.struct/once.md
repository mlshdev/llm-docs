> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/anchoringcomponent/trackingmode-swift.struct/once](https://developer.apple.com/documentation/realitykit/anchoringcomponent/trackingmode-swift.struct/once)

# once

**Framework:** RealityKit  
**Kind:** Type Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

Anchors the entity to the target on the first frame the target is found.

## Declaration

```swift
static let once: AnchoringComponent.TrackingMode
```

<a id="discussion"></a>

## Discussion

`once` means the `Entity` transform is evaluated only once when the target anchor presents and the `Entity` is anchored.

If the target anchor moves or disappears later, the `Entity` stays in place.
