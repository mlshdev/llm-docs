> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/kcvimagebufferalphachannelisopaque](https://developer.apple.com/documentation/corevideo/kcvimagebufferalphachannelisopaque)

# kCVImageBufferAlphaChannelIsOpaque (Swift)

**Framework:** Core Video  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key to indicate whether the alpha channel is fully opaque.

## Declaration

```swift
let kCVImageBufferAlphaChannelIsOpaque: CFString
```

<a id="Discussion"></a>

## Discussion

The value for this key is [kCFBooleanTrue](../corefoundation/kcfbooleantrue.md) to indicate that the alpha channel is fully opaque. This key isn’t used if the pixel format type has no alpha channel.

## See Also

### Constants

- [kCVImageBufferCGColorSpaceKey](kcvimagebuffercgcolorspacekey.md): A key to the color space of the image buffer.
- [kCVImageBufferCleanApertureKey](kcvimagebuffercleanaperturekey.md): A key to the dictionary describing the clean aperture for the image buffer.
- [kCVImageBufferPreferredCleanApertureKey](kcvimagebufferpreferredcleanaperturekey.md): A key to the dictionary describing the preferred clean aperture for the image buffer.
- [kCVImageBufferFieldCountKey](kcvimagebufferfieldcountkey.md): A key to the field count for the image buffer.
- [kCVImageBufferFieldDetailKey](kcvimagebufferfielddetailkey.md): A key to the field detail for an image buffer that indicates the order of interlaced video data in the image buffer.
- [kCVImageBufferPixelAspectRatioKey](kcvimagebufferpixelaspectratiokey.md): A key to the dictionary describing the pixel aspect ratio for the image buffer.
- [kCVImageBufferDisplayDimensionsKey](kcvimagebufferdisplaydimensionskey.md): A key to the dictionary describing the display dimensions for the image buffer.
- [kCVImageBufferGammaLevelKey](kcvimagebuffergammalevelkey.md): A key to the gamma level for the image buffer.
- [kCVImageBufferICCProfileKey](kcvimagebuffericcprofilekey.md): A key to the ICC color profile for the image buffer.
- [kCVImageBufferYCbCrMatrixKey](kcvimagebufferycbcrmatrixkey.md): A key to the YCbCr to RGB color conversion matrix for the image buffer.
- [kCVImageBufferColorPrimariesKey](kcvimagebuffercolorprimarieskey.md): A key to the color primaries gamut for the image buffer.
- [kCVImageBufferTransferFunctionKey](kcvimagebuffertransferfunctionkey.md): A key to the transfer function for the image buffer.
- [kCVImageBufferChromaLocationTopFieldKey](kcvimagebufferchromalocationtopfieldkey.md): A key to the location of chroma top field information in the image buffer.
- [kCVImageBufferChromaLocationBottomFieldKey](kcvimagebufferchromalocationbottomfieldkey.md): A key to the location of chroma bottom field information in the image buffer.
- [kCVImageBufferChromaSubsamplingKey](kcvimagebufferchromasubsamplingkey.md): A key to the original format of subsampled data in the image buffer.

# kCVImageBufferAlphaChannelIsOpaque (Objective-C)

**Framework:** Core Video  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key to indicate whether the alpha channel is fully opaque.

## Declaration

```objectivec
extern CFStringRef const kCVImageBufferAlphaChannelIsOpaque;
```

<a id="Discussion"></a>

## Discussion

The value for this key is [kCFBooleanTrue](../corefoundation/kcfbooleantrue.md) to indicate that the alpha channel is fully opaque. This key isn’t used if the pixel format type has no alpha channel.

## See Also

### Constants

- [kCVImageBufferCGColorSpaceKey](kcvimagebuffercgcolorspacekey.md): A key to the color space of the image buffer.
- [kCVImageBufferCleanApertureKey](kcvimagebuffercleanaperturekey.md): A key to the dictionary describing the clean aperture for the image buffer.
- [kCVImageBufferPreferredCleanApertureKey](kcvimagebufferpreferredcleanaperturekey.md): A key to the dictionary describing the preferred clean aperture for the image buffer.
- [kCVImageBufferFieldCountKey](kcvimagebufferfieldcountkey.md): A key to the field count for the image buffer.
- [kCVImageBufferFieldDetailKey](kcvimagebufferfielddetailkey.md): A key to the field detail for an image buffer that indicates the order of interlaced video data in the image buffer.
- [kCVImageBufferPixelAspectRatioKey](kcvimagebufferpixelaspectratiokey.md): A key to the dictionary describing the pixel aspect ratio for the image buffer.
- [kCVImageBufferDisplayDimensionsKey](kcvimagebufferdisplaydimensionskey.md): A key to the dictionary describing the display dimensions for the image buffer.
- [kCVImageBufferGammaLevelKey](kcvimagebuffergammalevelkey.md): A key to the gamma level for the image buffer.
- [kCVImageBufferICCProfileKey](kcvimagebuffericcprofilekey.md): A key to the ICC color profile for the image buffer.
- [kCVImageBufferYCbCrMatrixKey](kcvimagebufferycbcrmatrixkey.md): A key to the YCbCr to RGB color conversion matrix for the image buffer.
- [kCVImageBufferColorPrimariesKey](kcvimagebuffercolorprimarieskey.md): A key to the color primaries gamut for the image buffer.
- [kCVImageBufferTransferFunctionKey](kcvimagebuffertransferfunctionkey.md): A key to the transfer function for the image buffer.
- [kCVImageBufferChromaLocationTopFieldKey](kcvimagebufferchromalocationtopfieldkey.md): A key to the location of chroma top field information in the image buffer.
- [kCVImageBufferChromaLocationBottomFieldKey](kcvimagebufferchromalocationbottomfieldkey.md): A key to the location of chroma bottom field information in the image buffer.
- [kCVImageBufferChromaSubsamplingKey](kcvimagebufferchromasubsamplingkey.md): A key to the original format of subsampled data in the image buffer.
