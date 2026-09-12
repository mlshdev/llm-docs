> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/exposurenotification/enmanager/dispatchqueue](https://developer.apple.com/documentation/exposurenotification/enmanager/dispatchqueue)

# dispatchQueue (Swift)

**Framework:** Exposure Notification  
**Kind:** Instance Property  
**Availability:** iOS 12.5+ (deprecated in 27.0) · iPadOS 12.5+ (deprecated in 27.0) · Mac Catalyst 12.5+ (deprecated in 27.0)

The dispatch queue on which to invoke handlers.

> No longer supported.

## Declaration

```swift
var dispatchQueue: dispatch_queue_t { get set }
```

<a id="Discussion"></a>

## Discussion

> **Important**

>  This property is available in iOS 12.5, and in iOS 13.5 and later.

The default is the main queue.

## See Also

### Configuring the Manager

- [exposureNotificationStatus](exposurenotificationstatus.md): Deprecated. A property that indicates the status of exposure notifications.
- [exposureNotificationEnabled](exposurenotificationenabled.md): Deprecated. A property that indicates that a user enabled exposure notification.
- [authorizationStatus](authorizationstatus.md): Deprecated. A property that reports the current authorization status of the app, and never prompts the user.

# dispatchQueue (Objective-C)

**Framework:** Exposure Notification  
**Kind:** Instance Property  
**Availability:** iOS 12.5+ (deprecated in 27.0) · iPadOS 12.5+ (deprecated in 27.0) · Mac Catalyst 12.5+ (deprecated in 27.0)

The dispatch queue on which to invoke handlers.

> No longer supported.

## Declaration

```objectivec
@property (nonatomic, strong, readwrite) dispatch_queue_t dispatchQueue;
```

<a id="Discussion"></a>

## Discussion

> **Important**

>  This property is available in iOS 12.5, and in iOS 13.5 and later.

The default is the main queue.

## See Also

### Configuring the Manager

- [exposureNotificationStatus](exposurenotificationstatus.md): Deprecated. A property that indicates the status of exposure notifications.
- [exposureNotificationEnabled](exposurenotificationenabled.md): Deprecated. A property that indicates that a user enabled exposure notification.
- [authorizationStatus](authorizationstatus.md): Deprecated. A property that reports the current authorization status of the app, and never prompts the user.
