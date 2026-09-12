> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cifeaturetypetext](https://developer.apple.com/documentation/coreimage/cifeaturetypetext)

# CIFeatureTypeText (Swift)

**Framework:** Core Image  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A Core Image feature type for text.

## Declaration

```swift
let CIFeatureTypeText: String
```

<a id="discussion"></a>

## Discussion

To detect text in an image or video, pass this to `/CIDetector/detectorOfType:context:options:`

Use the [CITextFeature](citextfeature.md) class to find more information about the detected text.

## See Also

### Feature Types

- [CIFeatureTypeFace](cifeaturetypeface.md): A Core Image feature type for person’s face.
- [CIFeatureTypeRectangle](cifeaturetyperectangle.md): A Core Image feature type for rectangular object.
- [CIFeatureTypeQRCode](cifeaturetypeqrcode.md): A Core Image feature type for QR code object.

# CIFeatureTypeText (Objective-C)

**Framework:** Core Image  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A Core Image feature type for text.

## Declaration

```objectivec
extern NSString * const CIFeatureTypeText;
```

<a id="discussion"></a>

## Discussion

To detect text in an image or video, pass this to `/CIDetector/detectorOfType:context:options:`

Use the [CITextFeature](citextfeature.md) class to find more information about the detected text.

## See Also

### Feature Types

- [CIFeatureTypeFace](cifeaturetypeface.md): A Core Image feature type for person’s face.
- [CIFeatureTypeRectangle](cifeaturetyperectangle.md): A Core Image feature type for rectangular object.
- [CIFeatureTypeQRCode](cifeaturetypeqrcode.md): A Core Image feature type for QR code object.
