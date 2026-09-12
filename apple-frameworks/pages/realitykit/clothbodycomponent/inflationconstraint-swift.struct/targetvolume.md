> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/clothbodycomponent/inflationconstraint-swift.struct/targetvolume](https://developer.apple.com/documentation/realitykit/clothbodycomponent/inflationconstraint-swift.struct/targetvolume)

# targetVolume

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

The target volume (in ㎥) that the body tries to match.

## Declaration

```swift
var targetVolume: Float? { get set }
```

<a id="discussion"></a>

## Discussion

Must be positive when non-`nil`. When `nil`, the volume of the body’s [mesh](../mesh.md) is used.

## See Also

### Configuring inflation

- [stiffness](stiffness.md): The resistance of the body’s volume to diverge from `targetVolume`.
