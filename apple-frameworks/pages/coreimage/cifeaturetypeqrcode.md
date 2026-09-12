> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cifeaturetypeqrcode](https://developer.apple.com/documentation/coreimage/cifeaturetypeqrcode)

# CIFeatureTypeQRCode (Swift)

**Framework:** Core Image  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A Core Image feature type for QR code object.

## Declaration

```swift
let CIFeatureTypeQRCode: String
```

<a id="discussion"></a>

## Discussion

To detect QR codes in an image or video, pass this to `/CIDetector/detectorOfType:context:options:`

Use the [CIQRCodeFeature](ciqrcodefeature.md) class to find more information about the detected QR code.

## See Also

### Feature Types

- [CIFeatureTypeFace](cifeaturetypeface.md): A Core Image feature type for person’s face.
- [CIFeatureTypeRectangle](cifeaturetyperectangle.md): A Core Image feature type for rectangular object.
- [CIFeatureTypeText](cifeaturetypetext.md): A Core Image feature type for text.

# CIFeatureTypeQRCode (Objective-C)

**Framework:** Core Image  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A Core Image feature type for QR code object.

## Declaration

```objectivec
extern NSString * const CIFeatureTypeQRCode;
```

<a id="discussion"></a>

## Discussion

To detect QR codes in an image or video, pass this to `/CIDetector/detectorOfType:context:options:`

Use the [CIQRCodeFeature](ciqrcodefeature.md) class to find more information about the detected QR code.

## See Also

### Feature Types

- [CIFeatureTypeFace](cifeaturetypeface.md): A Core Image feature type for person’s face.
- [CIFeatureTypeRectangle](cifeaturetyperectangle.md): A Core Image feature type for rectangular object.
- [CIFeatureTypeText](cifeaturetypetext.md): A Core Image feature type for text.
