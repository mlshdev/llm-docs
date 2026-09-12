> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/kcvimagebufferhorizontaldisparityadjustmentkey](https://developer.apple.com/documentation/corevideo/kcvimagebufferhorizontaldisparityadjustmentkey)

# kCVImageBufferHorizontalDisparityAdjustmentKey (Swift)

**Framework:** Core Video  
**Kind:** Global Variable  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

## Declaration

```swift
let kCVImageBufferHorizontalDisparityAdjustmentKey: CFString
```

<a id="discussion"></a>

## Discussion

Indicates a relative shift of the left and right images, which changes the zero parallax plane.

The value encoded in normalized image space is a CFNumber holding a signed 32-bit integer measured over the range of -10000 to 10000 mapping to the uniform range \[-1.0…1.0\]. The interval of 0.0 to 1.0 or 0 to 10000 maps onto the stereo eye view image width. The negative interval 0.0 to -1.0 or 0 to -10000 similarly map onto the stereo eye view image width. The default value of 0 is inferred if this property is not set.

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

# kCVImageBufferHorizontalDisparityAdjustmentKey (Objective-C)

**Framework:** Core Video  
**Kind:** Global Variable  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

## Declaration

```objectivec
extern CFStringRef const kCVImageBufferHorizontalDisparityAdjustmentKey;
```

<a id="discussion"></a>

## Discussion

Indicates a relative shift of the left and right images, which changes the zero parallax plane.

The value encoded in normalized image space is a CFNumber holding a signed 32-bit integer measured over the range of -10000 to 10000 mapping to the uniform range \[-1.0…1.0\]. The interval of 0.0 to 1.0 or 0 to 10000 maps onto the stereo eye view image width. The negative interval 0.0 to -1.0 or 0 to -10000 similarly map onto the stereo eye view image width. The default value of 0 is inferred if this property is not set.

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
