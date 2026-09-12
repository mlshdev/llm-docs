> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/replaykit/rpbroadcastmp4cliphandler/processmp4clip(with:setupinfo:finished:)](https://developer.apple.com/documentation/replaykit/rpbroadcastmp4cliphandler/processmp4clip(with:setupinfo:finished:))

# processMP4Clip(with:setupInfo:finished:) (Swift)

**Framework:** ReplayKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 11.0) · iPadOS 10.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS 10.0+ (deprecated in 11.0) · visionOS 1.0+ (deprecated in 1.0)

Processes MP4 movie clips for a live broadcast.

> No longer supported

## Declaration

```swift
func processMP4Clip(with mp4ClipURL: URL?, setupInfo: [String : NSObject]?, finished: Bool)
```

## Parameters

- `mp4ClipURL`: URL that points to the location of the movie clip. This parameter is `nil` when an error occurs.
- `setupInfo`: Dictionary that is supplied by the UI extension and contains setup information required for processing. The values contained in the dictionary are defined by the extension developer.
- `finished`: Boolean value indicating that the app has requested the broadcast to end. Set to [true](https://developer.apple.com/documentation/swift/true) to end the broadcast.

## See Also

### Processing MP4 Movie Clips

- [finishedProcessingMP4Clip(withUpdatedBroadcastConfiguration:error:)](finishedprocessingmp4clip%28withupdatedbroadcastconfiguration_error_%29.md): Deprecated. Applies configuration update changes to the next MP4 movie clip.

# processMP4ClipWithURL:setupInfo:finished: (Objective-C)

**Framework:** ReplayKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 11.0) · iPadOS 10.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS 10.0+ (deprecated in 11.0) · visionOS 1.0+ (deprecated in 1.0)

Processes MP4 movie clips for a live broadcast.

> No longer supported

## Declaration

```objectivec
- (void) processMP4ClipWithURL:(NSURL *) mp4ClipURL setupInfo:(NSDictionary<NSString *,NSObject *> *) setupInfo finished:(BOOL) finished;
```

## Parameters

- `mp4ClipURL`: URL that points to the location of the movie clip. This parameter is `nil` when an error occurs.
- `setupInfo`: Dictionary that is supplied by the UI extension and contains setup information required for processing. The values contained in the dictionary are defined by the extension developer.
- `finished`: Boolean value indicating that the app has requested the broadcast to end. Set to [true](https://developer.apple.com/documentation/swift/true) to end the broadcast.

## See Also

### Processing MP4 Movie Clips

- [finishedProcessingMP4ClipWithUpdatedBroadcastConfiguration:error:](finishedprocessingmp4clip%28withupdatedbroadcastconfiguration_error_%29.md): Deprecated. Applies configuration update changes to the next MP4 movie clip.
