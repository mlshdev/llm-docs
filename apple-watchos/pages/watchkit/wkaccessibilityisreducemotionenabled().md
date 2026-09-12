> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkaccessibilityisreducemotionenabled()](https://developer.apple.com/documentation/watchkit/wkaccessibilityisreducemotionenabled())

# WKAccessibilityIsReduceMotionEnabled() (Swift)

**Framework:** WatchKit  
**Kind:** Function  
**Availability:** watchOS 4.0+

Returns a Boolean value indicating whether reduced motion is enabled.

## Declaration

```swift
func WKAccessibilityIsReduceMotionEnabled() -> Bool
```

<a id="Discussion"></a>

## Discussion

You can use this function to customize your application’s UI when reduced motion is enabled. Note that you can also listen for the [WKAccessibilityReduceMotionStatusDidChange](https://developer.apple.com/documentation/foundation/nsnotification/name-swift.struct/wkaccessibilityreducemotionstatusdidchange) (Swift) or [WKAccessibilityReduceMotionStatusDidChangeNotification](wkaccessibilityreducemotionstatusdidchangenotification.md) (Objective-C) notification to find out when VoiceOver starts and stops.

## See Also

### User interface basics

- [Building watchOS app Interfaces Using the Storyboard](building-watchos-app-interfaces-using-the-storyboard.md): Create the user interface for your watchOS app by nesting stacks.
- [WKInterfaceObject](wkinterfaceobject.md): An object that provides information that is common to all interface objects in your watchOS app.
- [WKInterfaceController](wkinterfacecontroller.md): A class that provides the infrastructure for managing the interface in a watchOS app.
- [WKAlertAction](wkalertaction.md): An object that encapsulates information about a button displayed in an alert or action sheet.
- [WKAccessibilityImageRegion](wkaccessibilityimageregion.md): An object that defines a portion of an image that you want to call out separately to an assistive app.
- [WKAccessibilityIsVoiceOverRunning()](wkaccessibilityisvoiceoverrunning%28%29.md): Returns a Boolean value indicating whether VoiceOver is running.

# WKAccessibilityIsReduceMotionEnabled (Objective-C)

**Framework:** WatchKit  
**Kind:** Function  
**Availability:** watchOS 4.0+

Returns a Boolean value indicating whether reduced motion is enabled.

## Declaration

```objectivec
extern BOOL WKAccessibilityIsReduceMotionEnabled();
```

<a id="Discussion"></a>

## Discussion

You can use this function to customize your application’s UI when reduced motion is enabled. Note that you can also listen for the [WKAccessibilityReduceMotionStatusDidChange](https://developer.apple.com/documentation/foundation/nsnotification/name-swift.struct/wkaccessibilityreducemotionstatusdidchange) (Swift) or [WKAccessibilityReduceMotionStatusDidChangeNotification](wkaccessibilityreducemotionstatusdidchangenotification.md) (Objective-C) notification to find out when VoiceOver starts and stops.

## See Also

### User interface basics

- [Building watchOS app Interfaces Using the Storyboard](building-watchos-app-interfaces-using-the-storyboard.md): Create the user interface for your watchOS app by nesting stacks.
- [WKInterfaceObject](wkinterfaceobject.md): An object that provides information that is common to all interface objects in your watchOS app.
- [WKInterfaceController](wkinterfacecontroller.md): A class that provides the infrastructure for managing the interface in a watchOS app.
- [WKAlertAction](wkalertaction.md): An object that encapsulates information about a button displayed in an alert or action sheet.
- [WKAccessibilityImageRegion](wkaccessibilityimageregion.md): An object that defines a portion of an image that you want to call out separately to an assistive app.
- [WKAccessibilityIsVoiceOverRunning](wkaccessibilityisvoiceoverrunning%28%29.md): Returns a Boolean value indicating whether VoiceOver is running.
