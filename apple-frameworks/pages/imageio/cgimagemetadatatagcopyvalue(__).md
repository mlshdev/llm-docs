> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageio/cgimagemetadatatagcopyvalue(_:)](https://developer.apple.com/documentation/imageio/cgimagemetadatatagcopyvalue(_:))

# CGImageMetadataTagCopyValue(\_:) (Swift)

**Framework:** Image I/O  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a shallow copy of the tag’s value, which is suitable only for reading.

## Declaration

```swift
func CGImageMetadataTagCopyValue(_ tag: CGImageMetadataTag) -> CFTypeRef?
```

## Parameters

- `tag`: The metadata tag from which to fetch the namespace information.

<a id="return-value"></a>

## Return Value

A copy of the tag’s value. Possible return types are [CFString](../corefoundation/cfstring.md), [CFNumber](../corefoundation/cfnumber.md), [CFBoolean](../corefoundation/cfboolean.md), [CFArray](../corefoundation/cfarray.md), and [CFDictionary](../corefoundation/cfdictionary.md).

<a id="Discussion"></a>

## Discussion

Use this method to obtain the value when you want to use or display that value elsewhere. Any changes you make to the returned value don’t change the contents of the metadata tag. To change the value, call [CGImageMetadataSetValueWithPath(\_:\_:\_:\_:)](cgimagemetadatasetvaluewithpath%28________%29.md) or [CGImageMetadataSetTagWithPath(\_:\_:\_:\_:)](cgimagemetadatasettagwithpath%28________%29.md) instead.

## See Also

### Getting the Attributes of the Tag

- [CGImageMetadataTagCopyNamespace(\_:)](cgimagemetadatatagcopynamespace%28__%29.md): Returns an immutable copy of the tag’s XMP namespace.
- [CGImageMetadataTagCopyPrefix(\_:)](cgimagemetadatatagcopyprefix%28__%29.md): Returns an immutable copy of the tag’s prefix.
- [CGImageMetadataTagCopyName(\_:)](cgimagemetadatatagcopyname%28__%29.md): Returns an immutable copy of the tag’s name.
- [CGImageMetadataTagCopyQualifiers(\_:)](cgimagemetadatatagcopyqualifiers%28__%29.md): Returns a shallow copy of the metadata tags that act as qualifiers for the current tag.

# CGImageMetadataTagCopyValue (Objective-C)

**Framework:** Image I/O  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a shallow copy of the tag’s value, which is suitable only for reading.

## Declaration

```objectivec
extern CFTypeRefCGImageMetadataTagCopyValue(CGImageMetadataTagRef tag);
```

## Parameters

- `tag`: The metadata tag from which to fetch the namespace information.

<a id="return-value"></a>

## Return Value

A copy of the tag’s value. Possible return types are [CFStringRef](../corefoundation/cfstring.md), [CFNumberRef](../corefoundation/cfnumber.md), [CFBooleanRef](../corefoundation/cfboolean.md), [CFArrayRef](../corefoundation/cfarray.md), and [CFDictionaryRef](../corefoundation/cfdictionary.md).

<a id="Discussion"></a>

## Discussion

Use this method to obtain the value when you want to use or display that value elsewhere. Any changes you make to the returned value don’t change the contents of the metadata tag. To change the value, call [CGImageMetadataSetValueWithPath](cgimagemetadatasetvaluewithpath%28________%29.md) or [CGImageMetadataSetTagWithPath](cgimagemetadatasettagwithpath%28________%29.md) instead.

## See Also

### Getting the Attributes of the Tag

- [CGImageMetadataTagCopyNamespace](cgimagemetadatatagcopynamespace%28__%29.md): Returns an immutable copy of the tag’s XMP namespace.
- [CGImageMetadataTagCopyPrefix](cgimagemetadatatagcopyprefix%28__%29.md): Returns an immutable copy of the tag’s prefix.
- [CGImageMetadataTagCopyName](cgimagemetadatatagcopyname%28__%29.md): Returns an immutable copy of the tag’s name.
- [CGImageMetadataTagCopyQualifiers](cgimagemetadatatagcopyqualifiers%28__%29.md): Returns a shallow copy of the metadata tags that act as qualifiers for the current tag.
