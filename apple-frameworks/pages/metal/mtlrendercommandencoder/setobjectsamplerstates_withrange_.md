> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrendercommandencoder/setobjectsamplerstates:withrange:](https://developer.apple.com/documentation/metal/mtlrendercommandencoder/setobjectsamplerstates:withrange:)

# setObjectSamplerStates:withRange:

**Interface language:** Objective-C

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Assigns multiple sampler states to a range of entries in the object shader argument table.

## Declaration

```objectivec
- (void) setObjectSamplerStates:(id<MTLSamplerState> const[]) samplers withRange:(NSRange) range;
```

## Parameters

- `samplers`: A pointer to a C array of [MTLSamplerState](../mtlsamplerstate.md) instances the command assigns to entries in the object shader argument table for sampler states.
- `range`: A span of integers that represent the entries in the object shader argument table for sampler states. Each entry stores a record of the corresponding element in `samplers`.

<a id="discussion"></a>

## Discussion

By default, the sampler state at each index is `nil`.

> **Note**

>  The Swift version of this method is [setObjectSamplerStates(\_:range:)](setobjectsamplerstates%28__range_%29.md).

## See Also

### Assigning sampler states for object shaders

- [setObjectSamplerState:atIndex:](setobjectsamplerstate%28__index_%29.md): Assigns a sampler state to an entry in the object shader argument table.
- [setObjectSamplerState:lodMinClamp:lodMaxClamp:atIndex:](setobjectsamplerstate%28__lodminclamp_lodmaxclamp_index_%29.md): Assigns a sampler state and clamp values to an entry in the object shader argument table.
- [setObjectSamplerStates:lodMinClamps:lodMaxClamps:withRange:](setobjectsamplerstates_lodminclamps_lodmaxclamps_withrange_.md): Assigns multiple sampler states and clamp values to a range of entries in the object shader argument table.
