> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/computegraph/element_integrate

# element_integrate

**Framework:** Compute Graph  
**Kind:** Function  
**Availability:** macOS · Reality Composer Pro

## Declaration

```swift
void element_integrate()
```

<a id="discussion"></a>

## Discussion

> **Visual**

> ![Graph](https://developer.apple.com/images/com.apple.computegraph/element_integrate.svg)

> **Note**

> Reads and writes to element state `float3 position`

> **Note**

> Reads and writes to element state `float3 velocity`

> **Note**

> Reads from element state `float3 angularVelocity`, if it exists

> **Note**

> Reads and writes to element state `float3 eulerAngle`

## See Also

### Utility nodes

- [graph](graph.md): A set of nodes that provide graph-wide information, such as time and coordinate-space transforms, usable in any stage.
- [group](group.md): A set of nodes for querying the group of the current particle. Available only when the simulation uses a grouped or strips element grouping.
- [texture](texture.md): A set of nodes for the texture stage that sample and generate texture data.
- [random](random.md): A set of nodes that generate pseudo-random scalars and vectors.
- [matrix4x4f](matrix4x4f.md): A set of nodes that transform positions and directions with single-precision 4×4 matrices.
- [matrix4x4h](matrix4x4h.md): A set of nodes that transform positions and directions with half-precision 4×4 matrices.
- [viewpoint](viewpoint-swift.func.md): Returns the current viewpoint, if one is provided.
- [texture_sample](texture_sample.md)
- [texture_sample1d](texture_sample1d.md)
- [orient_to_velocity](orient_to_velocity.md): Orient the particle by setting its `axisY` to the velocity’s current direction.
- [gridDebugCells](griddebugcells.md)
- [gridFromPoints](gridfrompoints.md)
- [spawn_demo](spawn_demo.md)
