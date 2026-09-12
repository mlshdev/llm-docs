> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundtasks/bgtaskscheduler/getpendingtaskrequests(completionhandler:)](https://developer.apple.com/documentation/backgroundtasks/bgtaskscheduler/getpendingtaskrequests(completionhandler:))

# getPendingTaskRequests(completionHandler:) (Swift)

**Framework:** Background Tasks  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Request a list of unexecuted scheduled task requests.

## Declaration

```swift
func getPendingTaskRequests(completionHandler: @escaping @Sendable ([BGTaskRequest]) -> Void)
```

```swift
func pendingTaskRequests() async -> [BGTaskRequest]
```

## Parameters

- `completionHandler`: The completion handler called with the pending tasks. The handler may execute on a background thread.

  The handler takes a single parameter `tasksRequests`, an array of `BGTaskRequest` objects. The array is empty if there are no scheduled tasks.

  The objects passed in the array are copies of the existing requests. Changing the attributes of a request has no effect. To change the attributes submit a new task request using [submit(\_:)](submit%28__%29.md).

<a id="Discussion"></a>

## Discussion

> **Concurrency note**

> You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func pendingTaskRequests() async -> [BGTaskRequest]
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

# getPendingTaskRequestsWithCompletionHandler: (Objective-C)

**Framework:** Background Tasks  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Request a list of unexecuted scheduled task requests.

## Declaration

```objectivec
- (void) getPendingTaskRequestsWithCompletionHandler:(void (^)(NSArray<BGTaskRequest *> *taskRequests)) completionHandler;
```

## Parameters

- `completionHandler`: The completion handler called with the pending tasks. The handler may execute on a background thread.

  The handler takes a single parameter `tasksRequests`, an array of `BGTaskRequest` objects. The array is empty if there are no scheduled tasks.

  The objects passed in the array are copies of the existing requests. Changing the attributes of a request has no effect. To change the attributes submit a new task request using [submitTaskRequest:error:](submit%28__%29.md).

<a id="Discussion"></a>

## Discussion

> **Concurrency note**

> You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func pendingTaskRequests() async -> [BGTaskRequest]
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).
