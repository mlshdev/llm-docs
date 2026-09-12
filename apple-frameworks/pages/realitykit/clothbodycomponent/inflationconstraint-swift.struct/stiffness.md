> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/clothbodycomponent/inflationconstraint-swift.struct/stiffness](https://developer.apple.com/documentation/realitykit/clothbodycomponent/inflationconstraint-swift.struct/stiffness)

# stiffness

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

The resistance of the body’s volume to diverge from `targetVolume`.

## Declaration

```swift
var stiffness: Float { get set }
```

<a id="discussion"></a>

## Discussion

The valid range is \[0.0, 1.0\], both included.

## See Also

### Configuring inflation

- [targetVolume](targetvolume.md): The target volume (in ㎥) that the body tries to match.
