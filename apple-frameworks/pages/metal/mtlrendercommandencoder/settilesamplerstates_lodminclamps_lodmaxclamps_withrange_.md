> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrendercommandencoder/settilesamplerstates:lodminclamps:lodmaxclamps:withrange:](https://developer.apple.com/documentation/metal/mtlrendercommandencoder/settilesamplerstates:lodminclamps:lodmaxclamps:withrange:)

# setTileSamplerStates:lodMinClamps:lodMaxClamps:withRange:

**Interface language:** Objective-C

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.5+ · visionOS 1.0+

Assigns multiple sampler states and clamp values to a range of entries in the tile shader argument table.

## Declaration

```objectivec
- (void) setTileSamplerStates:(id<MTLSamplerState> const[]) samplers lodMinClamps:(const float[]) lodMinClamps lodMaxClamps:(const float[]) lodMaxClamps withRange:(NSRange) range;
```

## Parameters

- `samplers`: A pointer to a C array of [MTLSamplerState](../mtlsamplerstate.md) instances the command assigns to entries in the tile shader argument table for sampler states.
- `lodMinClamps`: A pointer to a C array of floating-point values. Each element is the smallest level of detail value a tile shader can use when it samples a texture with the corresponding element in `samplers`.
- `lodMaxClamps`: A pointer to a C array of floating-point values. Each element is the largest level of detail value a tile shader can use when it samples a texture with the corresponding element in `samplers`.
- `range`: A span of integers that represent the entries in the tile shader argument table for sampler states. Each entry stores a record of the corresponding element in `samplers`.

<a id="discussion"></a>

## Discussion

Each element of the method’s `lodMinClamps` and `lodMaxClamps` parameters overrides the default values for the corresponding sampler in `samplers`. You can set a sampler’s default values by configuring the [lodMinClamp](../mtlsamplerdescriptor/lodminclamp.md) and [lodMaxClamp](../mtlsamplerdescriptor/lodmaxclamp.md) properties of [MTLSamplerDescriptor](../mtlsamplerdescriptor.md) before you create the sampler.

By default, the sampler state at each index is `nil`.

> **Note**

>  The Swift version of this method is [setTileSamplerStates(\_:lodMinClamps:lodMaxClamps:range:)](settilesamplerstates%28__lodminclamps_lodmaxclamps_range_%29.md).

## See Also

### Assigning sampler states

- [setTileSamplerState:atIndex:](settilesamplerstate%28__index_%29.md): Assigns a sampler state to an entry in the tile shader argument table.
- [setTileSamplerState:lodMinClamp:lodMaxClamp:atIndex:](settilesamplerstate%28__lodminclamp_lodmaxclamp_index_%29.md): Assigns a sampler state and clamp values to an entry in the tile shader argument table.
- [setTileSamplerStates:withRange:](settilesamplerstates_withrange_.md): Assigns multiple sampler states to a range of entries in the tile shader argument table.
