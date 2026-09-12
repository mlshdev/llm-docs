> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimageconverter_createwithcgcolorconversioninfo(_:_:_:_:_:_:)](https://developer.apple.com/documentation/accelerate/vimageconverter_createwithcgcolorconversioninfo(_:_:_:_:_:_:))

# vImageConverter_CreateWithCGColorConversionInfo(\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Creates an any-to-any converter that uses a color conversion information object to convert from one image format to another.

## Declaration

```swift
func vImageConverter_CreateWithCGColorConversionInfo(_ colorConversionInfoRef: CGColorConversionInfo, _ sFormat: UnsafePointer<vImage_CGImageFormat>, _ dFormat: UnsafePointer<vImage_CGImageFormat>, _ bg: UnsafePointer<CGFloat>!, _ flags: vImage_Flags, _ error: UnsafeMutablePointer<vImage_Error>!) -> Unmanaged<vImageConverter>!
```

## Parameters

- `colorConversionInfoRef`: The object that describes how to convert between color spaces.
- `sFormat`: A pointer to a populated [vImage_CGImageFormat](vimage_cgimageformat.md) that describes the image format of the source image.
- `dFormat`: A pointer to a populated [vImage_CGImageFormat](vimage_cgimageformat.md) that describes the image format of the destination image.
- `bg`: An array of single-precision values, in the range 0 to 1, that specifies the background color when required.
- `flags`: The options to use when performing this operation.
- `error`: An optional `inout` value that receives an error code.

<a id="Discussion"></a>

## Discussion

Use [vImageConverter_CreateWithCGColorConversionInfo(\_:\_:\_:\_:\_:\_:)](vimageconverter_createwithcgcolorconversioninfo%28____________%29.md) to create a converter suitable for use with [vImageConvert_AnyToAny(\_:\_:\_:\_:\_:)](vimageconvert_anytoany%28__________%29.md), which uses [CGColorConversionInfo](../coregraphics/cgcolorconversioninfo.md) for color conversion. [CGColorConversionInfo](../coregraphics/cgcolorconversioninfo.md) provides greater control on the color-space conversion than, for example, using a converter returned by [vImageConverter_CreateWithCGImageFormat(\_:\_:\_:\_:\_:)](vimageconverter_createwithcgimageformat%28__________%29.md).

<a id="Convert-Linear-Color-Space-to-sRGB"></a>

### Convert Linear Color Space to sRGB

You can use [vImageConverter_CreateWithCGColorConversionInfo(\_:\_:\_:\_:\_:\_:)](vimageconverter_createwithcgcolorconversioninfo%28____________%29.md) to convert an image with a linear response curve to sRGB. Many vImage operations provide optimal results when working on images with a linear response curve, this approach is ideal for converting between linear and sRGB.

Begin by creating the source and destination color spaces, and the [CGColorConversionInfo](../coregraphics/cgcolorconversioninfo.md) instance:

```swift
guard
    let sourceColorSpace = CGColorSpace(name: CGColorSpace.linearSRGB),
    let destinationColorSpace = CGColorSpace(name: CGColorSpace.sRGB),
    let conversionInfo = CGColorConversionInfo(src: sourceColorSpace,
                                               dst: destinationColorSpace)
else {
    return
}
```

Create a [vImage_CGImageFormat](vimage_cgimageformat.md) structure, without a color space, that specifies the pixel memory requirement, number of channels, and alpha information:

```swift
var cgImageFormat = vImage_CGImageFormat(bitsPerComponent: 8,
                                         bitsPerPixel: 8 * 3,
                                         colorSpace: nil,
                                         bitmapInfo: CGBitmapInfo(rawValue: CGImageAlphaInfo.none.rawValue),
                                         version: 0,
                                         decode: nil,
                                         renderingIntent: .defaultIntent)
```

Create the converter and buffers:

```swift
guard
    let converter = vImageConverter_CreateWithCGColorConversionInfo(conversionInfo,
                                                                    &cgImageFormat,
                                                                    &cgImageFormat,
                                                                    [0],
                                                                    vImage_Flags(kvImageNoFlags),
                                                                    nil),
    var sourceBuffer = try? vImage_Buffer(cgImage: sourceCGImage,
                                          format: cgImageFormat),
    var destinationBuffer = try? vImage_Buffer(width: Int(image.size.width),
                                               height: Int(image.size.height),
                                               bitsPerPixel: cgImageFormat.bitsPerPixel) else {
    return
}
```

Pass the converter and the two buffers to [vImageConvert_AnyToAny(\_:\_:\_:\_:\_:)](vimageconvert_anytoany%28__________%29.md) to perform the conversion:

```swift
vImageConvert_AnyToAny(converter.takeRetainedValue(),
                       &sourceBuffer, &destinationBuffer,
                       nil,
                       vImage_Flags(kvImageNoFlags))
```

The following image shows the source image, on the left, and the contents of `destinationBuffer`, on the right, after conversion:

![Two photographs of a flower. The image on the left has a linear response curve and is very dark. The image on the right is sRGB and correctly rendered.](https://developer.apple.com/images/com.apple.accelerate/media-3583042@2x.png)

## See Also

### Creating a converter

- [vImageConverter](vimageconverter.md): A description of a conversion from one image format to another.
- [vImageConverter_CreateWithCGImageFormat(\_:\_:\_:\_:\_:)](vimageconverter_createwithcgimageformat%28__________%29.md): Creates a vImage converter that converts from one vImage Core Graphics image format to another.
- [vImageConverter_CreateForCGToCVImageFormat(\_:\_:\_:\_:\_:)](vimageconverter_createforcgtocvimageformat%28__________%29.md): Creates a vImage converter that converts a Core Graphics-formatted image to a Core Video-formatted image.
- [vImageConverter_CreateForCVToCGImageFormat(\_:\_:\_:\_:\_:)](vimageconverter_createforcvtocgimageformat%28__________%29.md): Creates a vImage converter that converts a Core Video-formatted image to a Core Graphics-formatted image.
- [vImageConverter_CreateWithColorSyncCodeFragment(\_:\_:\_:\_:\_:\_:)](vimageconverter_createwithcolorsynccodefragment%28____________%29.md): Creates a vImage converter to convert from one vImage Core Graphics image format to another, using custom ColorSync transform.

# vImageConverter_CreateWithCGColorConversionInfo (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Creates an any-to-any converter that uses a color conversion information object to convert from one image format to another.

## Declaration

```objectivec
vImageConverterRefvImageConverter_CreateWithCGColorConversionInfo(CGColorConversionInfoRef colorConversionInfoRef, const vImage_CGImageFormat *sFormat, const vImage_CGImageFormat *dFormat, const CGFloat *bg, vImage_Flags flags, vImage_Error *error);
```

## Parameters

- `colorConversionInfoRef`: The object that describes how to convert between color spaces.
- `sFormat`: A pointer to a populated [vImage_CGImageFormat](vimage_cgimageformat.md) that describes the image format of the source image.
- `dFormat`: A pointer to a populated [vImage_CGImageFormat](vimage_cgimageformat.md) that describes the image format of the destination image.
- `bg`: An array of single-precision values, in the range 0 to 1, that specifies the background color when required.
- `flags`: The options to use when performing this operation.
- `error`: An optional `inout` value that receives an error code.

<a id="Discussion"></a>

## Discussion

Use [vImageConverter_CreateWithCGColorConversionInfo](vimageconverter_createwithcgcolorconversioninfo%28____________%29.md) to create a converter suitable for use with [vImageConvert_AnyToAny](vimageconvert_anytoany%28__________%29.md), which uses [CGColorConversionInfoRef](../coregraphics/cgcolorconversioninfo.md) for color conversion. [CGColorConversionInfoRef](../coregraphics/cgcolorconversioninfo.md) provides greater control on the color-space conversion than, for example, using a converter returned by [vImageConverter_CreateWithCGImageFormat](vimageconverter_createwithcgimageformat%28__________%29.md).

<a id="Convert-Linear-Color-Space-to-sRGB"></a>

### Convert Linear Color Space to sRGB

You can use [vImageConverter_CreateWithCGColorConversionInfo](vimageconverter_createwithcgcolorconversioninfo%28____________%29.md) to convert an image with a linear response curve to sRGB. Many vImage operations provide optimal results when working on images with a linear response curve, this approach is ideal for converting between linear and sRGB.

Begin by creating the source and destination color spaces, and the [CGColorConversionInfoRef](../coregraphics/cgcolorconversioninfo.md) instance:

```swift
guard
    let sourceColorSpace = CGColorSpace(name: CGColorSpace.linearSRGB),
    let destinationColorSpace = CGColorSpace(name: CGColorSpace.sRGB),
    let conversionInfo = CGColorConversionInfo(src: sourceColorSpace,
                                               dst: destinationColorSpace)
else {
    return
}
```

Create a [vImage_CGImageFormat](vimage_cgimageformat.md) structure, without a color space, that specifies the pixel memory requirement, number of channels, and alpha information:

```swift
var cgImageFormat = vImage_CGImageFormat(bitsPerComponent: 8,
                                         bitsPerPixel: 8 * 3,
                                         colorSpace: nil,
                                         bitmapInfo: CGBitmapInfo(rawValue: CGImageAlphaInfo.none.rawValue),
                                         version: 0,
                                         decode: nil,
                                         renderingIntent: .defaultIntent)
```

Create the converter and buffers:

```swift
guard
    let converter = vImageConverter_CreateWithCGColorConversionInfo(conversionInfo,
                                                                    &cgImageFormat,
                                                                    &cgImageFormat,
                                                                    [0],
                                                                    vImage_Flags(kvImageNoFlags),
                                                                    nil),
    var sourceBuffer = try? vImage_Buffer(cgImage: sourceCGImage,
                                          format: cgImageFormat),
    var destinationBuffer = try? vImage_Buffer(width: Int(image.size.width),
                                               height: Int(image.size.height),
                                               bitsPerPixel: cgImageFormat.bitsPerPixel) else {
    return
}
```

Pass the converter and the two buffers to [vImageConvert_AnyToAny](vimageconvert_anytoany%28__________%29.md) to perform the conversion:

```swift
vImageConvert_AnyToAny(converter.takeRetainedValue(),
                       &sourceBuffer, &destinationBuffer,
                       nil,
                       vImage_Flags(kvImageNoFlags))
```

The following image shows the source image, on the left, and the contents of `destinationBuffer`, on the right, after conversion:

![Two photographs of a flower. The image on the left has a linear response curve and is very dark. The image on the right is sRGB and correctly rendered.](https://developer.apple.com/images/com.apple.accelerate/media-3583042@2x.png)

## See Also

### Creating a converter

- [vImageConverterRef](vimageconverter.md): A description of a conversion from one image format to another.
- [vImageConverter_CreateWithCGImageFormat](vimageconverter_createwithcgimageformat%28__________%29.md): Creates a vImage converter that converts from one vImage Core Graphics image format to another.
- [vImageConverter_CreateForCGToCVImageFormat](vimageconverter_createforcgtocvimageformat%28__________%29.md): Creates a vImage converter that converts a Core Graphics-formatted image to a Core Video-formatted image.
- [vImageConverter_CreateForCVToCGImageFormat](vimageconverter_createforcvtocgimageformat%28__________%29.md): Creates a vImage converter that converts a Core Video-formatted image to a Core Graphics-formatted image.
- [vImageConverter_CreateWithColorSyncCodeFragment](vimageconverter_createwithcolorsynccodefragment%28____________%29.md): Creates a vImage converter to convert from one vImage Core Graphics image format to another, using custom ColorSync transform.
