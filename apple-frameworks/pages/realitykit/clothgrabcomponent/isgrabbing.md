> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/clothgrabcomponent/isgrabbing](https://developer.apple.com/documentation/realitykit/clothgrabcomponent/isgrabbing)

# isGrabbing

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

Indicates whether particles are currently being grabbed.

## Declaration

```swift
var isGrabbing: Bool
```

<a id="discussion"></a>

## Discussion

When first set to `true`, a selection of particles is made using the ray or volume. In the following frames, all selected particles will be dragged around until this value is set back to `false`.
