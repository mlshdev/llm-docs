> Snapshot-pinned source payload for Apple watchOS snapshot-2bb3946a9b15; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/watchkit/wkaccessibilityvoiceoverstatuschanged

# WKAccessibilityVoiceOverStatusChanged (Swift)

**Framework:** WatchKit  
**Kind:** Global Variable  
**Availability:** watchOS 2.0+

Tells the interface controller that the VoiceOver status has changed.

## Declaration

```swift
let WKAccessibilityVoiceOverStatusChanged: String
```

<a id="Discussion"></a>

## Discussion

Use this notification to customize your application’s user interface for VoiceOver users. You can also use the [isVoiceOverRunning](https://developer.apple.com/documentation/uikit/uiaccessibility/isvoiceoverrunning) function to determine whether VoiceOver is currently running.

Observe this notification using the default notification center. This notification doesn’t include a parameter.

# WKAccessibilityVoiceOverStatusChanged (Objective-C)

**Framework:** WatchKit  
**Kind:** Global Variable  
**Availability:** watchOS 2.0+

Tells the interface controller that the VoiceOver status has changed.

## Declaration

```objectivec
extern NSString * const WKAccessibilityVoiceOverStatusChanged;
```

<a id="Discussion"></a>

## Discussion

Use this notification to customize your application’s user interface for VoiceOver users. You can also use the [UIAccessibilityIsVoiceOverRunning](https://developer.apple.com/documentation/uikit/uiaccessibility/isvoiceoverrunning) function to determine whether VoiceOver is currently running.

Observe this notification using the default notification center. This notification doesn’t include a parameter.

## See Also

### Managing Notifications

- [WKAccessibilityReduceMotionStatusDidChangeNotification](wkaccessibilityreducemotionstatusdidchangenotification.md): Tells the interface controller that the reduce motion status has changed.
