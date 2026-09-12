> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrendercommandencoder/setfragmentsamplerstate(_:index:)](https://developer.apple.com/documentation/metal/mtlrendercommandencoder/setfragmentsamplerstate(_:index:))

# setFragmentSamplerState(\_:index:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Assigns a sampler state to an entry in the fragment shader argument table.

## Declaration

```swift
func setFragmentSamplerState(_ sampler: (any MTLSamplerState)?, index: Int)
```

## Parameters

- `sampler`: An [MTLSamplerState](../mtlsamplerstate.md) instance the command assigns to an entry in the fragment shader argument table for sampler states.
- `index`: An integer that represents the entry in the fragment shader argument table for sampler states that stores a record of `sampler`.

<a id="discussion"></a>

## Discussion

By default, the sampler state at each index is `nil`.

## See Also

### Assigning sampler states

- [setFragmentSamplerState(\_:lodMinClamp:lodMaxClamp:index:)](setfragmentsamplerstate%28__lodminclamp_lodmaxclamp_index_%29.md): Assigns a sampler state and clamp values to an entry in the fragment shader argument table.
- [setFragmentSamplerStates(\_:range:)](setfragmentsamplerstates%28__range_%29.md): Assigns multiple sampler states to a range of entries in the fragment shader argument table.
- [setFragmentSamplerStates(\_:lodMinClamps:lodMaxClamps:range:)](setfragmentsamplerstates%28__lodminclamps_lodmaxclamps_range_%29.md): Assigns multiple sampler states and clamp values to a range of entries in the fragment shader argument table.

# setFragmentSamplerState:atIndex: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Assigns a sampler state to an entry in the fragment shader argument table.

## Declaration

```objectivec
- (void) setFragmentSamplerState:(id<MTLSamplerState>) sampler atIndex:(NSUInteger) index;
```

## Parameters

- `sampler`: An [MTLSamplerState](../mtlsamplerstate.md) instance the command assigns to an entry in the fragment shader argument table for sampler states.
- `index`: An integer that represents the entry in the fragment shader argument table for sampler states that stores a record of `sampler`.

<a id="discussion"></a>

## Discussion

By default, the sampler state at each index is `nil`.

## See Also

### Assigning sampler states

- [setFragmentSamplerState:lodMinClamp:lodMaxClamp:atIndex:](setfragmentsamplerstate%28__lodminclamp_lodmaxclamp_index_%29.md): Assigns a sampler state and clamp values to an entry in the fragment shader argument table.
- [setFragmentSamplerStates:withRange:](setfragmentsamplerstates_withrange_.md): Assigns multiple sampler states to a range of entries in the fragment shader argument table.
- [setFragmentSamplerStates:lodMinClamps:lodMaxClamps:withRange:](setfragmentsamplerstates_lodminclamps_lodmaxclamps_withrange_.md): Assigns multiple sampler states and clamp values to a range of entries in the fragment shader argument table.
