> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/imageio/kcgimageauxiliarydatainfometadata

# kCGImageAuxiliaryDataInfoMetadata (Swift)

**Framework:** Image I/O  
**Kind:** Global Variable  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The metadata for any auxiliary data.

## Declaration

```swift
let kCGImageAuxiliaryDataInfoMetadata: CFString
```

<a id="Discussion"></a>

## Discussion

The value of this property is a [CGImageMetadata](cgimagemetadata.md) type. Use it to obtain any metadata associated with the auxiliary data.

## See Also

### Auxiliary Image Data

- [kCGImagePropertyAuxiliaryData](kcgimagepropertyauxiliarydata.md): An array of dictionaries that contain auxiliary data for the images.
- [kCGImagePropertyAuxiliaryDataType](kcgimagepropertyauxiliarydatatype.md): The type of the auxiliary data.
- [kCGImageAuxiliaryDataInfoData](kcgimageauxiliarydatainfodata.md): The auxiliary data for the image.
- [kCGImageAuxiliaryDataInfoDataDescription](kcgimageauxiliarydatainfodatadescription.md): A dictionary of keys that describe the auxiliary data.

# kCGImageAuxiliaryDataInfoMetadata (Objective-C)

**Framework:** Image I/O  
**Kind:** Global Variable  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The metadata for any auxiliary data.

## Declaration

```objectivec
extern CFStringRef const kCGImageAuxiliaryDataInfoMetadata;
```

<a id="Discussion"></a>

## Discussion

The value of this property is a [CGImageMetadataRef](cgimagemetadata.md) type. Use it to obtain any metadata associated with the auxiliary data.

## See Also

### Auxiliary Image Data

- [kCGImagePropertyAuxiliaryData](kcgimagepropertyauxiliarydata.md): An array of dictionaries that contain auxiliary data for the images.
- [kCGImagePropertyAuxiliaryDataType](kcgimagepropertyauxiliarydatatype.md): The type of the auxiliary data.
- [kCGImageAuxiliaryDataInfoData](kcgimageauxiliarydatainfodata.md): The auxiliary data for the image.
- [kCGImageAuxiliaryDataInfoDataDescription](kcgimageauxiliarydatainfodatadescription.md): A dictionary of keys that describe the auxiliary data.
