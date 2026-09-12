> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlargumentencoder/setsamplerstate(_:index:)](https://developer.apple.com/documentation/metal/mtlargumentencoder/setsamplerstate(_:index:))

# setSamplerState(\_:index:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Encodes a sampler into the argument buffer.

## Declaration

```swift
func setSamplerState(_ sampler: (any MTLSamplerState)?, index: Int)
```

## Parameters

- `sampler`: A sampler the method encodes.
- `index`: The index of a sampler within the argument buffer. The value corresponds to either the index ID of a declaration in Metal Shading Language (MSL) or the [index](../mtlargumentdescriptor/index.md) property of an [MTLArgumentDescriptor](../mtlargumentdescriptor.md) instance.

## See Also

### Encoding samplers

- [setSamplerStates(\_:range:)](setsamplerstates%28__range_%29.md): Encodes an array of samplers into the argument buffer.

# setSamplerState:atIndex: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Encodes a sampler into the argument buffer.

## Declaration

```objectivec
- (void) setSamplerState:(id<MTLSamplerState>) sampler atIndex:(NSUInteger) index;
```

## Parameters

- `sampler`: A sampler the method encodes.
- `index`: The index of a sampler within the argument buffer. The value corresponds to either the index ID of a declaration in Metal Shading Language (MSL) or the [index](../mtlargumentdescriptor/index.md) property of an [MTLArgumentDescriptor](../mtlargumentdescriptor.md) instance.

## See Also

### Encoding samplers

- [setSamplerStates:withRange:](setsamplerstates_withrange_.md): Encodes an array of samplers into the argument buffer.
