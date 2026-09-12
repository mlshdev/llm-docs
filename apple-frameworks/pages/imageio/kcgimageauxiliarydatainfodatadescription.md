> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageio/kcgimageauxiliarydatainfodatadescription](https://developer.apple.com/documentation/imageio/kcgimageauxiliarydatainfodatadescription)

# kCGImageAuxiliaryDataInfoDataDescription (Swift)

**Framework:** Image I/O  
**Kind:** Global Variable  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

A dictionary of keys that describe the auxiliary data.

## Declaration

```swift
let kCGImageAuxiliaryDataInfoDataDescription: CFString
```

<a id="Discussion"></a>

## Discussion

The value of this property is a [CFDictionary](../corefoundation/cfdictionary.md). The keys in this dictionary may include [kCGImagePropertyWidth](kcgimagepropertywidth.md), [kCGImagePropertyHeight](kcgimagepropertyheight.md), and [kCGImagePropertyBytesPerRow](kcgimagepropertybytesperrow.md).

## See Also

### Auxiliary Image Data

- [kCGImagePropertyAuxiliaryData](kcgimagepropertyauxiliarydata.md): An array of dictionaries that contain auxiliary data for the images.
- [kCGImagePropertyAuxiliaryDataType](kcgimagepropertyauxiliarydatatype.md): The type of the auxiliary data.
- [kCGImageAuxiliaryDataInfoData](kcgimageauxiliarydatainfodata.md): The auxiliary data for the image.
- [kCGImageAuxiliaryDataInfoMetadata](kcgimageauxiliarydatainfometadata.md): The metadata for any auxiliary data.

# kCGImageAuxiliaryDataInfoDataDescription (Objective-C)

**Framework:** Image I/O  
**Kind:** Global Variable  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

A dictionary of keys that describe the auxiliary data.

## Declaration

```objectivec
extern CFStringRef const kCGImageAuxiliaryDataInfoDataDescription;
```

<a id="Discussion"></a>

## Discussion

The value of this property is a [CFDictionaryRef](../corefoundation/cfdictionary.md). The keys in this dictionary may include [kCGImagePropertyWidth](kcgimagepropertywidth.md), [kCGImagePropertyHeight](kcgimagepropertyheight.md), and [kCGImagePropertyBytesPerRow](kcgimagepropertybytesperrow.md).

## See Also

### Auxiliary Image Data

- [kCGImagePropertyAuxiliaryData](kcgimagepropertyauxiliarydata.md): An array of dictionaries that contain auxiliary data for the images.
- [kCGImagePropertyAuxiliaryDataType](kcgimagepropertyauxiliarydatatype.md): The type of the auxiliary data.
- [kCGImageAuxiliaryDataInfoData](kcgimageauxiliarydatainfodata.md): The auxiliary data for the image.
- [kCGImageAuxiliaryDataInfoMetadata](kcgimageauxiliarydatainfometadata.md): The metadata for any auxiliary data.
