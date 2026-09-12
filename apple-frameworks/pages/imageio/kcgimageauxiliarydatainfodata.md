> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageio/kcgimageauxiliarydatainfodata](https://developer.apple.com/documentation/imageio/kcgimageauxiliarydatainfodata)

# kCGImageAuxiliaryDataInfoData (Swift)

**Framework:** Image I/O  
**Kind:** Global Variable  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The auxiliary data for the image.

## Declaration

```swift
let kCGImageAuxiliaryDataInfoData: CFString
```

<a id="Discussion"></a>

## Discussion

The value of this property is a [CFData](../corefoundation/cfdata.md). Use the [kCGImagePropertyAuxiliaryDataType](kcgimagepropertyauxiliarydatatype.md) property to determine the format of this data.

## See Also

### Auxiliary Image Data

- [kCGImagePropertyAuxiliaryData](kcgimagepropertyauxiliarydata.md): An array of dictionaries that contain auxiliary data for the images.
- [kCGImagePropertyAuxiliaryDataType](kcgimagepropertyauxiliarydatatype.md): The type of the auxiliary data.
- [kCGImageAuxiliaryDataInfoDataDescription](kcgimageauxiliarydatainfodatadescription.md): A dictionary of keys that describe the auxiliary data.
- [kCGImageAuxiliaryDataInfoMetadata](kcgimageauxiliarydatainfometadata.md): The metadata for any auxiliary data.

# kCGImageAuxiliaryDataInfoData (Objective-C)

**Framework:** Image I/O  
**Kind:** Global Variable  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The auxiliary data for the image.

## Declaration

```objectivec
extern CFStringRef const kCGImageAuxiliaryDataInfoData;
```

<a id="Discussion"></a>

## Discussion

The value of this property is a [CFDataRef](../corefoundation/cfdata.md). Use the [kCGImagePropertyAuxiliaryDataType](kcgimagepropertyauxiliarydatatype.md) property to determine the format of this data.

## See Also

### Auxiliary Image Data

- [kCGImagePropertyAuxiliaryData](kcgimagepropertyauxiliarydata.md): An array of dictionaries that contain auxiliary data for the images.
- [kCGImagePropertyAuxiliaryDataType](kcgimagepropertyauxiliarydatatype.md): The type of the auxiliary data.
- [kCGImageAuxiliaryDataInfoDataDescription](kcgimageauxiliarydatainfodatadescription.md): A dictionary of keys that describe the auxiliary data.
- [kCGImageAuxiliaryDataInfoMetadata](kcgimageauxiliarydatainfometadata.md): The metadata for any auxiliary data.
