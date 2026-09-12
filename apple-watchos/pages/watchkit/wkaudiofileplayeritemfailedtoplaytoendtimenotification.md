> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkaudiofileplayeritemfailedtoplaytoendtimenotification](https://developer.apple.com/documentation/watchkit/wkaudiofileplayeritemfailedtoplaytoendtimenotification)

# WKAudioFilePlayerItemFailedToPlayToEndTimeNotification

**Interface language:** Objective-C

**Framework:** WatchKit  
**Kind:** Global Variable  
**Availability:** watchOS 2.0+ (deprecated in 6.0)

A notification that the item failed to play to its end.

> Use the [AVFoundation](https://developer.apple.com/documentation/avfoundation) framework’s [AVPlayer](https://developer.apple.com/documentation/avfoundation/avplayer) and [AVQueuePlayer](https://developer.apple.com/documentation/avfoundation/avqueueplayer) classes instead.

## Declaration

```objectivec
extern NSString * const WKAudioFilePlayerItemFailedToPlayToEndTimeNotification;
```

<a id="Discussion"></a>

## Discussion

The notification’s object is the player item. There is no `userInfo` dictionary.

## See Also

### Receiving Notifications

- [WKAudioFilePlayerItemTimeJumpedNotification](wkaudiofileplayeritemtimejumpednotification.md): Deprecated. A notification that the item’s current time has changed discontinuously.
- [WKAudioFilePlayerItemDidPlayToEndTimeNotification](wkaudiofileplayeritemdidplaytoendtimenotification.md): Deprecated. A notification that the item has played successfully to its end.
