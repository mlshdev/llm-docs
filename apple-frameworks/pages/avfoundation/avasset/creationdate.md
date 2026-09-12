> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avasset/creationdate](https://developer.apple.com/documentation/avfoundation/avasset/creationdate)

# creationDate (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ (deprecated in 16.0) · iPadOS 5.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.8+ (deprecated in 13.0) · tvOS 9.0+ (deprecated in 16.0) · watchOS 1.0+ (deprecated in 9.0)

A metadata item that indicates the asset’s creation date.

> Load the value of [creationDate](../avpartialasyncproperty/creationdate.md) asynchronously instead.

## Declaration

```swift
var creationDate: AVMetadataItem? { get }
```

<a id="Discussion"></a>

## Discussion

If the asset contains metadata that the framework can convert to an [NSDate](../../foundation/nsdate.md), you can retrieve it from the metadata item using its [dateValue](../avmetadataitem/datevalue.md) property. Otherwise, you retrieve it as a string by using the metadata item’s [stringValue](../avmetadataitem/stringvalue.md) property.

This property value is `nil` if no creation date metadata exists.

# creationDate (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

A metadata item that indicates the asset’s creation date.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) AVMetadataItem * creationDate;
```

<a id="Discussion"></a>

## Discussion

If the asset contains metadata that the framework can convert to an [NSDate](../../foundation/nsdate.md), you can retrieve it from the metadata item using its [dateValue](../avmetadataitem/datevalue.md) property. Otherwise, you retrieve it as a string by using the metadata item’s [stringValue](../avmetadataitem/stringvalue.md) property.

This property value is `nil` if no creation date metadata exists.

## See Also

### Accessing metadata

- [metadata](metadata.md): Deprecated. An array of metadata items for all metadata identifiers for which a value is available.
- [commonMetadata](commonmetadata.md): Deprecated. The metadata items an asset contains for common metadata identifiers that provide a value.
- [availableMetadataFormats](availablemetadataformats.md): Deprecated. The metadata formats this asset contains.
- [metadataForFormat:](metadata%28forformat_%29.md): Deprecated. Returns an array of metadata items from the container with the specified format.
- [lyrics](lyrics.md): Deprecated. The lyrics of the asset in a language suitable for the current locale.
