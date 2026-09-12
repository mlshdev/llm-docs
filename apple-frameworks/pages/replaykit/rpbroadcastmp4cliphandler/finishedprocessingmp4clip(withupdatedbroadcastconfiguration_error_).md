> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/replaykit/rpbroadcastmp4cliphandler/finishedprocessingmp4clip(withupdatedbroadcastconfiguration:error:)](https://developer.apple.com/documentation/replaykit/rpbroadcastmp4cliphandler/finishedprocessingmp4clip(withupdatedbroadcastconfiguration:error:))

# finishedProcessingMP4Clip(withUpdatedBroadcastConfiguration:error:) (Swift)

**Framework:** ReplayKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 11.0) · iPadOS 10.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS 10.0+ (deprecated in 11.0) · visionOS 1.0+ (deprecated in 1.0)

Applies configuration update changes to the next MP4 movie clip.

> No longer supported

## Declaration

```swift
func finishedProcessingMP4Clip(withUpdatedBroadcastConfiguration broadcastConfiguration: RPBroadcastConfiguration?, error: (any Error)?)
```

## Parameters

- `broadcastConfiguration`: Optional configuration update that is applied to the next MP4 movie clip.
- `error`: Indicates that an error occurred with the broadcast, and broadcasting is to stop.

<a id="Discussion"></a>

## Discussion

Call this method when processing is complete. After this method is called, whether an error exists or not, the current MP4 movie clip is no longer available.

## See Also

### Processing MP4 Movie Clips

- [processMP4Clip(with:setupInfo:finished:)](processmp4clip%28with_setupinfo_finished_%29.md): Deprecated. Processes MP4 movie clips for a live broadcast.

# finishedProcessingMP4ClipWithUpdatedBroadcastConfiguration:error: (Objective-C)

**Framework:** ReplayKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 11.0) · iPadOS 10.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS 10.0+ (deprecated in 11.0) · visionOS 1.0+ (deprecated in 1.0)

Applies configuration update changes to the next MP4 movie clip.

> No longer supported

## Declaration

```objectivec
- (void) finishedProcessingMP4ClipWithUpdatedBroadcastConfiguration:(RPBroadcastConfiguration *) broadcastConfiguration error:(NSError *) error;
```

## Parameters

- `broadcastConfiguration`: Optional configuration update that is applied to the next MP4 movie clip.
- `error`: Indicates that an error occurred with the broadcast, and broadcasting is to stop.

<a id="Discussion"></a>

## Discussion

Call this method when processing is complete. After this method is called, whether an error exists or not, the current MP4 movie clip is no longer available.

## See Also

### Processing MP4 Movie Clips

- [processMP4ClipWithURL:setupInfo:finished:](processmp4clip%28with_setupinfo_finished_%29.md): Deprecated. Processes MP4 movie clips for a live broadcast.
