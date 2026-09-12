> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrendercommandencoder/setfragmentsamplerstates:withrange:](https://developer.apple.com/documentation/metal/mtlrendercommandencoder/setfragmentsamplerstates:withrange:)

# setFragmentSamplerStates:withRange:

**Interface language:** Objective-C

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Assigns multiple sampler states to a range of entries in the fragment shader argument table.

## Declaration

```objectivec
- (void) setFragmentSamplerStates:(id<MTLSamplerState> const[]) samplers withRange:(NSRange) range;
```

## Parameters

- `samplers`: A pointer to a C array of [MTLSamplerState](../mtlsamplerstate.md) instances the command assigns to entries in the fragment shader argument table for sampler states.
- `range`: A span of integers that represent the entries in the fragment shader argument table for sampler states. Each entry stores a record of the corresponding element in `samplers`.

<a id="discussion"></a>

## Discussion

By default, the sampler state at each index is `nil`.

> **Note**

>  The Swift version of this method is [setFragmentSamplerStates(\_:range:)](setfragmentsamplerstates%28__range_%29.md).

## See Also

### Assigning sampler states

- [setFragmentSamplerState:atIndex:](setfragmentsamplerstate%28__index_%29.md): Assigns a sampler state to an entry in the fragment shader argument table.
- [setFragmentSamplerState:lodMinClamp:lodMaxClamp:atIndex:](setfragmentsamplerstate%28__lodminclamp_lodmaxclamp_index_%29.md): Assigns a sampler state and clamp values to an entry in the fragment shader argument table.
- [setFragmentSamplerStates:lodMinClamps:lodMaxClamps:withRange:](setfragmentsamplerstates_lodminclamps_lodmaxclamps_withrange_.md): Assigns multiple sampler states and clamp values to a range of entries in the fragment shader argument table.
