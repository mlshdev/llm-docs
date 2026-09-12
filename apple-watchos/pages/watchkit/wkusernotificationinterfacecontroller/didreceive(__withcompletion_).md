> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkusernotificationinterfacecontroller/didreceive(_:withcompletion:)](https://developer.apple.com/documentation/watchkit/wkusernotificationinterfacecontroller/didreceive(_:withcompletion:))

# didReceive(\_:withCompletion:) (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 3.0+ (deprecated in 5.0)

Delivers a notification object to your interface controller for processing.

> Use [didReceive(\_:)](didreceive%28__%29.md)  instead.

## Declaration

```swift
func didReceive(_ notification: UNNotification, withCompletion completionHandler: @escaping (WKUserNotificationInterfaceType) -> Void)
```

## Parameters

- `notification`: The notification object that triggered this event.
- `completionHandler`: The completion handler for telling the system what interface to display. Execute this completion handler at the end of your method implementation. If you do not execute this block in a timely manner, the system displays your app’s static notification interface. This block has no return value and takes the following parameter:

  - **interface**: The notification interface to be displayed. Specify the value [WKUserNotificationInterfaceType.custom](../wkusernotificationinterfacetype/custom.md) to display your dynamic interface. Specify the value [WKUserNotificationInterfaceType.default](../wkusernotificationinterfacetype/default.md) to display the static interface. You might choose to display the static interface if the payload does not contain the data you were expecting.

<a id="Discussion"></a>

## Discussion

Before displaying your notification interface, WatchKit calls this method to deliver the payload of the incoming remote notification. Implement this method and use it to store the notification dictionary, configure your custom notification interface, and execute the `completionHandler` block as quickly as possible. Failure to execute the completion handler in a timely manner will cause the system to display the corresponding static notification interface.

WatchKit may call this method multiple times while your interface controller is active. If a new remote notification with the same category arrives while your notification interface is active, WatchKit calls the method again with the new remote notification payload.

## See Also

### Processing the Notification

- [didReceive(\_:)](didreceive%28__%29.md): Delivers a notification object to your interface controller for processing.

# didReceiveNotification:withCompletion: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 3.0+ (deprecated in 5.0)

Delivers a notification object to your interface controller for processing.

> Use [didReceiveNotification:](didreceive%28__%29.md)  instead.

## Declaration

```objectivec
- (void) didReceiveNotification:(UNNotification *) notification withCompletion:(void (^)(WKUserNotificationInterfaceType interface)) completionHandler;
```

## Parameters

- `notification`: The notification object that triggered this event.
- `completionHandler`: The completion handler for telling the system what interface to display. Execute this completion handler at the end of your method implementation. If you do not execute this block in a timely manner, the system displays your app’s static notification interface. This block has no return value and takes the following parameter:

  - **interface**: The notification interface to be displayed. Specify the value [WKUserNotificationInterfaceTypeCustom](../wkusernotificationinterfacetype/custom.md) to display your dynamic interface. Specify the value [WKUserNotificationInterfaceTypeDefault](../wkusernotificationinterfacetype/default.md) to display the static interface. You might choose to display the static interface if the payload does not contain the data you were expecting.

<a id="Discussion"></a>

## Discussion

Before displaying your notification interface, WatchKit calls this method to deliver the payload of the incoming remote notification. Implement this method and use it to store the notification dictionary, configure your custom notification interface, and execute the `completionHandler` block as quickly as possible. Failure to execute the completion handler in a timely manner will cause the system to display the corresponding static notification interface.

WatchKit may call this method multiple times while your interface controller is active. If a new remote notification with the same category arrives while your notification interface is active, WatchKit calls the method again with the new remote notification payload.

## See Also

### Processing the Notification

- [didReceiveNotification:](didreceive%28__%29.md): Delivers a notification object to your interface controller for processing.
