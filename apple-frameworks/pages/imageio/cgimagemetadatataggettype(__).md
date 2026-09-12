> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageio/cgimagemetadatataggettype(_:)](https://developer.apple.com/documentation/imageio/cgimagemetadatataggettype(_:))

# CGImageMetadataTagGetType(\_:) (Swift)

**Framework:** Image I/O  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the type of the metadata tag’s value.

## Declaration

```swift
func CGImageMetadataTagGetType(_ tag: CGImageMetadataTag) -> CGImageMetadataType
```

## Parameters

- `tag`: The metadata tag from which to fetch the namespace information.

<a id="return-value"></a>

## Return Value

A constant that indicates the type of the value. For a list of possible return values, see [CGImageMetadataType](cgimagemetadatatype.md).

<a id="Discussion"></a>

## Discussion

To get the value itself, call [CGImageMetadataTagCopyValue(\_:)](cgimagemetadatatagcopyvalue%28__%29.md). Metadata tags store string, number, and Boolean values using the [CGImageMetadataType.string](cgimagemetadatatype/string.md) type.

## See Also

### Getting the Tag Type

- [CGImageMetadataType](cgimagemetadatatype.md): Constants that indicate the XMP type for a metadata tag.

# CGImageMetadataTagGetType (Objective-C)

**Framework:** Image I/O  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the type of the metadata tag’s value.

## Declaration

```objectivec
extern CGImageMetadataType CGImageMetadataTagGetType(CGImageMetadataTagRef tag);
```

## Parameters

- `tag`: The metadata tag from which to fetch the namespace information.

<a id="return-value"></a>

## Return Value

A constant that indicates the type of the value. For a list of possible return values, see [CGImageMetadataType](cgimagemetadatatype.md).

<a id="Discussion"></a>

## Discussion

To get the value itself, call [CGImageMetadataTagCopyValue](cgimagemetadatatagcopyvalue%28__%29.md). Metadata tags store string, number, and Boolean values using the [kCGImageMetadataTypeString](cgimagemetadatatype/string.md) type.

## See Also

### Getting the Tag Type

- [CGImageMetadataType](cgimagemetadatatype.md): Constants that indicate the XMP type for a metadata tag.
