> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cifeaturetyperectangle](https://developer.apple.com/documentation/coreimage/cifeaturetyperectangle)

# CIFeatureTypeRectangle (Swift)

**Framework:** Core Image  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A Core Image feature type for rectangular object.

## Declaration

```swift
let CIFeatureTypeRectangle: String
```

<a id="discussion"></a>

## Discussion

To detect rectangles in an image or video, pass this to `/CIDetector/detectorOfType:context:options:`

Use the [CIRectangleFeature](cirectanglefeature.md) class to find more information about the detected rectangle.

## See Also

### Feature Types

- [CIFeatureTypeFace](cifeaturetypeface.md): A Core Image feature type for person’s face.
- [CIFeatureTypeQRCode](cifeaturetypeqrcode.md): A Core Image feature type for QR code object.
- [CIFeatureTypeText](cifeaturetypetext.md): A Core Image feature type for text.

# CIFeatureTypeRectangle (Objective-C)

**Framework:** Core Image  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A Core Image feature type for rectangular object.

## Declaration

```objectivec
extern NSString * const CIFeatureTypeRectangle;
```

<a id="discussion"></a>

## Discussion

To detect rectangles in an image or video, pass this to `/CIDetector/detectorOfType:context:options:`

Use the [CIRectangleFeature](cirectanglefeature.md) class to find more information about the detected rectangle.

## See Also

### Feature Types

- [CIFeatureTypeFace](cifeaturetypeface.md): A Core Image feature type for person’s face.
- [CIFeatureTypeQRCode](cifeaturetypeqrcode.md): A Core Image feature type for QR code object.
- [CIFeatureTypeText](cifeaturetypetext.md): A Core Image feature type for text.
