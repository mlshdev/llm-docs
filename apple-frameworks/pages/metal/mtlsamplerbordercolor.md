> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlsamplerbordercolor](https://developer.apple.com/documentation/metal/mtlsamplerbordercolor)

# MTLSamplerBorderColor (Swift)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 10.12+ · tvOS 16.0+ · visionOS 1.0+

Values that determine the border color for clamped texture values when the sampler address mode is [MTLSamplerAddressMode.clampToBorderColor](mtlsampleraddressmode/clamptobordercolor.md).

## Declaration

```swift
enum MTLSamplerBorderColor
```

## Topics

### Specifying border color options

- [MTLSamplerBorderColor.transparentBlack](mtlsamplerbordercolor/transparentblack.md): A transparent black color `(0,0,0,0)` for texture values outside the border.
- [MTLSamplerBorderColor.opaqueBlack](mtlsamplerbordercolor/opaqueblack.md): An opaque black color `(0,0,0,1)` for texture values outside the border
- [MTLSamplerBorderColor.opaqueWhite](mtlsamplerbordercolor/opaquewhite.md): An opaque white color `(1,1,1,1)` for texture values outside the border.

### Initializers

- [init(rawValue:)](mtlsamplerbordercolor/init%28rawvalue_%29.md)

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
- [MTLSamplerAddressMode](mtlsampleraddressmode.md): Modes that determine the texture coordinate at each pixel when a fetch falls outside the bounds of a texture.

# MTLSamplerBorderColor (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 10.12+ · tvOS 16.0+ · visionOS 1.0+

Values that determine the border color for clamped texture values when the sampler address mode is [MTLSamplerAddressModeClampToBorderColor](mtlsampleraddressmode/clamptobordercolor.md).

## Declaration

```objectivec
enum MTLSamplerBorderColor : NSUInteger;
```

## Topics

### Specifying border color options

- [MTLSamplerBorderColorTransparentBlack](mtlsamplerbordercolor/transparentblack.md): A transparent black color `(0,0,0,0)` for texture values outside the border.
- [MTLSamplerBorderColorOpaqueBlack](mtlsamplerbordercolor/opaqueblack.md): An opaque black color `(0,0,0,1)` for texture values outside the border
- [MTLSamplerBorderColorOpaqueWhite](mtlsamplerbordercolor/opaquewhite.md): An opaque white color `(1,1,1,1)` for texture values outside the border.

## See Also

### Declaring addressing modes

- [rAddressMode](mtlsamplerdescriptor/raddressmode.md): The address mode for the texture depth (r) coordinate.
- [sAddressMode](mtlsamplerdescriptor/saddressmode.md): The address mode for the texture width (s) coordinate.
- [tAddressMode](mtlsamplerdescriptor/taddressmode.md): The address mode for the texture height (t) coordinate.
- [borderColor](mtlsamplerdescriptor/bordercolor.md): The border color for clamped texture values.
- [MTLSamplerAddressMode](mtlsampleraddressmode.md): Modes that determine the texture coordinate at each pixel when a fetch falls outside the bounds of a texture.
