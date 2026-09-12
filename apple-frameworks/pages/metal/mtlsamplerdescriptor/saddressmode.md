> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlsamplerdescriptor/saddressmode](https://developer.apple.com/documentation/metal/mtlsamplerdescriptor/saddressmode)

# sAddressMode (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The address mode for the texture width (s) coordinate.

## Declaration

```swift
var sAddressMode: MTLSamplerAddressMode { get set }
```

<a id="discussion"></a>

## Discussion

The default value is [MTLSamplerAddressMode.clampToEdge](../mtlsampleraddressmode/clamptoedge.md).

## See Also

### Declaring addressing modes

- [rAddressMode](raddressmode.md): The address mode for the texture depth (r) coordinate.
- [tAddressMode](taddressmode.md): The address mode for the texture height (t) coordinate.
- [borderColor](bordercolor.md): The border color for clamped texture values.
- [MTLSamplerAddressMode](../mtlsampleraddressmode.md): Modes that determine the texture coordinate at each pixel when a fetch falls outside the bounds of a texture.
- [MTLSamplerBorderColor](../mtlsamplerbordercolor.md): Values that determine the border color for clamped texture values when the sampler address mode is [MTLSamplerAddressMode.clampToBorderColor](../mtlsampleraddressmode/clamptobordercolor.md).

# sAddressMode (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The address mode for the texture width (s) coordinate.

## Declaration

```objectivec
@property (nonatomic) MTLSamplerAddressMode sAddressMode;
```

<a id="discussion"></a>

## Discussion

The default value is [MTLSamplerAddressModeClampToEdge](../mtlsampleraddressmode/clamptoedge.md).

## See Also

### Declaring addressing modes

- [rAddressMode](raddressmode.md): The address mode for the texture depth (r) coordinate.
- [tAddressMode](taddressmode.md): The address mode for the texture height (t) coordinate.
- [borderColor](bordercolor.md): The border color for clamped texture values.
- [MTLSamplerAddressMode](../mtlsampleraddressmode.md): Modes that determine the texture coordinate at each pixel when a fetch falls outside the bounds of a texture.
- [MTLSamplerBorderColor](../mtlsamplerbordercolor.md): Values that determine the border color for clamped texture values when the sampler address mode is [MTLSamplerAddressModeClampToBorderColor](../mtlsampleraddressmode/clamptobordercolor.md).
