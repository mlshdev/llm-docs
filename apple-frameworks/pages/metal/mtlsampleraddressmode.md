> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlsampleraddressmode](https://developer.apple.com/documentation/metal/mtlsampleraddressmode)

# MTLSamplerAddressMode (Swift)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Modes that determine the texture coordinate at each pixel when a fetch falls outside the bounds of a texture.

## Declaration

```swift
enum MTLSamplerAddressMode
```

## Topics

### Address mode options

- [MTLSamplerAddressMode.clampToEdge](mtlsampleraddressmode/clamptoedge.md): Texture coordinates are clamped between `0.0` and `1.0`, inclusive.
- [MTLSamplerAddressMode.mirrorClampToEdge](mtlsampleraddressmode/mirrorclamptoedge.md): Between `-1.0` and `1.0`, the texture coordinates are mirrored across the axis; outside `-1.0` and `1.0`, texture coordinates are clamped.
- [MTLSamplerAddressMode.repeat](mtlsampleraddressmode/repeat.md): Texture coordinates wrap to the other side of the texture, effectively keeping only the fractional part of the texture coordinate.
- [MTLSamplerAddressMode.mirrorRepeat](mtlsampleraddressmode/mirrorrepeat.md): Between `-1.0` and `1.0`, the texture coordinates are mirrored across the axis; outside `-1.0` and `1.0`, the image is repeated.
- [MTLSamplerAddressMode.clampToZero](mtlsampleraddressmode/clamptozero.md): Out-of-range texture coordinates return transparent zero `(0,0,0,0)` for images with an alpha channel and return opaque zero `(0,0,0,1)` for images without an alpha channel.
- [MTLSamplerAddressMode.clampToBorderColor](mtlsampleraddressmode/clamptobordercolor.md): An address mode that returns the sampler’s border color.

### Initializers

- [init(rawValue:)](mtlsampleraddressmode/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Declaring addressing modes

- [rAddressMode](mtlsamplerdescriptor/raddressmode.md): The address mode for the texture depth (r) coordinate.
- [sAddressMode](mtlsamplerdescriptor/saddressmode.md): The address mode for the texture width (s) coordinate.
- [tAddressMode](mtlsamplerdescriptor/taddressmode.md): The address mode for the texture height (t) coordinate.
- [borderColor](mtlsamplerdescriptor/bordercolor.md): The border color for clamped texture values.
- [MTLSamplerBorderColor](mtlsamplerbordercolor.md): Values that determine the border color for clamped texture values when the sampler address mode is [MTLSamplerAddressMode.clampToBorderColor](mtlsampleraddressmode/clamptobordercolor.md).

# MTLSamplerAddressMode (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Modes that determine the texture coordinate at each pixel when a fetch falls outside the bounds of a texture.

## Declaration

```objectivec
enum MTLSamplerAddressMode : NSUInteger;
```

## Topics

### Address mode options

- [MTLSamplerAddressModeClampToEdge](mtlsampleraddressmode/clamptoedge.md): Texture coordinates are clamped between `0.0` and `1.0`, inclusive.
- [MTLSamplerAddressModeMirrorClampToEdge](mtlsampleraddressmode/mirrorclamptoedge.md): Between `-1.0` and `1.0`, the texture coordinates are mirrored across the axis; outside `-1.0` and `1.0`, texture coordinates are clamped.
- [MTLSamplerAddressModeRepeat](mtlsampleraddressmode/repeat.md): Texture coordinates wrap to the other side of the texture, effectively keeping only the fractional part of the texture coordinate.
- [MTLSamplerAddressModeMirrorRepeat](mtlsampleraddressmode/mirrorrepeat.md): Between `-1.0` and `1.0`, the texture coordinates are mirrored across the axis; outside `-1.0` and `1.0`, the image is repeated.
- [MTLSamplerAddressModeClampToZero](mtlsampleraddressmode/clamptozero.md): Out-of-range texture coordinates return transparent zero `(0,0,0,0)` for images with an alpha channel and return opaque zero `(0,0,0,1)` for images without an alpha channel.
- [MTLSamplerAddressModeClampToBorderColor](mtlsampleraddressmode/clamptobordercolor.md): An address mode that returns the sampler’s border color.

## See Also

### Declaring addressing modes

- [rAddressMode](mtlsamplerdescriptor/raddressmode.md): The address mode for the texture depth (r) coordinate.
- [sAddressMode](mtlsamplerdescriptor/saddressmode.md): The address mode for the texture width (s) coordinate.
- [tAddressMode](mtlsamplerdescriptor/taddressmode.md): The address mode for the texture height (t) coordinate.
- [borderColor](mtlsamplerdescriptor/bordercolor.md): The border color for clamped texture values.
- [MTLSamplerBorderColor](mtlsamplerbordercolor.md): Values that determine the border color for clamped texture values when the sampler address mode is [MTLSamplerAddressModeClampToBorderColor](mtlsampleraddressmode/clamptobordercolor.md).
