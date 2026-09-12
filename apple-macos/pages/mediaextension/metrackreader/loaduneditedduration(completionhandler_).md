> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mediaextension/metrackreader/loaduneditedduration(completionhandler:)](https://developer.apple.com/documentation/mediaextension/metrackreader/loaduneditedduration(completionhandler:))

# loadUneditedDuration(completionHandler:) (Swift)

**Framework:** MediaExtension  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

Returns the duration of the track, disregarding edits.

## Declaration

```swift
optional func loadUneditedDuration(completionHandler: @escaping @Sendable (CMTime, (any Error)?) -> Void)
```

```swift
optional func uneditedDuration() async throws -> CMTime
```

## Parameters

- `completionHandler`: The completion block to execute when the load operation finishes.

<a id="Discussion"></a>

## Discussion

Media Toolbox uses this information to validate edit information and to check if the media is suitable for gapless playback.

## See Also

### Getting track information

- [loadTrackInfo(completionHandler:)](loadtrackinfo%28completionhandler_%29.md): Loads the track info object with the properties of the media asset track.
- [generateSampleCursor(atPresentationTimeStamp:completionHandler:)](generatesamplecursor%28atpresentationtimestamp_completionhandler_%29.md): Provides a new sample cursor that points to the sample at or near the specified presentation timestamp.
- [generateSampleCursorAtFirstSampleInDecodeOrder(completionHandler:)](generatesamplecursoratfirstsampleindecodeorder%28completionhandler_%29.md): Provides a new sample cursor that points to the first sample in decode order.
- [generateSampleCursorAtLastSampleInDecodeOrder(completionHandler:)](generatesamplecursoratlastsampleindecodeorder%28completionhandler_%29.md): Provides a new sample cursor that points to the last sample in decode order.
- [loadTotalSampleDataLength(completionHandler:)](loadtotalsampledatalength%28completionhandler_%29.md): Loads the total size in bytes of all the samples in the track.
- [loadEstimatedDataRate(completionHandler:)](loadestimateddatarate%28completionhandler_%29.md): Loads the approximate data rate of the track in bytes per second.
- [loadMetadata(completionHandler:)](loadmetadata%28completionhandler_%29.md): Loads the array of metadata items from the media asset track.

# loadUneditedDurationWithCompletionHandler: (Objective-C)

**Framework:** MediaExtension  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

Returns the duration of the track, disregarding edits.

## Declaration

```objectivec
- (void) loadUneditedDurationWithCompletionHandler:(void (^)(CMTime uneditedDuration, NSError *error)) completionHandler;
```

## Parameters

- `completionHandler`: The completion block to execute when the load operation finishes.

<a id="Discussion"></a>

## Discussion

Media Toolbox uses this information to validate edit information and to check if the media is suitable for gapless playback.

## See Also

### Getting track information

- [loadTrackInfoWithCompletionHandler:](loadtrackinfo%28completionhandler_%29.md): Loads the track info object with the properties of the media asset track.
- [generateSampleCursorAtPresentationTimeStamp:completionHandler:](generatesamplecursor%28atpresentationtimestamp_completionhandler_%29.md): Provides a new sample cursor that points to the sample at or near the specified presentation timestamp.
- [generateSampleCursorAtFirstSampleInDecodeOrderWithCompletionHandler:](generatesamplecursoratfirstsampleindecodeorder%28completionhandler_%29.md): Provides a new sample cursor that points to the first sample in decode order.
- [generateSampleCursorAtLastSampleInDecodeOrderWithCompletionHandler:](generatesamplecursoratlastsampleindecodeorder%28completionhandler_%29.md): Provides a new sample cursor that points to the last sample in decode order.
- [loadTotalSampleDataLengthWithCompletionHandler:](loadtotalsampledatalength%28completionhandler_%29.md): Loads the total size in bytes of all the samples in the track.
- [loadEstimatedDataRateWithCompletionHandler:](loadestimateddatarate%28completionhandler_%29.md): Loads the approximate data rate of the track in bytes per second.
- [loadMetadataWithCompletionHandler:](loadmetadata%28completionhandler_%29.md): Loads the array of metadata items from the media asset track.
