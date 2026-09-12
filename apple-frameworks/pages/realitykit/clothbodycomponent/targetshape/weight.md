> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/clothbodycomponent/targetshape/weight](https://developer.apple.com/documentation/realitykit/clothbodycomponent/targetshape/weight)

# weight

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

The weight by which the body will be pulled towards this target shape.

## Declaration

```swift
var weight: Float
```

<a id="discussion"></a>

## Discussion

Clamped between 0 and 1. A weight of 0 will effectively inactivate the target shape.

## See Also

### Configuring the target shape

- [space](space.md): The space in which the position constraints are defined.
