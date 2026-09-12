> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrendercommandencoder/setvertexsamplerstate(_:lodminclamp:lodmaxclamp:index:)](https://developer.apple.com/documentation/metal/mtlrendercommandencoder/setvertexsamplerstate(_:lodminclamp:lodmaxclamp:index:))

# setVertexSamplerState(\_:lodMinClamp:lodMaxClamp:index:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Assigns a sampler state and clamp values to an entry in the vertex shader argument table.

## Declaration

```swift
func setVertexSamplerState(_ sampler: (any MTLSamplerState)?, lodMinClamp: Float, lodMaxClamp: Float, index: Int)
```

## Parameters

- `sampler`: An [MTLSamplerState](../mtlsamplerstate.md) instance the command assigns to an entry in the vertex shader argument table for sampler states.
- `lodMinClamp`: The smallest level of detail value a vertex shader can use when it samples a texture.
- `lodMaxClamp`: The largest level of detail value a vertex shader can use when it samples a texture.
- `index`: An integer that represents the entry in the vertex shader argument table for sampler states that stores a record of `sampler`.

<a id="discussion"></a>

## Discussion

The method’s `lodMinClamp` and `lodMaxClamp` parameters override the default values for `sampler`. You can set the sampler’s default values by configuring the [lodMinClamp](../mtlsamplerdescriptor/lodminclamp.md) and [lodMaxClamp](../mtlsamplerdescriptor/lodmaxclamp.md) properties of [MTLSamplerDescriptor](../mtlsamplerdescriptor.md) before you create the sampler.

By default, the sampler state at each index is `nil`.

## See Also

### Assigning sampler states

- [setVertexSamplerState(\_:index:)](setvertexsamplerstate%28__index_%29.md): Assigns a sampler state to an entry in the vertex shader argument table.
- [setVertexSamplerStates(\_:range:)](setvertexsamplerstates%28__range_%29.md): Assigns multiple sampler states to a range of entries in the vertex shader argument table.
- [setVertexSamplerStates(\_:lodMinClamps:lodMaxClamps:range:)](setvertexsamplerstates%28__lodminclamps_lodmaxclamps_range_%29.md): Assigns multiple sampler states and clamp values to a range of entries in the vertex shader argument table.

# setVertexSamplerState:lodMinClamp:lodMaxClamp:atIndex: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Assigns a sampler state and clamp values to an entry in the vertex shader argument table.

## Declaration

```objectivec
- (void) setVertexSamplerState:(id<MTLSamplerState>) sampler lodMinClamp:(float) lodMinClamp lodMaxClamp:(float) lodMaxClamp atIndex:(NSUInteger) index;
```

## Parameters

- `sampler`: An [MTLSamplerState](../mtlsamplerstate.md) instance the command assigns to an entry in the vertex shader argument table for sampler states.
- `lodMinClamp`: The smallest level of detail value a vertex shader can use when it samples a texture.
- `lodMaxClamp`: The largest level of detail value a vertex shader can use when it samples a texture.
- `index`: An integer that represents the entry in the vertex shader argument table for sampler states that stores a record of `sampler`.

<a id="discussion"></a>

## Discussion

The method’s `lodMinClamp` and `lodMaxClamp` parameters override the default values for `sampler`. You can set the sampler’s default values by configuring the [lodMinClamp](../mtlsamplerdescriptor/lodminclamp.md) and [lodMaxClamp](../mtlsamplerdescriptor/lodmaxclamp.md) properties of [MTLSamplerDescriptor](../mtlsamplerdescriptor.md) before you create the sampler.

By default, the sampler state at each index is `nil`.

## See Also

### Assigning sampler states

- [setVertexSamplerState:atIndex:](setvertexsamplerstate%28__index_%29.md): Assigns a sampler state to an entry in the vertex shader argument table.
- [setVertexSamplerStates:withRange:](setvertexsamplerstates_withrange_.md): Assigns multiple sampler states to a range of entries in the vertex shader argument table.
- [setVertexSamplerStates:lodMinClamps:lodMaxClamps:withRange:](setvertexsamplerstates_lodminclamps_lodmaxclamps_withrange_.md): Assigns multiple sampler states and clamp values to a range of entries in the vertex shader argument table.
