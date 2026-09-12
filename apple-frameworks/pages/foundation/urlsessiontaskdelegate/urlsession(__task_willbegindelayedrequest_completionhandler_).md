> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsessiontaskdelegate/urlsession(_:task:willbegindelayedrequest:completionhandler:)](https://developer.apple.com/documentation/foundation/urlsessiontaskdelegate/urlsession(_:task:willbegindelayedrequest:completionhandler:))

# urlSession(\_:task:willBeginDelayedRequest:completionHandler:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Tells the delegate that a delayed URL session task will now begin loading.

## Declaration

```swift
optional func urlSession(_ session: URLSession, task: URLSessionTask, willBeginDelayedRequest request: URLRequest, completionHandler: @escaping @Sendable (URLSession.DelayedRequestDisposition, URLRequest?) -> Void)
```

```swift
optional func urlSession(_ session: URLSession, task: URLSessionTask, willBeginDelayedRequest request: URLRequest) async -> (URLSession.DelayedRequestDisposition, URLRequest?)
```

## Parameters

- `session`: The session containing the delayed request.
- `task`: The task handling the delayed request.
- `request`: The request that was delayed.
- `completionHandler`: A completion handler to perform the request. The completion handler takes two parameters: a disposition that tells the task how to proceed, and a new request object that is only used if the disposition is [URLSession.DelayedRequestDisposition.useNewRequest](../urlsession/delayedrequestdisposition/usenewrequest.md).

<a id="Discussion"></a>

## Discussion

This method is called when a background session task with a delayed start time (as set with the [earliestBeginDate](../urlsessiontask/earliestbegindate.md) property) is ready to start. This delegate method should only be implemented if the request might become stale while waiting for the network load and needs to be replaced by a new request.

For loading to continue, the delegate must call the completion handler, passing in a disposition that indicates how the task should proceed. Passing the [URLSession.DelayedRequestDisposition.cancel](../urlsession/delayedrequestdisposition/cancel.md) disposition is equivalent to calling [cancel()](../urlsessiontask/cancel%28%29.md) on the task directly.

## See Also

### Handling delayed and waiting tasks

- [URLSession.DelayedRequestDisposition](../urlsession/delayedrequestdisposition.md): The action to take on a delayed URL session task.
- [urlSession(\_:taskIsWaitingForConnectivity:)](urlsession%28__taskiswaitingforconnectivity_%29.md): Tells the delegate that the task is waiting until suitable connectivity is available before beginning the network load.

# URLSession:task:willBeginDelayedRequest:completionHandler: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Tells the delegate that a delayed URL session task will now begin loading.

## Declaration

```objectivec
- (void) URLSession:(NSURLSession *) session task:(NSURLSessionTask *) task willBeginDelayedRequest:(NSURLRequest *) request completionHandler:(void (^)(NSURLSessionDelayedRequestDisposition disposition, NSURLRequest *newRequest)) completionHandler;
```

## Parameters

- `session`: The session containing the delayed request.
- `task`: The task handling the delayed request.
- `request`: The request that was delayed.
- `completionHandler`: A completion handler to perform the request. The completion handler takes two parameters: a disposition that tells the task how to proceed, and a new request object that is only used if the disposition is [NSURLSessionDelayedRequestUseNewRequest](../urlsession/delayedrequestdisposition/usenewrequest.md).

<a id="Discussion"></a>

## Discussion

This method is called when a background session task with a delayed start time (as set with the [earliestBeginDate](../urlsessiontask/earliestbegindate.md) property) is ready to start. This delegate method should only be implemented if the request might become stale while waiting for the network load and needs to be replaced by a new request.

For loading to continue, the delegate must call the completion handler, passing in a disposition that indicates how the task should proceed. Passing the [NSURLSessionDelayedRequestCancel](../urlsession/delayedrequestdisposition/cancel.md) disposition is equivalent to calling [cancel](../urlsessiontask/cancel%28%29.md) on the task directly.

## See Also

### Handling delayed and waiting tasks

- [NSURLSessionDelayedRequestDisposition](../urlsession/delayedrequestdisposition.md): The action to take on a delayed URL session task.
- [URLSession:taskIsWaitingForConnectivity:](urlsession%28__taskiswaitingforconnectivity_%29.md): Tells the delegate that the task is waiting until suitable connectivity is available before beginning the network load.
