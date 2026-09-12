> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageio/cgimagemetadatacopytags(_:)](https://developer.apple.com/documentation/imageio/cgimagemetadatacopytags(_:))

# CGImageMetadataCopyTags(\_:) (Swift)

**Framework:** Image I/O  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an array of root-level metadata tags from the specified metadata object.

## Declaration

```swift
func CGImageMetadataCopyTags(_ metadata: CGImageMetadata) -> CFArray?
```

## Parameters

- `metadata`: The metadata object that contains the tags.

<a id="return-value"></a>

## Return Value

An array that contains a shallow copy of all root-level [CGImageMetadataTag](cgimagemetadatatag.md) objects. This array contains only the root-level tags. It doesn’t contain any nested tags.

## See Also

### Getting the Metadata Tags

- [CGImageMetadataCopyTagWithPath(\_:\_:\_:)](cgimagemetadatacopytagwithpath%28______%29.md): Searches for a specific metadata tag within a metadata collection.
- [CGImageMetadataCopyTagMatchingImageProperty(\_:\_:\_:)](cgimagemetadatacopytagmatchingimageproperty%28______%29.md): Searches for the specified image property and, if found, returns the corresponding tag object.
- [CGImageMetadataCopyStringValueWithPath(\_:\_:\_:)](cgimagemetadatacopystringvaluewithpath%28______%29.md): Searches the metadata for the specified tag, and returns its string value if it exists.

# CGImageMetadataCopyTags (Objective-C)

**Framework:** Image I/O  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an array of root-level metadata tags from the specified metadata object.

## Declaration

```objectivec
extern CFArrayRefCGImageMetadataCopyTags(CGImageMetadataRef metadata);
```

## Parameters

- `metadata`: The metadata object that contains the tags.

<a id="return-value"></a>

## Return Value

An array that contains a shallow copy of all root-level [CGImageMetadataTagRef](cgimagemetadatatag.md) objects. This array contains only the root-level tags. It doesn’t contain any nested tags.

## See Also

### Getting the Metadata Tags

- [CGImageMetadataCopyTagWithPath](cgimagemetadatacopytagwithpath%28______%29.md): Searches for a specific metadata tag within a metadata collection.
- [CGImageMetadataCopyTagMatchingImageProperty](cgimagemetadatacopytagmatchingimageproperty%28______%29.md): Searches for the specified image property and, if found, returns the corresponding tag object.
- [CGImageMetadataCopyStringValueWithPath](cgimagemetadatacopystringvaluewithpath%28______%29.md): Searches the metadata for the specified tag, and returns its string value if it exists.
