> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageio/cgimagemetadatatagcopyprefix(_:)](https://developer.apple.com/documentation/imageio/cgimagemetadatatagcopyprefix(_:))

# CGImageMetadataTagCopyPrefix(\_:) (Swift)

**Framework:** Image I/O  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an immutable copy of the tag’s prefix.

## Declaration

```swift
func CGImageMetadataTagCopyPrefix(_ tag: CGImageMetadataTag) -> CFString?
```

## Parameters

- `tag`: The metadata tag from which to fetch the namespace information.

<a id="return-value"></a>

## Return Value

An immutable string that contains the tag’s prefix. For example, EXIF metadata uses the prefix `exif`. You are responsible for releasing this string.

## See Also

### Getting the Attributes of the Tag

- [CGImageMetadataTagCopyNamespace(\_:)](cgimagemetadatatagcopynamespace%28__%29.md): Returns an immutable copy of the tag’s XMP namespace.
- [CGImageMetadataTagCopyName(\_:)](cgimagemetadatatagcopyname%28__%29.md): Returns an immutable copy of the tag’s name.
- [CGImageMetadataTagCopyValue(\_:)](cgimagemetadatatagcopyvalue%28__%29.md): Returns a shallow copy of the tag’s value, which is suitable only for reading.
- [CGImageMetadataTagCopyQualifiers(\_:)](cgimagemetadatatagcopyqualifiers%28__%29.md): Returns a shallow copy of the metadata tags that act as qualifiers for the current tag.

# CGImageMetadataTagCopyPrefix (Objective-C)

**Framework:** Image I/O  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an immutable copy of the tag’s prefix.

## Declaration

```objectivec
extern CFStringRefCGImageMetadataTagCopyPrefix(CGImageMetadataTagRef tag);
```

## Parameters

- `tag`: The metadata tag from which to fetch the namespace information.

<a id="return-value"></a>

## Return Value

An immutable string that contains the tag’s prefix. For example, EXIF metadata uses the prefix `exif`. You are responsible for releasing this string.

## See Also

### Getting the Attributes of the Tag

- [CGImageMetadataTagCopyNamespace](cgimagemetadatatagcopynamespace%28__%29.md): Returns an immutable copy of the tag’s XMP namespace.
- [CGImageMetadataTagCopyName](cgimagemetadatatagcopyname%28__%29.md): Returns an immutable copy of the tag’s name.
- [CGImageMetadataTagCopyValue](cgimagemetadatatagcopyvalue%28__%29.md): Returns a shallow copy of the tag’s value, which is suitable only for reading.
- [CGImageMetadataTagCopyQualifiers](cgimagemetadatatagcopyqualifiers%28__%29.md): Returns a shallow copy of the metadata tags that act as qualifiers for the current tag.
