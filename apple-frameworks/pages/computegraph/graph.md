> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/computegraph/graph

# graph

**Framework:** Compute Graph  
**Kind:** Namespace  
**Availability:** macOS · Reality Composer Pro

A set of nodes that provide graph-wide information, such as time and coordinate-space transforms, usable in any stage.

## Topics

### Functions

- [graph::age](graph/age.md): Returns the age of the graph in seconds.
- [graph::deltaTime](graph/deltatime.md): Returns the time elapsed since the last frame.
- [graph::localToWorld](graph/localtoworld.md): Returns the transformation matrix from local space to world space.
- [graph::worldToLocal](graph/worldtolocal.md): Returns the transformation matrix from world space to local space.

## See Also

### Utility nodes

- [group](group.md): A set of nodes for querying the group of the current particle. Available only when the simulation uses a grouped or strips element grouping.
- [texture](texture.md): A set of nodes for the texture stage that sample and generate texture data.
- [random](random.md): A set of nodes that generate pseudo-random scalars and vectors.
- [matrix4x4f](matrix4x4f.md): A set of nodes that transform positions and directions with single-precision 4×4 matrices.
- [matrix4x4h](matrix4x4h.md): A set of nodes that transform positions and directions with half-precision 4×4 matrices.
- [viewpoint](viewpoint-swift.func.md): Returns the current viewpoint, if one is provided.
- [element_integrate](element_integrate.md)
- [texture_sample](texture_sample.md)
- [texture_sample1d](texture_sample1d.md)
- [orient_to_velocity](orient_to_velocity.md): Orient the particle by setting its `axisY` to the velocity’s current direction.
- [gridDebugCells](griddebugcells.md)
- [gridFromPoints](gridfrompoints.md)
- [spawn_demo](spawn_demo.md)
