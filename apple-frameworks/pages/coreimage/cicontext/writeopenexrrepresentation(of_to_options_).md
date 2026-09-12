> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cicontext/writeopenexrrepresentation(of:to:options:)](https://developer.apple.com/documentation/coreimage/cicontext/writeopenexrrepresentation(of:to:options:))

# writeOpenEXRRepresentation(of:to:options:) (Swift)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Renders the image and exports the resulting image data as a file in open EXR format.

## Declaration

```swift
func writeOpenEXRRepresentation(of image: CIImage, to url: URL, options: [CIImageRepresentationOption : Any] = [:]) throws
```

## Parameters

- `image`: The image object to render.
- `url`: The file URL at which to write the output HEIF file.
- `options`: A dictionary with additional options for export.

## See Also

### Rendering Images for Data or File Export

- [tiffRepresentation(of:format:colorSpace:options:)](tiffrepresentation%28of_format_colorspace_options_%29.md): Renders the image and exports the resulting image data in TIFF format.
- [jpegRepresentation(of:colorSpace:options:)](jpegrepresentation%28of_colorspace_options_%29.md): Renders the image and exports the resulting image data in JPEG format.
- [pngRepresentation(of:format:colorSpace:options:)](pngrepresentation%28of_format_colorspace_options_%29.md): Renders the image and exports the resulting image data in PNG format.
- [heifRepresentation(of:format:colorSpace:options:)](heifrepresentation%28of_format_colorspace_options_%29.md): Renders the image and exports the resulting image data in HEIF format.
- [heif10Representation(of:colorSpace:options:)](heif10representation%28of_colorspace_options_%29.md): Renders the image and exports the resulting image data in HEIF10 format.
- [openEXRRepresentation(of:options:)](openexrrepresentation%28of_options_%29.md): Renders the image and exports the resulting image data in open EXR format.
- [writeTIFFRepresentation(of:to:format:colorSpace:options:)](writetiffrepresentation%28of_to_format_colorspace_options_%29.md): Renders the image and exports the resulting image data as a file in TIFF format.
- [writeJPEGRepresentation(of:to:colorSpace:options:)](writejpegrepresentation%28of_to_colorspace_options_%29.md): Renders the image and exports the resulting image data as a file in JPEG format.
- [writePNGRepresentation(of:to:format:colorSpace:options:)](writepngrepresentation%28of_to_format_colorspace_options_%29.md): Renders the image and exports the resulting image data as a file in PNG format.
- [writeHEIFRepresentation(of:to:format:colorSpace:options:)](writeheifrepresentation%28of_to_format_colorspace_options_%29.md): Renders the image and exports the resulting image data as a file in HEIF format.
- [writeHEIF10Representation(of:to:colorSpace:options:)](writeheif10representation%28of_to_colorspace_options_%29.md): Renders the image and exports the resulting image data as a file in HEIF10 format.
- [CIImageRepresentationOption](../ciimagerepresentationoption.md)

# writeOpenEXRRepresentationOfImage:toURL:options:error: (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Renders the image and exports the resulting image data as a file in open EXR format.

## Declaration

```objectivec
- (BOOL) writeOpenEXRRepresentationOfImage:(CIImage *) image toURL:(NSURL *) url options:(NSDictionary<NSString *,id> *) options error:(NSError **) errorPtr;
```

## Parameters

- `image`: The image object to render.
- `url`: The file URL at which to write the output HEIF file.
- `options`: A dictionary with additional options for export.
- `errorPtr`: On input, a pointer to an error object. If an error occurs, this pointer is set to an object containing error information.

## See Also

### Rendering Images for Data or File Export

- [TIFFRepresentationOfImage:format:colorSpace:options:](tiffrepresentation%28of_format_colorspace_options_%29.md): Renders the image and exports the resulting image data in TIFF format.
- [JPEGRepresentationOfImage:colorSpace:options:](jpegrepresentation%28of_colorspace_options_%29.md): Renders the image and exports the resulting image data in JPEG format.
- [PNGRepresentationOfImage:format:colorSpace:options:](pngrepresentation%28of_format_colorspace_options_%29.md): Renders the image and exports the resulting image data in PNG format.
- [HEIFRepresentationOfImage:format:colorSpace:options:](heifrepresentation%28of_format_colorspace_options_%29.md): Renders the image and exports the resulting image data in HEIF format.
- [HEIF10RepresentationOfImage:colorSpace:options:error:](heif10representation%28of_colorspace_options_%29.md): Renders the image and exports the resulting image data in HEIF10 format.
- [OpenEXRRepresentationOfImage:options:error:](openexrrepresentation%28of_options_%29.md): Renders the image and exports the resulting image data in open EXR format.
- [writeTIFFRepresentationOfImage:toURL:format:colorSpace:options:error:](writetiffrepresentation%28of_to_format_colorspace_options_%29.md): Renders the image and exports the resulting image data as a file in TIFF format.
- [writeJPEGRepresentationOfImage:toURL:colorSpace:options:error:](writejpegrepresentation%28of_to_colorspace_options_%29.md): Renders the image and exports the resulting image data as a file in JPEG format.
- [writePNGRepresentationOfImage:toURL:format:colorSpace:options:error:](writepngrepresentation%28of_to_format_colorspace_options_%29.md): Renders the image and exports the resulting image data as a file in PNG format.
- [writeHEIFRepresentationOfImage:toURL:format:colorSpace:options:error:](writeheifrepresentation%28of_to_format_colorspace_options_%29.md): Renders the image and exports the resulting image data as a file in HEIF format.
- [writeHEIF10RepresentationOfImage:toURL:colorSpace:options:error:](writeheif10representation%28of_to_colorspace_options_%29.md): Renders the image and exports the resulting image data as a file in HEIF10 format.
- [CIImageRepresentationOption](../ciimagerepresentationoption.md)
