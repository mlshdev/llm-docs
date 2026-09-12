> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mediaextension/meformatreader/loadfileinfo(completionhandler:)](https://developer.apple.com/documentation/mediaextension/meformatreader/loadfileinfo(completionhandler:))

# loadFileInfo(completionHandler:) (Swift)

**Framework:** MediaExtension  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

Loads the file info object with the properties of the media asset.

## Declaration

```swift
func loadFileInfo(completionHandler: @escaping @Sendable (MEFileInfo?, (any Error)?) -> Void)
```

```swift
func fileInfo() async throws -> MEFileInfo
```

## Parameters

- `completionHandler`: The completion block to execute when the load operation finishes.

## See Also

### Reading and parsing media assets

- [loadMetadata(completionHandler:)](loadmetadata%28completionhandler_%29.md): Loads the array of metadata items from the media asset.
- [loadTrackReaders(completionHandler:)](loadtrackreaders%28completionhandler_%29.md): Loads the array of track readers that represent the tracks in the media asset.
- [parseAdditionalFragments(completionHandler:)](parseadditionalfragments%28completionhandler_%29.md): Incorporates additional fragments that the file received after the last time the format reader parsed it.
- [MEFormatReaderParseAdditionalFragmentsStatus](../meformatreaderparseadditionalfragmentsstatus.md): Informational status flags that the format reader returns after parsing additional fragments.

# loadFileInfoWithCompletionHandler: (Objective-C)

**Framework:** MediaExtension  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

Loads the file info object with the properties of the media asset.

## Declaration

```objectivec
- (void) loadFileInfoWithCompletionHandler:(void (^)(MEFileInfo *fileInfo, NSError *error)) completionHandler;
```

## Parameters

- `completionHandler`: The completion block to execute when the load operation finishes.

## See Also

### Reading and parsing media assets

- [loadMetadataWithCompletionHandler:](loadmetadata%28completionhandler_%29.md): Loads the array of metadata items from the media asset.
- [loadTrackReadersWithCompletionHandler:](loadtrackreaders%28completionhandler_%29.md): Loads the array of track readers that represent the tracks in the media asset.
- [parseAdditionalFragmentsWithCompletionHandler:](parseadditionalfragments%28completionhandler_%29.md): Incorporates additional fragments that the file received after the last time the format reader parsed it.
- [MEFormatReaderParseAdditionalFragmentsStatus](../meformatreaderparseadditionalfragmentsstatus.md): Informational status flags that the format reader returns after parsing additional fragments.
