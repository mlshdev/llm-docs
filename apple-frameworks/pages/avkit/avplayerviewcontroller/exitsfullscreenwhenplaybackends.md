> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avplayerviewcontroller/exitsfullscreenwhenplaybackends](https://developer.apple.com/documentation/avkit/avplayerviewcontroller/exitsfullscreenwhenplaybackends)

# exitsFullScreenWhenPlaybackEnds (Swift)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean value that indicates whether the player exits full-screen mode when playback ends.

## Declaration

```swift
var exitsFullScreenWhenPlaybackEnds: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If you enqueue multiple player items, the player exits full-screen mode after it plays all remaining items in the queue.

The default value is `false`.

## See Also

### Managing full-screen behavior

- [entersFullScreenWhenPlaybackBegins](entersfullscreenwhenplaybackbegins.md): A Boolean value that determines whether the player automatically displays in full screen when someone taps the Play button.

# exitsFullScreenWhenPlaybackEnds (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean value that indicates whether the player exits full-screen mode when playback ends.

## Declaration

```objectivec
@property (nonatomic) BOOL exitsFullScreenWhenPlaybackEnds;
```

<a id="Discussion"></a>

## Discussion

If you enqueue multiple player items, the player exits full-screen mode after it plays all remaining items in the queue.

The default value is `false`.

## See Also

### Managing full-screen behavior

- [entersFullScreenWhenPlaybackBegins](entersfullscreenwhenplaybackbegins.md): A Boolean value that determines whether the player automatically displays in full screen when someone taps the Play button.
