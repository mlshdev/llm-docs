> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageio/cgimagemetadatatagcopynamespace(_:)](https://developer.apple.com/documentation/imageio/cgimagemetadatatagcopynamespace(_:))

# CGImageMetadataTagCopyNamespace(\_:) (Swift)

**Framework:** Image I/O  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an immutable copy of the tag’s XMP namespace.

## Declaration

```swift
func CGImageMetadataTagCopyNamespace(_ tag: CGImageMetadataTag) -> CFString?
```

## Parameters

- `tag`: The metadata tag from which to fetch the namespace information.

<a id="return-value"></a>

## Return Value

An immutable string that contains the tag’s namespace. For a list of public namespaces, see [XMP Namespaces and Prefixes](xmp-namespaces-and-prefixes.md). You are responsible for releasing this string.

<a id="Discussion"></a>

## Discussion

By convention, namespaces end with either a `/` or `#` character. For example, EXIF metadata uses the namespace `http://ns.adobe.com/exif/1.0/`. Custom namespaces must be a valid XML namespace.

## See Also

### Getting the Attributes of the Tag

- [CGImageMetadataTagCopyPrefix(\_:)](cgimagemetadatatagcopyprefix%28__%29.md): Returns an immutable copy of the tag’s prefix.
- [CGImageMetadataTagCopyName(\_:)](cgimagemetadatatagcopyname%28__%29.md): Returns an immutable copy of the tag’s name.
- [CGImageMetadataTagCopyValue(\_:)](cgimagemetadatatagcopyvalue%28__%29.md): Returns a shallow copy of the tag’s value, which is suitable only for reading.
- [CGImageMetadataTagCopyQualifiers(\_:)](cgimagemetadatatagcopyqualifiers%28__%29.md): Returns a shallow copy of the metadata tags that act as qualifiers for the current tag.

# CGImageMetadataTagCopyNamespace (Objective-C)

**Framework:** Image I/O  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an immutable copy of the tag’s XMP namespace.

## Declaration

```objectivec
extern CFStringRefCGImageMetadataTagCopyNamespace(CGImageMetadataTagRef tag);
```

## Parameters

- `tag`: The metadata tag from which to fetch the namespace information.

<a id="return-value"></a>

## Return Value

An immutable string that contains the tag’s namespace. For a list of public namespaces, see [XMP Namespaces and Prefixes](xmp-namespaces-and-prefixes.md). You are responsible for releasing this string.

<a id="Discussion"></a>

## Discussion

By convention, namespaces end with either a `/` or `#` character. For example, EXIF metadata uses the namespace `http://ns.adobe.com/exif/1.0/`. Custom namespaces must be a valid XML namespace.

## See Also

### Getting the Attributes of the Tag

- [CGImageMetadataTagCopyPrefix](cgimagemetadatatagcopyprefix%28__%29.md): Returns an immutable copy of the tag’s prefix.
- [CGImageMetadataTagCopyName](cgimagemetadatatagcopyname%28__%29.md): Returns an immutable copy of the tag’s name.
- [CGImageMetadataTagCopyValue](cgimagemetadatatagcopyvalue%28__%29.md): Returns a shallow copy of the tag’s value, which is suitable only for reading.
- [CGImageMetadataTagCopyQualifiers](cgimagemetadatatagcopyqualifiers%28__%29.md): Returns a shallow copy of the metadata tags that act as qualifiers for the current tag.
