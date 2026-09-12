> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlargumentencoder/setsamplerstates(_:range:)](https://developer.apple.com/documentation/metal/mtlargumentencoder/setsamplerstates(_:range:))

# setSamplerStates(\_:range:)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS

Encodes an array of samplers into the argument buffer.

## Declaration

```swift
func setSamplerStates(_ samplers: [(any MTLSamplerState)?], range: Range<Int>)
```

## Parameters

- `samplers`: An array of samplers the method encodes.
- `range`: A range of indices within the argument buffer for each element in `samplers`. The values correspond to either the index IDs of declarations in Metal Shading Language (MSL) or the [index](../mtlargumentdescriptor/index.md) property of [MTLArgumentDescriptor](../mtlargumentdescriptor.md) instances.

## See Also

### Encoding samplers

- [setSamplerState(\_:index:)](setsamplerstate%28__index_%29.md): Encodes a sampler into the argument buffer.
