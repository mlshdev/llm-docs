> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mediaextension/metrackreader/loadmetadata(completionhandler:)](https://developer.apple.com/documentation/mediaextension/metrackreader/loadmetadata(completionhandler:))

# loadMetadata(completionHandler:) (Swift)

**Framework:** MediaExtension  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

Loads the array of metadata items from the media asset track.

## Declaration

```swift
optional func loadMetadata(completionHandler: @escaping @Sendable ([AVMetadataItem]?, (any Error)?) -> Void)
```

```swift
optional func metadata() async throws -> [AVMetadataItem]
```

## Parameters

- `completionHandler`: The completion block to execute when the load operation finishes.

## See Also

### Getting track information

- [loadTrackInfo(completionHandler:)](loadtrackinfo%28completionhandler_%29.md): Loads the track info object with the properties of the media asset track.
- [generateSampleCursor(atPresentationTimeStamp:completionHandler:)](generatesamplecursor%28atpresentationtimestamp_completionhandler_%29.md): Provides a new sample cursor that points to the sample at or near the specified presentation timestamp.
- [generateSampleCursorAtFirstSampleInDecodeOrder(completionHandler:)](generatesamplecursoratfirstsampleindecodeorder%28completionhandler_%29.md): Provides a new sample cursor that points to the first sample in decode order.
- [generateSampleCursorAtLastSampleInDecodeOrder(completionHandler:)](generatesamplecursoratlastsampleindecodeorder%28completionhandler_%29.md): Provides a new sample cursor that points to the last sample in decode order.
- [loadUneditedDuration(completionHandler:)](loaduneditedduration%28completionhandler_%29.md): Returns the duration of the track, disregarding edits.
- [loadTotalSampleDataLength(completionHandler:)](loadtotalsampledatalength%28completionhandler_%29.md): Loads the total size in bytes of all the samples in the track.
- [loadEstimatedDataRate(completionHandler:)](loadestimateddatarate%28completionhandler_%29.md): Loads the approximate data rate of the track in bytes per second.

# loadMetadataWithCompletionHandler: (Objective-C)

**Framework:** MediaExtension  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

Loads the array of metadata items from the media asset track.

## Declaration

```objectivec
- (void) loadMetadataWithCompletionHandler:(void (^)(NSArray<AVMetadataItem *> *metadata, NSError *error)) completionHandler;
```

## Parameters

- `completionHandler`: The completion block to execute when the load operation finishes.

## See Also

### Getting track information

- [loadTrackInfoWithCompletionHandler:](loadtrackinfo%28completionhandler_%29.md): Loads the track info object with the properties of the media asset track.
- [generateSampleCursorAtPresentationTimeStamp:completionHandler:](generatesamplecursor%28atpresentationtimestamp_completionhandler_%29.md): Provides a new sample cursor that points to the sample at or near the specified presentation timestamp.
- [generateSampleCursorAtFirstSampleInDecodeOrderWithCompletionHandler:](generatesamplecursoratfirstsampleindecodeorder%28completionhandler_%29.md): Provides a new sample cursor that points to the first sample in decode order.
- [generateSampleCursorAtLastSampleInDecodeOrderWithCompletionHandler:](generatesamplecursoratlastsampleindecodeorder%28completionhandler_%29.md): Provides a new sample cursor that points to the last sample in decode order.
- [loadUneditedDurationWithCompletionHandler:](loaduneditedduration%28completionhandler_%29.md): Returns the duration of the track, disregarding edits.
- [loadTotalSampleDataLengthWithCompletionHandler:](loadtotalsampledatalength%28completionhandler_%29.md): Loads the total size in bytes of all the samples in the track.
- [loadEstimatedDataRateWithCompletionHandler:](loadestimateddatarate%28completionhandler_%29.md): Loads the approximate data rate of the track in bytes per second.
