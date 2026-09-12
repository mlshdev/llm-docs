> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cknotification/init(fromremotenotificationdictionary:)](https://developer.apple.com/documentation/cloudkit/cknotification/init(fromremotenotificationdictionary:))

# init(fromRemoteNotificationDictionary:) (Swift)

**Framework:** CloudKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

Creates a new notification using the specified payload data.

## Declaration

```swift
convenience init?(fromRemoteNotificationDictionary notificationDictionary: [AnyHashable : Any])
```

## Parameters

- `notificationDictionary`: The push notification’s payload data. Use the dictionary that the system provides to your app delegate’s [application(\_:didReceiveRemoteNotification:fetchCompletionHandler:)](../../uikit/uiapplicationdelegate/application%28__didreceiveremotenotification_fetchcompletionhandler_%29.md) method. This parameter must not be `nil`.

# notificationFromRemoteNotificationDictionary: (Objective-C)

**Framework:** CloudKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

Creates a new notification using the specified payload data.

## Declaration

```objectivec
+ (instancetype) notificationFromRemoteNotificationDictionary:(NSDictionary *) notificationDictionary;
```

## Parameters

- `notificationDictionary`: The push notification’s payload data. Use the dictionary that the system provides to your app delegate’s [application:didReceiveRemoteNotification:fetchCompletionHandler:](../../uikit/uiapplicationdelegate/application%28__didreceiveremotenotification_fetchcompletionhandler_%29.md) method. This parameter must not be `nil`.
