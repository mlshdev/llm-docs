> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/exposurenotification/enmanager/exposurenotificationstatus](https://developer.apple.com/documentation/exposurenotification/enmanager/exposurenotificationstatus)

# exposureNotificationStatus (Swift)

**Framework:** Exposure Notification  
**Kind:** Instance Property  
**Availability:** iOS 12.5+ (deprecated in 27.0) · iPadOS 12.5+ (deprecated in 27.0) · Mac Catalyst 12.5+ (deprecated in 27.0)

A property that indicates the status of exposure notifications.

> No longer supported.

## Declaration

```swift
var exposureNotificationStatus: ENStatus { get }
```

<a id="Discussion"></a>

## Discussion

> **Important**

>  This property is available in iOS 12.5, and in iOS 13.5 and later.

You can use key value observing to monitor for changes. The value of this property will be [ENStatus.unknown](../enstatus/unknown.md) until [activate(completionHandler:)](activate%28completionhandler_%29.md) completes successfully.

This status can be affected by the user disabling exposure notifications, disabling bluetooth, or restricting the feature through parental controls.

## See Also

### Configuring the Manager

- [exposureNotificationEnabled](exposurenotificationenabled.md): Deprecated. A property that indicates that a user enabled exposure notification.
- [authorizationStatus](authorizationstatus.md): Deprecated. A property that reports the current authorization status of the app, and never prompts the user.
- [dispatchQueue](dispatchqueue.md): Deprecated. The dispatch queue on which to invoke handlers.

# exposureNotificationStatus (Objective-C)

**Framework:** Exposure Notification  
**Kind:** Instance Property  
**Availability:** iOS 12.5+ (deprecated in 27.0) · iPadOS 12.5+ (deprecated in 27.0) · Mac Catalyst 12.5+ (deprecated in 27.0)

A property that indicates the status of exposure notifications.

> No longer supported.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) ENStatus exposureNotificationStatus;
```

<a id="Discussion"></a>

## Discussion

> **Important**

>  This property is available in iOS 12.5, and in iOS 13.5 and later.

You can use key value observing to monitor for changes. The value of this property will be [ENStatusUnknown](../enstatus/unknown.md) until [activateWithCompletionHandler:](activate%28completionhandler_%29.md) completes successfully.

This status can be affected by the user disabling exposure notifications, disabling bluetooth, or restricting the feature through parental controls.

## See Also

### Configuring the Manager

- [exposureNotificationEnabled](exposurenotificationenabled.md): Deprecated. A property that indicates that a user enabled exposure notification.
- [authorizationStatus](authorizationstatus.md): Deprecated. A property that reports the current authorization status of the app, and never prompts the user.
- [dispatchQueue](dispatchqueue.md): Deprecated. The dispatch queue on which to invoke handlers.
