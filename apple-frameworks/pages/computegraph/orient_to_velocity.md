> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/computegraph/orient_to_velocity

# orient_to_velocity

**Framework:** Compute Graph  
**Kind:** Function  
**Availability:** macOS · Reality Composer Pro

Orient the particle by setting its `axisY` to the velocity’s current direction.

## Declaration

```swift
void orient_to_velocity()
```

<a id="discussion"></a>

## Discussion

Adding this node will cause a `float3 axisY` attribute to be added, if one doesn’t already exist.

> **Visual**

> ![Graph](https://developer.apple.com/images/com.apple.computegraph/orient_to_velocity.svg)

> **Note**

> Reads from element state `float3 velocity`, if it exists

> **Note**

> Writes to element state `float3 axisY`

## See Also

### Utility nodes

- [graph](graph.md): A set of nodes that provide graph-wide information, such as time and coordinate-space transforms, usable in any stage.
- [group](group.md): A set of nodes for querying the group of the current particle. Available only when the simulation uses a grouped or strips element grouping.
- [texture](texture.md): A set of nodes for the texture stage that sample and generate texture data.
- [random](random.md): A set of nodes that generate pseudo-random scalars and vectors.
- [matrix4x4f](matrix4x4f.md): A set of nodes that transform positions and directions with single-precision 4×4 matrices.
- [matrix4x4h](matrix4x4h.md): A set of nodes that transform positions and directions with half-precision 4×4 matrices.
- [viewpoint](viewpoint-swift.func.md): Returns the current viewpoint, if one is provided.
- [element_integrate](element_integrate.md)
- [texture_sample](texture_sample.md)
- [texture_sample1d](texture_sample1d.md)
- [gridDebugCells](griddebugcells.md)
- [gridFromPoints](gridfrompoints.md)
- [spawn_demo](spawn_demo.md)
