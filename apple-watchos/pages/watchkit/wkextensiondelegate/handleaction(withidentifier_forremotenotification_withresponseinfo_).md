> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkextensiondelegate/handleaction(withidentifier:forremotenotification:withresponseinfo:)](https://developer.apple.com/documentation/watchkit/wkextensiondelegate/handleaction(withidentifier:forremotenotification:withresponseinfo:))

# handleAction(withIdentifier:forRemoteNotification:withResponseInfo:) (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+ (deprecated in 3.0)

Delivers a remote notification payload and user response information to the app.

> Instead of using this method, create a delegate object that adopts the [UNUserNotificationCenterDelegate](https://developer.apple.com/documentation/usernotifications/unusernotificationcenterdelegate) protocol and implement the `userNotificationCenter:willPresentNotification:withCompletionHandler:` and `userNotificationCenter:didReceiveNotificationResponse:withCompletionHandler:` methods. Assign this object to the `delegate` property of the singleton [UNUserNotificationCenter](https://developer.apple.com/documentation/usernotifications/unusernotificationcenter) object.

## Declaration

```swift
optional func handleAction(withIdentifier identifier: String?, forRemoteNotification remoteNotification: [AnyHashable : Any], withResponseInfo responseInfo: [AnyHashable : Any])
```

## Parameters

- `identifier`: The action selected by the user. The string is the identifier for an action that was registered by the companion iOS app; it identifies which button was tapped by the user. Use the identifier to perform the associated action. This parameter is set to the empty string when the user launches the app without tapping one of the action buttons.
- `remoteNotification`: The push notification payload dictionary. This parameter contains the data sent with the push notification. For information about the contents of this dictionary, see [Local and Remote Notification Programming Guide](https://developer.apple.com/library/archive/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/index.html#//apple_ref/doc/uid/TP40008194).
- `responseInfo`: The response information dictionary. This dictionary contains the [UIUserNotificationActionResponseTypedTextKey](https://developer.apple.com/documentation/uikit/uiusernotificationactionresponsetypedtextkey) key with the text response selected by the user.

<a id="Discussion"></a>

## Discussion

Use this method to handle actions selected by users from your notification interfaces. If your containing iOS app supports interactive notifications, the `identifier` parameter may contain the action identifier of the button that was tapped. Use that value to perform the requested action. If the `identifier` parameter contains an empty string, that means the user launched your Watch app from the notification interface without choosing a specific action.

The system calls this method on your WatchKit extension’s main thread. The `super` implementation of this method does nothing.

For information about how to support interactive notifications in your iOS app, see [Local and Remote Notification Programming Guide](https://developer.apple.com/library/archive/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/index.html#//apple_ref/doc/uid/TP40008194). For information about how to display a custom interface for notifications, see [App Programming Guide for watchOS](https://developer.apple.com/library/archive/documentation/General/Conceptual/WatchKitProgrammingGuide/index.html#//apple_ref/doc/uid/TP40014969).

## See Also

### Deprecated Methods

- [didReceiveRemoteNotification(\_:)](didreceiveremotenotification%28__%29.md): Deprecated. Tells the delegate that a remote notification arrived.
- [didReceive(\_:)](didreceive%28__%29.md): Deprecated. Tells the delegate that a local notification was triggered.
- [handleAction(withIdentifier:forRemoteNotification:)](handleaction%28withidentifier_forremotenotification_%29.md): Deprecated. Delivers a remote notification payload and a user-selected action to the app.
- [handleAction(withIdentifier:for:)](handleaction%28withidentifier_for_%29.md): Deprecated. Delivers a local notification payload and a user-selected action to the app.
- [handleAction(withIdentifier:for:withResponseInfo:)](handleaction%28withidentifier_for_withresponseinfo_%29.md): Deprecated. Delivers a local notification payload and user response information to the app.

# handleActionWithIdentifier:forRemoteNotification:withResponseInfo: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+ (deprecated in 3.0)

Delivers a remote notification payload and user response information to the app.

> Instead of using this method, create a delegate object that adopts the [UNUserNotificationCenterDelegate](https://developer.apple.com/documentation/usernotifications/unusernotificationcenterdelegate) protocol and implement the `userNotificationCenter:willPresentNotification:withCompletionHandler:` and `userNotificationCenter:didReceiveNotificationResponse:withCompletionHandler:` methods. Assign this object to the `delegate` property of the singleton [UNUserNotificationCenter](https://developer.apple.com/documentation/usernotifications/unusernotificationcenter) object.

## Declaration

```objectivec
- (void) handleActionWithIdentifier:(NSString *) identifier forRemoteNotification:(NSDictionary *) remoteNotification withResponseInfo:(NSDictionary *) responseInfo;
```

## Parameters

- `identifier`: The action selected by the user. The string is the identifier for an action that was registered by the companion iOS app; it identifies which button was tapped by the user. Use the identifier to perform the associated action. This parameter is set to the empty string when the user launches the app without tapping one of the action buttons.
- `remoteNotification`: The push notification payload dictionary. This parameter contains the data sent with the push notification. For information about the contents of this dictionary, see [Local and Remote Notification Programming Guide](https://developer.apple.com/library/archive/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/index.html#//apple_ref/doc/uid/TP40008194).
- `responseInfo`: The response information dictionary. This dictionary contains the [UIUserNotificationActionResponseTypedTextKey](https://developer.apple.com/documentation/uikit/uiusernotificationactionresponsetypedtextkey) key with the text response selected by the user.

<a id="Discussion"></a>

## Discussion

Use this method to handle actions selected by users from your notification interfaces. If your containing iOS app supports interactive notifications, the `identifier` parameter may contain the action identifier of the button that was tapped. Use that value to perform the requested action. If the `identifier` parameter contains an empty string, that means the user launched your Watch app from the notification interface without choosing a specific action.

The system calls this method on your WatchKit extension’s main thread. The `super` implementation of this method does nothing.

For information about how to support interactive notifications in your iOS app, see [Local and Remote Notification Programming Guide](https://developer.apple.com/library/archive/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/index.html#//apple_ref/doc/uid/TP40008194). For information about how to display a custom interface for notifications, see [App Programming Guide for watchOS](https://developer.apple.com/library/archive/documentation/General/Conceptual/WatchKitProgrammingGuide/index.html#//apple_ref/doc/uid/TP40014969).

## See Also

### Deprecated Methods

- [didReceiveRemoteNotification:](didreceiveremotenotification%28__%29.md): Deprecated. Tells the delegate that a remote notification arrived.
- [didReceiveLocalNotification:](didreceive%28__%29.md): Deprecated. Tells the delegate that a local notification was triggered.
- [handleActionWithIdentifier:forRemoteNotification:](handleaction%28withidentifier_forremotenotification_%29.md): Deprecated. Delivers a remote notification payload and a user-selected action to the app.
- [handleActionWithIdentifier:forLocalNotification:](handleaction%28withidentifier_for_%29.md): Deprecated. Delivers a local notification payload and a user-selected action to the app.
- [handleActionWithIdentifier:forLocalNotification:withResponseInfo:](handleaction%28withidentifier_for_withresponseinfo_%29.md): Deprecated. Delivers a local notification payload and user response information to the app.
