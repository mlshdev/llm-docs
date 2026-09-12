> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photosui/phlivephotoview/audiovolume](https://developer.apple.com/documentation/photosui/phlivephotoview/audiovolume)

# audioVolume (Swift)

**Framework:** PhotosUI  
**Kind:** Instance Property  
**Availability:** macOS 10.12+

The audio gain to apply to the Live Photo’s movie content during playback.

## Declaration

```swift
var audioVolume: Float { get set }
```

<a id="Discussion"></a>

## Discussion

Values for this property must be between `0.0` and `1.0`, inclusive. A value of `1.0` (the default) plays audio content from the Live Photo at full volume (relative to the system volume). A value of `0.0` is equivalent to setting the [isMuted](ismuted.md) property to `true`.

## See Also

### Managing Playback

- [playbackGestureRecognizer](playbackgesturerecognizer.md): A gesture recognizer that controls playback of the Live Photo in the view.
- [isMuted](ismuted.md): A Boolean value that determines whether the view plays the audio content of its Live Photo.

# audioVolume (Objective-C)

**Framework:** PhotosUI  
**Kind:** Instance Property  
**Availability:** macOS 10.12+

The audio gain to apply to the Live Photo’s movie content during playback.

## Declaration

```objectivec
@property (nonatomic, assign, readwrite) float audioVolume;
```

<a id="Discussion"></a>

## Discussion

Values for this property must be between `0.0` and `1.0`, inclusive. A value of `1.0` (the default) plays audio content from the Live Photo at full volume (relative to the system volume). A value of `0.0` is equivalent to setting the [muted](ismuted.md) property to `true`.

## See Also

### Managing Playback

- [playbackGestureRecognizer](playbackgesturerecognizer.md): A gesture recognizer that controls playback of the Live Photo in the view.
- [muted](ismuted.md): A Boolean value that determines whether the view plays the audio content of its Live Photo.
