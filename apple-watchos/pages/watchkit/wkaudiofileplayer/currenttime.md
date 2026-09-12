> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkaudiofileplayer/currenttime](https://developer.apple.com/documentation/watchkit/wkaudiofileplayer/currenttime)

# currentTime (Swift)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 2.0+ (deprecated in 6.0)

The elapsed time for the current playing item.

## Declaration

```swift
var currentTime: TimeInterval { get }
```

<a id="Discussion"></a>

## Discussion

This property refers to how much of the audio file has already been played. The value in this property is updated during playback to reflect the current position of the playhead.

The value of this property is valid only when the player item’s status is [WKAudioFilePlayerStatus.readyToPlay](../wkaudiofileplayerstatus/readytoplay.md).

# currentTime (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 2.0+ (deprecated in 6.0)

The elapsed time for the current playing item.

## Declaration

```objectivec
@property (nonatomic, readonly) NSTimeInterval currentTime;
```

<a id="Discussion"></a>

## Discussion

This property refers to how much of the audio file has already been played. The value in this property is updated during playback to reflect the current position of the playhead.

The value of this property is valid only when the player item’s status is [WKAudioFilePlayerStatusReadyToPlay](../wkaudiofileplayerstatus/readytoplay.md).
