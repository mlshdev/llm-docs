> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/clothbodycomponent/inflationconstraint-swift.struct/init(stiffness:)](https://developer.apple.com/documentation/realitykit/clothbodycomponent/inflationconstraint-swift.struct/init(stiffness:))

# init(stiffness:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

Creates an inflation configuration that defaults to the mesh volume.

## Declaration

```swift
init(stiffness: Float = 1.0)
```

## Parameters

- `stiffness`: The resistance to diverge from the target volume. Valid range is \[0.0, 1.0\].

## See Also

### Creating an inflation constraint

- [init(targetVolume:stiffness:)](init%28targetvolume_stiffness_%29.md): Creates an inflation configuration.
