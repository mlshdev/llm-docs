> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrendercommandencoder/setmeshsamplerstates:withrange:](https://developer.apple.com/documentation/metal/mtlrendercommandencoder/setmeshsamplerstates:withrange:)

# setMeshSamplerStates:withRange:

**Interface language:** Objective-C

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Assigns multiple sampler states to a range of entries in the mesh shader argument table.

## Declaration

```objectivec
- (void) setMeshSamplerStates:(id<MTLSamplerState> const[]) samplers withRange:(NSRange) range;
```

## Parameters

- `samplers`: A pointer to a C array of [MTLSamplerState](../mtlsamplerstate.md) instances the command assigns to entries in the mesh shader argument table for sampler states.
- `range`: A span of integers that represent the entries in the mesh shader argument table for sampler states. Each entry stores a record of the corresponding element in `samplers`.

<a id="discussion"></a>

## Discussion

By default, the sampler state at each index is `nil`.

> **Note**

>  The Swift version of this method is [setMeshSamplerStates(\_:range:)](setmeshsamplerstates%28__range_%29.md).

## See Also

### Assigning sampler states for mesh shaders

- [setMeshSamplerState:atIndex:](setmeshsamplerstate%28__index_%29.md): Assigns a sampler state to an entry in the mesh shader argument table.
- [setMeshSamplerState:lodMinClamp:lodMaxClamp:atIndex:](setmeshsamplerstate%28__lodminclamp_lodmaxclamp_index_%29.md): Assigns a sampler state and clamp values to an entry in the mesh shader argument table.
- [setMeshSamplerStates:lodMinClamps:lodMaxClamps:withRange:](setmeshsamplerstates_lodminclamps_lodmaxclamps_withrange_.md): Assigns multiple sampler states and clamp values to a range of entries in the mesh shader argument table.
