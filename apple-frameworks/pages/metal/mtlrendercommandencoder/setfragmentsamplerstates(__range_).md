> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrendercommandencoder/setfragmentsamplerstates(_:range:)](https://developer.apple.com/documentation/metal/mtlrendercommandencoder/setfragmentsamplerstates(_:range:))

# setFragmentSamplerStates(\_:range:)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.11+ · tvOS 8.0+ · visionOS

Assigns multiple sampler states to a range of entries in the fragment shader argument table.

## Declaration

```swift
func setFragmentSamplerStates(_ samplers: [(any MTLSamplerState)?], range: Range<Int>)
```

## Parameters

- `samplers`: An array of [MTLSamplerState](../mtlsamplerstate.md) instances the command assigns to entries in the fragment shader argument table for sampler states.
- `range`: A span of integers that represent the entries in the fragment shader argument table for sampler states. Each entry stores a record of the corresponding element in `samplers`.

<a id="discussion"></a>

## Discussion

By default, the sampler state at each index is `nil`.

> **Note**

>  The Objective-C version of this method is [setFragmentSamplerStates:withRange:](setfragmentsamplerstates_withrange_.md).

## See Also

### Assigning sampler states

- [setFragmentSamplerState(\_:index:)](setfragmentsamplerstate%28__index_%29.md): Assigns a sampler state to an entry in the fragment shader argument table.
- [setFragmentSamplerState(\_:lodMinClamp:lodMaxClamp:index:)](setfragmentsamplerstate%28__lodminclamp_lodmaxclamp_index_%29.md): Assigns a sampler state and clamp values to an entry in the fragment shader argument table.
- [setFragmentSamplerStates(\_:lodMinClamps:lodMaxClamps:range:)](setfragmentsamplerstates%28__lodminclamps_lodmaxclamps_range_%29.md): Assigns multiple sampler states and clamp values to a range of entries in the fragment shader argument table.
