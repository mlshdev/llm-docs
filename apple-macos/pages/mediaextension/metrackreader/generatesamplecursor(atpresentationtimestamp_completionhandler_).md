> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mediaextension/metrackreader/generatesamplecursor(atpresentationtimestamp:completionhandler:)](https://developer.apple.com/documentation/mediaextension/metrackreader/generatesamplecursor(atpresentationtimestamp:completionhandler:))

# generateSampleCursor(atPresentationTimeStamp:completionHandler:) (Swift)

**Framework:** MediaExtension  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

Provides a new sample cursor that points to the sample at or near the specified presentation timestamp.

## Declaration

```swift
func generateSampleCursor(atPresentationTimeStamp presentationTimeStamp: CMTime, completionHandler: @escaping @Sendable ((any MESampleCursor)?, (any Error)?) -> Void)
```

```swift
func sampleCursor(atPresentationTimeStamp presentationTimeStamp: CMTime) async throws -> any MESampleCursor
```

## Parameters

- `presentationTimeStamp`: The presentation time stamp.
- `completionHandler`: The completion block to execute when the generate operation finishes.

<a id="Discussion"></a>

## Discussion

The new sample cursor points to the last sample with a presentation time stamp (PTS) less than or equal to `presentationTimeStamp`, or if there are no such samples, the first sample in PTS order.

## See Also

### Getting track information

- [loadTrackInfo(completionHandler:)](loadtrackinfo%28completionhandler_%29.md): Loads the track info object with the properties of the media asset track.
- [generateSampleCursorAtFirstSampleInDecodeOrder(completionHandler:)](generatesamplecursoratfirstsampleindecodeorder%28completionhandler_%29.md): Provides a new sample cursor that points to the first sample in decode order.
- [generateSampleCursorAtLastSampleInDecodeOrder(completionHandler:)](generatesamplecursoratlastsampleindecodeorder%28completionhandler_%29.md): Provides a new sample cursor that points to the last sample in decode order.
- [loadUneditedDuration(completionHandler:)](loaduneditedduration%28completionhandler_%29.md): Returns the duration of the track, disregarding edits.
- [loadTotalSampleDataLength(completionHandler:)](loadtotalsampledatalength%28completionhandler_%29.md): Loads the total size in bytes of all the samples in the track.
- [loadEstimatedDataRate(completionHandler:)](loadestimateddatarate%28completionhandler_%29.md): Loads the approximate data rate of the track in bytes per second.
- [loadMetadata(completionHandler:)](loadmetadata%28completionhandler_%29.md): Loads the array of metadata items from the media asset track.

# generateSampleCursorAtPresentationTimeStamp:completionHandler: (Objective-C)

**Framework:** MediaExtension  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

Provides a new sample cursor that points to the sample at or near the specified presentation timestamp.

## Declaration

```objectivec
- (void) generateSampleCursorAtPresentationTimeStamp:(CMTime) presentationTimeStamp completionHandler:(void (^)(id<MESampleCursor>sampleCursor, NSError *error)) completionHandler;
```

## Parameters

- `presentationTimeStamp`: The presentation time stamp.
- `completionHandler`: The completion block to execute when the generate operation finishes.

<a id="Discussion"></a>

## Discussion

The new sample cursor points to the last sample with a presentation time stamp (PTS) less than or equal to `presentationTimeStamp`, or if there are no such samples, the first sample in PTS order.

## See Also

### Getting track information

- [loadTrackInfoWithCompletionHandler:](loadtrackinfo%28completionhandler_%29.md): Loads the track info object with the properties of the media asset track.
- [generateSampleCursorAtFirstSampleInDecodeOrderWithCompletionHandler:](generatesamplecursoratfirstsampleindecodeorder%28completionhandler_%29.md): Provides a new sample cursor that points to the first sample in decode order.
- [generateSampleCursorAtLastSampleInDecodeOrderWithCompletionHandler:](generatesamplecursoratlastsampleindecodeorder%28completionhandler_%29.md): Provides a new sample cursor that points to the last sample in decode order.
- [loadUneditedDurationWithCompletionHandler:](loaduneditedduration%28completionhandler_%29.md): Returns the duration of the track, disregarding edits.
- [loadTotalSampleDataLengthWithCompletionHandler:](loadtotalsampledatalength%28completionhandler_%29.md): Loads the total size in bytes of all the samples in the track.
- [loadEstimatedDataRateWithCompletionHandler:](loadestimateddatarate%28completionhandler_%29.md): Loads the approximate data rate of the track in bytes per second.
- [loadMetadataWithCompletionHandler:](loadmetadata%28completionhandler_%29.md): Loads the array of metadata items from the media asset track.
