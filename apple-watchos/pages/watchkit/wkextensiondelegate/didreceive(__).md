> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkextensiondelegate/didreceive(_:)](https://developer.apple.com/documentation/watchkit/wkextensiondelegate/didreceive(_:))

# didReceive(\_:) (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+ (deprecated in 3.0)

Tells the delegate that a local notification was triggered.

> Instead of using this method, create a delegate object that adopts the [UNUserNotificationCenterDelegate](https://developer.apple.com/documentation/usernotifications/unusernotificationcenterdelegate) protocol and implement the `userNotificationCenter:willPresentNotification:withCompletionHandler:` and `userNotificationCenter:didReceiveNotificationResponse:withCompletionHandler:` methods. Assign this object to the `delegate` property of the singleton [UNUserNotificationCenter](https://developer.apple.com/documentation/usernotifications/unusernotificationcenter) object.

## Declaration

```swift
optional func didReceive(_ notification: UILocalNotification)
```

## Parameters

- `notification`: The local notification object corresponding to the event that was triggered.

<a id="Discussion"></a>

## Discussion

If a local notification arrives while your app is active, WatchKit calls this method to deliver the notification payload. Use this method to respond to the notification. For example, you might use this method to update your app’s interface or display a message to the user.

WatchKit may call this method multiple times. If a new local notification with the same category arrives while your app is active, WatchKit calls the method again with the new payload.

## See Also

### Deprecated Methods

- [didReceiveRemoteNotification(\_:)](didreceiveremotenotification%28__%29.md): Deprecated. Tells the delegate that a remote notification arrived.
- [handleAction(withIdentifier:forRemoteNotification:)](handleaction%28withidentifier_forremotenotification_%29.md): Deprecated. Delivers a remote notification payload and a user-selected action to the app.
- [handleAction(withIdentifier:forRemoteNotification:withResponseInfo:)](handleaction%28withidentifier_forremotenotification_withresponseinfo_%29.md): Deprecated. Delivers a remote notification payload and user response information to the app.
- [handleAction(withIdentifier:for:)](handleaction%28withidentifier_for_%29.md): Deprecated. Delivers a local notification payload and a user-selected action to the app.
- [handleAction(withIdentifier:for:withResponseInfo:)](handleaction%28withidentifier_for_withresponseinfo_%29.md): Deprecated. Delivers a local notification payload and user response information to the app.

# didReceiveLocalNotification: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+ (deprecated in 3.0)

Tells the delegate that a local notification was triggered.

> Instead of using this method, create a delegate object that adopts the [UNUserNotificationCenterDelegate](https://developer.apple.com/documentation/usernotifications/unusernotificationcenterdelegate) protocol and implement the `userNotificationCenter:willPresentNotification:withCompletionHandler:` and `userNotificationCenter:didReceiveNotificationResponse:withCompletionHandler:` methods. Assign this object to the `delegate` property of the singleton [UNUserNotificationCenter](https://developer.apple.com/documentation/usernotifications/unusernotificationcenter) object.

## Declaration

```objectivec
- (void) didReceiveLocalNotification:(UILocalNotification *) notification;
```

## Parameters

- `notification`: The local notification object corresponding to the event that was triggered.

<a id="Discussion"></a>

## Discussion

If a local notification arrives while your app is active, WatchKit calls this method to deliver the notification payload. Use this method to respond to the notification. For example, you might use this method to update your app’s interface or display a message to the user.

WatchKit may call this method multiple times. If a new local notification with the same category arrives while your app is active, WatchKit calls the method again with the new payload.

## See Also

### Deprecated Methods

- [didReceiveRemoteNotification:](didreceiveremotenotification%28__%29.md): Deprecated. Tells the delegate that a remote notification arrived.
- [handleActionWithIdentifier:forRemoteNotification:](handleaction%28withidentifier_forremotenotification_%29.md): Deprecated. Delivers a remote notification payload and a user-selected action to the app.
- [handleActionWithIdentifier:forRemoteNotification:withResponseInfo:](handleaction%28withidentifier_forremotenotification_withresponseinfo_%29.md): Deprecated. Delivers a remote notification payload and user response information to the app.
- [handleActionWithIdentifier:forLocalNotification:](handleaction%28withidentifier_for_%29.md): Deprecated. Delivers a local notification payload and a user-selected action to the app.
- [handleActionWithIdentifier:forLocalNotification:withResponseInfo:](handleaction%28withidentifier_for_withresponseinfo_%29.md): Deprecated. Delivers a local notification payload and user response information to the app.
