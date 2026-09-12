> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/portalcomponent/volume/position](https://developer.apple.com/documentation/realitykit/portalcomponent/volume/position)

# position

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The center of the volume in portal-local space, in meters.

## Declaration

```swift
var position: SIMD3<Float>
```

<a id="discussion"></a>

## Discussion

Defaults to `.zero`, which places the box center at the portal entity’s origin.
