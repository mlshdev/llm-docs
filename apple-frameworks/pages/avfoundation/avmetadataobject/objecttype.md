> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmetadataobject/objecttype](https://developer.apple.com/documentation/avfoundation/avmetadataobject/objecttype)

# AVMetadataObject.ObjectType (Swift)

**Framework:** AVFoundation  
**Kind:** Structure  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 14.0+ · macOS 10.10+ · tvOS 9.0+

Constants that identify metadata object types.

## Declaration

```swift
struct ObjectType
```

## Topics

### Barcodes

- [codabar](objecttype/codabar.md): A constant that identifies the Codabar symbology.
- [code39](objecttype/code39.md): A constant that identifies the Code 39 symbology.
- [code39Mod43](objecttype/code39mod43.md): A constant that identifies the Code 39 mod 43 symbology.
- [code93](objecttype/code93.md): A constant that identifies the Code 93 symbology.
- [code128](objecttype/code128.md): A constant that identifies the Code 128 symbology.
- [ean8](objecttype/ean8.md): A constant that identifies the EAN-8 symbology.
- [ean13](objecttype/ean13.md): A constant that identifies the EAN-13 symbology.
- [gs1DataBar](objecttype/gs1databar.md): A constant that identifies the GS1 DataBar symbology.
- [gs1DataBarExpanded](objecttype/gs1databarexpanded.md): A constant that identifies the GS1 DataBar Expanded symbology.
- [gs1DataBarLimited](objecttype/gs1databarlimited.md): A constant that identifies the GS1 DataBar Limited symbology.
- [interleaved2of5](objecttype/interleaved2of5.md): A constant that identifies the Interleaved 2 of 5 symbology.
- [itf14](objecttype/itf14.md): A constant that identifies the ITF14 symbology.
- [upce](objecttype/upce.md): A constant that identifies the UPC-E symbology.

### 2D codes

- [aztec](objecttype/aztec.md): A constant that identifies the Aztec symbology.
- [dataMatrix](objecttype/datamatrix.md): A constant that identifies the DataMatrix symbology.
- [microPDF417](objecttype/micropdf417.md): A constant that identifies the Micro PDF417 symbology.
- [microQR](objecttype/microqr.md): A constant that identifies the Micro QR symbology.
- [pdf417](objecttype/pdf417.md): A constant that identifies the PDF417 symbology.
- [qr](objecttype/qr.md): A constant that identifies the QR symbology.

### Bodies

- [humanBody](objecttype/humanbody.md): A constant that identifies human body metadata.
- [humanFullBody](objecttype/humanfullbody.md): A constant that identifies human full body metadata.
- [dogHead](objecttype/doghead.md): An identifier for an instance of a dog head object.
- [dogBody](objecttype/dogbody.md): A constant that identifies dog body metadata.
- [catHead](objecttype/cathead.md): An identifier for an instance of a cat head object.
- [catBody](objecttype/catbody.md): A constant that identifies cat body metadata.

### Faces

- [face](objecttype/face.md): A constant that identifies face metadata.

### Saliency

- [salientObject](objecttype/salientobject.md): A constant that identifies saliency metadata.

### Initializers

- [init(rawValue:)](objecttype/init%28rawvalue_%29.md): Creates a metadata object type with a string value.

### Type Properties

- [cinematicVideoMetadata](objecttype/cinematicvideometadata.md): A constant that identifies Cinematic video metadata for post-capture Cinematic video editing.
- [focusTrackedObject](objecttype/focustrackedobject.md): An identifier for an instance of [AVMetadataFocusTrackedObject](../avmetadatafocustrackedobject.md).

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Inspecting the metadata

- [bounds](bounds.md): The bounding rectangle associated with the metadata.
- [duration](duration.md): The duration of the media associated with this metadata object.
- [time](time.md): The media time value associated with the metadata object.
- [type](type.md): The type of metadata that this object provides.
- [isFixedFocus](isfixedfocus.md): A BOOL indicating whether this metadata object represents a fixed focus.
- [cinematicVideoFocusMode](cinematicvideofocusmode.md): The current focus mode when an object is detected during a Cinematic Video recording.
- [groupID](groupid.md): An identifier associated with a metadata object used to group it with other metadata objects belonging to a common parent.
- [objectID](objectid.md): A unique identifier for each detected object type (face, body, hands, heads, salient objects and focus-tracked objects) in a collection.

# AVMetadataObjectType (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Alias  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 14.0+ · macOS 10.10+ · tvOS 9.0+

Constants that identify metadata object types.

## Declaration

```objectivec
typedef NSString * AVMetadataObjectType;
```

## Topics

### Barcodes

- [AVMetadataObjectTypeCodabarCode](objecttype/codabar.md): A constant that identifies the Codabar symbology.
- [AVMetadataObjectTypeCode39Code](objecttype/code39.md): A constant that identifies the Code 39 symbology.
- [AVMetadataObjectTypeCode39Mod43Code](objecttype/code39mod43.md): A constant that identifies the Code 39 mod 43 symbology.
- [AVMetadataObjectTypeCode93Code](objecttype/code93.md): A constant that identifies the Code 93 symbology.
- [AVMetadataObjectTypeCode128Code](objecttype/code128.md): A constant that identifies the Code 128 symbology.
- [AVMetadataObjectTypeEAN8Code](objecttype/ean8.md): A constant that identifies the EAN-8 symbology.
- [AVMetadataObjectTypeEAN13Code](objecttype/ean13.md): A constant that identifies the EAN-13 symbology.
- [AVMetadataObjectTypeGS1DataBarCode](objecttype/gs1databar.md): A constant that identifies the GS1 DataBar symbology.
- [AVMetadataObjectTypeGS1DataBarExpandedCode](objecttype/gs1databarexpanded.md): A constant that identifies the GS1 DataBar Expanded symbology.
- [AVMetadataObjectTypeGS1DataBarLimitedCode](objecttype/gs1databarlimited.md): A constant that identifies the GS1 DataBar Limited symbology.
- [AVMetadataObjectTypeInterleaved2of5Code](objecttype/interleaved2of5.md): A constant that identifies the Interleaved 2 of 5 symbology.
- [AVMetadataObjectTypeITF14Code](objecttype/itf14.md): A constant that identifies the ITF14 symbology.
- [AVMetadataObjectTypeUPCECode](objecttype/upce.md): A constant that identifies the UPC-E symbology.

### 2D codes

- [AVMetadataObjectTypeAztecCode](objecttype/aztec.md): A constant that identifies the Aztec symbology.
- [AVMetadataObjectTypeDataMatrixCode](objecttype/datamatrix.md): A constant that identifies the DataMatrix symbology.
- [AVMetadataObjectTypeMicroPDF417Code](objecttype/micropdf417.md): A constant that identifies the Micro PDF417 symbology.
- [AVMetadataObjectTypeMicroQRCode](objecttype/microqr.md): A constant that identifies the Micro QR symbology.
- [AVMetadataObjectTypePDF417Code](objecttype/pdf417.md): A constant that identifies the PDF417 symbology.
- [AVMetadataObjectTypeQRCode](objecttype/qr.md): A constant that identifies the QR symbology.

### Bodies

- [AVMetadataObjectTypeHumanBody](objecttype/humanbody.md): A constant that identifies human body metadata.
- [AVMetadataObjectTypeHumanFullBody](objecttype/humanfullbody.md): A constant that identifies human full body metadata.
- [AVMetadataObjectTypeDogHead](objecttype/doghead.md): An identifier for an instance of a dog head object.
- [AVMetadataObjectTypeDogBody](objecttype/dogbody.md): A constant that identifies dog body metadata.
- [AVMetadataObjectTypeCatHead](objecttype/cathead.md): An identifier for an instance of a cat head object.
- [AVMetadataObjectTypeCatBody](objecttype/catbody.md): A constant that identifies cat body metadata.

### Faces

- [AVMetadataObjectTypeFace](objecttype/face.md): A constant that identifies face metadata.

### Saliency

- [AVMetadataObjectTypeSalientObject](objecttype/salientobject.md): A constant that identifies saliency metadata.

## See Also

### Inspecting the metadata

- [bounds](bounds.md): The bounding rectangle associated with the metadata.
- [duration](duration.md): The duration of the media associated with this metadata object.
- [time](time.md): The media time value associated with the metadata object.
- [type](type.md): The type of metadata that this object provides.
- [fixedFocus](isfixedfocus.md): A BOOL indicating whether this metadata object represents a fixed focus.
- [cinematicVideoFocusMode](cinematicvideofocusmode.md): The current focus mode when an object is detected during a Cinematic Video recording.
- [groupID](groupid.md): An identifier associated with a metadata object used to group it with other metadata objects belonging to a common parent.
- [objectID](objectid.md): A unique identifier for each detected object type (face, body, hands, heads, salient objects and focus-tracked objects) in a collection.
