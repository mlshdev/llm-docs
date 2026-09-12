> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotifications/unusernotificationcenter/getdeliverednotifications(completionhandler:)](https://developer.apple.com/documentation/usernotifications/unusernotificationcenter/getdeliverednotifications(completionhandler:))

# getDeliveredNotifications(completionHandler:) (Swift)

**Framework:** User Notifications  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+ · watchOS 3.0+

Fetches all of your app’s delivered notifications that are still present in Notification Center.

## Declaration

```swift
func getDeliveredNotifications(completionHandler: @escaping @Sendable ([UNNotification]) -> Void)
```

```swift
func deliveredNotifications() async -> [UNNotification]
```

## Parameters

- `completionHandler`: The block to execute with the results. This block may be executed on a background thread. The block has no return value and takes the following parameter:

  - **notifications**: An array of [UNNotification](../unnotification.md) objects representing the local and remote notifications of your app that have been delivered and are still visible in Notification Center. If none of your app’s notifications are visible in Notification Center, the array is empty.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func deliveredNotifications() async -> [UNNotification]
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

This method executes asynchronously, returning immediately and executing the provided block on a background thread when the results become available.

## See Also

### Removing delivered notifications

- [removeDeliveredNotifications(withIdentifiers:)](removedeliverednotifications%28withidentifiers_%29.md): Removes your app’s notifications from Notification Center that match the specified identifiers.
- [removeAllDeliveredNotifications()](removealldeliverednotifications%28%29.md): Removes all of your app’s delivered notifications from Notification Center.

# getDeliveredNotificationsWithCompletionHandler: (Objective-C)

**Framework:** User Notifications  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+ · watchOS 3.0+

Fetches all of your app’s delivered notifications that are still present in Notification Center.

## Declaration

```objectivec
- (void) getDeliveredNotificationsWithCompletionHandler:(void (^)(NSArray<UNNotification *> *notifications)) completionHandler;
```

## Parameters

- `completionHandler`: The block to execute with the results. This block may be executed on a background thread. The block has no return value and takes the following parameter:

  - **notifications**: An array of [UNNotification](../unnotification.md) objects representing the local and remote notifications of your app that have been delivered and are still visible in Notification Center. If none of your app’s notifications are visible in Notification Center, the array is empty.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func deliveredNotifications() async -> [UNNotification]
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

This method executes asynchronously, returning immediately and executing the provided block on a background thread when the results become available.

## See Also

### Removing delivered notifications

- [removeDeliveredNotificationsWithIdentifiers:](removedeliverednotifications%28withidentifiers_%29.md): Removes your app’s notifications from Notification Center that match the specified identifiers.
- [removeAllDeliveredNotifications](removealldeliverednotifications%28%29.md): Removes all of your app’s delivered notifications from Notification Center.
