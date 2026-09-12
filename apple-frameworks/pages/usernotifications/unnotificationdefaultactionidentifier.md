> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotifications/unnotificationdefaultactionidentifier](https://developer.apple.com/documentation/usernotifications/unnotificationdefaultactionidentifier)

# UNNotificationDefaultActionIdentifier (Swift)

**Framework:** User Notifications  
**Kind:** Global Variable  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+ · watchOS 3.0+

An action that indicates the user opened the app from the notification interface.

## Declaration

```swift
let UNNotificationDefaultActionIdentifier: String
```

<a id="Discussion"></a>

## Discussion

The delivery of this action doesn’t require any special configuration of notification categories. Use the [userNotificationCenter(\_:didReceive:withCompletionHandler:)](unusernotificationcenterdelegate/usernotificationcenter%28__didreceive_withcompletionhandler_%29.md) method of your delegate object to receive this action.

## See Also

### Getting the Response Information

- [actionIdentifier](unnotificationresponse/actionidentifier.md): The identifier string of the action that the user selected.
- [notification](unnotificationresponse/notification.md): The notification to which the user responded.
- [targetScene](unnotificationresponse/targetscene.md): The scene where the system reflects the user’s response to a notification.
- [UNNotificationDismissActionIdentifier](unnotificationdismissactionidentifier.md): The action that indicates the user explicitly dismissed the notification interface.

# UNNotificationDefaultActionIdentifier (Objective-C)

**Framework:** User Notifications  
**Kind:** Global Variable  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+ · watchOS 3.0+

An action that indicates the user opened the app from the notification interface.

## Declaration

```objectivec
extern NSString * const UNNotificationDefaultActionIdentifier;
```

<a id="Discussion"></a>

## Discussion

The delivery of this action doesn’t require any special configuration of notification categories. Use the [userNotificationCenter:didReceiveNotificationResponse:withCompletionHandler:](unusernotificationcenterdelegate/usernotificationcenter%28__didreceive_withcompletionhandler_%29.md) method of your delegate object to receive this action.

## See Also

### Getting the Response Information

- [actionIdentifier](unnotificationresponse/actionidentifier.md): The identifier string of the action that the user selected.
- [notification](unnotificationresponse/notification.md): The notification to which the user responded.
- [targetScene](unnotificationresponse/targetscene.md): The scene where the system reflects the user’s response to a notification.
- [UNNotificationDismissActionIdentifier](unnotificationdismissactionidentifier.md): The action that indicates the user explicitly dismissed the notification interface.
