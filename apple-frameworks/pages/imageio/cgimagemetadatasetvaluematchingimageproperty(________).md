> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageio/cgimagemetadatasetvaluematchingimageproperty(_:_:_:_:)](https://developer.apple.com/documentation/imageio/cgimagemetadatasetvaluematchingimageproperty(_:_:_:_:))

# CGImageMetadataSetValueMatchingImageProperty(\_:\_:\_:\_:) (Swift)

**Framework:** Image I/O  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Updates the value of the metadata tag assigned to the specified image property.

## Declaration

```swift
func CGImageMetadataSetValueMatchingImageProperty(_ metadata: CGMutableImageMetadata, _ dictionaryName: CFString, _ propertyName: CFString, _ value: CFTypeRef) -> Bool
```

## Parameters

- `metadata`: The metadata object that contains the tag.
- `dictionaryName`: The metadata subdictionary to which the image property belongs. For example, specify [kCGImagePropertyExifDictionary](kcgimagepropertyexifdictionary.md) for image properties that are part of the image’s EXIF metadata. This function doesn’t support all dictionaries.
- `propertyName`: The name of the property. For example, specify [kCGImagePropertyTIFFOrientation](kcgimagepropertytifforientation.md), [kCGImagePropertyExifDateTimeOriginal](kcgimagepropertyexifdatetimeoriginal.md), or [kCGImagePropertyIPTCKeywords](kcgimagepropertyiptckeywords.md). If the specified property is unsupported by the metadata object, this function logs a warning.
- `value`: The new value for the property. The new value’s type must match the XMP type of the metadata tag.

<a id="return-value"></a>

## Return Value

`true` if this function set the tag successfully, or `false` if a problem occurred.

<a id="Discussion"></a>

## Discussion

Use this function to update the value of a property in the specified metadata collection. If you try to set the value of an EXIF or IPTC property, this function matches it to an appropriate XMP tag. For example, when you set the value of the [kCGImagePropertyExifDateTimeOriginal](kcgimagepropertyexifdatetimeoriginal.md) property, this function sets the value of the `photoshop:DateTime` XMP tag.

If the metdata object doesn’t contain the tag, this function creates it and populates it with appropriate XMP information.

## See Also

### Setting the Values of Tags

- [CGImageMetadataSetValueWithPath(\_:\_:\_:\_:)](cgimagemetadatasetvaluewithpath%28________%29.md): Update the value of an existing metadata tag, or create a new tag using the specified information.
- [CGImageMetadataSetTagWithPath(\_:\_:\_:\_:)](cgimagemetadatasettagwithpath%28________%29.md): Sets the tag at the specified path in the metadata object.
- [CGImageMetadataRemoveTagWithPath(\_:\_:\_:)](cgimagemetadataremovetagwithpath%28______%29.md): Removes the tag at the specified path from the metadata object.

# CGImageMetadataSetValueMatchingImageProperty (Objective-C)

**Framework:** Image I/O  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Updates the value of the metadata tag assigned to the specified image property.

## Declaration

```objectivec
extern bool CGImageMetadataSetValueMatchingImageProperty(CGMutableImageMetadataRef metadata, CFStringRef dictionaryName, CFStringRef propertyName, CFTypeRef value);
```

## Parameters

- `metadata`: The metadata object that contains the tag.
- `dictionaryName`: The metadata subdictionary to which the image property belongs. For example, specify [kCGImagePropertyExifDictionary](kcgimagepropertyexifdictionary.md) for image properties that are part of the image’s EXIF metadata. This function doesn’t support all dictionaries.
- `propertyName`: The name of the property. For example, specify [kCGImagePropertyTIFFOrientation](kcgimagepropertytifforientation.md), [kCGImagePropertyExifDateTimeOriginal](kcgimagepropertyexifdatetimeoriginal.md), or [kCGImagePropertyIPTCKeywords](kcgimagepropertyiptckeywords.md). If the specified property is unsupported by the metadata object, this function logs a warning.
- `value`: The new value for the property. The new value’s type must match the XMP type of the metadata tag.

<a id="return-value"></a>

## Return Value

`true` if this function set the tag successfully, or `false` if a problem occurred.

<a id="Discussion"></a>

## Discussion

Use this function to update the value of a property in the specified metadata collection. If you try to set the value of an EXIF or IPTC property, this function matches it to an appropriate XMP tag. For example, when you set the value of the [kCGImagePropertyExifDateTimeOriginal](kcgimagepropertyexifdatetimeoriginal.md) property, this function sets the value of the `photoshop:DateTime` XMP tag.

If the metdata object doesn’t contain the tag, this function creates it and populates it with appropriate XMP information.

## See Also

### Setting the Values of Tags

- [CGImageMetadataSetValueWithPath](cgimagemetadatasetvaluewithpath%28________%29.md): Update the value of an existing metadata tag, or create a new tag using the specified information.
- [CGImageMetadataSetTagWithPath](cgimagemetadatasettagwithpath%28________%29.md): Sets the tag at the specified path in the metadata object.
- [CGImageMetadataRemoveTagWithPath](cgimagemetadataremovetagwithpath%28______%29.md): Removes the tag at the specified path from the metadata object.
