> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cidetectortypeface](https://developer.apple.com/documentation/coreimage/cidetectortypeface)

# CIDetectorTypeFace (Swift)

**Framework:** Core Image  
**Kind:** Global Variable  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+

A detector that searches for faces in a still image or video, returning [CIFaceFeature](cifacefeature.md) objects that provide information about detected faces.

## Declaration

```swift
let CIDetectorTypeFace: String
```

<a id="Discussion"></a>

## Discussion

For better accuracy and performance in face detection, use the [CIDetectorImageOrientation](cidetectorimageorientation.md) key to specify the image orientation when using the [features(in:options:)](cidetector/features%28in_options_%29.md) method.

## See Also

### Constants

- [CIDetectorTypeRectangle](cidetectortyperectangle.md): A detector that searches for rectangular areas in a still image or video, returning [CIRectangleFeature](cirectanglefeature.md) objects that provide information about detected regions.
- [CIDetectorTypeQRCode](cidetectortypeqrcode.md): A detector that searches for Quick Response codes (a type of 2D barcode) in a still image or video, returning [CIQRCodeFeature](ciqrcodefeature.md) objects that provide information about detected barcodes.
- [CIDetectorTypeText](cidetectortypetext.md): A detector that searches for text in a still image or video, returning [CITextFeature](citextfeature.md) objects that provide information about detected regions.

# CIDetectorTypeFace (Objective-C)

**Framework:** Core Image  
**Kind:** Global Variable  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+

A detector that searches for faces in a still image or video, returning [CIFaceFeature](cifacefeature.md) objects that provide information about detected faces.

## Declaration

```objectivec
extern NSString * const CIDetectorTypeFace;
```

<a id="Discussion"></a>

## Discussion

For better accuracy and performance in face detection, use the [CIDetectorImageOrientation](cidetectorimageorientation.md) key to specify the image orientation when using the [featuresInImage:options:](cidetector/features%28in_options_%29.md) method.

## See Also

### Constants

- [CIDetectorTypeRectangle](cidetectortyperectangle.md): A detector that searches for rectangular areas in a still image or video, returning [CIRectangleFeature](cirectanglefeature.md) objects that provide information about detected regions.
- [CIDetectorTypeQRCode](cidetectortypeqrcode.md): A detector that searches for Quick Response codes (a type of 2D barcode) in a still image or video, returning [CIQRCodeFeature](ciqrcodefeature.md) objects that provide information about detected barcodes.
- [CIDetectorTypeText](cidetectortypetext.md): A detector that searches for text in a still image or video, returning [CITextFeature](citextfeature.md) objects that provide information about detected regions.
