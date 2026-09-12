> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/exposurenotification/enmanager/exposurenotificationenabled](https://developer.apple.com/documentation/exposurenotification/enmanager/exposurenotificationenabled)

# exposureNotificationEnabled (Swift)

**Framework:** Exposure Notification  
**Kind:** Instance Property  
**Availability:** iOS 12.5+ (deprecated in 27.0) · iPadOS 12.5+ (deprecated in 27.0) · Mac Catalyst 12.5+ (deprecated in 27.0)

A property that indicates that a user enabled exposure notification.

> No longer supported.

## Declaration

```swift
var exposureNotificationEnabled: Bool { get }
```

<a id="Discussion"></a>

## Discussion

> **Important**

>  This property is available in iOS 12.5, and in iOS 13.5 and later.

You can use key value observing to monitor for changes. The value of this property will be `NO` until [activate(completionHandler:)](activate%28completionhandler_%29.md) completes successfully.

Note that even if the user enables exposure notifications, they may be inactive for other reasons, such as if the user turns off Bluetooth service. The [exposureNotificationStatus](exposurenotificationstatus.md) property can be monitored for the status of exposure notifications.

## See Also

### Configuring the Manager

- [exposureNotificationStatus](exposurenotificationstatus.md): Deprecated. A property that indicates the status of exposure notifications.
- [authorizationStatus](authorizationstatus.md): Deprecated. A property that reports the current authorization status of the app, and never prompts the user.
- [dispatchQueue](dispatchqueue.md): Deprecated. The dispatch queue on which to invoke handlers.

# exposureNotificationEnabled (Objective-C)

**Framework:** Exposure Notification  
**Kind:** Instance Property  
**Availability:** iOS 12.5+ (deprecated in 27.0) · iPadOS 12.5+ (deprecated in 27.0) · Mac Catalyst 12.5+ (deprecated in 27.0)

A property that indicates that a user enabled exposure notification.

> No longer supported.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) BOOL exposureNotificationEnabled;
```

<a id="Discussion"></a>

## Discussion

> **Important**

>  This property is available in iOS 12.5, and in iOS 13.5 and later.

You can use key value observing to monitor for changes. The value of this property will be `NO` until [activateWithCompletionHandler:](activate%28completionhandler_%29.md) completes successfully.

Note that even if the user enables exposure notifications, they may be inactive for other reasons, such as if the user turns off Bluetooth service. The [exposureNotificationStatus](exposurenotificationstatus.md) property can be monitored for the status of exposure notifications.

## See Also

### Configuring the Manager

- [exposureNotificationStatus](exposurenotificationstatus.md): Deprecated. A property that indicates the status of exposure notifications.
- [authorizationStatus](authorizationstatus.md): Deprecated. A property that reports the current authorization status of the app, and never prompts the user.
- [dispatchQueue](dispatchqueue.md): Deprecated. The dispatch queue on which to invoke handlers.
