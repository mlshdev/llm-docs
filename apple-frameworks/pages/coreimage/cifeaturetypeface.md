> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cifeaturetypeface](https://developer.apple.com/documentation/coreimage/cifeaturetypeface)

# CIFeatureTypeFace (Swift)

**Framework:** Core Image  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A Core Image feature type for person’s face.

## Declaration

```swift
let CIFeatureTypeFace: String
```

<a id="discussion"></a>

## Discussion

To detect faces in an image or video, pass this to `/CIDetector/detectorOfType:context:options:`

Use the [CIFaceFeature](cifacefeature.md) class to find more information about the detected face.

## See Also

### Feature Types

- [CIFeatureTypeRectangle](cifeaturetyperectangle.md): A Core Image feature type for rectangular object.
- [CIFeatureTypeQRCode](cifeaturetypeqrcode.md): A Core Image feature type for QR code object.
- [CIFeatureTypeText](cifeaturetypetext.md): A Core Image feature type for text.

# CIFeatureTypeFace (Objective-C)

**Framework:** Core Image  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A Core Image feature type for person’s face.

## Declaration

```objectivec
extern NSString * const CIFeatureTypeFace;
```

<a id="discussion"></a>

## Discussion

To detect faces in an image or video, pass this to `/CIDetector/detectorOfType:context:options:`

Use the [CIFaceFeature](cifacefeature.md) class to find more information about the detected face.

## See Also

### Feature Types

- [CIFeatureTypeRectangle](cifeaturetyperectangle.md): A Core Image feature type for rectangular object.
- [CIFeatureTypeQRCode](cifeaturetypeqrcode.md): A Core Image feature type for QR code object.
- [CIFeatureTypeText](cifeaturetypetext.md): A Core Image feature type for text.
