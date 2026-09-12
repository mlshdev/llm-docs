> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkextensiondelegate/didreceiveremotenotification(_:)](https://developer.apple.com/documentation/watchkit/wkextensiondelegate/didreceiveremotenotification(_:))

# didReceiveRemoteNotification(\_:) (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+ (deprecated in 3.0)

Tells the delegate that a remote notification arrived.

> Instead of using this method, create a delegate object that adopts the [UNUserNotificationCenterDelegate](https://developer.apple.com/documentation/usernotifications/unusernotificationcenterdelegate) protocol and implement the `userNotificationCenter:willPresentNotification:withCompletionHandler:` and `userNotificationCenter:didReceiveNotificationResponse:withCompletionHandler:` methods. Assign this object to the `delegate` property of the singleton [UNUserNotificationCenter](https://developer.apple.com/documentation/usernotifications/unusernotificationcenter) object.

## Declaration

```swift
optional func didReceiveRemoteNotification(_ userInfo: [AnyHashable : Any])
```

## Parameters

- `userInfo`: The remote notification dictionary. The contents of the dictionary correspond to the contents of the notification payload and are organized in the same way. For information about the contents of the remote notification payload, see [Local and Remote Notification Programming Guide](https://developer.apple.com/library/archive/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/index.html#//apple_ref/doc/uid/TP40008194).

<a id="Discussion"></a>

## Discussion

If a remote notification arrives while your app is active, WatchKit calls this method to deliver the notification payload. Use this method to respond to the notification. For example, you might use this method to update your app’s interface or display a message to the user.

WatchKit may call this method multiple times. If a new remote notification with the same category arrives while your app is active, WatchKit calls the method again with the new payload.

## See Also

### Deprecated Methods

- [didReceive(\_:)](didreceive%28__%29.md): Deprecated. Tells the delegate that a local notification was triggered.
- [handleAction(withIdentifier:forRemoteNotification:)](handleaction%28withidentifier_forremotenotification_%29.md): Deprecated. Delivers a remote notification payload and a user-selected action to the app.
- [handleAction(withIdentifier:forRemoteNotification:withResponseInfo:)](handleaction%28withidentifier_forremotenotification_withresponseinfo_%29.md): Deprecated. Delivers a remote notification payload and user response information to the app.
- [handleAction(withIdentifier:for:)](handleaction%28withidentifier_for_%29.md): Deprecated. Delivers a local notification payload and a user-selected action to the app.
- [handleAction(withIdentifier:for:withResponseInfo:)](handleaction%28withidentifier_for_withresponseinfo_%29.md): Deprecated. Delivers a local notification payload and user response information to the app.

# didReceiveRemoteNotification: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+ (deprecated in 3.0)

Tells the delegate that a remote notification arrived.

> Instead of using this method, create a delegate object that adopts the [UNUserNotificationCenterDelegate](https://developer.apple.com/documentation/usernotifications/unusernotificationcenterdelegate) protocol and implement the `userNotificationCenter:willPresentNotification:withCompletionHandler:` and `userNotificationCenter:didReceiveNotificationResponse:withCompletionHandler:` methods. Assign this object to the `delegate` property of the singleton [UNUserNotificationCenter](https://developer.apple.com/documentation/usernotifications/unusernotificationcenter) object.

## Declaration

```objectivec
- (void) didReceiveRemoteNotification:(NSDictionary *) userInfo;
```

## Parameters

- `userInfo`: The remote notification dictionary. The contents of the dictionary correspond to the contents of the notification payload and are organized in the same way. For information about the contents of the remote notification payload, see [Local and Remote Notification Programming Guide](https://developer.apple.com/library/archive/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/index.html#//apple_ref/doc/uid/TP40008194).

<a id="Discussion"></a>

## Discussion

If a remote notification arrives while your app is active, WatchKit calls this method to deliver the notification payload. Use this method to respond to the notification. For example, you might use this method to update your app’s interface or display a message to the user.

WatchKit may call this method multiple times. If a new remote notification with the same category arrives while your app is active, WatchKit calls the method again with the new payload.

## See Also

### Deprecated Methods

- [didReceiveLocalNotification:](didreceive%28__%29.md): Deprecated. Tells the delegate that a local notification was triggered.
- [handleActionWithIdentifier:forRemoteNotification:](handleaction%28withidentifier_forremotenotification_%29.md): Deprecated. Delivers a remote notification payload and a user-selected action to the app.
- [handleActionWithIdentifier:forRemoteNotification:withResponseInfo:](handleaction%28withidentifier_forremotenotification_withresponseinfo_%29.md): Deprecated. Delivers a remote notification payload and user response information to the app.
- [handleActionWithIdentifier:forLocalNotification:](handleaction%28withidentifier_for_%29.md): Deprecated. Delivers a local notification payload and a user-selected action to the app.
- [handleActionWithIdentifier:forLocalNotification:withResponseInfo:](handleaction%28withidentifier_for_withresponseinfo_%29.md): Deprecated. Delivers a local notification payload and user response information to the app.
