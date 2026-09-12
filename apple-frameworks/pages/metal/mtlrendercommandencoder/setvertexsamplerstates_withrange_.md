> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrendercommandencoder/setvertexsamplerstates:withrange:](https://developer.apple.com/documentation/metal/mtlrendercommandencoder/setvertexsamplerstates:withrange:)

# setVertexSamplerStates:withRange:

**Interface language:** Objective-C

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Assigns multiple sampler states to a range of entries in the vertex shader argument table.

## Declaration

```objectivec
- (void) setVertexSamplerStates:(id<MTLSamplerState> const[]) samplers withRange:(NSRange) range;
```

## Parameters

- `samplers`: A pointer to a C array of [MTLSamplerState](../mtlsamplerstate.md) instances the command assigns to entries in the vertex shader argument table for sampler states.
- `range`: A span of integers that represent the entries in the vertex shader argument table for sampler states. Each entry stores a record of the corresponding element in `samplers`.

<a id="discussion"></a>

## Discussion

By default, the sampler state at each index is `nil`.

> **Note**

>  The Swift version of this method is [setVertexSamplerStates(\_:range:)](setvertexsamplerstates%28__range_%29.md).

## See Also

### Assigning sampler states

- [setVertexSamplerState:atIndex:](setvertexsamplerstate%28__index_%29.md): Assigns a sampler state to an entry in the vertex shader argument table.
- [setVertexSamplerState:lodMinClamp:lodMaxClamp:atIndex:](setvertexsamplerstate%28__lodminclamp_lodmaxclamp_index_%29.md): Assigns a sampler state and clamp values to an entry in the vertex shader argument table.
- [setVertexSamplerStates:lodMinClamps:lodMaxClamps:withRange:](setvertexsamplerstates_lodminclamps_lodmaxclamps_withrange_.md): Assigns multiple sampler states and clamp values to a range of entries in the vertex shader argument table.
