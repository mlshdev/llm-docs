> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrendercommandencoder/setobjectsamplerstates(_:range:)](https://developer.apple.com/documentation/metal/mtlrendercommandencoder/setobjectsamplerstates(_:range:))

# setObjectSamplerStates(\_:range:)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS

Assigns multiple sampler states to a range of entries in the object shader argument table.

## Declaration

```swift
func setObjectSamplerStates(_ samplers: [(any MTLSamplerState)?], range: Range<Int>)
```

## Parameters

- `samplers`: An array of [MTLSamplerState](../mtlsamplerstate.md) instances the command assigns to entries in the object shader argument table for sampler states.
- `range`: A span of integers that represent the entries in the object shader argument table for sampler states. Each entry stores a record of the corresponding element in `samplers`.

<a id="discussion"></a>

## Discussion

By default, the sampler state at each index is `nil`.

> **Note**

>  The Objective-C version of this method is [setObjectSamplerStates:withRange:](setobjectsamplerstates_withrange_.md).

## See Also

### Assigning sampler states for object shaders

- [setObjectSamplerState(\_:index:)](setobjectsamplerstate%28__index_%29.md): Assigns a sampler state to an entry in the object shader argument table.
- [setObjectSamplerState(\_:lodMinClamp:lodMaxClamp:index:)](setobjectsamplerstate%28__lodminclamp_lodmaxclamp_index_%29.md): Assigns a sampler state and clamp values to an entry in the object shader argument table.
- [setObjectSamplerStates(\_:lodMinClamps:lodMaxClamps:range:)](setobjectsamplerstates%28__lodminclamps_lodmaxclamps_range_%29.md): Assigns multiple sampler states and clamp values to a range of entries in the object shader argument table.
