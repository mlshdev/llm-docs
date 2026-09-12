> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/ciimagerepresentationoption](https://developer.apple.com/documentation/coreimage/ciimagerepresentationoption)

# CIImageRepresentationOption (Swift)

**Framework:** Core Image  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

## Declaration

```swift
struct CIImageRepresentationOption
```

## Topics

### Initializers

- [init(rawValue:)](ciimagerepresentationoption/init%28rawvalue_%29.md)

### Type Properties

- [avDepthData](ciimagerepresentationoption/avdepthdata.md): The depth data representation of an image.
- [avPortraitEffectsMatte](ciimagerepresentationoption/avportraiteffectsmatte.md)
- [avSemanticSegmentationMattes](ciimagerepresentationoption/avsemanticsegmentationmattes.md)
- [depthImage](ciimagerepresentationoption/depthimage.md): `options` dictionary key for image export methods to output depth data.
- [disparityImage](ciimagerepresentationoption/disparityimage.md): `options` dictionary key for image export methods to output disparity data.
- [portraitEffectsMatteImage](ciimagerepresentationoption/portraiteffectsmatteimage.md)
- [semanticSegmentationGlassesMatteImage](ciimagerepresentationoption/semanticsegmentationglassesmatteimage.md)
- [semanticSegmentationHairMatteImage](ciimagerepresentationoption/semanticsegmentationhairmatteimage.md)
- [semanticSegmentationSkinMatteImage](ciimagerepresentationoption/semanticsegmentationskinmatteimage.md)
- [semanticSegmentationSkyMatteImage](ciimagerepresentationoption/semanticsegmentationskymatteimage.md)
- [semanticSegmentationTeethMatteImage](ciimagerepresentationoption/semanticsegmentationteethmatteimage.md)
- [hdrImage](ciimagerepresentationoption/hdrimage.md)
- [hdrGainMapAsRGB](ciimagerepresentationoption/hdrgainmapasrgb.md): An optional key and value to request the gain map channel to be color instead of monochrome.
- [hdrGainMapImage](ciimagerepresentationoption/hdrgainmapimage.md): An optional key and value to save a gain map channel to a JPEG or HEIF.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Rendering Images for Data or File Export

- [tiffRepresentation(of:format:colorSpace:options:)](cicontext/tiffrepresentation%28of_format_colorspace_options_%29.md): Renders the image and exports the resulting image data in TIFF format.
- [jpegRepresentation(of:colorSpace:options:)](cicontext/jpegrepresentation%28of_colorspace_options_%29.md): Renders the image and exports the resulting image data in JPEG format.
- [pngRepresentation(of:format:colorSpace:options:)](cicontext/pngrepresentation%28of_format_colorspace_options_%29.md): Renders the image and exports the resulting image data in PNG format.
- [heifRepresentation(of:format:colorSpace:options:)](cicontext/heifrepresentation%28of_format_colorspace_options_%29.md): Renders the image and exports the resulting image data in HEIF format.
- [heif10Representation(of:colorSpace:options:)](cicontext/heif10representation%28of_colorspace_options_%29.md): Renders the image and exports the resulting image data in HEIF10 format.
- [openEXRRepresentation(of:options:)](cicontext/openexrrepresentation%28of_options_%29.md): Renders the image and exports the resulting image data in open EXR format.
- [writeTIFFRepresentation(of:to:format:colorSpace:options:)](cicontext/writetiffrepresentation%28of_to_format_colorspace_options_%29.md): Renders the image and exports the resulting image data as a file in TIFF format.
- [writeJPEGRepresentation(of:to:colorSpace:options:)](cicontext/writejpegrepresentation%28of_to_colorspace_options_%29.md): Renders the image and exports the resulting image data as a file in JPEG format.
- [writePNGRepresentation(of:to:format:colorSpace:options:)](cicontext/writepngrepresentation%28of_to_format_colorspace_options_%29.md): Renders the image and exports the resulting image data as a file in PNG format.
- [writeHEIFRepresentation(of:to:format:colorSpace:options:)](cicontext/writeheifrepresentation%28of_to_format_colorspace_options_%29.md): Renders the image and exports the resulting image data as a file in HEIF format.
- [writeHEIF10Representation(of:to:colorSpace:options:)](cicontext/writeheif10representation%28of_to_colorspace_options_%29.md): Renders the image and exports the resulting image data as a file in HEIF10 format.
- [writeOpenEXRRepresentation(of:to:options:)](cicontext/writeopenexrrepresentation%28of_to_options_%29.md): Renders the image and exports the resulting image data as a file in open EXR format.

# CIImageRepresentationOption (Objective-C)

**Framework:** Core Image  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

## Declaration

```objectivec
typedef NSString * CIImageRepresentationOption;
```

## Topics

### Type Properties

- [kCIImageRepresentationAVDepthData](ciimagerepresentationoption/avdepthdata.md): The depth data representation of an image.
- [kCIImageRepresentationAVPortraitEffectsMatte](ciimagerepresentationoption/avportraiteffectsmatte.md)
- [kCIImageRepresentationAVSemanticSegmentationMattes](ciimagerepresentationoption/avsemanticsegmentationmattes.md)
- [kCIImageRepresentationDepthImage](ciimagerepresentationoption/depthimage.md): `options` dictionary key for image export methods to output depth data.
- [kCIImageRepresentationDisparityImage](ciimagerepresentationoption/disparityimage.md): `options` dictionary key for image export methods to output disparity data.
- [kCIImageRepresentationPortraitEffectsMatteImage](ciimagerepresentationoption/portraiteffectsmatteimage.md)
- [kCIImageRepresentationSemanticSegmentationGlassesMatteImage](ciimagerepresentationoption/semanticsegmentationglassesmatteimage.md)
- [kCIImageRepresentationSemanticSegmentationHairMatteImage](ciimagerepresentationoption/semanticsegmentationhairmatteimage.md)
- [kCIImageRepresentationSemanticSegmentationSkinMatteImage](ciimagerepresentationoption/semanticsegmentationskinmatteimage.md)
- [kCIImageRepresentationSemanticSegmentationSkyMatteImage](ciimagerepresentationoption/semanticsegmentationskymatteimage.md)
- [kCIImageRepresentationSemanticSegmentationTeethMatteImage](ciimagerepresentationoption/semanticsegmentationteethmatteimage.md)
- [kCIImageRepresentationHDRImage](ciimagerepresentationoption/hdrimage.md)

## See Also

### Rendering Images for Data or File Export

- [TIFFRepresentationOfImage:format:colorSpace:options:](cicontext/tiffrepresentation%28of_format_colorspace_options_%29.md): Renders the image and exports the resulting image data in TIFF format.
- [JPEGRepresentationOfImage:colorSpace:options:](cicontext/jpegrepresentation%28of_colorspace_options_%29.md): Renders the image and exports the resulting image data in JPEG format.
- [PNGRepresentationOfImage:format:colorSpace:options:](cicontext/pngrepresentation%28of_format_colorspace_options_%29.md): Renders the image and exports the resulting image data in PNG format.
- [HEIFRepresentationOfImage:format:colorSpace:options:](cicontext/heifrepresentation%28of_format_colorspace_options_%29.md): Renders the image and exports the resulting image data in HEIF format.
- [HEIF10RepresentationOfImage:colorSpace:options:error:](cicontext/heif10representation%28of_colorspace_options_%29.md): Renders the image and exports the resulting image data in HEIF10 format.
- [OpenEXRRepresentationOfImage:options:error:](cicontext/openexrrepresentation%28of_options_%29.md): Renders the image and exports the resulting image data in open EXR format.
- [writeTIFFRepresentationOfImage:toURL:format:colorSpace:options:error:](cicontext/writetiffrepresentation%28of_to_format_colorspace_options_%29.md): Renders the image and exports the resulting image data as a file in TIFF format.
- [writeJPEGRepresentationOfImage:toURL:colorSpace:options:error:](cicontext/writejpegrepresentation%28of_to_colorspace_options_%29.md): Renders the image and exports the resulting image data as a file in JPEG format.
- [writePNGRepresentationOfImage:toURL:format:colorSpace:options:error:](cicontext/writepngrepresentation%28of_to_format_colorspace_options_%29.md): Renders the image and exports the resulting image data as a file in PNG format.
- [writeHEIFRepresentationOfImage:toURL:format:colorSpace:options:error:](cicontext/writeheifrepresentation%28of_to_format_colorspace_options_%29.md): Renders the image and exports the resulting image data as a file in HEIF format.
- [writeHEIF10RepresentationOfImage:toURL:colorSpace:options:error:](cicontext/writeheif10representation%28of_to_colorspace_options_%29.md): Renders the image and exports the resulting image data as a file in HEIF10 format.
- [writeOpenEXRRepresentationOfImage:toURL:options:error:](cicontext/writeopenexrrepresentation%28of_to_options_%29.md): Renders the image and exports the resulting image data as a file in open EXR format.
