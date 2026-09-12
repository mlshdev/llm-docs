> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nslocale/currentlocaledidchangenotification](https://developer.apple.com/documentation/foundation/nslocale/currentlocaledidchangenotification)

# currentLocaleDidChangeNotification (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A notification that indicates that the user’s locale changed.

## Declaration

```swift
class let currentLocaleDidChangeNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

Register for this notification if your app displays content (dates, times, numbers, and so on) that is affected by the locale. Use the notification to trigger updates to your app’s interface.

## See Also

### Related Documentation

- [NSNotification](../nsnotification.md): A container for information broadcast through a notification center to all registered observers.

### Getting the User’s Locale

- [autoupdatingCurrent](autoupdatingcurrent.md): A locale which tracks the user’s current preferences.
- [current](current.md): A locale that represents the user’s region settings at the time the property is read.
- [system](system.md): A locale representing the generic root values with little localization.

# NSCurrentLocaleDidChangeNotification (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A notification that indicates that the user’s locale changed.

## Declaration

```objectivec
extern NSNotificationName const NSCurrentLocaleDidChangeNotification;
```

<a id="Discussion"></a>

## Discussion

Register for this notification if your app displays content (dates, times, numbers, and so on) that is affected by the locale. Use the notification to trigger updates to your app’s interface.

## See Also

### Related Documentation

- [NSNotification](../nsnotification.md): A container for information broadcast through a notification center to all registered observers.

### Getting the User’s Locale

- [autoupdatingCurrentLocale](autoupdatingcurrent.md): A locale which tracks the user’s current preferences.
- [currentLocale](current.md): A locale that represents the user’s region settings at the time the property is read.
- [systemLocale](system.md): A locale representing the generic root values with little localization.
