> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotifications/unusernotificationcenter/getpendingnotificationrequests(completionhandler:)](https://developer.apple.com/documentation/usernotifications/unusernotificationcenter/getpendingnotificationrequests(completionhandler:))

# getPendingNotificationRequests(completionHandler:) (Swift)

**Framework:** User Notifications  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Fetches all of your app’s local notifications that are pending delivery.

## Declaration

```swift
func getPendingNotificationRequests(completionHandler: @escaping @Sendable ([UNNotificationRequest]) -> Void)
```

```swift
func pendingNotificationRequests() async -> [UNNotificationRequest]
```

## Parameters

- `completionHandler`: A block for processing notification requests. This block may be executed on a background thread. The block has no return value and takes a single parameter.

  - **requests**: An array of [UNNotificationRequest](../unnotificationrequest.md) objects representing the scheduled notification requests. If there are no scheduled requests, this array is empty.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func pendingNotificationRequests() async -> [UNNotificationRequest]
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

Here’s an example that obtains the pending notification requests.

```swift
let center = UNUserNotificationCenter.current()
let requests = await center.pendingNotificationRequests()
```

## See Also

### Scheduling notifications

- [add(\_:withCompletionHandler:)](add%28__withcompletionhandler_%29.md): Schedules the delivery of a local notification.
- [removePendingNotificationRequests(withIdentifiers:)](removependingnotificationrequests%28withidentifiers_%29.md): Removes your app’s local notifications that are pending and match the specified identifiers.
- [removeAllPendingNotificationRequests()](removeallpendingnotificationrequests%28%29.md): Removes all of your app’s pending local notifications.

# getPendingNotificationRequestsWithCompletionHandler: (Objective-C)

**Framework:** User Notifications  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Fetches all of your app’s local notifications that are pending delivery.

## Declaration

```objectivec
- (void) getPendingNotificationRequestsWithCompletionHandler:(void (^)(NSArray<UNNotificationRequest *> *requests)) completionHandler;
```

## Parameters

- `completionHandler`: A block for processing notification requests. This block may be executed on a background thread. The block has no return value and takes a single parameter.

  - **requests**: An array of [UNNotificationRequest](../unnotificationrequest.md) objects representing the scheduled notification requests. If there are no scheduled requests, this array is empty.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func pendingNotificationRequests() async -> [UNNotificationRequest]
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

Here’s an example that obtains the pending notification requests.

```swift
let center = UNUserNotificationCenter.current()
let requests = await center.pendingNotificationRequests()
```

## See Also

### Scheduling notifications

- [addNotificationRequest:withCompletionHandler:](add%28__withcompletionhandler_%29.md): Schedules the delivery of a local notification.
- [removePendingNotificationRequestsWithIdentifiers:](removependingnotificationrequests%28withidentifiers_%29.md): Removes your app’s local notifications that are pending and match the specified identifiers.
- [removeAllPendingNotificationRequests](removeallpendingnotificationrequests%28%29.md): Removes all of your app’s pending local notifications.
