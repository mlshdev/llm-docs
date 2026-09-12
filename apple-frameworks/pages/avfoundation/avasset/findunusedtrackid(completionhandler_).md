> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avasset/findunusedtrackid(completionhandler:)](https://developer.apple.com/documentation/avfoundation/avasset/findunusedtrackid(completionhandler:))

# findUnusedTrackID(completionHandler:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Loads an identifier that no other track in the asset uses.

## Declaration

```swift
func findUnusedTrackID(completionHandler: @escaping @Sendable (CMPersistentTrackID, (any Error)?) -> Void)
```

```swift
func findUnusedTrackID() async throws -> CMPersistentTrackID
```

## Parameters

- `completionHandler`: A completion handler the system calls after it finishes the request.

## See Also

### Loading tracks

- [tracks](../avpartialasyncproperty/tracks-48zyw.md): Conforms when `Root` inherits `AVAsset`. The tracks of media that an asset contains.
- [loadTrack(withTrackID:completionHandler:)](loadtrack%28withtrackid_completionhandler_%29.md): Loads a track that contains the specified identifier.
- [loadTracks(withMediaType:completionHandler:)](loadtracks%28withmediatype_completionhandler_%29.md): Loads tracks that contain media of a specified type.
- [loadTracks(withMediaCharacteristic:completionHandler:)](loadtracks%28withmediacharacteristic_completionhandler_%29.md): Loads tracks that contain media of a specified characteristic.

# findUnusedTrackIDWithCompletionHandler: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Loads an identifier that no other track in the asset uses.

## Declaration

```objectivec
- (void) findUnusedTrackIDWithCompletionHandler:(void (^)(CMPersistentTrackID , NSError *)) completionHandler;
```

## Parameters

- `completionHandler`: A completion handler the system calls after it finishes the request.

## See Also

### Loading tracks

- [loadTrackWithTrackID:completionHandler:](loadtrack%28withtrackid_completionhandler_%29.md): Loads a track that contains the specified identifier.
- [loadTracksWithMediaType:completionHandler:](loadtracks%28withmediatype_completionhandler_%29.md): Loads tracks that contain media of a specified type.
- [loadTracksWithMediaCharacteristic:completionHandler:](loadtracks%28withmediacharacteristic_completionhandler_%29.md): Loads tracks that contain media of a specified characteristic.
