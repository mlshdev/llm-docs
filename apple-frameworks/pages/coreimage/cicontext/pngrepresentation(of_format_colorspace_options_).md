> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cicontext/pngrepresentation(of:format:colorspace:options:)](https://developer.apple.com/documentation/coreimage/cicontext/pngrepresentation(of:format:colorspace:options:))

# pngRepresentation(of:format:colorSpace:options:) (Swift)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Renders the image and exports the resulting image data in PNG format.

## Declaration

```swift
func pngRepresentation(of image: CIImage, format: CIFormat, colorSpace: CGColorSpace, options: [CIImageRepresentationOption : Any] = [:]) -> Data?
```

## Parameters

- `image`: The image object to render.
- `format`: The pixel format for the output image.
- `colorSpace`: The color space in which to render the output image. This color space must conform to either the [CGColorSpaceModel.rgb](../../coregraphics/cgcolorspacemodel/rgb.md) or [CGColorSpaceModel.monochrome](../../coregraphics/cgcolorspacemodel/monochrome.md) model and must be compatible with the specified pixel format.
- `options`: No options keys are supported at this time.

<a id="return-value"></a>

## Return Value

A data representation of the rendered image in PNG format, or `nil` if the image could not be rendered.

<a id="Discussion"></a>

## Discussion

To render an image for export, the image’s contents must not be empty and its [extent](../ciimage/extent.md) dimensions must be finite. To export after applying a filter whose output has infinite extent, see the [clampedToExtent()](../ciimage/clampedtoextent%28%29.md) method.

## See Also

### Rendering Images for Data or File Export

- [tiffRepresentation(of:format:colorSpace:options:)](tiffrepresentation%28of_format_colorspace_options_%29.md): Renders the image and exports the resulting image data in TIFF format.
- [jpegRepresentation(of:colorSpace:options:)](jpegrepresentation%28of_colorspace_options_%29.md): Renders the image and exports the resulting image data in JPEG format.
- [heifRepresentation(of:format:colorSpace:options:)](heifrepresentation%28of_format_colorspace_options_%29.md): Renders the image and exports the resulting image data in HEIF format.
- [heif10Representation(of:colorSpace:options:)](heif10representation%28of_colorspace_options_%29.md): Renders the image and exports the resulting image data in HEIF10 format.
- [openEXRRepresentation(of:options:)](openexrrepresentation%28of_options_%29.md): Renders the image and exports the resulting image data in open EXR format.
- [writeTIFFRepresentation(of:to:format:colorSpace:options:)](writetiffrepresentation%28of_to_format_colorspace_options_%29.md): Renders the image and exports the resulting image data as a file in TIFF format.
- [writeJPEGRepresentation(of:to:colorSpace:options:)](writejpegrepresentation%28of_to_colorspace_options_%29.md): Renders the image and exports the resulting image data as a file in JPEG format.
- [writePNGRepresentation(of:to:format:colorSpace:options:)](writepngrepresentation%28of_to_format_colorspace_options_%29.md): Renders the image and exports the resulting image data as a file in PNG format.
- [writeHEIFRepresentation(of:to:format:colorSpace:options:)](writeheifrepresentation%28of_to_format_colorspace_options_%29.md): Renders the image and exports the resulting image data as a file in HEIF format.
- [writeHEIF10Representation(of:to:colorSpace:options:)](writeheif10representation%28of_to_colorspace_options_%29.md): Renders the image and exports the resulting image data as a file in HEIF10 format.
- [writeOpenEXRRepresentation(of:to:options:)](writeopenexrrepresentation%28of_to_options_%29.md): Renders the image and exports the resulting image data as a file in open EXR format.
- [CIImageRepresentationOption](../ciimagerepresentationoption.md)

# PNGRepresentationOfImage:format:colorSpace:options: (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Renders the image and exports the resulting image data in PNG format.

## Declaration

```objectivec
- (NSData *) PNGRepresentationOfImage:(CIImage *) image format:(CIFormat) format colorSpace:(CGColorSpaceRef) colorSpace options:(NSDictionary<NSString *,id> *) options;
```

## Parameters

- `image`: The image object to render.
- `format`: The pixel format for the output image.
- `colorSpace`: The color space in which to render the output image. This color space must conform to either the [kCGColorSpaceModelRGB](../../coregraphics/cgcolorspacemodel/rgb.md) or [kCGColorSpaceModelMonochrome](../../coregraphics/cgcolorspacemodel/monochrome.md) model and must be compatible with the specified pixel format.
- `options`: No options keys are supported at this time.

<a id="return-value"></a>

## Return Value

A data representation of the rendered image in PNG format, or `nil` if the image could not be rendered.

<a id="Discussion"></a>

## Discussion

To render an image for export, the image’s contents must not be empty and its [extent](../ciimage/extent.md) dimensions must be finite. To export after applying a filter whose output has infinite extent, see the [imageByClampingToExtent](../ciimage/clampedtoextent%28%29.md) method.

## See Also

### Rendering Images for Data or File Export

- [TIFFRepresentationOfImage:format:colorSpace:options:](tiffrepresentation%28of_format_colorspace_options_%29.md): Renders the image and exports the resulting image data in TIFF format.
- [JPEGRepresentationOfImage:colorSpace:options:](jpegrepresentation%28of_colorspace_options_%29.md): Renders the image and exports the resulting image data in JPEG format.
- [HEIFRepresentationOfImage:format:colorSpace:options:](heifrepresentation%28of_format_colorspace_options_%29.md): Renders the image and exports the resulting image data in HEIF format.
- [HEIF10RepresentationOfImage:colorSpace:options:error:](heif10representation%28of_colorspace_options_%29.md): Renders the image and exports the resulting image data in HEIF10 format.
- [OpenEXRRepresentationOfImage:options:error:](openexrrepresentation%28of_options_%29.md): Renders the image and exports the resulting image data in open EXR format.
- [writeTIFFRepresentationOfImage:toURL:format:colorSpace:options:error:](writetiffrepresentation%28of_to_format_colorspace_options_%29.md): Renders the image and exports the resulting image data as a file in TIFF format.
- [writeJPEGRepresentationOfImage:toURL:colorSpace:options:error:](writejpegrepresentation%28of_to_colorspace_options_%29.md): Renders the image and exports the resulting image data as a file in JPEG format.
- [writePNGRepresentationOfImage:toURL:format:colorSpace:options:error:](writepngrepresentation%28of_to_format_colorspace_options_%29.md): Renders the image and exports the resulting image data as a file in PNG format.
- [writeHEIFRepresentationOfImage:toURL:format:colorSpace:options:error:](writeheifrepresentation%28of_to_format_colorspace_options_%29.md): Renders the image and exports the resulting image data as a file in HEIF format.
- [writeHEIF10RepresentationOfImage:toURL:colorSpace:options:error:](writeheif10representation%28of_to_colorspace_options_%29.md): Renders the image and exports the resulting image data as a file in HEIF10 format.
- [writeOpenEXRRepresentationOfImage:toURL:options:error:](writeopenexrrepresentation%28of_to_options_%29.md): Renders the image and exports the resulting image data as a file in open EXR format.
- [CIImageRepresentationOption](../ciimagerepresentationoption.md)
