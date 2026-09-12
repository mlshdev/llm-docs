> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlsampleraddressmode/repeat](https://developer.apple.com/documentation/metal/mtlsampleraddressmode/repeat)

# MTLSamplerAddressMode.repeat (Swift)

**Framework:** Metal  
**Kind:** Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Texture coordinates wrap to the other side of the texture, effectively keeping only the fractional part of the texture coordinate.

## Declaration

```swift
case `repeat`
```

## See Also

### Address mode options

- [MTLSamplerAddressMode.clampToEdge](clamptoedge.md): Texture coordinates are clamped between `0.0` and `1.0`, inclusive.
- [MTLSamplerAddressMode.mirrorClampToEdge](mirrorclamptoedge.md): Between `-1.0` and `1.0`, the texture coordinates are mirrored across the axis; outside `-1.0` and `1.0`, texture coordinates are clamped.
- [MTLSamplerAddressMode.mirrorRepeat](mirrorrepeat.md): Between `-1.0` and `1.0`, the texture coordinates are mirrored across the axis; outside `-1.0` and `1.0`, the image is repeated.
- [MTLSamplerAddressMode.clampToZero](clamptozero.md): Out-of-range texture coordinates return transparent zero `(0,0,0,0)` for images with an alpha channel and return opaque zero `(0,0,0,1)` for images without an alpha channel.
- [MTLSamplerAddressMode.clampToBorderColor](clamptobordercolor.md): An address mode that returns the sampler’s border color.

# MTLSamplerAddressModeRepeat (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Texture coordinates wrap to the other side of the texture, effectively keeping only the fractional part of the texture coordinate.

## Declaration

```objectivec
MTLSamplerAddressModeRepeat
```

## See Also

### Address mode options

- [MTLSamplerAddressModeClampToEdge](clamptoedge.md): Texture coordinates are clamped between `0.0` and `1.0`, inclusive.
- [MTLSamplerAddressModeMirrorClampToEdge](mirrorclamptoedge.md): Between `-1.0` and `1.0`, the texture coordinates are mirrored across the axis; outside `-1.0` and `1.0`, texture coordinates are clamped.
- [MTLSamplerAddressModeMirrorRepeat](mirrorrepeat.md): Between `-1.0` and `1.0`, the texture coordinates are mirrored across the axis; outside `-1.0` and `1.0`, the image is repeated.
- [MTLSamplerAddressModeClampToZero](clamptozero.md): Out-of-range texture coordinates return transparent zero `(0,0,0,0)` for images with an alpha channel and return opaque zero `(0,0,0,1)` for images without an alpha channel.
- [MTLSamplerAddressModeClampToBorderColor](clamptobordercolor.md): An address mode that returns the sampler’s border color.
