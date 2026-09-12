> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avplayerviewcontroller/allowspictureinpictureplayback](https://developer.apple.com/documentation/avkit/avplayerviewcontroller/allowspictureinpictureplayback)

# allowsPictureInPicturePlayback (Swift)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

A Boolean value that indicates whether the player allows Picture in Picture playback.

## Declaration

```swift
var allowsPictureInPicturePlayback: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Set this value to `false` to disable Picture in Picture playback. The default value is `true`.

## See Also

### Configuring Picture in Picture

- [canStartPictureInPictureAutomaticallyFromInline](canstartpictureinpictureautomaticallyfrominline.md): A Boolean value that indicates whether Picture in Picture starts automatically when transitioning to the background when the view controller presents its content inline.

# allowsPictureInPicturePlayback (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

A Boolean value that indicates whether the player allows Picture in Picture playback.

## Declaration

```objectivec
@property (nonatomic) BOOL allowsPictureInPicturePlayback;
```

<a id="Discussion"></a>

## Discussion

Set this value to `false` to disable Picture in Picture playback. The default value is `true`.

## See Also

### Configuring Picture in Picture

- [canStartPictureInPictureAutomaticallyFromInline](canstartpictureinpictureautomaticallyfrominline.md): A Boolean value that indicates whether Picture in Picture starts automatically when transitioning to the background when the view controller presents its content inline.
