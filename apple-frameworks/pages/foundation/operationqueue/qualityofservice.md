> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/operationqueue/qualityofservice](https://developer.apple.com/documentation/foundation/operationqueue/qualityofservice)

# qualityOfService (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The default service level to apply to operations that the queue invokes.

## Declaration

```swift
var qualityOfService: QualityOfService { get set }
```

<a id="Discussion"></a>

## Discussion

This property specifies the service level applied to operation objects added to the queue. If the operation object has an explicit service level set, that value is used instead. The default value of this property depends on how you created the queue. For queues you create yourself, the default value is `NSOperationQualityOfServiceBackground`. For the queue returned by the [main](main.md) method, the default value is `NSOperationQualityOfServiceUserInteractive` and cannot be changed.

Service levels affect the priority with which operation objects are given access to system resources such as CPU time, network resources, disk resources, and so on. Operations with a higher quality of service level are given greater priority over system resources so that they may perform their task more quickly. You use service levels to ensure that operations responding to explicit user requests are given priority over less critical work.

## See Also

### Managing the Execution of Operations

- [maxConcurrentOperationCount](maxconcurrentoperationcount.md): The maximum number of queued operations that can run at the same time.
- [defaultMaxConcurrentOperationCount](defaultmaxconcurrentoperationcount.md): The default maximum number of operations to invoke concurrently in a queue.

# qualityOfService (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The default service level to apply to operations that the queue invokes.

## Declaration

```objectivec
@property NSQualityOfService qualityOfService;
```

<a id="Discussion"></a>

## Discussion

This property specifies the service level applied to operation objects added to the queue. If the operation object has an explicit service level set, that value is used instead. The default value of this property depends on how you created the queue. For queues you create yourself, the default value is `NSOperationQualityOfServiceBackground`. For the queue returned by the [mainQueue](main.md) method, the default value is `NSOperationQualityOfServiceUserInteractive` and cannot be changed.

Service levels affect the priority with which operation objects are given access to system resources such as CPU time, network resources, disk resources, and so on. Operations with a higher quality of service level are given greater priority over system resources so that they may perform their task more quickly. You use service levels to ensure that operations responding to explicit user requests are given priority over less critical work.

## See Also

### Managing the Execution of Operations

- [maxConcurrentOperationCount](maxconcurrentoperationcount.md): The maximum number of queued operations that can run at the same time.
- [NSOperationQueueDefaultMaxConcurrentOperationCount](defaultmaxconcurrentoperationcount.md): The default maximum number of operations to invoke concurrently in a queue.
