> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutablecomposition/tracks(withmediatype:)](https://developer.apple.com/documentation/avfoundation/avmutablecomposition/tracks(withmediatype:))

# tracks(withMediaType:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns tracks that contain media of a specified type.

## Declaration

```swift
func tracks(withMediaType mediaType: AVMediaType) -> [AVMutableCompositionTrack]
```

## Parameters

- `mediaType`: The media type of the tracks to return.

<a id="return-value"></a>

## Return Value

An array of composition tracks, which is empty if there are no matching tracks.

<a id="Discussion"></a>

## Discussion

Apple discourages using this method. Load tracks asynchronously using [loadTracks(withMediaType:completionHandler:)](loadtracks%28withmediatype_completionhandler_%29.md) instead.

## See Also

### Accessing tracks

- [tracks](tracks.md): The tracks that a composition contains.
- [track(withTrackID:)](track%28withtrackid_%29.md): Returns a track that contains the specified identifier.
- [tracks(withMediaCharacteristic:)](tracks%28withmediacharacteristic_%29.md): Returns tracks that contain media of a specified characteristic.

# tracksWithMediaType: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns tracks that contain media of a specified type.

## Declaration

```objectivec
- (NSArray<AVMutableCompositionTrack *> *) tracksWithMediaType:(AVMediaType) mediaType;
```

## Parameters

- `mediaType`: The media type of the tracks to return.

<a id="return-value"></a>

## Return Value

An array of composition tracks, which is empty if there are no matching tracks.

<a id="Discussion"></a>

## Discussion

Apple discourages using this method. Load tracks asynchronously using [loadTracksWithMediaType:completionHandler:](loadtracks%28withmediatype_completionhandler_%29.md) instead.

## See Also

### Accessing tracks

- [tracks](tracks.md): The tracks that a composition contains.
- [trackWithTrackID:](track%28withtrackid_%29.md): Returns a track that contains the specified identifier.
- [tracksWithMediaCharacteristic:](tracks%28withmediacharacteristic_%29.md): Returns tracks that contain media of a specified characteristic.
