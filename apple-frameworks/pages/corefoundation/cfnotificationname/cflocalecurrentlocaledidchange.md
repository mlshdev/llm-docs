> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfnotificationname/cflocalecurrentlocaledidchange](https://developer.apple.com/documentation/corefoundation/cfnotificationname/cflocalecurrentlocaledidchange)

# cfLocaleCurrentLocaleDidChange (Swift)

**Framework:** Core Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Identifier for the notification sent if the current locale changes.

## Declaration

```swift
static let cfLocaleCurrentLocaleDidChange: CFNotificationName!
```

<a id="Discussion"></a>

## Discussion

This is a local notification posted when the user changes locale information in the System Preferences panel. Keep in mind that there is no order in how notifications are delivered to observers; frameworks or other parts of your code may also be observing this notification to take their own actions, and these may not have occurred at the time you receive the notification.

There is no object or user info for this notification.

# kCFLocaleCurrentLocaleDidChangeNotification (Objective-C)

**Framework:** Core Foundation  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Identifier for the notification sent if the current locale changes.

## Declaration

```objectivec
extern CFNotificationName const kCFLocaleCurrentLocaleDidChangeNotification;
```

<a id="Discussion"></a>

## Discussion

This is a local notification posted when the user changes locale information in the System Preferences panel. Keep in mind that there is no order in how notifications are delivered to observers; frameworks or other parts of your code may also be observing this notification to take their own actions, and these may not have occurred at the time you receive the notification.

There is no object or user info for this notification.
