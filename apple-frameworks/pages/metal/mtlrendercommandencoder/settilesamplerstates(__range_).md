> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrendercommandencoder/settilesamplerstates(_:range:)](https://developer.apple.com/documentation/metal/mtlrendercommandencoder/settilesamplerstates(_:range:))

# setTileSamplerStates(\_:range:)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.5+ · visionOS

Assigns multiple sampler states to a range of entries in the tile shader argument table.

## Declaration

```swift
func setTileSamplerStates(_ samplers: [(any MTLSamplerState)?], range: Range<Int>)
```

## Parameters

- `samplers`: An array of [MTLSamplerState](../mtlsamplerstate.md) instances the command assigns to entries in the tile shader argument table for sampler states.
- `range`: A span of integers that represent the entries in the tile shader argument table for sampler states. Each entry stores a record of the corresponding element in `samplers`.

<a id="discussion"></a>

## Discussion

By default, the sampler state at each index is `nil`.

> **Note**

>  The Objective-C version of this method is [setTileSamplerStates:withRange:](settilesamplerstates_withrange_.md).

## See Also

### Assigning sampler states

- [setTileSamplerState(\_:index:)](settilesamplerstate%28__index_%29.md): Assigns a sampler state to an entry in the tile shader argument table.
- [setTileSamplerState(\_:lodMinClamp:lodMaxClamp:index:)](settilesamplerstate%28__lodminclamp_lodmaxclamp_index_%29.md): Assigns a sampler state and clamp values to an entry in the tile shader argument table.
- [setTileSamplerStates(\_:lodMinClamps:lodMaxClamps:range:)](settilesamplerstates%28__lodminclamps_lodmaxclamps_range_%29.md): Assigns multiple sampler states and clamp values to a range of entries in the tile shader argument table.
