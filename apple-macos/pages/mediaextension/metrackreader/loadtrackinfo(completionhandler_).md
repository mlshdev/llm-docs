> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mediaextension/metrackreader/loadtrackinfo(completionhandler:)](https://developer.apple.com/documentation/mediaextension/metrackreader/loadtrackinfo(completionhandler:))

# loadTrackInfo(completionHandler:) (Swift)

**Framework:** MediaExtension  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

Loads the track info object with the properties of the media asset track.

## Declaration

```swift
func loadTrackInfo(completionHandler: @escaping @Sendable (METrackInfo?, (any Error)?) -> Void)
```

```swift
func trackInfo() async throws -> METrackInfo
```

## Parameters

- `completionHandler`: The completion block to execute when the load operation finishes.

<a id="Discussion"></a>

## Discussion

If this method fails to create a track info object, it returns `nil` and the error contains information about the failure.

## See Also

### Getting track information

- [generateSampleCursor(atPresentationTimeStamp:completionHandler:)](generatesamplecursor%28atpresentationtimestamp_completionhandler_%29.md): Provides a new sample cursor that points to the sample at or near the specified presentation timestamp.
- [generateSampleCursorAtFirstSampleInDecodeOrder(completionHandler:)](generatesamplecursoratfirstsampleindecodeorder%28completionhandler_%29.md): Provides a new sample cursor that points to the first sample in decode order.
- [generateSampleCursorAtLastSampleInDecodeOrder(completionHandler:)](generatesamplecursoratlastsampleindecodeorder%28completionhandler_%29.md): Provides a new sample cursor that points to the last sample in decode order.
- [loadUneditedDuration(completionHandler:)](loaduneditedduration%28completionhandler_%29.md): Returns the duration of the track, disregarding edits.
- [loadTotalSampleDataLength(completionHandler:)](loadtotalsampledatalength%28completionhandler_%29.md): Loads the total size in bytes of all the samples in the track.
- [loadEstimatedDataRate(completionHandler:)](loadestimateddatarate%28completionhandler_%29.md): Loads the approximate data rate of the track in bytes per second.
- [loadMetadata(completionHandler:)](loadmetadata%28completionhandler_%29.md): Loads the array of metadata items from the media asset track.

# loadTrackInfoWithCompletionHandler: (Objective-C)

**Framework:** MediaExtension  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

Loads the track info object with the properties of the media asset track.

## Declaration

```objectivec
- (void) loadTrackInfoWithCompletionHandler:(void (^)(METrackInfo *trackInfo, NSError *error)) completionHandler;
```

## Parameters

- `completionHandler`: The completion block to execute when the load operation finishes.

<a id="Discussion"></a>

## Discussion

If this method fails to create a track info object, it returns `nil` and the error contains information about the failure.

## See Also

### Getting track information

- [generateSampleCursorAtPresentationTimeStamp:completionHandler:](generatesamplecursor%28atpresentationtimestamp_completionhandler_%29.md): Provides a new sample cursor that points to the sample at or near the specified presentation timestamp.
- [generateSampleCursorAtFirstSampleInDecodeOrderWithCompletionHandler:](generatesamplecursoratfirstsampleindecodeorder%28completionhandler_%29.md): Provides a new sample cursor that points to the first sample in decode order.
- [generateSampleCursorAtLastSampleInDecodeOrderWithCompletionHandler:](generatesamplecursoratlastsampleindecodeorder%28completionhandler_%29.md): Provides a new sample cursor that points to the last sample in decode order.
- [loadUneditedDurationWithCompletionHandler:](loaduneditedduration%28completionhandler_%29.md): Returns the duration of the track, disregarding edits.
- [loadTotalSampleDataLengthWithCompletionHandler:](loadtotalsampledatalength%28completionhandler_%29.md): Loads the total size in bytes of all the samples in the track.
- [loadEstimatedDataRateWithCompletionHandler:](loadestimateddatarate%28completionhandler_%29.md): Loads the approximate data rate of the track in bytes per second.
- [loadMetadataWithCompletionHandler:](loadmetadata%28completionhandler_%29.md): Loads the array of metadata items from the media asset track.
