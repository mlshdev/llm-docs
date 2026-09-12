> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkbackgroundfetchresult](https://developer.apple.com/documentation/watchkit/wkbackgroundfetchresult)

# WKBackgroundFetchResult (Swift)

**Framework:** WatchKit  
**Kind:** Enumeration  
**Availability:** watchOS 6.0+

The result of an attempt to download the content associated with a remote notification.

## Declaration

```swift
enum WKBackgroundFetchResult
```

## Topics

### Fetch Results

- [WKBackgroundFetchResult.failed](wkbackgroundfetchresult/failed.md): The download attempt failed.
- [WKBackgroundFetchResult.newData](wkbackgroundfetchresult/newdata.md): The download attempt succeeded.
- [WKBackgroundFetchResult.noData](wkbackgroundfetchresult/nodata.md): The notification has no associated content.

### Initializers

- [init(rawValue:)](wkbackgroundfetchresult/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing remote notifications

- [didRegisterForRemoteNotifications(withDeviceToken:)](wkapplicationdelegate/didregisterforremotenotifications%28withdevicetoken_%29.md): Tells the delegate that the app successfully registered with Apple Push Notification service (APNs).
- [didFailToRegisterForRemoteNotificationsWithError(\_:)](wkapplicationdelegate/didfailtoregisterforremotenotificationswitherror%28__%29.md): Tells the delegate that Apple Push Notification service (APNs) can’t successfully complete the registration process.
- [didReceiveRemoteNotification(\_:fetchCompletionHandler:)](wkapplicationdelegate/didreceiveremotenotification%28__fetchcompletionhandler_%29.md): Tells the delegate that a background notification has arrived.

# WKBackgroundFetchResult (Objective-C)

**Framework:** WatchKit  
**Kind:** Enumeration  
**Availability:** watchOS 6.0+

The result of an attempt to download the content associated with a remote notification.

## Declaration

```objectivec
enum WKBackgroundFetchResult : NSUInteger;
```

## Topics

### Fetch Results

- [WKBackgroundFetchResultFailed](wkbackgroundfetchresult/failed.md): The download attempt failed.
- [WKBackgroundFetchResultNewData](wkbackgroundfetchresult/newdata.md): The download attempt succeeded.
- [WKBackgroundFetchResultNoData](wkbackgroundfetchresult/nodata.md): The notification has no associated content.

## See Also

### Managing remote notifications

- [didRegisterForRemoteNotificationsWithDeviceToken:](wkapplicationdelegate/didregisterforremotenotifications%28withdevicetoken_%29.md): Tells the delegate that the app successfully registered with Apple Push Notification service (APNs).
- [didFailToRegisterForRemoteNotificationsWithError:](wkapplicationdelegate/didfailtoregisterforremotenotificationswitherror%28__%29.md): Tells the delegate that Apple Push Notification service (APNs) can’t successfully complete the registration process.
- [didReceiveRemoteNotification:fetchCompletionHandler:](wkapplicationdelegate/didreceiveremotenotification%28__fetchcompletionhandler_%29.md): Tells the delegate that a background notification has arrived.
