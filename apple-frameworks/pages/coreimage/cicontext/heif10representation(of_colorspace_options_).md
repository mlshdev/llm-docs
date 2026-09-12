> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cicontext/heif10representation(of:colorspace:options:)](https://developer.apple.com/documentation/coreimage/cicontext/heif10representation(of:colorspace:options:))

# heif10Representation(of:colorSpace:options:) (Swift)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Renders the image and exports the resulting image data in HEIF10 format.

## Declaration

```swift
func heif10Representation(of image: CIImage, colorSpace: CGColorSpace, options: [CIImageRepresentationOption : Any] = [:]) throws -> Data
```

## Parameters

- `image`: The image object to render.
- `colorSpace`: The color space in which to render the output image.
- `options`: A dictionary with additional options for export.

## See Also

### Rendering Images for Data or File Export

- [tiffRepresentation(of:format:colorSpace:options:)](tiffrepresentation%28of_format_colorspace_options_%29.md): Renders the image and exports the resulting image data in TIFF format.
- [jpegRepresentation(of:colorSpace:options:)](jpegrepresentation%28of_colorspace_options_%29.md): Renders the image and exports the resulting image data in JPEG format.
- [pngRepresentation(of:format:colorSpace:options:)](pngrepresentation%28of_format_colorspace_options_%29.md): Renders the image and exports the resulting image data in PNG format.
- [heifRepresentation(of:format:colorSpace:options:)](heifrepresentation%28of_format_colorspace_options_%29.md): Renders the image and exports the resulting image data in HEIF format.
- [openEXRRepresentation(of:options:)](openexrrepresentation%28of_options_%29.md): Renders the image and exports the resulting image data in open EXR format.
- [writeTIFFRepresentation(of:to:format:colorSpace:options:)](writetiffrepresentation%28of_to_format_colorspace_options_%29.md): Renders the image and exports the resulting image data as a file in TIFF format.
- [writeJPEGRepresentation(of:to:colorSpace:options:)](writejpegrepresentation%28of_to_colorspace_options_%29.md): Renders the image and exports the resulting image data as a file in JPEG format.
- [writePNGRepresentation(of:to:format:colorSpace:options:)](writepngrepresentation%28of_to_format_colorspace_options_%29.md): Renders the image and exports the resulting image data as a file in PNG format.
- [writeHEIFRepresentation(of:to:format:colorSpace:options:)](writeheifrepresentation%28of_to_format_colorspace_options_%29.md): Renders the image and exports the resulting image data as a file in HEIF format.
- [writeHEIF10Representation(of:to:colorSpace:options:)](writeheif10representation%28of_to_colorspace_options_%29.md): Renders the image and exports the resulting image data as a file in HEIF10 format.
- [writeOpenEXRRepresentation(of:to:options:)](writeopenexrrepresentation%28of_to_options_%29.md): Renders the image and exports the resulting image data as a file in open EXR format.
- [CIImageRepresentationOption](../ciimagerepresentationoption.md)

# HEIF10RepresentationOfImage:colorSpace:options:error: (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Renders the image and exports the resulting image data in HEIF10 format.

## Declaration

```objectivec
- (NSData *) HEIF10RepresentationOfImage:(CIImage *) image colorSpace:(CGColorSpaceRef) colorSpace options:(NSDictionary<NSString *,id> *) options error:(NSError **) errorPtr;
```

## Parameters

- `image`: The image object to render.
- `colorSpace`: The color space in which to render the output image.
- `options`: A dictionary with additional options for export.
- `errorPtr`: On input, a pointer to an error object. If an error occurs, this pointer is set to an object containing error information.

## See Also

### Rendering Images for Data or File Export

- [TIFFRepresentationOfImage:format:colorSpace:options:](tiffrepresentation%28of_format_colorspace_options_%29.md): Renders the image and exports the resulting image data in TIFF format.
- [JPEGRepresentationOfImage:colorSpace:options:](jpegrepresentation%28of_colorspace_options_%29.md): Renders the image and exports the resulting image data in JPEG format.
- [PNGRepresentationOfImage:format:colorSpace:options:](pngrepresentation%28of_format_colorspace_options_%29.md): Renders the image and exports the resulting image data in PNG format.
- [HEIFRepresentationOfImage:format:colorSpace:options:](heifrepresentation%28of_format_colorspace_options_%29.md): Renders the image and exports the resulting image data in HEIF format.
- [OpenEXRRepresentationOfImage:options:error:](openexrrepresentation%28of_options_%29.md): Renders the image and exports the resulting image data in open EXR format.
- [writeTIFFRepresentationOfImage:toURL:format:colorSpace:options:error:](writetiffrepresentation%28of_to_format_colorspace_options_%29.md): Renders the image and exports the resulting image data as a file in TIFF format.
- [writeJPEGRepresentationOfImage:toURL:colorSpace:options:error:](writejpegrepresentation%28of_to_colorspace_options_%29.md): Renders the image and exports the resulting image data as a file in JPEG format.
- [writePNGRepresentationOfImage:toURL:format:colorSpace:options:error:](writepngrepresentation%28of_to_format_colorspace_options_%29.md): Renders the image and exports the resulting image data as a file in PNG format.
- [writeHEIFRepresentationOfImage:toURL:format:colorSpace:options:error:](writeheifrepresentation%28of_to_format_colorspace_options_%29.md): Renders the image and exports the resulting image data as a file in HEIF format.
- [writeHEIF10RepresentationOfImage:toURL:colorSpace:options:error:](writeheif10representation%28of_to_colorspace_options_%29.md): Renders the image and exports the resulting image data as a file in HEIF10 format.
- [writeOpenEXRRepresentationOfImage:toURL:options:error:](writeopenexrrepresentation%28of_to_options_%29.md): Renders the image and exports the resulting image data as a file in open EXR format.
- [CIImageRepresentationOption](../ciimagerepresentationoption.md)
