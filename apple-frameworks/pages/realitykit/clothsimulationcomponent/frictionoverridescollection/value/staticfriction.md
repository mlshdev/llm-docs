> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/clothsimulationcomponent/frictionoverridescollection/value/staticfriction](https://developer.apple.com/documentation/realitykit/clothsimulationcomponent/frictionoverridescollection/value/staticfriction)

# staticFriction

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

The static friction to use between the material pair.

## Declaration

```swift
var staticFriction: Float { get set }
```

<a id="discussion"></a>

## Discussion

Must be non-negative; negative values are clamped to zero.

## See Also

### Accessing friction values

- [kineticFriction](kineticfriction.md): The kinetic friction to use between the material pair.
