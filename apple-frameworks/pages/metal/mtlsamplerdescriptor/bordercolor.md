> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlsamplerdescriptor/bordercolor](https://developer.apple.com/documentation/metal/mtlsamplerdescriptor/bordercolor)

# borderColor (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 10.12+ · tvOS 16.0+ · visionOS 1.0+

The border color for clamped texture values.

## Declaration

```swift
var borderColor: MTLSamplerBorderColor { get set }
```

<a id="discussion"></a>

## Discussion

This value is only used when the sampler address mode is [MTLSamplerAddressMode.clampToBorderColor](../mtlsampleraddressmode/clamptobordercolor.md).

## See Also

### Declaring addressing modes

- [rAddressMode](raddressmode.md): The address mode for the texture depth (r) coordinate.
- [sAddressMode](saddressmode.md): The address mode for the texture width (s) coordinate.
- [tAddressMode](taddressmode.md): The address mode for the texture height (t) coordinate.
- [MTLSamplerAddressMode](../mtlsampleraddressmode.md): Modes that determine the texture coordinate at each pixel when a fetch falls outside the bounds of a texture.
- [MTLSamplerBorderColor](../mtlsamplerbordercolor.md): Values that determine the border color for clamped texture values when the sampler address mode is [MTLSamplerAddressMode.clampToBorderColor](../mtlsampleraddressmode/clamptobordercolor.md).

# borderColor (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 10.12+ · tvOS 16.0+ · visionOS 1.0+

The border color for clamped texture values.

## Declaration

```objectivec
@property (nonatomic) MTLSamplerBorderColor borderColor;
```

<a id="discussion"></a>

## Discussion

This value is only used when the sampler address mode is [MTLSamplerAddressModeClampToBorderColor](../mtlsampleraddressmode/clamptobordercolor.md).

## See Also

### Declaring addressing modes

- [rAddressMode](raddressmode.md): The address mode for the texture depth (r) coordinate.
- [sAddressMode](saddressmode.md): The address mode for the texture width (s) coordinate.
- [tAddressMode](taddressmode.md): The address mode for the texture height (t) coordinate.
- [MTLSamplerAddressMode](../mtlsampleraddressmode.md): Modes that determine the texture coordinate at each pixel when a fetch falls outside the bounds of a texture.
- [MTLSamplerBorderColor](../mtlsamplerbordercolor.md): Values that determine the border color for clamped texture values when the sampler address mode is [MTLSamplerAddressModeClampToBorderColor](../mtlsampleraddressmode/clamptobordercolor.md).
