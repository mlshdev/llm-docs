> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlpixelformat/rg11b10float](https://developer.apple.com/documentation/metal/mtlpixelformat/rg11b10float)

# MTLPixelFormat.rg11b10Float (Swift)

**Framework:** Metal  
**Kind:** Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

32-bit format with floating-point color components, 11 bits each for red and green and 10 bits for blue.

## Declaration

```swift
case rg11b10Float
```

## Mentioned In

- [Understanding the Metal 4 core API](../understanding-the-metal-4-core-api.md)

<a id="discussion"></a>

## Discussion

The components have no sign bit. The 10-bit float has 5 bits of mantissa and 5 bits of exponent. The 11-bit floats have 6 bits of mantissa and 5 bits of exponent.

## See Also

### Packed 32-bit pixel formats

- [MTLPixelFormat.bgr10a2Unorm](bgr10a2unorm.md): A 32-bit packed pixel format with four normalized unsigned integer components: 10-bit blue, 10-bit green, 10-bit red, and 2-bit alpha.
- [MTLPixelFormat.rgb10a2Unorm](rgb10a2unorm.md): A 32-bit packed pixel format with four normalized unsigned integer components: 10-bit red, 10-bit green, 10-bit blue, and 2-bit alpha.
- [MTLPixelFormat.rgb10a2Uint](rgb10a2uint.md): A 32-bit packed pixel format with four unsigned integer components: 10-bit red, 10-bit green, 10-bit blue, and 2-bit alpha.
- [MTLPixelFormat.rgb9e5Float](rgb9e5float.md): Packed 32-bit format with floating-point color components: 9 bits each for RGB and 5 bits for an exponent shared by RGB, packed into 32 bits.

# MTLPixelFormatRG11B10Float (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

32-bit format with floating-point color components, 11 bits each for red and green and 10 bits for blue.

## Declaration

```objectivec
MTLPixelFormatRG11B10Float
```

## Mentioned In

- [Understanding the Metal 4 core API](../understanding-the-metal-4-core-api.md)

<a id="discussion"></a>

## Discussion

The components have no sign bit. The 10-bit float has 5 bits of mantissa and 5 bits of exponent. The 11-bit floats have 6 bits of mantissa and 5 bits of exponent.

## See Also

### Packed 32-bit pixel formats

- [MTLPixelFormatBGR10A2Unorm](bgr10a2unorm.md): A 32-bit packed pixel format with four normalized unsigned integer components: 10-bit blue, 10-bit green, 10-bit red, and 2-bit alpha.
- [MTLPixelFormatRGB10A2Unorm](rgb10a2unorm.md): A 32-bit packed pixel format with four normalized unsigned integer components: 10-bit red, 10-bit green, 10-bit blue, and 2-bit alpha.
- [MTLPixelFormatRGB10A2Uint](rgb10a2uint.md): A 32-bit packed pixel format with four unsigned integer components: 10-bit red, 10-bit green, 10-bit blue, and 2-bit alpha.
- [MTLPixelFormatRGB9E5Float](rgb9e5float.md): Packed 32-bit format with floating-point color components: 9 bits each for RGB and 5 bits for an exponent shared by RGB, packed into 32 bits.
