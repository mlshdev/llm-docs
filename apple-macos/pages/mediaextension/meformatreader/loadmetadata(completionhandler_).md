> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mediaextension/meformatreader/loadmetadata(completionhandler:)](https://developer.apple.com/documentation/mediaextension/meformatreader/loadmetadata(completionhandler:))

# loadMetadata(completionHandler:) (Swift)

**Framework:** MediaExtension  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

Loads the array of metadata items from the media asset.

## Declaration

```swift
func loadMetadata(completionHandler: @escaping @Sendable ([AVMetadataItem]?, (any Error)?) -> Void)
```

```swift
func metadata() async throws -> [AVMetadataItem]
```

## Parameters

- `completionHandler`: The completion block to execute when the load operation finishes.

## See Also

### Reading and parsing media assets

- [loadFileInfo(completionHandler:)](loadfileinfo%28completionhandler_%29.md): Loads the file info object with the properties of the media asset.
- [loadTrackReaders(completionHandler:)](loadtrackreaders%28completionhandler_%29.md): Loads the array of track readers that represent the tracks in the media asset.
- [parseAdditionalFragments(completionHandler:)](parseadditionalfragments%28completionhandler_%29.md): Incorporates additional fragments that the file received after the last time the format reader parsed it.
- [MEFormatReaderParseAdditionalFragmentsStatus](../meformatreaderparseadditionalfragmentsstatus.md): Informational status flags that the format reader returns after parsing additional fragments.

# loadMetadataWithCompletionHandler: (Objective-C)

**Framework:** MediaExtension  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

Loads the array of metadata items from the media asset.

## Declaration

```objectivec
- (void) loadMetadataWithCompletionHandler:(void (^)(NSArray<AVMetadataItem *> *metadata, NSError *error)) completionHandler;
```

## Parameters

- `completionHandler`: The completion block to execute when the load operation finishes.

## See Also

### Reading and parsing media assets

- [loadFileInfoWithCompletionHandler:](loadfileinfo%28completionhandler_%29.md): Loads the file info object with the properties of the media asset.
- [loadTrackReadersWithCompletionHandler:](loadtrackreaders%28completionhandler_%29.md): Loads the array of track readers that represent the tracks in the media asset.
- [parseAdditionalFragmentsWithCompletionHandler:](parseadditionalfragments%28completionhandler_%29.md): Incorporates additional fragments that the file received after the last time the format reader parsed it.
- [MEFormatReaderParseAdditionalFragmentsStatus](../meformatreaderparseadditionalfragmentsstatus.md): Informational status flags that the format reader returns after parsing additional fragments.
