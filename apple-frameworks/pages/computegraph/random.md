> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/computegraph/random

# random

**Framework:** Compute Graph  
**Kind:** Namespace  
**Availability:** macOS · Reality Composer Pro

A set of nodes that generate pseudo-random scalars and vectors.

## Topics

### Functions

- [random::float2_01](random/float2_01.md): Generates a pseudo-random 2D vector with single-precision components between 0 and 1.
- [random::float2_01_using](random/float2_01_using.md): Generates a pseudo-random 2D vector with single-precision components between 0 and 1 using a specific seed.
- [random::float3_01](random/float3_01.md): Generates a pseudo-random 3D vector with single-precision components between 0 and 1.
- [random::float3_01_using](random/float3_01_using.md): Generates a pseudo-random 3D vector with single-precision components between 0 and 1 using a specific seed.
- [random::float4_01](random/float4_01.md): Generates a pseudo-random 4D vector with single-precision components between 0 and 1.
- [random::float4_01_using](random/float4_01_using.md): Generates a pseudo-random 4D vector with single-precision components between 0 and 1 using a specific seed.
- [random::float_01](random/float_01.md): Generates a pseudo-random single-precision float between 0 and 1.
- [random::float_01_using](random/float_01_using.md): Generates a pseudo-random single-precision float between 0 and 1 using a specific seed.
- [random::half2_01](random/half2_01.md): Generates a pseudo-random 2D vector with half-precision components between 0 and 1.
- [random::half2_01_using](random/half2_01_using.md): Generates a pseudo-random 2D vector with half-precision components between 0 and 1 using a specific seed.
- [random::half3_01](random/half3_01.md): Generates a pseudo-random 3D vector with half-precision components between 0 and 1.
- [random::half3_01_using](random/half3_01_using.md): Generates a pseudo-random 3D vector with half-precision components between 0 and 1 using a specific seed.
- [random::half4_01](random/half4_01.md): Generates a pseudo-random 4D vector with half-precision components between 0 and 1.
- [random::half4_01_using](random/half4_01_using.md): Generates a pseudo-random 4D vector with half-precision components between 0 and 1 using a specific seed.
- [random::half_01](random/half_01.md): Generates a pseudo-random half-precision float between 0 and 1.
- [random::half_01_using](random/half_01_using.md): Generates a pseudo-random half-precision float between 0 and 1 using a specific seed.
- [random::integer](random/integer.md): Generates a pseudo-random 32-bit unsigned integer.
- [random::integer_using](random/integer_using.md): Generates a pseudo-random 32-bit unsigned integer using a specific seed.
- [random::seed](random/seed.md): Returns the current random seed, without incrementing it.

## See Also

### Utility nodes

- [graph](graph.md): A set of nodes that provide graph-wide information, such as time and coordinate-space transforms, usable in any stage.
- [group](group.md): A set of nodes for querying the group of the current particle. Available only when the simulation uses a grouped or strips element grouping.
- [texture](texture.md): A set of nodes for the texture stage that sample and generate texture data.
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
