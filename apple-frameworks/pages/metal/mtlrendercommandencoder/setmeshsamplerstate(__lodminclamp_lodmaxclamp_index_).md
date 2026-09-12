> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrendercommandencoder/setmeshsamplerstate(_:lodminclamp:lodmaxclamp:index:)](https://developer.apple.com/documentation/metal/mtlrendercommandencoder/setmeshsamplerstate(_:lodminclamp:lodmaxclamp:index:))

# setMeshSamplerState(\_:lodMinClamp:lodMaxClamp:index:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Assigns a sampler state and clamp values to an entry in the mesh shader argument table.

## Declaration

```swift
func setMeshSamplerState(_ sampler: (any MTLSamplerState)?, lodMinClamp: Float, lodMaxClamp: Float, index: Int)
```

## Parameters

- `sampler`: An [MTLSamplerState](../mtlsamplerstate.md) instance the command assigns to an entry in the mesh shader argument table for sampler states.
- `lodMinClamp`: The smallest level of detail value a mesh shader can use when it samples a texture.
- `lodMaxClamp`: The largest level of detail value a mesh shader can use when it samples a texture.
- `index`: An integer that represents the entry in the mesh shader argument table for sampler states that stores a record of `sampler`.

<a id="discussion"></a>

## Discussion

The method’s `lodMinClamp` and `lodMaxClamp` parameters override the default values for `sampler`. You can set the sampler’s default values by configuring the [lodMinClamp](../mtlsamplerdescriptor/lodminclamp.md) and [lodMaxClamp](../mtlsamplerdescriptor/lodmaxclamp.md) properties of [MTLSamplerDescriptor](../mtlsamplerdescriptor.md) before you create the sampler.

By default, the sampler state at each index is `nil`.

## See Also

### Assigning sampler states for mesh shaders

- [setMeshSamplerState(\_:index:)](setmeshsamplerstate%28__index_%29.md): Assigns a sampler state to an entry in the mesh shader argument table.
- [setMeshSamplerStates(\_:range:)](setmeshsamplerstates%28__range_%29.md): Assigns multiple sampler states to a range of entries in the mesh shader argument table.
- [setMeshSamplerStates(\_:lodMinClamps:lodMaxClamps:range:)](setmeshsamplerstates%28__lodminclamps_lodmaxclamps_range_%29.md): Assigns multiple sampler states and clamp values to a range of entries in the mesh shader argument table.

# setMeshSamplerState:lodMinClamp:lodMaxClamp:atIndex: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Assigns a sampler state and clamp values to an entry in the mesh shader argument table.

## Declaration

```objectivec
- (void) setMeshSamplerState:(id<MTLSamplerState>) sampler lodMinClamp:(float) lodMinClamp lodMaxClamp:(float) lodMaxClamp atIndex:(NSUInteger) index;
```

## Parameters

- `sampler`: An [MTLSamplerState](../mtlsamplerstate.md) instance the command assigns to an entry in the mesh shader argument table for sampler states.
- `lodMinClamp`: The smallest level of detail value a mesh shader can use when it samples a texture.
- `lodMaxClamp`: The largest level of detail value a mesh shader can use when it samples a texture.
- `index`: An integer that represents the entry in the mesh shader argument table for sampler states that stores a record of `sampler`.

<a id="discussion"></a>

## Discussion

The method’s `lodMinClamp` and `lodMaxClamp` parameters override the default values for `sampler`. You can set the sampler’s default values by configuring the [lodMinClamp](../mtlsamplerdescriptor/lodminclamp.md) and [lodMaxClamp](../mtlsamplerdescriptor/lodmaxclamp.md) properties of [MTLSamplerDescriptor](../mtlsamplerdescriptor.md) before you create the sampler.

By default, the sampler state at each index is `nil`.

## See Also

### Assigning sampler states for mesh shaders

- [setMeshSamplerState:atIndex:](setmeshsamplerstate%28__index_%29.md): Assigns a sampler state to an entry in the mesh shader argument table.
- [setMeshSamplerStates:withRange:](setmeshsamplerstates_withrange_.md): Assigns multiple sampler states to a range of entries in the mesh shader argument table.
- [setMeshSamplerStates:lodMinClamps:lodMaxClamps:withRange:](setmeshsamplerstates_lodminclamps_lodmaxclamps_withrange_.md): Assigns multiple sampler states and clamp values to a range of entries in the mesh shader argument table.
