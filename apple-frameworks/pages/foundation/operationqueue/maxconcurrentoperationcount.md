> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/operationqueue/maxconcurrentoperationcount](https://developer.apple.com/documentation/foundation/operationqueue/maxconcurrentoperationcount)

# maxConcurrentOperationCount (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The maximum number of queued operations that can run at the same time.

## Declaration

```swift
var maxConcurrentOperationCount: Int { get set }
```

<a id="Discussion"></a>

## Discussion

The value in this property affects only the operations that the current queue has executing at the same time. Other operation queues can also execute their maximum number of operations in parallel.

Reducing the number of concurrent operations does not affect any operations that are currently executing. Specifying the value `NSOperationQueueDefaultMaxConcurrentOperationCount` (which is recommended) causes the system to set the maximum number of operations based on system conditions.

The default value of this property is [defaultMaxConcurrentOperationCount](defaultmaxconcurrentoperationcount.md). You may monitor changes to the value of this property using [Key-value observing](https://developer.apple.com/library/archive/documentation/General/Conceptual/DevPedia-CocoaCore/KVO.html#//apple_ref/doc/uid/TP40008195-CH16). Configure an observer to monitor the [maxConcurrentOperationCount](maxconcurrentoperationcount.md) key path of the operation queue.

## See Also

### Managing the Execution of Operations

- [qualityOfService](qualityofservice.md): The default service level to apply to operations that the queue invokes.
- [defaultMaxConcurrentOperationCount](defaultmaxconcurrentoperationcount.md): The default maximum number of operations to invoke concurrently in a queue.

# maxConcurrentOperationCount (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The maximum number of queued operations that can run at the same time.

## Declaration

```objectivec
@property NSInteger maxConcurrentOperationCount;
```

<a id="Discussion"></a>

## Discussion

The value in this property affects only the operations that the current queue has executing at the same time. Other operation queues can also execute their maximum number of operations in parallel.

Reducing the number of concurrent operations does not affect any operations that are currently executing. Specifying the value `NSOperationQueueDefaultMaxConcurrentOperationCount` (which is recommended) causes the system to set the maximum number of operations based on system conditions.

The default value of this property is [NSOperationQueueDefaultMaxConcurrentOperationCount](defaultmaxconcurrentoperationcount.md). You may monitor changes to the value of this property using [Key-value observing](https://developer.apple.com/library/archive/documentation/General/Conceptual/DevPedia-CocoaCore/KVO.html#//apple_ref/doc/uid/TP40008195-CH16). Configure an observer to monitor the [maxConcurrentOperationCount](maxconcurrentoperationcount.md) key path of the operation queue.

## See Also

### Managing the Execution of Operations

- [qualityOfService](qualityofservice.md): The default service level to apply to operations that the queue invokes.
- [NSOperationQueueDefaultMaxConcurrentOperationCount](defaultmaxconcurrentoperationcount.md): The default maximum number of operations to invoke concurrently in a queue.
