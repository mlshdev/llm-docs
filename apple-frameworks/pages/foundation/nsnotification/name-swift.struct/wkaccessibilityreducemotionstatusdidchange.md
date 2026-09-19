> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/nsnotification/name-swift.struct/wkaccessibilityreducemotionstatusdidchange

# WKAccessibilityReduceMotionStatusDidChange

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** watchOS 4.0+

Tells the interface controller that the reduce motion status has changed.

## Declaration

```swift
static let WKAccessibilityReduceMotionStatusDidChange: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

Use this notification to customize your application’s user interface for when reduced motion is enabled. You can also use the [WKAccessibilityIsReduceMotionEnabled()](https://developer.apple.com/documentation/watchkit/wkaccessibilityisreducemotionenabled%28%29) function to determine whether reduced motion is enabled.

Observe this notification using the default notification center. This notification doesn’t include a parameter.

## See Also

### WatchKit

- [WKAudioFilePlayerItemDidPlayToEndTime](wkaudiofileplayeritemdidplaytoendtime.md): Deprecated. A notification that the item has played successfully to its end.
- [WKAudioFilePlayerItemFailedToPlayToEndTime](wkaudiofileplayeritemfailedtoplaytoendtime.md): Deprecated. A notification that the item failed to play to its end.
- [WKAudioFilePlayerItemTimeJumped](wkaudiofileplayeritemtimejumped.md): Deprecated. A notification that the item’s current time has changed discontinuously.
