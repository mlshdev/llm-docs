> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutablecomposition/loadtracks(withmediacharacteristic:completionhandler:)](https://developer.apple.com/documentation/avfoundation/avmutablecomposition/loadtracks(withmediacharacteristic:completionhandler:))

# loadTracks(withMediaCharacteristic:completionHandler:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Loads tracks that contain media of a specified characteristic.

## Declaration

```swift
func loadTracks(withMediaCharacteristic mediaCharacteristic: AVMediaCharacteristic, completionHandler: @escaping @Sendable ([AVMutableCompositionTrack]?, (any Error)?) -> Void)
```

```swift
func loadTracks(withMediaCharacteristic mediaCharacteristic: AVMediaCharacteristic) async throws -> [AVMutableCompositionTrack]
```

## Parameters

- `mediaCharacteristic`: The media characteristic of the tracks to load.
- `completionHandler`: A callback that the system invokes after it finishes the loading request. It passes the completion handler the following parameters:

  - **tracks**: An array of tracks, which may be empty if no tracks with the specified media characteristic exist. The value is `nil` if an error occurs.
  - **error**: An error object if the request fails; otherwise, `nil`.

## See Also

### Loading tracks

- [tracks](../avpartialasyncproperty/tracks-92p4a.md): Conforms when `Root` inherits `AVMutableComposition`. The tracks that a composition contains.
- [loadTrack(withTrackID:completionHandler:)](loadtrack%28withtrackid_completionhandler_%29.md): Loads a track that contains the specified identifier.
- [loadTracks(withMediaType:completionHandler:)](loadtracks%28withmediatype_completionhandler_%29.md): Loads tracks that contain media of a specified type.

# loadTracksWithMediaCharacteristic:completionHandler: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Loads tracks that contain media of a specified characteristic.

## Declaration

```objectivec
- (void) loadTracksWithMediaCharacteristic:(AVMediaCharacteristic) mediaCharacteristic completionHandler:(void (^)(NSArray<AVMutableCompositionTrack *> *, NSError *)) completionHandler;
```

## Parameters

- `mediaCharacteristic`: The media characteristic of the tracks to load.
- `completionHandler`: A callback that the system invokes after it finishes the loading request. It passes the completion handler the following parameters:

  - **tracks**: An array of tracks, which may be empty if no tracks with the specified media characteristic exist. The value is `nil` if an error occurs.
  - **error**: An error object if the request fails; otherwise, `nil`.

## See Also

### Loading tracks

- [loadTrackWithTrackID:completionHandler:](loadtrack%28withtrackid_completionhandler_%29.md): Loads a track that contains the specified identifier.
- [loadTracksWithMediaType:completionHandler:](loadtracks%28withmediatype_completionhandler_%29.md): Loads tracks that contain media of a specified type.
