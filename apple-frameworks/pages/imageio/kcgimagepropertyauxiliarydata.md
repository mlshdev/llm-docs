> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageio/kcgimagepropertyauxiliarydata](https://developer.apple.com/documentation/imageio/kcgimagepropertyauxiliarydata)

# kCGImagePropertyAuxiliaryData (Swift)

**Framework:** Image I/O  
**Kind:** Global Variable  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

An array of dictionaries that contain auxiliary data for the images.

## Declaration

```swift
let kCGImagePropertyAuxiliaryData: CFString
```

<a id="Discussion"></a>

## Discussion

The value of this key is a [CFArray](../corefoundation/cfarray.md). Each [CFDictionary](../corefoundation/cfdictionary.md) in the array contains auxiliary data for one of the images in the file. Use the [kCGImagePropertyAuxiliaryDataType](kcgimagepropertyauxiliarydatatype.md) key to determine the type of data associated with the image.

## See Also

### Auxiliary Image Data

- [kCGImagePropertyAuxiliaryDataType](kcgimagepropertyauxiliarydatatype.md): The type of the auxiliary data.
- [kCGImageAuxiliaryDataInfoData](kcgimageauxiliarydatainfodata.md): The auxiliary data for the image.
- [kCGImageAuxiliaryDataInfoDataDescription](kcgimageauxiliarydatainfodatadescription.md): A dictionary of keys that describe the auxiliary data.
- [kCGImageAuxiliaryDataInfoMetadata](kcgimageauxiliarydatainfometadata.md): The metadata for any auxiliary data.

# kCGImagePropertyAuxiliaryData (Objective-C)

**Framework:** Image I/O  
**Kind:** Global Variable  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

An array of dictionaries that contain auxiliary data for the images.

## Declaration

```objectivec
extern CFStringRef const kCGImagePropertyAuxiliaryData;
```

<a id="Discussion"></a>

## Discussion

The value of this key is a [CFArrayRef](../corefoundation/cfarray.md). Each [CFDictionaryRef](../corefoundation/cfdictionary.md) in the array contains auxiliary data for one of the images in the file. Use the [kCGImagePropertyAuxiliaryDataType](kcgimagepropertyauxiliarydatatype.md) key to determine the type of data associated with the image.

## See Also

### Auxiliary Image Data

- [kCGImagePropertyAuxiliaryDataType](kcgimagepropertyauxiliarydatatype.md): The type of the auxiliary data.
- [kCGImageAuxiliaryDataInfoData](kcgimageauxiliarydatainfodata.md): The auxiliary data for the image.
- [kCGImageAuxiliaryDataInfoDataDescription](kcgimageauxiliarydatainfodatadescription.md): A dictionary of keys that describe the auxiliary data.
- [kCGImageAuxiliaryDataInfoMetadata](kcgimageauxiliarydatainfometadata.md): The metadata for any auxiliary data.
