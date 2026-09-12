> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrendercommandencoder/setfragmentsamplerstates(_:lodminclamps:lodmaxclamps:range:)](https://developer.apple.com/documentation/metal/mtlrendercommandencoder/setfragmentsamplerstates(_:lodminclamps:lodmaxclamps:range:))

# setFragmentSamplerStates(\_:lodMinClamps:lodMaxClamps:range:)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.11+ · tvOS 8.0+ · visionOS

Assigns multiple sampler states and clamp values to a range of entries in the fragment shader argument table.

## Declaration

```swift
func setFragmentSamplerStates(_ samplers: [(any MTLSamplerState)?], lodMinClamps: [Float], lodMaxClamps: [Float], range: Range<Int>)
```

## Parameters

- `samplers`: An array of [MTLSamplerState](../mtlsamplerstate.md) instances the command assigns to entries in the fragment shader argument table for sampler states.
- `lodMinClamps`: An array of floating-point values. Each element is the smallest level of detail value a fragment shader can use when it samples a texture with the corresponding element in `samplers`.
- `lodMaxClamps`: An array of floating-point values. Each element is the largest level of detail value a fragment shader can use when it samples a texture with the corresponding element in `samplers`.
- `range`: A span of integers that represent the entries in the fragment shader argument table for sampler states. Each entry stores a record of the corresponding element in `samplers`.

<a id="discussion"></a>

## Discussion

Each element of the method’s `lodMinClamps` and `lodMaxClamps` parameters overrides the default values for the corresponding sampler in `samplers`. You can set a sampler’s default values by configuring the [lodMinClamp](../mtlsamplerdescriptor/lodminclamp.md) and [lodMaxClamp](../mtlsamplerdescriptor/lodmaxclamp.md) properties of [MTLSamplerDescriptor](../mtlsamplerdescriptor.md) before you create the sampler.

By default, the sampler state at each index is `nil`.

> **Note**

>  The Objective-C version of this method is [setFragmentSamplerStates:lodMinClamps:lodMaxClamps:withRange:](setfragmentsamplerstates_lodminclamps_lodmaxclamps_withrange_.md).

## See Also

### Assigning sampler states

- [setFragmentSamplerState(\_:index:)](setfragmentsamplerstate%28__index_%29.md): Assigns a sampler state to an entry in the fragment shader argument table.
- [setFragmentSamplerState(\_:lodMinClamp:lodMaxClamp:index:)](setfragmentsamplerstate%28__lodminclamp_lodmaxclamp_index_%29.md): Assigns a sampler state and clamp values to an entry in the fragment shader argument table.
- [setFragmentSamplerStates(\_:range:)](setfragmentsamplerstates%28__range_%29.md): Assigns multiple sampler states to a range of entries in the fragment shader argument table.
