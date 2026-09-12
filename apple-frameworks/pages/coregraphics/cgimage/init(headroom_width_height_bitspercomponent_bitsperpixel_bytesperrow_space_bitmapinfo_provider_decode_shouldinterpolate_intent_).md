> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgimage/init(headroom:width:height:bitspercomponent:bitsperpixel:bytesperrow:space:bitmapinfo:provider:decode:shouldinterpolate:intent:)](https://developer.apple.com/documentation/coregraphics/cgimage/init(headroom:width:height:bitspercomponent:bitsperpixel:bytesperrow:space:bitmapinfo:provider:decode:shouldinterpolate:intent:))

# init(headroom:width:height:bitsPerComponent:bitsPerPixel:bytesPerRow:space:bitmapInfo:provider:decode:shouldInterpolate:intent:) (Swift)

**Framework:** Core Graphics  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

## Declaration

```swift
init?(headroom: Float, width: Int, height: Int, bitsPerComponent: Int, bitsPerPixel: Int, bytesPerRow: Int, space: CGColorSpace, bitmapInfo: CGBitmapInfo, provider: CGDataProvider, decode: UnsafePointer<CGFloat>?, shouldInterpolate: Bool, intent: CGColorRenderingIntent)
```

## See Also

### Creating images

- [init(width:height:bitsPerComponent:bitsPerPixel:bytesPerRow:space:bitmapInfo:provider:decode:shouldInterpolate:intent:)](init%28width_height_bitspercomponent_bitsperpixel_bytesperrow_space_bitmapinfo_provider_decode_shouldinterpolate_intent_%29.md): Creates a bitmap image from data supplied by a data provider.
- [init(jpegDataProviderSource:decode:shouldInterpolate:intent:)](init%28jpegdataprovidersource_decode_shouldinterpolate_intent_%29.md): Creates a bitmap image using JPEG-encoded data supplied by a data provider.
- [init(pngDataProviderSource:decode:shouldInterpolate:intent:)](init%28pngdataprovidersource_decode_shouldinterpolate_intent_%29.md): Creates a bitmap image using PNG-encoded data supplied by a data provider.

# CGImageCreateWithContentHeadroom (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

## Declaration

```objectivec
extern CGImageRefCGImageCreateWithContentHeadroom(float headroom, size_t width, size_t height, size_t bitsPerComponent, size_t bitsPerPixel, size_t bytesPerRow, CGColorSpaceRef space, CGBitmapInfo bitmapInfo, CGDataProviderRef provider, const CGFloat *decode, bool shouldInterpolate, CGColorRenderingIntent intent);
```

## See Also

### Creating images

- [CGImageCreate](init%28width_height_bitspercomponent_bitsperpixel_bytesperrow_space_bitmapinfo_provider_decode_shouldinterpolate_intent_%29.md): Creates a bitmap image from data supplied by a data provider.
- [CGImageCreateWithJPEGDataProvider](init%28jpegdataprovidersource_decode_shouldinterpolate_intent_%29.md): Creates a bitmap image using JPEG-encoded data supplied by a data provider.
- [CGImageCreateWithPNGDataProvider](init%28pngdataprovidersource_decode_shouldinterpolate_intent_%29.md): Creates a bitmap image using PNG-encoded data supplied by a data provider.
