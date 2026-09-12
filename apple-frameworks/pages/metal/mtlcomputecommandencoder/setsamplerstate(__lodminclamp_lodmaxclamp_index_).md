> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcomputecommandencoder/setsamplerstate(_:lodminclamp:lodmaxclamp:index:)](https://developer.apple.com/documentation/metal/mtlcomputecommandencoder/setsamplerstate(_:lodminclamp:lodmaxclamp:index:))

# setSamplerState(\_:lodMinClamp:lodMaxClamp:index:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Encodes a texture sampler with a custom level of detail clamping, allowing compute kernels to use it for sampling textures on the GPU.

## Declaration

```swift
func setSamplerState(_ sampler: (any MTLSamplerState)?, lodMinClamp: Float, lodMaxClamp: Float, index: Int)
```

## Parameters

- `sampler`: An [MTLSamplerState](../mtlsamplerstate.md) instance to bind to the sampler argument table.
- `lodMinClamp`: The minimum level of detail used when sampling a texture.
- `lodMaxClamp`: The maximum level of detail used when sampling a texture.
- `index`: The index in the sampler argument table to bind the sampler to.

<a id="discussion"></a>

## Discussion

Calling this method ignores the [lodMinClamp](../mtlsamplerdescriptor/lodminclamp.md) and [lodMaxClamp](../mtlsamplerdescriptor/lodmaxclamp.md) properties of the sampler, using the provided levels of detail instead.

## See Also

### Binding texture samplers

- [setSamplerState(\_:index:)](setsamplerstate%28__index_%29.md): Encodes a texture sampler, allowing compute kernels to use it for sampling textures on the GPU.
- [setSamplerStates(\_:range:)](setsamplerstates%28__range_%29.md): Encodes multiple texture samplers to the sampler argument table, allowing compute kernels to use them for sampling textures on the GPU.
- [setSamplerStates(\_:lodMinClamps:lodMaxClamps:range:)](setsamplerstates%28__lodminclamps_lodmaxclamps_range_%29.md): Encodes multiple texture samplers for the compute function, specifying clamp values for the level of detail of each sampler.

# setSamplerState:lodMinClamp:lodMaxClamp:atIndex: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Encodes a texture sampler with a custom level of detail clamping, allowing compute kernels to use it for sampling textures on the GPU.

## Declaration

```objectivec
- (void) setSamplerState:(id<MTLSamplerState>) sampler lodMinClamp:(float) lodMinClamp lodMaxClamp:(float) lodMaxClamp atIndex:(NSUInteger) index;
```

## Parameters

- `sampler`: An [MTLSamplerState](../mtlsamplerstate.md) instance to bind to the sampler argument table.
- `lodMinClamp`: The minimum level of detail used when sampling a texture.
- `lodMaxClamp`: The maximum level of detail used when sampling a texture.
- `index`: The index in the sampler argument table to bind the sampler to.

<a id="discussion"></a>

## Discussion

Calling this method ignores the [lodMinClamp](../mtlsamplerdescriptor/lodminclamp.md) and [lodMaxClamp](../mtlsamplerdescriptor/lodmaxclamp.md) properties of the sampler, using the provided levels of detail instead.

## See Also

### Binding texture samplers

- [setSamplerState:atIndex:](setsamplerstate%28__index_%29.md): Encodes a texture sampler, allowing compute kernels to use it for sampling textures on the GPU.
- [setSamplerStates:withRange:](setsamplerstates_withrange_.md): Encodes multiple texture samplers, allowing compute kernels to use them for sampling textures on the GPU.
- [setSamplerStates:lodMinClamps:lodMaxClamps:withRange:](setsamplerstates_lodminclamps_lodmaxclamps_withrange_.md): Encodes multiple texture samplers with custom levels of detail clamping, allowing compute kernels to use them for sampling textures on the GPU.
