> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageio/cgimagemetadatatagcopyqualifiers(_:)](https://developer.apple.com/documentation/imageio/cgimagemetadatatagcopyqualifiers(_:))

# CGImageMetadataTagCopyQualifiers(\_:) (Swift)

**Framework:** Image I/O  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a shallow copy of the metadata tags that act as qualifiers for the current tag.

## Declaration

```swift
func CGImageMetadataTagCopyQualifiers(_ tag: CGImageMetadataTag) -> CFArray?
```

## Parameters

- `tag`: The metadata tag from which to fetch the namespace information.

<a id="return-value"></a>

## Return Value

An array of [CGImageMetadataTag](cgimagemetadatatag.md) types that represent the current tag’s qualifiers, or `NULL` if the tag has no qualifiers.

<a id="Discussion"></a>

## Discussion

XMP allows a metadata tag to contain supplemental tags that act as qualifiers on the content. For example, the `xml:lang` qualifier provides alternate text entries for the current tag. Each qualifier is a [CGImageMetadataTag](cgimagemetadatatag.md) with its own namespace, prefix, name, and value.

## See Also

### Getting the Attributes of the Tag

- [CGImageMetadataTagCopyNamespace(\_:)](cgimagemetadatatagcopynamespace%28__%29.md): Returns an immutable copy of the tag’s XMP namespace.
- [CGImageMetadataTagCopyPrefix(\_:)](cgimagemetadatatagcopyprefix%28__%29.md): Returns an immutable copy of the tag’s prefix.
- [CGImageMetadataTagCopyName(\_:)](cgimagemetadatatagcopyname%28__%29.md): Returns an immutable copy of the tag’s name.
- [CGImageMetadataTagCopyValue(\_:)](cgimagemetadatatagcopyvalue%28__%29.md): Returns a shallow copy of the tag’s value, which is suitable only for reading.

# CGImageMetadataTagCopyQualifiers (Objective-C)

**Framework:** Image I/O  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a shallow copy of the metadata tags that act as qualifiers for the current tag.

## Declaration

```objectivec
extern CFArrayRefCGImageMetadataTagCopyQualifiers(CGImageMetadataTagRef tag);
```

## Parameters

- `tag`: The metadata tag from which to fetch the namespace information.

<a id="return-value"></a>

## Return Value

An array of [CGImageMetadataTagRef](cgimagemetadatatag.md) types that represent the current tag’s qualifiers, or `NULL` if the tag has no qualifiers.

<a id="Discussion"></a>

## Discussion

XMP allows a metadata tag to contain supplemental tags that act as qualifiers on the content. For example, the `xml:lang` qualifier provides alternate text entries for the current tag. Each qualifier is a [CGImageMetadataTagRef](cgimagemetadatatag.md) with its own namespace, prefix, name, and value.

## See Also

### Getting the Attributes of the Tag

- [CGImageMetadataTagCopyNamespace](cgimagemetadatatagcopynamespace%28__%29.md): Returns an immutable copy of the tag’s XMP namespace.
- [CGImageMetadataTagCopyPrefix](cgimagemetadatatagcopyprefix%28__%29.md): Returns an immutable copy of the tag’s prefix.
- [CGImageMetadataTagCopyName](cgimagemetadatatagcopyname%28__%29.md): Returns an immutable copy of the tag’s name.
- [CGImageMetadataTagCopyValue](cgimagemetadatatagcopyvalue%28__%29.md): Returns a shallow copy of the tag’s value, which is suitable only for reading.
