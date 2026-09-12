> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageio/kcgimagepropertyauxiliarydatatype](https://developer.apple.com/documentation/imageio/kcgimagepropertyauxiliarydatatype)

# kCGImagePropertyAuxiliaryDataType (Swift)

**Framework:** Image I/O  
**Kind:** Global Variable  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The type of the auxiliary data.

## Declaration

```swift
let kCGImagePropertyAuxiliaryDataType: CFString
```

<a id="Discussion"></a>

## Discussion

The value of this property is a [CFString](../corefoundation/cfstring.md). The value of this key might be [kCGImageAuxiliaryDataTypeDisparity](kcgimageauxiliarydatatypedisparity.md), [kCGImageAuxiliaryDataTypeDepth](kcgimageauxiliarydatatypedepth.md), or another auxiliary data type.

## See Also

### Auxiliary Image Data

- [kCGImagePropertyAuxiliaryData](kcgimagepropertyauxiliarydata.md): An array of dictionaries that contain auxiliary data for the images.
- [kCGImageAuxiliaryDataInfoData](kcgimageauxiliarydatainfodata.md): The auxiliary data for the image.
- [kCGImageAuxiliaryDataInfoDataDescription](kcgimageauxiliarydatainfodatadescription.md): A dictionary of keys that describe the auxiliary data.
- [kCGImageAuxiliaryDataInfoMetadata](kcgimageauxiliarydatainfometadata.md): The metadata for any auxiliary data.

# kCGImagePropertyAuxiliaryDataType (Objective-C)

**Framework:** Image I/O  
**Kind:** Global Variable  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The type of the auxiliary data.

## Declaration

```objectivec
extern CFStringRef const kCGImagePropertyAuxiliaryDataType;
```

<a id="Discussion"></a>

## Discussion

The value of this property is a [CFStringRef](../corefoundation/cfstring.md). The value of this key might be [kCGImageAuxiliaryDataTypeDisparity](kcgimageauxiliarydatatypedisparity.md), [kCGImageAuxiliaryDataTypeDepth](kcgimageauxiliarydatatypedepth.md), or another auxiliary data type.

## See Also

### Auxiliary Image Data

- [kCGImagePropertyAuxiliaryData](kcgimagepropertyauxiliarydata.md): An array of dictionaries that contain auxiliary data for the images.
- [kCGImageAuxiliaryDataInfoData](kcgimageauxiliarydatainfodata.md): The auxiliary data for the image.
- [kCGImageAuxiliaryDataInfoDataDescription](kcgimageauxiliarydatainfodatadescription.md): A dictionary of keys that describe the auxiliary data.
- [kCGImageAuxiliaryDataInfoMetadata](kcgimageauxiliarydatainfometadata.md): The metadata for any auxiliary data.
