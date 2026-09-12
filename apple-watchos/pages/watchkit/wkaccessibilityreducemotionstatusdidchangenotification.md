> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkaccessibilityreducemotionstatusdidchangenotification](https://developer.apple.com/documentation/watchkit/wkaccessibilityreducemotionstatusdidchangenotification)

# WKAccessibilityReduceMotionStatusDidChangeNotification

**Interface language:** Objective-C

**Framework:** WatchKit  
**Kind:** Global Variable  
**Availability:** watchOS 4.0+

Tells the interface controller that the reduce motion status has changed.

## Declaration

```objectivec
extern NSString * const WKAccessibilityReduceMotionStatusDidChangeNotification;
```

<a id="Discussion"></a>

## Discussion

Use this notification to customize your application’s user interface for when reduced motion is enabled. You can also use the [WKAccessibilityIsReduceMotionEnabled](wkaccessibilityisreducemotionenabled%28%29.md) function to determine whether reduced motion is enabled.

Observe this notification using the default notification center. This notification doesn’t include a parameter.

## See Also

### Managing Notifications

- [WKAccessibilityVoiceOverStatusChanged](wkaccessibilityvoiceoverstatuschanged.md): Tells the interface controller that the VoiceOver status has changed.
