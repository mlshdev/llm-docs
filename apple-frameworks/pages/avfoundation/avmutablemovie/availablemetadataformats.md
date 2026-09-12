> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutablemovie/availablemetadataformats](https://developer.apple.com/documentation/avfoundation/avmutablemovie/availablemetadataformats)

# availableMetadataFormats

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 6.0+

The metadata formats this asset contains.

## Declaration

```swift
var availableMetadataFormats: [AVMetadataFormat] { get }
```

<a id="Discussion"></a>

## Discussion

Metadata formats may include ID3, iTunes metadata, and so on.

## See Also

### Accessing metadata

- [metadata](metadata.md): An array of metadata items for all metadata identifiers for which a value is available.
- [commonMetadata](commonmetadata.md): The metadata items an asset contains for common metadata identifiers that provide a value.
- [metadata(forFormat:)](metadata%28forformat_%29.md): Returns an array of metadata items from the container with the specified format.
- [creationDate](creationdate.md): A metadata item that indicates the asset’s creation date.
- [lyrics](lyrics.md): The lyrics of the asset in a language suitable for the current locale.
