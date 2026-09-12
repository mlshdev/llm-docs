> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcomposition/loadtrack(withtrackid:completionhandler:)](https://developer.apple.com/documentation/avfoundation/avcomposition/loadtrack(withtrackid:completionhandler:))

# loadTrack(withTrackID:completionHandler:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Loads a track that contains the specified identifier.

## Declaration

```swift
func loadTrack(withTrackID trackID: CMPersistentTrackID, completionHandler: @escaping @Sendable (AVCompositionTrack?, (any Error)?) -> Void)
```

```swift
func loadTrack(withTrackID trackID: CMPersistentTrackID) async throws -> AVCompositionTrack?
```

## Parameters

- `trackID`: The identifier of the track to load.
- `completionHandler`: A callback that the system invokes after it finishes the loading request. It passes the completion handler the following parameters:

  - **track**: The loaded track, or `nil` if no track with the specified identifier exists or if an error occurs.
  - **error**: An error object if the request fails; otherwise, `nil`.

## See Also

### Loading tracks

- [tracks](../avpartialasyncproperty/tracks-9eows.md): Conforms when `Root` inherits `AVComposition`. The tracks that a composition contains.
- [loadTracks(withMediaType:completionHandler:)](loadtracks%28withmediatype_completionhandler_%29.md): Loads tracks that contain media of a specified type.
- [loadTracks(withMediaCharacteristic:completionHandler:)](loadtracks%28withmediacharacteristic_completionhandler_%29.md): Loads tracks that contain media of a specified characteristic.

# loadTrackWithTrackID:completionHandler: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Loads a track that contains the specified identifier.

## Declaration

```objectivec
- (void) loadTrackWithTrackID:(CMPersistentTrackID) trackID completionHandler:(void (^)(AVCompositionTrack *, NSError *)) completionHandler;
```

## Parameters

- `trackID`: The identifier of the track to load.
- `completionHandler`: A callback that the system invokes after it finishes the loading request. It passes the completion handler the following parameters:

  - **track**: The loaded track, or `nil` if no track with the specified identifier exists or if an error occurs.
  - **error**: An error object if the request fails; otherwise, `nil`.

## See Also

### Loading tracks

- [loadTracksWithMediaType:completionHandler:](loadtracks%28withmediatype_completionhandler_%29.md): Loads tracks that contain media of a specified type.
- [loadTracksWithMediaCharacteristic:completionHandler:](loadtracks%28withmediacharacteristic_completionhandler_%29.md): Loads tracks that contain media of a specified characteristic.
