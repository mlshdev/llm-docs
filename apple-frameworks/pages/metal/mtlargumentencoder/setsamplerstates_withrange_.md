> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlargumentencoder/setsamplerstates:withrange:](https://developer.apple.com/documentation/metal/mtlargumentencoder/setsamplerstates:withrange:)

# setSamplerStates:withRange:

**Interface language:** Objective-C

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Encodes an array of samplers into the argument buffer.

## Declaration

```objectivec
- (void) setSamplerStates:(id<MTLSamplerState> const[]) samplers withRange:(NSRange) range;
```

## Parameters

- `samplers`: An array of samplers the method encodes.
- `range`: A range of indices within the argument buffer for each element in `samplers`. The values correspond to either the index IDs of declarations in Metal Shading Language (MSL) or the [index](../mtlargumentdescriptor/index.md) property of [MTLArgumentDescriptor](../mtlargumentdescriptor.md) instances.

## See Also

### Encoding samplers

- [setSamplerState:atIndex:](setsamplerstate%28__index_%29.md): Encodes a sampler into the argument buffer.
