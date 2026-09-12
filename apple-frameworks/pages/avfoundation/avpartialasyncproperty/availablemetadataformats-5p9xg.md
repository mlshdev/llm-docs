> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avpartialasyncproperty/availablemetadataformats-5p9xg](https://developer.apple.com/documentation/avfoundation/avpartialasyncproperty/availablemetadataformats-5p9xg)

# availableMetadataFormats

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An array of metadata formats available for the track.

## Declaration

```swift
static var availableMetadataFormats: AVAsyncProperty<Root, [AVMetadataFormat]> { get }
```

<a id="Discussion"></a>

## Discussion

Use the [load(\_:isolation:)](../avasynchronouskeyvalueloading/load%28__isolation_%29.md) method to retrieve the property value.

## See Also

### Loading metadata

- [metadata](metadata-6e14c.md): Conforms when `Root` inherits `AVAssetTrack`. An array of metadata items for all metadata identifiers that have a value.
- [commonMetadata](commonmetadata-73m58.md): Conforms when `Root` inherits `AVAssetTrack`. An array of metadata items for all common metadata keys that have a value.
- [loadMetadata(for:completionHandler:)](../avassettrack/loadmetadata%28for_completionhandler_%29.md): Loads metadata items that a track contains for the specified format.
