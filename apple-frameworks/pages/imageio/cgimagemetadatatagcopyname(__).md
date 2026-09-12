> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageio/cgimagemetadatatagcopyname(_:)](https://developer.apple.com/documentation/imageio/cgimagemetadatatagcopyname(_:))

# CGImageMetadataTagCopyName(\_:) (Swift)

**Framework:** Image I/O  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an immutable copy of the tag’s name.

## Declaration

```swift
func CGImageMetadataTagCopyName(_ tag: CGImageMetadataTag) -> CFString?
```

## Parameters

- `tag`: The metadata tag from which to fetch the namespace information.

<a id="return-value"></a>

## Return Value

A string that contains the tag’s name. You are responsible for releasing this string.

## See Also

### Getting the Attributes of the Tag

- [CGImageMetadataTagCopyNamespace(\_:)](cgimagemetadatatagcopynamespace%28__%29.md): Returns an immutable copy of the tag’s XMP namespace.
- [CGImageMetadataTagCopyPrefix(\_:)](cgimagemetadatatagcopyprefix%28__%29.md): Returns an immutable copy of the tag’s prefix.
- [CGImageMetadataTagCopyValue(\_:)](cgimagemetadatatagcopyvalue%28__%29.md): Returns a shallow copy of the tag’s value, which is suitable only for reading.
- [CGImageMetadataTagCopyQualifiers(\_:)](cgimagemetadatatagcopyqualifiers%28__%29.md): Returns a shallow copy of the metadata tags that act as qualifiers for the current tag.

# CGImageMetadataTagCopyName (Objective-C)

**Framework:** Image I/O  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an immutable copy of the tag’s name.

## Declaration

```objectivec
extern CFStringRefCGImageMetadataTagCopyName(CGImageMetadataTagRef tag);
```

## Parameters

- `tag`: The metadata tag from which to fetch the namespace information.

<a id="return-value"></a>

## Return Value

A string that contains the tag’s name. You are responsible for releasing this string.

## See Also

### Getting the Attributes of the Tag

- [CGImageMetadataTagCopyNamespace](cgimagemetadatatagcopynamespace%28__%29.md): Returns an immutable copy of the tag’s XMP namespace.
- [CGImageMetadataTagCopyPrefix](cgimagemetadatatagcopyprefix%28__%29.md): Returns an immutable copy of the tag’s prefix.
- [CGImageMetadataTagCopyValue](cgimagemetadatatagcopyvalue%28__%29.md): Returns a shallow copy of the tag’s value, which is suitable only for reading.
- [CGImageMetadataTagCopyQualifiers](cgimagemetadatatagcopyqualifiers%28__%29.md): Returns a shallow copy of the metadata tags that act as qualifiers for the current tag.
