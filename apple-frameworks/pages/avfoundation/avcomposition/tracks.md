> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcomposition/tracks](https://developer.apple.com/documentation/avfoundation/avcomposition/tracks)

# tracks (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

The tracks that a composition contains.

## Declaration

```swift
var tracks: [AVCompositionTrack] { get }
```

## See Also

### Accessing tracks

- [track(withTrackID:)](track%28withtrackid_%29.md): Returns a track that contains the specified identifier.
- [tracks(withMediaType:)](tracks%28withmediatype_%29.md): Returns tracks that contain media of a specified type.
- [tracks(withMediaCharacteristic:)](tracks%28withmediacharacteristic_%29.md): Returns tracks that contain media of a specified characteristic.
- [unusedTrackID()](unusedtrackid%28%29.md): Returns an identifier that no other tracks in the asset use.

# tracks (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

The tracks that a composition contains.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<AVCompositionTrack *> * tracks;
```

## See Also

### Accessing tracks

- [trackWithTrackID:](track%28withtrackid_%29.md): Returns a track that contains the specified identifier.
- [tracksWithMediaType:](tracks%28withmediatype_%29.md): Returns tracks that contain media of a specified type.
- [tracksWithMediaCharacteristic:](tracks%28withmediacharacteristic_%29.md): Returns tracks that contain media of a specified characteristic.
- [unusedTrackID](unusedtrackid%28%29.md): Returns an identifier that no other tracks in the asset use.
