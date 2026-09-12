> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutablecomposition/tracks](https://developer.apple.com/documentation/avfoundation/avmutablecomposition/tracks)

# tracks (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

The tracks that a composition contains.

## Declaration

```swift
var tracks: [AVMutableCompositionTrack] { get }
```

<a id="Discussion"></a>

## Discussion

In a mutable composition, the tracks are instances of [AVMutableCompositionTrack](../avmutablecompositiontrack.md), whereas in [AVComposition](../avcomposition.md) the tracks are instances of [AVCompositionTrack](../avcompositiontrack.md).

## See Also

### Accessing tracks

- [track(withTrackID:)](track%28withtrackid_%29.md): Returns a track that contains the specified identifier.
- [tracks(withMediaType:)](tracks%28withmediatype_%29.md): Returns tracks that contain media of a specified type.
- [tracks(withMediaCharacteristic:)](tracks%28withmediacharacteristic_%29.md): Returns tracks that contain media of a specified characteristic.

# tracks (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

The tracks that a composition contains.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<AVMutableCompositionTrack *> * tracks;
```

<a id="Discussion"></a>

## Discussion

In a mutable composition, the tracks are instances of [AVMutableCompositionTrack](../avmutablecompositiontrack.md), whereas in [AVComposition](../avcomposition.md) the tracks are instances of [AVCompositionTrack](../avcompositiontrack.md).

## See Also

### Accessing tracks

- [trackWithTrackID:](track%28withtrackid_%29.md): Returns a track that contains the specified identifier.
- [tracksWithMediaType:](tracks%28withmediatype_%29.md): Returns tracks that contain media of a specified type.
- [tracksWithMediaCharacteristic:](tracks%28withmediacharacteristic_%29.md): Returns tracks that contain media of a specified characteristic.
