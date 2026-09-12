> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkaccessibilityisvoiceoverrunning()](https://developer.apple.com/documentation/watchkit/wkaccessibilityisvoiceoverrunning())

# WKAccessibilityIsVoiceOverRunning() (Swift)

**Framework:** WatchKit  
**Kind:** Function  
**Availability:** watchOS 2.0+

Returns a Boolean value indicating whether VoiceOver is running.

## Declaration

```swift
func WKAccessibilityIsVoiceOverRunning() -> Bool
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if VoiceOver is currently running or [false](https://developer.apple.com/documentation/swift/false) if it is not.

<a id="Discussion"></a>

## Discussion

You can use this function to customize your application’s UI specifically for VoiceOver users. For example, you might want UI elements that usually disappear quickly to persist onscreen for VoiceOver users. Note that you can also listen for the [WKAccessibilityVoiceOverStatusChanged](wkaccessibilityvoiceoverstatuschanged.md) notification to find out when VoiceOver starts and stops.

## See Also

### User interface basics

- [Building watchOS app Interfaces Using the Storyboard](building-watchos-app-interfaces-using-the-storyboard.md): Create the user interface for your watchOS app by nesting stacks.
- [WKInterfaceObject](wkinterfaceobject.md): An object that provides information that is common to all interface objects in your watchOS app.
- [WKInterfaceController](wkinterfacecontroller.md): A class that provides the infrastructure for managing the interface in a watchOS app.
- [WKAlertAction](wkalertaction.md): An object that encapsulates information about a button displayed in an alert or action sheet.
- [WKAccessibilityImageRegion](wkaccessibilityimageregion.md): An object that defines a portion of an image that you want to call out separately to an assistive app.
- [WKAccessibilityIsReduceMotionEnabled()](wkaccessibilityisreducemotionenabled%28%29.md): Returns a Boolean value indicating whether reduced motion is enabled.

# WKAccessibilityIsVoiceOverRunning (Objective-C)

**Framework:** WatchKit  
**Kind:** Function  
**Availability:** watchOS 2.0+

Returns a Boolean value indicating whether VoiceOver is running.

## Declaration

```objectivec
extern BOOL WKAccessibilityIsVoiceOverRunning();
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if VoiceOver is currently running or [false](https://developer.apple.com/documentation/swift/false) if it is not.

<a id="Discussion"></a>

## Discussion

You can use this function to customize your application’s UI specifically for VoiceOver users. For example, you might want UI elements that usually disappear quickly to persist onscreen for VoiceOver users. Note that you can also listen for the [WKAccessibilityVoiceOverStatusChanged](wkaccessibilityvoiceoverstatuschanged.md) notification to find out when VoiceOver starts and stops.

## See Also

### User interface basics

- [Building watchOS app Interfaces Using the Storyboard](building-watchos-app-interfaces-using-the-storyboard.md): Create the user interface for your watchOS app by nesting stacks.
- [WKInterfaceObject](wkinterfaceobject.md): An object that provides information that is common to all interface objects in your watchOS app.
- [WKInterfaceController](wkinterfacecontroller.md): A class that provides the infrastructure for managing the interface in a watchOS app.
- [WKAlertAction](wkalertaction.md): An object that encapsulates information about a button displayed in an alert or action sheet.
- [WKAccessibilityImageRegion](wkaccessibilityimageregion.md): An object that defines a portion of an image that you want to call out separately to an assistive app.
- [WKAccessibilityIsReduceMotionEnabled](wkaccessibilityisreducemotionenabled%28%29.md): Returns a Boolean value indicating whether reduced motion is enabled.
