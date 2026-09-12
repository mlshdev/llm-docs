> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photosui/phlivephotoview/ismuted](https://developer.apple.com/documentation/photosui/phlivephotoview/ismuted)

# isMuted (Swift)

**Framework:** PhotosUI  
**Kind:** Instance Property  
**Availability:** iOS 9.1+ · iPadOS 9.1+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

A Boolean value that determines whether the view plays the audio content of its Live Photo.

## Declaration

```swift
var isMuted: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is `false`, indicating that the view plays audio content along with the motion content of its Live Photo. Change this value to `true` to play motion content but not audio content.

## See Also

### Managing Playback

- [playbackGestureRecognizer](playbackgesturerecognizer.md): A gesture recognizer that controls playback of the Live Photo in the view.
- [audioVolume](audiovolume.md): The audio gain to apply to the Live Photo’s movie content during playback.

# muted (Objective-C)

**Framework:** PhotosUI  
**Kind:** Instance Property  
**Availability:** iOS 9.1+ · iPadOS 9.1+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

A Boolean value that determines whether the view plays the audio content of its Live Photo.

## Declaration

```objectivec
@property (nonatomic, assign, readwrite, getter=isMuted) BOOL muted;
```

<a id="Discussion"></a>

## Discussion

The default value is `false`, indicating that the view plays audio content along with the motion content of its Live Photo. Change this value to `true` to play motion content but not audio content.

## See Also

### Managing Playback

- [playbackGestureRecognizer](playbackgesturerecognizer.md): A gesture recognizer that controls playback of the Live Photo in the view.
- [audioVolume](audiovolume.md): The audio gain to apply to the Live Photo’s movie content during playback.
