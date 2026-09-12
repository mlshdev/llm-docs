> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageio/cgimagemetadatacopytagmatchingimageproperty(_:_:_:)](https://developer.apple.com/documentation/imageio/cgimagemetadatacopytagmatchingimageproperty(_:_:_:))

# CGImageMetadataCopyTagMatchingImageProperty(\_:\_:\_:) (Swift)

**Framework:** Image I/O  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Searches for the specified image property and, if found, returns the corresponding tag object.

## Declaration

```swift
func CGImageMetadataCopyTagMatchingImageProperty(_ metadata: CGImageMetadata, _ dictionaryName: CFString, _ propertyName: CFString) -> CGImageMetadataTag?
```

## Parameters

- `metadata`: The metadata object to search.
- `dictionaryName`: The metadata subdictionary to which the image property belongs. For example, specify [kCGImagePropertyExifDictionary](kcgimagepropertyexifdictionary.md) for image properties that are part of the image’s EXIF metadata.
- `propertyName`: The name of the property. For example, specify [kCGImagePropertyTIFFOrientation](kcgimagepropertytifforientation.md), [kCGImagePropertyExifDateTimeOriginal](kcgimagepropertyexifdatetimeoriginal.md), or [kCGImagePropertyIPTCKeywords](kcgimagepropertyiptckeywords.md). If the specified property is unsupported by the metadata object, this function logs a warning.

<a id="return-value"></a>

## Return Value

The [CGImageMetadataTag](cgimagemetadatatag.md) object that corresponds to the specified property, or `NULL` if the property wasn’t found.

<a id="Discussion"></a>

## Discussion

Use this function to quickly search the different metadata dictionaries for a specific tag. The returned tag object contains appropriate values for all fields, including the namespace, prefix, and XMP type.

When you request an EXIF or IPTC property, this function fills in the namespace, prefix, and XMP type information by copying information from an appropriate XMP type. For example, when you request the [kCGImagePropertyExifDateTimeOriginal](kcgimagepropertyexifdatetimeoriginal.md) property, the function fills in the information using the `photoshop:DateTime` XMP tag. When this bridging occurs, property fields retain their XMP format, rather than the EXIF or IPTC format.

## See Also

### Getting the Metadata Tags

- [CGImageMetadataCopyTagWithPath(\_:\_:\_:)](cgimagemetadatacopytagwithpath%28______%29.md): Searches for a specific metadata tag within a metadata collection.
- [CGImageMetadataCopyTags(\_:)](cgimagemetadatacopytags%28__%29.md): Returns an array of root-level metadata tags from the specified metadata object.
- [CGImageMetadataCopyStringValueWithPath(\_:\_:\_:)](cgimagemetadatacopystringvaluewithpath%28______%29.md): Searches the metadata for the specified tag, and returns its string value if it exists.

# CGImageMetadataCopyTagMatchingImageProperty (Objective-C)

**Framework:** Image I/O  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Searches for the specified image property and, if found, returns the corresponding tag object.

## Declaration

```objectivec
extern CGImageMetadataTagRefCGImageMetadataCopyTagMatchingImageProperty(CGImageMetadataRef metadata, CFStringRef dictionaryName, CFStringRef propertyName);
```

## Parameters

- `metadata`: The metadata object to search.
- `dictionaryName`: The metadata subdictionary to which the image property belongs. For example, specify [kCGImagePropertyExifDictionary](kcgimagepropertyexifdictionary.md) for image properties that are part of the image’s EXIF metadata.
- `propertyName`: The name of the property. For example, specify [kCGImagePropertyTIFFOrientation](kcgimagepropertytifforientation.md), [kCGImagePropertyExifDateTimeOriginal](kcgimagepropertyexifdatetimeoriginal.md), or [kCGImagePropertyIPTCKeywords](kcgimagepropertyiptckeywords.md). If the specified property is unsupported by the metadata object, this function logs a warning.

<a id="return-value"></a>

## Return Value

The [CGImageMetadataTagRef](cgimagemetadatatag.md) object that corresponds to the specified property, or `NULL` if the property wasn’t found.

<a id="Discussion"></a>

## Discussion

Use this function to quickly search the different metadata dictionaries for a specific tag. The returned tag object contains appropriate values for all fields, including the namespace, prefix, and XMP type.

When you request an EXIF or IPTC property, this function fills in the namespace, prefix, and XMP type information by copying information from an appropriate XMP type. For example, when you request the [kCGImagePropertyExifDateTimeOriginal](kcgimagepropertyexifdatetimeoriginal.md) property, the function fills in the information using the `photoshop:DateTime` XMP tag. When this bridging occurs, property fields retain their XMP format, rather than the EXIF or IPTC format.

## See Also

### Getting the Metadata Tags

- [CGImageMetadataCopyTagWithPath](cgimagemetadatacopytagwithpath%28______%29.md): Searches for a specific metadata tag within a metadata collection.
- [CGImageMetadataCopyTags](cgimagemetadatacopytags%28__%29.md): Returns an array of root-level metadata tags from the specified metadata object.
- [CGImageMetadataCopyStringValueWithPath](cgimagemetadatacopystringvaluewithpath%28______%29.md): Searches the metadata for the specified tag, and returns its string value if it exists.
