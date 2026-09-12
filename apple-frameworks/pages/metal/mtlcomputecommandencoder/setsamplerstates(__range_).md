> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcomputecommandencoder/setsamplerstates(_:range:)](https://developer.apple.com/documentation/metal/mtlcomputecommandencoder/setsamplerstates(_:range:))

# setSamplerStates(\_:range:)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.11+ · tvOS 8.0+ · visionOS

Encodes multiple texture samplers to the sampler argument table, allowing compute kernels to use them for sampling textures on the GPU.

## Declaration

```swift
func setSamplerStates(_ samplers: [(any MTLSamplerState)?], range: Range<Int>)
```

## Parameters

- `samplers`: An array of [MTLSamplerState](../mtlsamplerstate.md) instance to bind to the sampler argument table.
- `range`: The sampler table indicies to bind each of the `samplers` to, in the order they appear.

<a id="discussion"></a>

## Discussion

> **Warning**

>  This method requires that the number of instances in `samplers` be the same as the length of `range`.

## See Also

### Binding texture samplers

- [setSamplerState(\_:index:)](setsamplerstate%28__index_%29.md): Encodes a texture sampler, allowing compute kernels to use it for sampling textures on the GPU.
- [setSamplerState(\_:lodMinClamp:lodMaxClamp:index:)](setsamplerstate%28__lodminclamp_lodmaxclamp_index_%29.md): Encodes a texture sampler with a custom level of detail clamping, allowing compute kernels to use it for sampling textures on the GPU.
- [setSamplerStates(\_:lodMinClamps:lodMaxClamps:range:)](setsamplerstates%28__lodminclamps_lodmaxclamps_range_%29.md): Encodes multiple texture samplers for the compute function, specifying clamp values for the level of detail of each sampler.
