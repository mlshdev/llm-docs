> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageio/cgimagemetadatacopytagwithpath(_:_:_:)](https://developer.apple.com/documentation/imageio/cgimagemetadatacopytagwithpath(_:_:_:))

# CGImageMetadataCopyTagWithPath(\_:\_:\_:) (Swift)

**Framework:** Image I/O  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Searches for a specific metadata tag within a metadata collection.

## Declaration

```swift
func CGImageMetadataCopyTagWithPath(_ metadata: CGImageMetadata, _ parent: CGImageMetadataTag?, _ path: CFString) -> CGImageMetadataTag?
```

## Parameters

- `metadata`: The metadata object that contains the tags.
- `parent`: The parent tag, if any. Specify `NULL` to start the search in the top-level tags of the metadata object. If this parameter is `NULL`, you must include a valid prefix string in the `path` parameter.
- `path`: A string that represents the path to the tag. A path consists of the tag’s name, plus optional prefix and parent information. Separate prefix information from other path information using a colon (`:`) character. Separate parent and child tags using the period (`.`) character. For example, the string `“exif:Flash.RedEyeMode”` represents the path to the `RedEyeMode` field of the `Flash` parent structure in the EXIF metadata.

  When a tag contains an ordered or unordered array, specify elements using a `0`-based index inside square brackets. For example, use the string `“dc.subject[2]”` to access the third element in the `subject` array.

  When the tag contains an alternate-text array, access elements using an RFC 3066 language code inside square brackets. For example, use the string `“dc.description[de]”` to access the German description information.

  Use the ? character to delimit qualifiers for tags with string values. You may not use this character for arrays and structures.

<a id="return-value"></a>

## Return Value

A copy of the [CGImageMetadataTag](cgimagemetadatatag.md) object at the specified path, or `NULL` if the tag wasn’t found.

<a id="Discussion"></a>

## Discussion

If you specify a valid tag in the `parent` parameter, you may omit the parent’s path information from the `path` parameter. For example, to access the `RedEyeMode` field, specify the [CGImageMetadataTag](cgimagemetadatatag.md) object for the `Flash` parent property, and specify `“RedEyeMode”` for the path string.

If a tag contains a custom prefix that is not already present in the metadata object, call [CGImageMetadataRegisterNamespaceForPrefix(\_:\_:\_:\_:)](cgimagemetadataregisternamespaceforprefix%28________%29.md) to register that prefix before you search for it with this function.

## See Also

### Getting the Metadata Tags

- [CGImageMetadataCopyTags(\_:)](cgimagemetadatacopytags%28__%29.md): Returns an array of root-level metadata tags from the specified metadata object.
- [CGImageMetadataCopyTagMatchingImageProperty(\_:\_:\_:)](cgimagemetadatacopytagmatchingimageproperty%28______%29.md): Searches for the specified image property and, if found, returns the corresponding tag object.
- [CGImageMetadataCopyStringValueWithPath(\_:\_:\_:)](cgimagemetadatacopystringvaluewithpath%28______%29.md): Searches the metadata for the specified tag, and returns its string value if it exists.

# CGImageMetadataCopyTagWithPath (Objective-C)

**Framework:** Image I/O  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Searches for a specific metadata tag within a metadata collection.

## Declaration

```objectivec
extern CGImageMetadataTagRefCGImageMetadataCopyTagWithPath(CGImageMetadataRef metadata, CGImageMetadataTagRef parent, CFStringRef path);
```

## Parameters

- `metadata`: The metadata object that contains the tags.
- `parent`: The parent tag, if any. Specify `NULL` to start the search in the top-level tags of the metadata object. If this parameter is `NULL`, you must include a valid prefix string in the `path` parameter.
- `path`: A string that represents the path to the tag. A path consists of the tag’s name, plus optional prefix and parent information. Separate prefix information from other path information using a colon (`:`) character. Separate parent and child tags using the period (`.`) character. For example, the string `“exif:Flash.RedEyeMode”` represents the path to the `RedEyeMode` field of the `Flash` parent structure in the EXIF metadata.

  When a tag contains an ordered or unordered array, specify elements using a `0`-based index inside square brackets. For example, use the string `“dc.subject[2]”` to access the third element in the `subject` array.

  When the tag contains an alternate-text array, access elements using an RFC 3066 language code inside square brackets. For example, use the string `“dc.description[de]”` to access the German description information.

  Use the ? character to delimit qualifiers for tags with string values. You may not use this character for arrays and structures.

<a id="return-value"></a>

## Return Value

A copy of the [CGImageMetadataTagRef](cgimagemetadatatag.md) object at the specified path, or `NULL` if the tag wasn’t found.

<a id="Discussion"></a>

## Discussion

If you specify a valid tag in the `parent` parameter, you may omit the parent’s path information from the `path` parameter. For example, to access the `RedEyeMode` field, specify the [CGImageMetadataTagRef](cgimagemetadatatag.md) object for the `Flash` parent property, and specify `“RedEyeMode”` for the path string.

If a tag contains a custom prefix that is not already present in the metadata object, call [CGImageMetadataRegisterNamespaceForPrefix](cgimagemetadataregisternamespaceforprefix%28________%29.md) to register that prefix before you search for it with this function.

## See Also

### Getting the Metadata Tags

- [CGImageMetadataCopyTags](cgimagemetadatacopytags%28__%29.md): Returns an array of root-level metadata tags from the specified metadata object.
- [CGImageMetadataCopyTagMatchingImageProperty](cgimagemetadatacopytagmatchingimageproperty%28______%29.md): Searches for the specified image property and, if found, returns the corresponding tag object.
- [CGImageMetadataCopyStringValueWithPath](cgimagemetadatacopystringvaluewithpath%28______%29.md): Searches the metadata for the specified tag, and returns its string value if it exists.
