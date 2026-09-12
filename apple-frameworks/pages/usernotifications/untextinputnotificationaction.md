> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotifications/untextinputnotificationaction](https://developer.apple.com/documentation/usernotifications/untextinputnotificationaction)

# UNTextInputNotificationAction (Swift)

**Framework:** User Notifications  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+ · watchOS 3.0+

An action that accepts user-typed text.

## Declaration

```swift
class UNTextInputNotificationAction
```

## Mentioned In

- [Declaring your actionable notification types](declaring-your-actionable-notification-types.md)

<a id="overview"></a>

## Overview

Use [UNTextInputNotificationAction](untextinputnotificationaction.md) objects to define an action that allows the user to provide a custom text-based response. When the user selects an action of this type, the system displays controls for the user to enter or dictate the text content. That text is then included in the response object that’s delivered to your app.

For information on how to define actions and categories, see [Declaring your actionable notification types](declaring-your-actionable-notification-types.md).

## Topics

### Essentials

- [init(identifier:title:options:textInputButtonTitle:textInputPlaceholder:)](untextinputnotificationaction/init%28identifier_title_options_textinputbuttontitle_textinputplaceholder_%29.md): Creates an action object that accepts text input from the user.
- [init(identifier:title:options:icon:textInputButtonTitle:textInputPlaceholder:)](untextinputnotificationaction/init%28identifier_title_options_icon_textinputbuttontitle_textinputplaceholder_%29.md): Creates an action object with an icon that accepts text input from the user.

### Getting Information

- [textInputButtonTitle](untextinputnotificationaction/textinputbuttontitle.md): The localized title of the text input button that the system displays to the user.
- [textInputPlaceholder](untextinputnotificationaction/textinputplaceholder.md): The placeholder text that the system localizes and displays in the text input field.

## Relationships

### Inherits From

- [UNNotificationAction](unnotificationaction.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Notification categories and user actions

- [Declaring your actionable notification types](declaring-your-actionable-notification-types.md): Differentiate your notifications and add action buttons to the notification interface.
- [UNNotificationCategory](unnotificationcategory.md): A type of notification your app supports and the custom actions that the system displays.
- [UNNotificationAction](unnotificationaction.md): A task your app performs in response to a notification that the system delivers.

# UNTextInputNotificationAction (Objective-C)

**Framework:** User Notifications  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+ · watchOS 3.0+

An action that accepts user-typed text.

## Declaration

```objectivec
@interface UNTextInputNotificationAction : UNNotificationAction
```

## Mentioned In

- [Declaring your actionable notification types](declaring-your-actionable-notification-types.md)

<a id="overview"></a>

## Overview

Use [UNTextInputNotificationAction](untextinputnotificationaction.md) objects to define an action that allows the user to provide a custom text-based response. When the user selects an action of this type, the system displays controls for the user to enter or dictate the text content. That text is then included in the response object that’s delivered to your app.

For information on how to define actions and categories, see [Declaring your actionable notification types](declaring-your-actionable-notification-types.md).

## Topics

### Essentials

- [actionWithIdentifier:title:options:textInputButtonTitle:textInputPlaceholder:](untextinputnotificationaction/init%28identifier_title_options_textinputbuttontitle_textinputplaceholder_%29.md): Creates an action object that accepts text input from the user.
- [actionWithIdentifier:title:options:icon:textInputButtonTitle:textInputPlaceholder:](untextinputnotificationaction/init%28identifier_title_options_icon_textinputbuttontitle_textinputplaceholder_%29.md): Creates an action object with an icon that accepts text input from the user.

### Getting Information

- [textInputButtonTitle](untextinputnotificationaction/textinputbuttontitle.md): The localized title of the text input button that the system displays to the user.
- [textInputPlaceholder](untextinputnotificationaction/textinputplaceholder.md): The placeholder text that the system localizes and displays in the text input field.

## Relationships

### Inherits From

- [UNNotificationAction](unnotificationaction.md)

## See Also

### Notification categories and user actions

- [Declaring your actionable notification types](declaring-your-actionable-notification-types.md): Differentiate your notifications and add action buttons to the notification interface.
- [UNNotificationCategory](unnotificationcategory.md): A type of notification your app supports and the custom actions that the system displays.
- [UNNotificationAction](unnotificationaction.md): A task your app performs in response to a notification that the system delivers.
