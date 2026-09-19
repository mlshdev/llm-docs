> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/clothbodycomponent/targetshape/positionconstraint/stiffness

# stiffness

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

The stiffness by which the particle is pulled towards the position.

## Declaration

```swift
var stiffness: Float { get set }
```

<a id="discussion"></a>

## Discussion

In the context of a target shape, this gets multiplied by the weight of the target shape. A stiffness of 0 will effectively inactivate the position constraint.

The valid range is \[0.0, 1.0\], both included. Values outside the valid range are clamped.
