> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/operationqueue/defaultmaxconcurrentoperationcount](https://developer.apple.com/documentation/foundation/operationqueue/defaultmaxconcurrentoperationcount)

# defaultMaxConcurrentOperationCount (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The default maximum number of operations to invoke concurrently in a queue.

## Declaration

```swift
class var defaultMaxConcurrentOperationCount: Int { get }
```

<a id="Discussion"></a>

## Discussion

The operation queue determines this number dynamically based on current system conditions.

## See Also

### Managing the Execution of Operations

- [qualityOfService](qualityofservice.md): The default service level to apply to operations that the queue invokes.
- [maxConcurrentOperationCount](maxconcurrentoperationcount.md): The maximum number of queued operations that can run at the same time.

# NSOperationQueueDefaultMaxConcurrentOperationCount (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The default maximum number of operations to invoke concurrently in a queue.

## Declaration

```objectivec
static const NSInteger NSOperationQueueDefaultMaxConcurrentOperationCount;
```

<a id="Discussion"></a>

## Discussion

The operation queue determines this number dynamically based on current system conditions.

## See Also

### Managing the Execution of Operations

- [qualityOfService](qualityofservice.md): The default service level to apply to operations that the queue invokes.
- [maxConcurrentOperationCount](maxconcurrentoperationcount.md): The maximum number of queued operations that can run at the same time.
