> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotifications/unnotificationresponse](https://developer.apple.com/documentation/usernotifications/unnotificationresponse)

# UNNotificationResponse (Swift)

**Framework:** User Notifications  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+ · watchOS 3.0+

The user’s response to an actionable notification.

## Declaration

```swift
class UNNotificationResponse
```

<a id="overview"></a>

## Overview

When the user interacts with a delivered notification, the system delivers a [UNNotificationResponse](unnotificationresponse.md) object to your app so that you can process the response. Users can interact with delivered notifications in many ways. If the notification’s category had associated action buttons, they can select one of those buttons. Users can also dismiss the notification without selecting one of your actions and they can open your app. A response object tells you which option the user selected.

You don’t create [UNNotificationResponse](unnotificationresponse.md) objects yourself. Instead, the shared user notification center object creates them and delivers them to the [userNotificationCenter(\_:didReceive:withCompletionHandler:)](unusernotificationcenterdelegate/usernotificationcenter%28__didreceive_withcompletionhandler_%29.md) method of its delegate object. Use that method to extract any needed information from the response object and take appropriate action.

For more information about responding to actions, see [Handling notifications and notification-related actions](handling-notifications-and-notification-related-actions.md).

## Topics

### Getting the Response Information

- [actionIdentifier](unnotificationresponse/actionidentifier.md): The identifier string of the action that the user selected.
- [notification](unnotificationresponse/notification.md): The notification to which the user responded.
- [targetScene](unnotificationresponse/targetscene.md): The scene where the system reflects the user’s response to a notification.
- [UNNotificationDefaultActionIdentifier](unnotificationdefaultactionidentifier.md): An action that indicates the user opened the app from the notification interface.
- [UNNotificationDismissActionIdentifier](unnotificationdismissactionidentifier.md): The action that indicates the user explicitly dismissed the notification interface.

### Initializers

- [init(coder:)](unnotificationresponse/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [UNTextInputNotificationResponse](untextinputnotificationresponse.md)

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

### Notification responses

- [Handling notifications and notification-related actions](handling-notifications-and-notification-related-actions.md): Respond to user interactions with the system’s notification interfaces, including handling your app’s custom actions.
- [UNTextInputNotificationResponse](untextinputnotificationresponse.md): The user’s response to an actionable notification, including any custom text that the user typed or dictated.

# UNNotificationResponse (Objective-C)

**Framework:** User Notifications  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+ · watchOS 3.0+

The user’s response to an actionable notification.

## Declaration

```objectivec
@interface UNNotificationResponse : NSObject
```

<a id="overview"></a>

## Overview

When the user interacts with a delivered notification, the system delivers a [UNNotificationResponse](unnotificationresponse.md) object to your app so that you can process the response. Users can interact with delivered notifications in many ways. If the notification’s category had associated action buttons, they can select one of those buttons. Users can also dismiss the notification without selecting one of your actions and they can open your app. A response object tells you which option the user selected.

You don’t create [UNNotificationResponse](unnotificationresponse.md) objects yourself. Instead, the shared user notification center object creates them and delivers them to the [userNotificationCenter:didReceiveNotificationResponse:withCompletionHandler:](unusernotificationcenterdelegate/usernotificationcenter%28__didreceive_withcompletionhandler_%29.md) method of its delegate object. Use that method to extract any needed information from the response object and take appropriate action.

For more information about responding to actions, see [Handling notifications and notification-related actions](handling-notifications-and-notification-related-actions.md).

## Topics

### Getting the Response Information

- [actionIdentifier](unnotificationresponse/actionidentifier.md): The identifier string of the action that the user selected.
- [notification](unnotificationresponse/notification.md): The notification to which the user responded.
- [targetScene](unnotificationresponse/targetscene.md): The scene where the system reflects the user’s response to a notification.
- [UNNotificationDefaultActionIdentifier](unnotificationdefaultactionidentifier.md): An action that indicates the user opened the app from the notification interface.
- [UNNotificationDismissActionIdentifier](unnotificationdismissactionidentifier.md): The action that indicates the user explicitly dismissed the notification interface.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [UNTextInputNotificationResponse](untextinputnotificationresponse.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Notification responses

- [Handling notifications and notification-related actions](handling-notifications-and-notification-related-actions.md): Respond to user interactions with the system’s notification interfaces, including handling your app’s custom actions.
- [UNTextInputNotificationResponse](untextinputnotificationresponse.md): The user’s response to an actionable notification, including any custom text that the user typed or dictated.
