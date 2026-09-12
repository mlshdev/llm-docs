> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrendercommandencoder/setmeshsamplerstates(_:range:)](https://developer.apple.com/documentation/metal/mtlrendercommandencoder/setmeshsamplerstates(_:range:))

# setMeshSamplerStates(\_:range:)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS

Assigns multiple sampler states to a range of entries in the mesh shader argument table.

## Declaration

```swift
func setMeshSamplerStates(_ samplers: [(any MTLSamplerState)?], range: Range<Int>)
```

## Parameters

- `samplers`: An array of [MTLSamplerState](../mtlsamplerstate.md) instances the command assigns to entries in the mesh shader argument table for sampler states.
- `range`: A span of integers that represent the entries in the mesh shader argument table for sampler states. Each entry stores a record of the corresponding element in `samplers`.

<a id="discussion"></a>

## Discussion

By default, the sampler state at each index is `nil`.

> **Note**

>  The Objective-C version of this method is [setMeshSamplerStates:withRange:](setmeshsamplerstates_withrange_.md).

## See Also

### Assigning sampler states for mesh shaders

- [setMeshSamplerState(\_:index:)](setmeshsamplerstate%28__index_%29.md): Assigns a sampler state to an entry in the mesh shader argument table.
- [setMeshSamplerState(\_:lodMinClamp:lodMaxClamp:index:)](setmeshsamplerstate%28__lodminclamp_lodmaxclamp_index_%29.md): Assigns a sampler state and clamp values to an entry in the mesh shader argument table.
- [setMeshSamplerStates(\_:lodMinClamps:lodMaxClamps:range:)](setmeshsamplerstates%28__lodminclamps_lodmaxclamps_range_%29.md): Assigns multiple sampler states and clamp values to a range of entries in the mesh shader argument table.
