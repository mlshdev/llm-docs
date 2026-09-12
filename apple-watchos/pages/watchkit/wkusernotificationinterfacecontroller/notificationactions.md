> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkusernotificationinterfacecontroller/notificationactions](https://developer.apple.com/documentation/watchkit/wkusernotificationinterfacecontroller/notificationactions)

# notificationActions (Swift)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 5.0+

The actions associated with the current notification.

## Declaration

```swift
var notificationActions: [UNNotificationAction] { get set }
```

<a id="Discussion"></a>

## Discussion

Use this array to dynamically update the list of actions associated with a notification. You can only change this property during the [didReceive(\_:)](didreceive%28__%29.md) method.

## See Also

### Related Documentation

- [didReceive(\_:)](didreceive%28__%29.md): Delivers a notification object to your interface controller for processing.

### Working with Actions

- [performNotificationDefaultAction()](performnotificationdefaultaction%28%29.md): Launches the watchOS app and performs the current notification’s default action.
- [performDismissAction()](performdismissaction%28%29.md): Dismisses the notification interface controller.
- [dismiss()](dismiss%28%29.md): Deprecated. Dismisses the notification interface controller.

# notificationActions (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 5.0+

The actions associated with the current notification.

## Declaration

```objectivec
@property (nonatomic, copy) NSArray<UNNotificationAction *> * notificationActions;
```

<a id="Discussion"></a>

## Discussion

Use this array to dynamically update the list of actions associated with a notification. You can only change this property during the [didReceiveNotification:](didreceive%28__%29.md) method.

## See Also

### Related Documentation

- [didReceiveNotification:](didreceive%28__%29.md): Delivers a notification object to your interface controller for processing.

### Working with Actions

- [performNotificationDefaultAction](performnotificationdefaultaction%28%29.md): Launches the watchOS app and performs the current notification’s default action.
- [performDismissAction](performdismissaction%28%29.md): Dismisses the notification interface controller.
- [dismissController](dismiss%28%29.md): Deprecated. Dismisses the notification interface controller.
