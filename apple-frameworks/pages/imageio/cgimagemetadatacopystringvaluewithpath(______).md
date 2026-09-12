> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageio/cgimagemetadatacopystringvaluewithpath(_:_:_:)](https://developer.apple.com/documentation/imageio/cgimagemetadatacopystringvaluewithpath(_:_:_:))

# CGImageMetadataCopyStringValueWithPath(\_:\_:\_:) (Swift)

**Framework:** Image I/O  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Searches the metadata for the specified tag, and returns its string value if it exists.

## Declaration

```swift
func CGImageMetadataCopyStringValueWithPath(_ metadata: CGImageMetadata, _ parent: CGImageMetadataTag?, _ path: CFString) -> CFString?
```

## Parameters

- `metadata`: The metadata object to search.
- `parent`: The parent tag, if any. Specify `NULL` to start the search in the top-level tags of the metadata object. If this parameter is `NULL`, you must include a valid prefix string in the `path` parameter.
- `path`: A string that represents the path to the tag. A path consists of the tag’s name, plus optional prefix and parent information. Separate prefix information from other path information using a colon (`:`) character. Separate parent and child tags using the period (`.`) character. For example, the string `“exif:Flash.RedEyeMode”` represents the path to the `RedEyeMode` field of the `Flash` parent structure in the EXIF metadata.

  When a tag contains an ordered or unordered array, specify elements using a `0`-based index inside square brackets. For example, use the string `“dc.subject[2]”` to access the third element in the `subject` array.

  When the tag contains an alternate-text array, access elements using an RFC 3066 language code inside square brackets. For example, use the string `“dc.description[de]”` to access the German description information.

  Use the ? character to delimit qualifiers for tags with string values. You may not use this character for arrays and structures.

<a id="return-value"></a>

## Return Value

The string value for the specified tag, or `NULL` if the tag wasn’t found or doesn’t contain a string value.

<a id="Discussion"></a>

## Discussion

The XMP type of the property at the specified path must be [CGImageMetadataType.string](cgimagemetadatatype/string.md) or [CGImageMetadataType.alternateText](cgimagemetadatatype/alternatetext.md). If the property contains alternate text, this function returns the element with the `x-default` language qualifier.

## See Also

### Getting the Metadata Tags

- [CGImageMetadataCopyTagWithPath(\_:\_:\_:)](cgimagemetadatacopytagwithpath%28______%29.md): Searches for a specific metadata tag within a metadata collection.
- [CGImageMetadataCopyTags(\_:)](cgimagemetadatacopytags%28__%29.md): Returns an array of root-level metadata tags from the specified metadata object.
- [CGImageMetadataCopyTagMatchingImageProperty(\_:\_:\_:)](cgimagemetadatacopytagmatchingimageproperty%28______%29.md): Searches for the specified image property and, if found, returns the corresponding tag object.

# CGImageMetadataCopyStringValueWithPath (Objective-C)

**Framework:** Image I/O  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Searches the metadata for the specified tag, and returns its string value if it exists.

## Declaration

```objectivec
extern CFStringRefCGImageMetadataCopyStringValueWithPath(CGImageMetadataRef metadata, CGImageMetadataTagRef parent, CFStringRef path);
```

## Parameters

- `metadata`: The metadata object to search.
- `parent`: The parent tag, if any. Specify `NULL` to start the search in the top-level tags of the metadata object. If this parameter is `NULL`, you must include a valid prefix string in the `path` parameter.
- `path`: A string that represents the path to the tag. A path consists of the tag’s name, plus optional prefix and parent information. Separate prefix information from other path information using a colon (`:`) character. Separate parent and child tags using the period (`.`) character. For example, the string `“exif:Flash.RedEyeMode”` represents the path to the `RedEyeMode` field of the `Flash` parent structure in the EXIF metadata.

  When a tag contains an ordered or unordered array, specify elements using a `0`-based index inside square brackets. For example, use the string `“dc.subject[2]”` to access the third element in the `subject` array.

  When the tag contains an alternate-text array, access elements using an RFC 3066 language code inside square brackets. For example, use the string `“dc.description[de]”` to access the German description information.

  Use the ? character to delimit qualifiers for tags with string values. You may not use this character for arrays and structures.

<a id="return-value"></a>

## Return Value

The string value for the specified tag, or `NULL` if the tag wasn’t found or doesn’t contain a string value.

<a id="Discussion"></a>

## Discussion

The XMP type of the property at the specified path must be [kCGImageMetadataTypeString](cgimagemetadatatype/string.md) or [kCGImageMetadataTypeAlternateText](cgimagemetadatatype/alternatetext.md). If the property contains alternate text, this function returns the element with the `x-default` language qualifier.

## See Also

### Getting the Metadata Tags

- [CGImageMetadataCopyTagWithPath](cgimagemetadatacopytagwithpath%28______%29.md): Searches for a specific metadata tag within a metadata collection.
- [CGImageMetadataCopyTags](cgimagemetadatacopytags%28__%29.md): Returns an array of root-level metadata tags from the specified metadata object.
- [CGImageMetadataCopyTagMatchingImageProperty](cgimagemetadatacopytagmatchingimageproperty%28______%29.md): Searches for the specified image property and, if found, returns the corresponding tag object.
