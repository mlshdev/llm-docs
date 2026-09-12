> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsession/delayedrequestdisposition](https://developer.apple.com/documentation/foundation/urlsession/delayedrequestdisposition)

# URLSession.DelayedRequestDisposition (Swift)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The action to take on a delayed URL session task.

## Declaration

```swift
enum DelayedRequestDisposition
```

<a id="overview"></a>

## Overview

The values of this enumeration indicate how to handle a task with a delayed start time (as set with the [earliestBeginDate](../urlsessiontask/earliestbegindate.md) property). When the task is ready to start, it calls the [urlSession(\_:task:willBeginDelayedRequest:completionHandler:)](../urlsessiontaskdelegate/urlsession%28__task_willbegindelayedrequest_completionhandler_%29.md) method of [URLSessionTaskDelegate](../urlsessiontaskdelegate.md). The implementation of this method must call the provided completion handler, passing in one case of this enumeration as the first argument. If the [URLSession.DelayedRequestDisposition.useNewRequest](delayedrequestdisposition/usenewrequest.md) disposition is used for the first argument, the caller must also provide a new [NSURLRequest](../nsurlrequest.md) as the second argument.

## Topics

### Dispositions

- [URLSession.DelayedRequestDisposition.cancel](delayedrequestdisposition/cancel.md): A disposition indicating that the task should be canceled.
- [URLSession.DelayedRequestDisposition.continueLoading](delayedrequestdisposition/continueloading.md): A disposition indicating that the task should proceed with the original request.
- [URLSession.DelayedRequestDisposition.useNewRequest](delayedrequestdisposition/usenewrequest.md): A disposition indicating that the task should use a new request to perform the network load.

### Initializers

- [init(rawValue:)](delayedrequestdisposition/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Handling delayed and waiting tasks

- [urlSession(\_:task:willBeginDelayedRequest:completionHandler:)](../urlsessiontaskdelegate/urlsession%28__task_willbegindelayedrequest_completionhandler_%29.md): Tells the delegate that a delayed URL session task will now begin loading.
- [urlSession(\_:taskIsWaitingForConnectivity:)](../urlsessiontaskdelegate/urlsession%28__taskiswaitingforconnectivity_%29.md): Tells the delegate that the task is waiting until suitable connectivity is available before beginning the network load.

# NSURLSessionDelayedRequestDisposition (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The action to take on a delayed URL session task.

## Declaration

```objectivec
enum NSURLSessionDelayedRequestDisposition : NSInteger;
```

<a id="overview"></a>

## Overview

The values of this enumeration indicate how to handle a task with a delayed start time (as set with the [earliestBeginDate](../urlsessiontask/earliestbegindate.md) property). When the task is ready to start, it calls the [URLSession:task:willBeginDelayedRequest:completionHandler:](../urlsessiontaskdelegate/urlsession%28__task_willbegindelayedrequest_completionhandler_%29.md) method of [NSURLSessionTaskDelegate](../urlsessiontaskdelegate.md). The implementation of this method must call the provided completion handler, passing in one case of this enumeration as the first argument. If the [NSURLSessionDelayedRequestUseNewRequest](delayedrequestdisposition/usenewrequest.md) disposition is used for the first argument, the caller must also provide a new [NSURLRequest](../nsurlrequest.md) as the second argument.

## Topics

### Dispositions

- [NSURLSessionDelayedRequestCancel](delayedrequestdisposition/cancel.md): A disposition indicating that the task should be canceled.
- [NSURLSessionDelayedRequestContinueLoading](delayedrequestdisposition/continueloading.md): A disposition indicating that the task should proceed with the original request.
- [NSURLSessionDelayedRequestUseNewRequest](delayedrequestdisposition/usenewrequest.md): A disposition indicating that the task should use a new request to perform the network load.

## See Also

### Handling delayed and waiting tasks

- [URLSession:task:willBeginDelayedRequest:completionHandler:](../urlsessiontaskdelegate/urlsession%28__task_willbegindelayedrequest_completionhandler_%29.md): Tells the delegate that a delayed URL session task will now begin loading.
- [URLSession:taskIsWaitingForConnectivity:](../urlsessiontaskdelegate/urlsession%28__taskiswaitingforconnectivity_%29.md): Tells the delegate that the task is waiting until suitable connectivity is available before beginning the network load.
