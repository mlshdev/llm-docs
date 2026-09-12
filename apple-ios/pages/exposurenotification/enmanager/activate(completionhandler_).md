> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/exposurenotification/enmanager/activate(completionhandler:)](https://developer.apple.com/documentation/exposurenotification/enmanager/activate(completionhandler:))

# activate(completionHandler:) (Swift)

**Framework:** Exposure Notification  
**Kind:** Instance Method  
**Availability:** iOS 12.5+ (deprecated in 27.0) · iPadOS 12.5+ (deprecated in 27.0) · Mac Catalyst 12.5+ (deprecated in 27.0)

Prepares the manager for use.

> No longer supported.

## Declaration

```swift
func activate(completionHandler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func activate() async throws
```

## Parameters

- `completionHandler`: The completion handler that the framework calls when activation completes.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func activate() async throws
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

> **Important**

>  This method is available in iOS 12.5, and in iOS 13.5 and later.

Properties may not be usable until the completion handler reports success.

## See Also

### Activating the Manager

- [activityHandler](activityhandler.md): Deprecated. The handler that the framework invokes when the app activates a notification manager.
- [ENActivityHandler](../enactivityhandler.md): Deprecated. The handler the system invokes to report activities that occurred while the app wasn’t running.
- [ENActivityFlags](../enactivityflags.md): Deprecated. Activities that occur while the app isn’t running.
- [setExposureNotificationEnabled(\_:completionHandler:)](setexposurenotificationenabled%28__completionhandler_%29.md): Deprecated. Enables or disables exposure notification.

# activateWithCompletionHandler: (Objective-C)

**Framework:** Exposure Notification  
**Kind:** Instance Method  
**Availability:** iOS 12.5+ (deprecated in 27.0) · iPadOS 12.5+ (deprecated in 27.0) · Mac Catalyst 12.5+ (deprecated in 27.0)

Prepares the manager for use.

> No longer supported.

## Declaration

```objectivec
- (void) activateWithCompletionHandler:(ENErrorHandler) completionHandler;
```

## Parameters

- `completionHandler`: The completion handler that the framework calls when activation completes.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func activate() async throws
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

> **Important**

>  This method is available in iOS 12.5, and in iOS 13.5 and later.

Properties may not be usable until the completion handler reports success.

## See Also

### Activating the Manager

- [activityHandler](activityhandler.md): Deprecated. The handler that the framework invokes when the app activates a notification manager.
- [ENActivityHandler](../enactivityhandler.md): Deprecated. The handler the system invokes to report activities that occurred while the app wasn’t running.
- [ENActivityFlags](../enactivityflags.md): Deprecated. Activities that occur while the app isn’t running.
- [setExposureNotificationEnabled:completionHandler:](setexposurenotificationenabled%28__completionhandler_%29.md): Deprecated. Enables or disables exposure notification.
