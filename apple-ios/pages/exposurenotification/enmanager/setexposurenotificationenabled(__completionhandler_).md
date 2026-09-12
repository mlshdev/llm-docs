> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/exposurenotification/enmanager/setexposurenotificationenabled(_:completionhandler:)](https://developer.apple.com/documentation/exposurenotification/enmanager/setexposurenotificationenabled(_:completionhandler:))

# setExposureNotificationEnabled(\_:completionHandler:) (Swift)

**Framework:** Exposure Notification  
**Kind:** Instance Method  
**Availability:** iOS 12.5+ (deprecated in 27.0) · iPadOS 12.5+ (deprecated in 27.0) · Mac Catalyst 12.5+ (deprecated in 27.0)

Enables or disables exposure notification.

> No longer supported.

## Declaration

```swift
func setExposureNotificationEnabled(_ enabled: Bool, completionHandler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func setExposureNotificationEnabled(_ enabled: Bool) async throws
```

## Parameters

- `enabled`: A Boolean that enables or disables exposure notification.
- `completionHandler`: The completion handler that the framework calls once exposure notification is enabled or disabled.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func setExposureNotificationEnabled(_ enabled: Bool) async throws
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

> **Important**

>  This method is available in iOS 12.5, and in iOS 13.5 and later.

If the user hasn’t authorized exposure notification, this method displays a user dialog requesting consent.

> **Note**

>  Using this method to disable exposure notification stops scanning and Bluetooth advertising, but diagnosis keys and data remain.

## See Also

### Activating the Manager

- [activate(completionHandler:)](activate%28completionhandler_%29.md): Deprecated. Prepares the manager for use.
- [activityHandler](activityhandler.md): Deprecated. The handler that the framework invokes when the app activates a notification manager.
- [ENActivityHandler](../enactivityhandler.md): Deprecated. The handler the system invokes to report activities that occurred while the app wasn’t running.
- [ENActivityFlags](../enactivityflags.md): Deprecated. Activities that occur while the app isn’t running.

# setExposureNotificationEnabled:completionHandler: (Objective-C)

**Framework:** Exposure Notification  
**Kind:** Instance Method  
**Availability:** iOS 12.5+ (deprecated in 27.0) · iPadOS 12.5+ (deprecated in 27.0) · Mac Catalyst 12.5+ (deprecated in 27.0)

Enables or disables exposure notification.

> No longer supported.

## Declaration

```objectivec
- (void) setExposureNotificationEnabled:(BOOL) enabled completionHandler:(ENErrorHandler) completionHandler;
```

## Parameters

- `enabled`: A Boolean that enables or disables exposure notification.
- `completionHandler`: The completion handler that the framework calls once exposure notification is enabled or disabled.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func setExposureNotificationEnabled(_ enabled: Bool) async throws
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

> **Important**

>  This method is available in iOS 12.5, and in iOS 13.5 and later.

If the user hasn’t authorized exposure notification, this method displays a user dialog requesting consent.

> **Note**

>  Using this method to disable exposure notification stops scanning and Bluetooth advertising, but diagnosis keys and data remain.

## See Also

### Activating the Manager

- [activateWithCompletionHandler:](activate%28completionhandler_%29.md): Deprecated. Prepares the manager for use.
- [activityHandler](activityhandler.md): Deprecated. The handler that the framework invokes when the app activates a notification manager.
- [ENActivityHandler](../enactivityhandler.md): Deprecated. The handler the system invokes to report activities that occurred while the app wasn’t running.
- [ENActivityFlags](../enactivityflags.md): Deprecated. Activities that occur while the app isn’t running.
