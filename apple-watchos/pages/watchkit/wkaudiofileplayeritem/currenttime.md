> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkaudiofileplayeritem/currenttime](https://developer.apple.com/documentation/watchkit/wkaudiofileplayeritem/currenttime)

# currentTime (Swift)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 2.0+ (deprecated in 6.0)

The current playback point, measured in seconds, from the beginning of the audio file.

## Declaration

```swift
var currentTime: TimeInterval { get }
```

<a id="Discussion"></a>

## Discussion

This property refers to how much of the audio file has already been played. The value in this property is updated during playback to reflect the current position of the playhead.

The value of this property is valid only when the player item’s status is [WKAudioFilePlayerItemStatus.readyToPlay](../wkaudiofileplayeritemstatus/readytoplay.md).

## See Also

### Managing the Playback Position

- [setCurrentTime(\_:)](setcurrenttime%28__%29.md): Deprecated. Sets the playback point, measured in seconds, from the beginning of the audio file.

# currentTime (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 2.0+ (deprecated in 6.0)

The current playback point, measured in seconds, from the beginning of the audio file.

## Declaration

```objectivec
@property (nonatomic, readonly) NSTimeInterval currentTime;
```

<a id="Discussion"></a>

## Discussion

This property refers to how much of the audio file has already been played. The value in this property is updated during playback to reflect the current position of the playhead.

The value of this property is valid only when the player item’s status is [WKAudioFilePlayerItemStatusReadyToPlay](../wkaudiofileplayeritemstatus/readytoplay.md).

## See Also

### Managing the Playback Position

- [setCurrentTime:](setcurrenttime%28__%29.md): Deprecated. Sets the playback point, measured in seconds, from the beginning of the audio file.
