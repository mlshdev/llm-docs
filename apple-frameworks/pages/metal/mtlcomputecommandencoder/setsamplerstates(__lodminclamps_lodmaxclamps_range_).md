> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcomputecommandencoder/setsamplerstates(_:lodminclamps:lodmaxclamps:range:)](https://developer.apple.com/documentation/metal/mtlcomputecommandencoder/setsamplerstates(_:lodminclamps:lodmaxclamps:range:))

# setSamplerStates(\_:lodMinClamps:lodMaxClamps:range:)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.11+ · tvOS 8.0+ · visionOS

Encodes multiple texture samplers for the compute function, specifying clamp values for the level of detail of each sampler.

## Declaration

```swift
func setSamplerStates(_ samplers: [(any MTLSamplerState)?], lodMinClamps: [Float], lodMaxClamps: [Float], range: Range<Int>)
```

## Parameters

- `samplers`: A list of [MTLSamplerState](../mtlsamplerstate.md) instances to bind to the sampler argument table.
- `lodMinClamps`: An array of minimum levels of detail to use for the corresponding sampler in `samplers`.
- `lodMaxClamps`: An array of maximum levels of detail to use for the corresponding sample in `samplers`.
- `range`: A range of indices in the sampler state argument table.

<a id="discussion"></a>

## Discussion

> **Important**

>  This method requires that the lengths of `samplers`, `lodMinClamps`, and `lodMaxClamps` be the same as the length of `range`.

Calling this method ignores the [lodMinClamp](../mtlsamplerdescriptor/lodminclamp.md) and [lodMaxClamp](../mtlsamplerdescriptor/lodmaxclamp.md) properties of the samplers, using the provided levels of detail instead.

## See Also

### Binding texture samplers

- [setSamplerState(\_:index:)](setsamplerstate%28__index_%29.md): Encodes a texture sampler, allowing compute kernels to use it for sampling textures on the GPU.
- [setSamplerState(\_:lodMinClamp:lodMaxClamp:index:)](setsamplerstate%28__lodminclamp_lodmaxclamp_index_%29.md): Encodes a texture sampler with a custom level of detail clamping, allowing compute kernels to use it for sampling textures on the GPU.
- [setSamplerStates(\_:range:)](setsamplerstates%28__range_%29.md): Encodes multiple texture samplers to the sampler argument table, allowing compute kernels to use them for sampling textures on the GPU.
