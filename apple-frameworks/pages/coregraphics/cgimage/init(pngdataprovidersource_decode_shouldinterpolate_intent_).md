> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgimage/init(pngdataprovidersource:decode:shouldinterpolate:intent:)](https://developer.apple.com/documentation/coregraphics/cgimage/init(pngdataprovidersource:decode:shouldinterpolate:intent:))

# init(pngDataProviderSource:decode:shouldInterpolate:intent:) (Swift)

**Framework:** Core Graphics  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates a bitmap image using PNG-encoded data supplied by a data provider.

## Declaration

```swift
init?(pngDataProviderSource source: CGDataProvider, decode: UnsafePointer<CGFloat>?, shouldInterpolate: Bool, intent: CGColorRenderingIntent)
```

## Parameters

- `source`: A data provider supplying PNG-encoded data.
- `decode`: The decode array for the image. Typically a decode array is unnecessary, and you should pass `NULL`.
- `shouldInterpolate`: A Boolean value that specifies whether interpolation should occur. The interpolation setting specifies whether a pixel-smoothing algorithm should be applied to the image.
- `intent`: A CGColorRenderingIntent constant that specifies how to handle colors that are not located within the gamut of the destination color space of a graphics context.

<a id="return-value"></a>

## Return Value

A new CGImage. In Objective-C, you’re responsible for releasing this object by calling [CGImageRelease](../cgimagerelease.md).

## See Also

### Creating images

- [init(width:height:bitsPerComponent:bitsPerPixel:bytesPerRow:space:bitmapInfo:provider:decode:shouldInterpolate:intent:)](init%28width_height_bitspercomponent_bitsperpixel_bytesperrow_space_bitmapinfo_provider_decode_shouldinterpolate_intent_%29.md): Creates a bitmap image from data supplied by a data provider.
- [init(jpegDataProviderSource:decode:shouldInterpolate:intent:)](init%28jpegdataprovidersource_decode_shouldinterpolate_intent_%29.md): Creates a bitmap image using JPEG-encoded data supplied by a data provider.
- [init(headroom:width:height:bitsPerComponent:bitsPerPixel:bytesPerRow:space:bitmapInfo:provider:decode:shouldInterpolate:intent:)](init%28headroom_width_height_bitspercomponent_bitsperpixel_bytesperrow_space_bitmapinfo_provider_decode_shouldinterpolate_intent_%29.md)

# CGImageCreateWithPNGDataProvider (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates a bitmap image using PNG-encoded data supplied by a data provider.

## Declaration

```objectivec
extern CGImageRefCGImageCreateWithPNGDataProvider(CGDataProviderRef source, const CGFloat *decode, bool shouldInterpolate, CGColorRenderingIntent intent);
```

## Parameters

- `source`: A data provider supplying PNG-encoded data.
- `decode`: The decode array for the image. Typically a decode array is unnecessary, and you should pass `NULL`.
- `shouldInterpolate`: A Boolean value that specifies whether interpolation should occur. The interpolation setting specifies whether a pixel-smoothing algorithm should be applied to the image.
- `intent`: A CGColorRenderingIntent constant that specifies how to handle colors that are not located within the gamut of the destination color space of a graphics context.

<a id="return-value"></a>

## Return Value

A new CGImage. In Objective-C, you’re responsible for releasing this object by calling [CGImageRelease](../cgimagerelease.md).

## See Also

### Creating images

- [CGImageCreate](init%28width_height_bitspercomponent_bitsperpixel_bytesperrow_space_bitmapinfo_provider_decode_shouldinterpolate_intent_%29.md): Creates a bitmap image from data supplied by a data provider.
- [CGImageCreateWithJPEGDataProvider](init%28jpegdataprovidersource_decode_shouldinterpolate_intent_%29.md): Creates a bitmap image using JPEG-encoded data supplied by a data provider.
- [CGImageCreateWithContentHeadroom](init%28headroom_width_height_bitspercomponent_bitsperpixel_bytesperrow_space_bitmapinfo_provider_decode_shouldinterpolate_intent_%29.md)
