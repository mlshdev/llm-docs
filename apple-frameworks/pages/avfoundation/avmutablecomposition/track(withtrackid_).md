> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutablecomposition/track(withtrackid:)](https://developer.apple.com/documentation/avfoundation/avmutablecomposition/track(withtrackid:))

# track(withTrackID:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a track that contains the specified identifier.

## Declaration

```swift
func track(withTrackID trackID: CMPersistentTrackID) -> AVMutableCompositionTrack?
```

## Parameters

- `trackID`: The persistent track identifier.

<a id="return-value"></a>

## Return Value

A composition track or `nil` if no track is available.

<a id="Discussion"></a>

## Discussion

Apple discourages using this method. Load a track asynchronously using [loadTrack(withTrackID:completionHandler:)](loadtrack%28withtrackid_completionhandler_%29.md) instead.

## See Also

### Accessing tracks

- [tracks](tracks.md): The tracks that a composition contains.
- [tracks(withMediaType:)](tracks%28withmediatype_%29.md): Returns tracks that contain media of a specified type.
- [tracks(withMediaCharacteristic:)](tracks%28withmediacharacteristic_%29.md): Returns tracks that contain media of a specified characteristic.

# trackWithTrackID: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a track that contains the specified identifier.

## Declaration

```objectivec
- (AVMutableCompositionTrack *) trackWithTrackID:(CMPersistentTrackID) trackID;
```

## Parameters

- `trackID`: The persistent track identifier.

<a id="return-value"></a>

## Return Value

A composition track or `nil` if no track is available.

<a id="Discussion"></a>

## Discussion

Apple discourages using this method. Load a track asynchronously using [loadTrackWithTrackID:completionHandler:](loadtrack%28withtrackid_completionhandler_%29.md) instead.

## See Also

### Accessing tracks

- [tracks](tracks.md): The tracks that a composition contains.
- [tracksWithMediaType:](tracks%28withmediatype_%29.md): Returns tracks that contain media of a specified type.
- [tracksWithMediaCharacteristic:](tracks%28withmediacharacteristic_%29.md): Returns tracks that contain media of a specified characteristic.
