> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrendercommandencoder/settilesamplerstate(_:lodminclamp:lodmaxclamp:index:)](https://developer.apple.com/documentation/metal/mtlrendercommandencoder/settilesamplerstate(_:lodminclamp:lodmaxclamp:index:))

# setTileSamplerState(\_:lodMinClamp:lodMaxClamp:index:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.5+ · visionOS 1.0+

Assigns a sampler state and clamp values to an entry in the tile shader argument table.

## Declaration

```swift
func setTileSamplerState(_ sampler: (any MTLSamplerState)?, lodMinClamp: Float, lodMaxClamp: Float, index: Int)
```

## Parameters

- `sampler`: An [MTLSamplerState](../mtlsamplerstate.md) instance the command assigns to an entry in the tile shader argument table for sampler states.
- `lodMinClamp`: The smallest level of detail value a tile shader can use when it samples a texture.
- `lodMaxClamp`: The largest level of detail value a tile shader can use when it samples a texture.
- `index`: An integer that represents the entry in the tile shader argument table for sampler states that stores a record of `sampler`.

<a id="discussion"></a>

## Discussion

The method’s `lodMinClamp` and `lodMaxClamp` parameters override the default values for `sampler`. You can set the sampler’s default values by configuring the [lodMinClamp](../mtlsamplerdescriptor/lodminclamp.md) and [lodMaxClamp](../mtlsamplerdescriptor/lodmaxclamp.md) properties of [MTLSamplerDescriptor](../mtlsamplerdescriptor.md) before you create the sampler.

By default, the sampler state at each index is `nil`.

## See Also

### Assigning sampler states

- [setTileSamplerState(\_:index:)](settilesamplerstate%28__index_%29.md): Assigns a sampler state to an entry in the tile shader argument table.
- [setTileSamplerStates(\_:range:)](settilesamplerstates%28__range_%29.md): Assigns multiple sampler states to a range of entries in the tile shader argument table.
- [setTileSamplerStates(\_:lodMinClamps:lodMaxClamps:range:)](settilesamplerstates%28__lodminclamps_lodmaxclamps_range_%29.md): Assigns multiple sampler states and clamp values to a range of entries in the tile shader argument table.

# setTileSamplerState:lodMinClamp:lodMaxClamp:atIndex: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.5+ · visionOS 1.0+

Assigns a sampler state and clamp values to an entry in the tile shader argument table.

## Declaration

```objectivec
- (void) setTileSamplerState:(id<MTLSamplerState>) sampler lodMinClamp:(float) lodMinClamp lodMaxClamp:(float) lodMaxClamp atIndex:(NSUInteger) index;
```

## Parameters

- `sampler`: An [MTLSamplerState](../mtlsamplerstate.md) instance the command assigns to an entry in the tile shader argument table for sampler states.
- `lodMinClamp`: The smallest level of detail value a tile shader can use when it samples a texture.
- `lodMaxClamp`: The largest level of detail value a tile shader can use when it samples a texture.
- `index`: An integer that represents the entry in the tile shader argument table for sampler states that stores a record of `sampler`.

<a id="discussion"></a>

## Discussion

The method’s `lodMinClamp` and `lodMaxClamp` parameters override the default values for `sampler`. You can set the sampler’s default values by configuring the [lodMinClamp](../mtlsamplerdescriptor/lodminclamp.md) and [lodMaxClamp](../mtlsamplerdescriptor/lodmaxclamp.md) properties of [MTLSamplerDescriptor](../mtlsamplerdescriptor.md) before you create the sampler.

By default, the sampler state at each index is `nil`.

## See Also

### Assigning sampler states

- [setTileSamplerState:atIndex:](settilesamplerstate%28__index_%29.md): Assigns a sampler state to an entry in the tile shader argument table.
- [setTileSamplerStates:withRange:](settilesamplerstates_withrange_.md): Assigns multiple sampler states to a range of entries in the tile shader argument table.
- [setTileSamplerStates:lodMinClamps:lodMaxClamps:withRange:](settilesamplerstates_lodminclamps_lodmaxclamps_withrange_.md): Assigns multiple sampler states and clamp values to a range of entries in the tile shader argument table.
