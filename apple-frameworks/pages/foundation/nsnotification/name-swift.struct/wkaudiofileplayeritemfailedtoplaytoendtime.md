> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsnotification/name-swift.struct/wkaudiofileplayeritemfailedtoplaytoendtime](https://developer.apple.com/documentation/foundation/nsnotification/name-swift.struct/wkaudiofileplayeritemfailedtoplaytoendtime)

# WKAudioFilePlayerItemFailedToPlayToEndTime

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** watchOS 2.0+ (deprecated in 6.0)

A notification that the item failed to play to its end.

> Use the [AVFoundation](../../../avfoundation.md) framework’s [AVPlayer](../../../avfoundation/avplayer.md) and [AVQueuePlayer](../../../avfoundation/avqueueplayer.md) classes instead.

## Declaration

```swift
static let WKAudioFilePlayerItemFailedToPlayToEndTime: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

The notification’s object is the player item. There is no `userInfo` dictionary.

## See Also

### WatchKit

- [WKAccessibilityReduceMotionStatusDidChange](wkaccessibilityreducemotionstatusdidchange.md): Tells the interface controller that the reduce motion status has changed.
- [WKAudioFilePlayerItemDidPlayToEndTime](wkaudiofileplayeritemdidplaytoendtime.md): Deprecated. A notification that the item has played successfully to its end.
- [WKAudioFilePlayerItemTimeJumped](wkaudiofileplayeritemtimejumped.md): Deprecated. A notification that the item’s current time has changed discontinuously.
