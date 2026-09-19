> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/clothsimulationcomponent/frictionoverridescollection/value/staticfriction

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
