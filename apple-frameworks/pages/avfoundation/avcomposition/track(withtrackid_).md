> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcomposition/track(withtrackid:)](https://developer.apple.com/documentation/avfoundation/avcomposition/track(withtrackid:))

# track(withTrackID:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a track that contains the specified identifier.

## Declaration

```swift
func track(withTrackID trackID: CMPersistentTrackID) -> AVCompositionTrack?
```

## Parameters

- `trackID`: The identifier of the track to retrieve.

<a id="return-value"></a>

## Return Value

A composition track, or `nil` if no track with the identifier exists.

<a id="Discussion"></a>

## Discussion

Apple discourages using this method in iOS 15, tvOS 15, macOS 12, and watchOS 8 or later. Load a track asynchronously using [loadTrack(withTrackID:completionHandler:)](loadtrack%28withtrackid_completionhandler_%29.md) instead.

## See Also

### Accessing tracks

- [tracks](tracks.md): The tracks that a composition contains.
- [tracks(withMediaType:)](tracks%28withmediatype_%29.md): Returns tracks that contain media of a specified type.
- [tracks(withMediaCharacteristic:)](tracks%28withmediacharacteristic_%29.md): Returns tracks that contain media of a specified characteristic.
- [unusedTrackID()](unusedtrackid%28%29.md): Returns an identifier that no other tracks in the asset use.

# trackWithTrackID: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a track that contains the specified identifier.

## Declaration

```objectivec
- (AVCompositionTrack *) trackWithTrackID:(CMPersistentTrackID) trackID;
```

## Parameters

- `trackID`: The identifier of the track to retrieve.

<a id="return-value"></a>

## Return Value

A composition track, or `nil` if no track with the identifier exists.

<a id="Discussion"></a>

## Discussion

Apple discourages using this method in iOS 15, tvOS 15, macOS 12, and watchOS 8 or later. Load a track asynchronously using [loadTrackWithTrackID:completionHandler:](loadtrack%28withtrackid_completionhandler_%29.md) instead.

## See Also

### Accessing tracks

- [tracks](tracks.md): The tracks that a composition contains.
- [tracksWithMediaType:](tracks%28withmediatype_%29.md): Returns tracks that contain media of a specified type.
- [tracksWithMediaCharacteristic:](tracks%28withmediacharacteristic_%29.md): Returns tracks that contain media of a specified characteristic.
- [unusedTrackID](unusedtrackid%28%29.md): Returns an identifier that no other tracks in the asset use.
