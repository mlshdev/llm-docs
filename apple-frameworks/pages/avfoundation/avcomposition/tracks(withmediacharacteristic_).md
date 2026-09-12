> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcomposition/tracks(withmediacharacteristic:)](https://developer.apple.com/documentation/avfoundation/avcomposition/tracks(withmediacharacteristic:))

# tracks(withMediaCharacteristic:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns tracks that contain media of a specified characteristic.

## Declaration

```swift
func tracks(withMediaCharacteristic mediaCharacteristic: AVMediaCharacteristic) -> [AVCompositionTrack]
```

## Parameters

- `mediaCharacteristic`: The media characteristic of the tracks to return.

<a id="return-value"></a>

## Return Value

An array of tracks, which is empty if no tracks with the media characteristic exist.

<a id="Discussion"></a>

## Discussion

Apple discourages using this method in iOS 15, tvOS 15, macOS 12, and watchOS 8 or later. Load tracks asynchronously using [loadTracks(withMediaCharacteristic:completionHandler:)](loadtracks%28withmediacharacteristic_completionhandler_%29.md) instead.

## See Also

### Accessing tracks

- [tracks](tracks.md): The tracks that a composition contains.
- [track(withTrackID:)](track%28withtrackid_%29.md): Returns a track that contains the specified identifier.
- [tracks(withMediaType:)](tracks%28withmediatype_%29.md): Returns tracks that contain media of a specified type.
- [unusedTrackID()](unusedtrackid%28%29.md): Returns an identifier that no other tracks in the asset use.

# tracksWithMediaCharacteristic: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns tracks that contain media of a specified characteristic.

## Declaration

```objectivec
- (NSArray<AVCompositionTrack *> *) tracksWithMediaCharacteristic:(AVMediaCharacteristic) mediaCharacteristic;
```

## Parameters

- `mediaCharacteristic`: The media characteristic of the tracks to return.

<a id="return-value"></a>

## Return Value

An array of tracks, which is empty if no tracks with the media characteristic exist.

<a id="Discussion"></a>

## Discussion

Apple discourages using this method in iOS 15, tvOS 15, macOS 12, and watchOS 8 or later. Load tracks asynchronously using [loadTracksWithMediaCharacteristic:completionHandler:](loadtracks%28withmediacharacteristic_completionhandler_%29.md) instead.

## See Also

### Accessing tracks

- [tracks](tracks.md): The tracks that a composition contains.
- [trackWithTrackID:](track%28withtrackid_%29.md): Returns a track that contains the specified identifier.
- [tracksWithMediaType:](tracks%28withmediatype_%29.md): Returns tracks that contain media of a specified type.
- [unusedTrackID](unusedtrackid%28%29.md): Returns an identifier that no other tracks in the asset use.
