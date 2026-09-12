> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrendercommandencoder/settilesamplerstate(_:index:)](https://developer.apple.com/documentation/metal/mtlrendercommandencoder/settilesamplerstate(_:index:))

# setTileSamplerState(\_:index:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.5+ · visionOS 1.0+

Assigns a sampler state to an entry in the tile shader argument table.

## Declaration

```swift
func setTileSamplerState(_ sampler: (any MTLSamplerState)?, index: Int)
```

## Parameters

- `sampler`: An [MTLSamplerState](../mtlsamplerstate.md) instance the command assigns to an entry in the tile shader argument table for sampler states.
- `index`: An integer that represents the entry in the tile shader argument table for sampler states that stores a record of `sampler`.

<a id="discussion"></a>

## Discussion

By default, the sampler state at each index is `nil`.

## See Also

### Assigning sampler states

- [setTileSamplerState(\_:lodMinClamp:lodMaxClamp:index:)](settilesamplerstate%28__lodminclamp_lodmaxclamp_index_%29.md): Assigns a sampler state and clamp values to an entry in the tile shader argument table.
- [setTileSamplerStates(\_:range:)](settilesamplerstates%28__range_%29.md): Assigns multiple sampler states to a range of entries in the tile shader argument table.
- [setTileSamplerStates(\_:lodMinClamps:lodMaxClamps:range:)](settilesamplerstates%28__lodminclamps_lodmaxclamps_range_%29.md): Assigns multiple sampler states and clamp values to a range of entries in the tile shader argument table.

# setTileSamplerState:atIndex: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.5+ · visionOS 1.0+

Assigns a sampler state to an entry in the tile shader argument table.

## Declaration

```objectivec
- (void) setTileSamplerState:(id<MTLSamplerState>) sampler atIndex:(NSUInteger) index;
```

## Parameters

- `sampler`: An [MTLSamplerState](../mtlsamplerstate.md) instance the command assigns to an entry in the tile shader argument table for sampler states.
- `index`: An integer that represents the entry in the tile shader argument table for sampler states that stores a record of `sampler`.

<a id="discussion"></a>

## Discussion

By default, the sampler state at each index is `nil`.

## See Also

### Assigning sampler states

- [setTileSamplerState:lodMinClamp:lodMaxClamp:atIndex:](settilesamplerstate%28__lodminclamp_lodmaxclamp_index_%29.md): Assigns a sampler state and clamp values to an entry in the tile shader argument table.
- [setTileSamplerStates:withRange:](settilesamplerstates_withrange_.md): Assigns multiple sampler states to a range of entries in the tile shader argument table.
- [setTileSamplerStates:lodMinClamps:lodMaxClamps:withRange:](settilesamplerstates_lodminclamps_lodmaxclamps_withrange_.md): Assigns multiple sampler states and clamp values to a range of entries in the tile shader argument table.
