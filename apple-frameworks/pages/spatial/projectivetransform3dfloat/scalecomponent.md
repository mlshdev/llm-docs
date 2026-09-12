> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/projectivetransform3dfloat/scalecomponent](https://developer.apple.com/documentation/spatial/projectivetransform3dfloat/scalecomponent)

# scaleComponent

**Framework:** Spatial  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

The projective transform’s scale component.

## Declaration

```swift
var scaleComponent: Size3DFloat { get }
```

<a id="discussion"></a>

## Discussion

This function computes the scale from the first three rows of the transform matrix and ignores the fourth row.
