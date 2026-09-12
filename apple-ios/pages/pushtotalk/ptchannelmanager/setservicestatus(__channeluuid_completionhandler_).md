> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/pushtotalk/ptchannelmanager/setservicestatus(_:channeluuid:completionhandler:)](https://developer.apple.com/documentation/pushtotalk/ptchannelmanager/setservicestatus(_:channeluuid:completionhandler:))

# setServiceStatus(\_:channelUUID:completionHandler:) (Swift)

**Framework:** Push to Talk  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

Sets the service connection status.

## Declaration

```swift
func setServiceStatus(_ status: PTServiceStatus, channelUUID: UUID, completionHandler: (@Sendable ((any Error)?) -> Void)? = nil)
```

```swift
func setServiceStatus(_ status: PTServiceStatus, channelUUID: UUID) async throws
```

## Parameters

- `status`: The service status.
- `channelUUID`: The channel identifier.
- `completionHandler`: The completion handler.

  - **`error`**: An error, if any, that indicates the reason why the system couldn’t set the status of the service.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func setServiceStatus(_ status: PTServiceStatus, channelUUID: UUID) async throws
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

The default value for the service status is [PTServiceStatus.ready](../ptservicestatus/ready.md). Set the appropriate service status if your network connection experiences an issue. The system reflects your service status in the user interface.

# setServiceStatus:forChannelUUID:completionHandler: (Objective-C)

**Framework:** Push to Talk  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

Sets the service connection status.

## Declaration

```objectivec
- (void) setServiceStatus:(PTServiceStatus) status forChannelUUID:(NSUUID *) channelUUID completionHandler:(void (^)(NSError *)) completionHandler;
```

## Parameters

- `status`: The service status.
- `channelUUID`: The channel identifier.
- `completionHandler`: The completion handler.

  - **`error`**: An error, if any, that indicates the reason why the system couldn’t set the status of the service.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func setServiceStatus(_ status: PTServiceStatus, channelUUID: UUID) async throws
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

The default value for the service status is [PTServiceStatusReady](../ptservicestatus/ready.md). Set the appropriate service status if your network connection experiences an issue. The system reflects your service status in the user interface.
