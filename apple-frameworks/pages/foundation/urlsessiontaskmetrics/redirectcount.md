> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsessiontaskmetrics/redirectcount](https://developer.apple.com/documentation/foundation/urlsessiontaskmetrics/redirectcount)

# redirectCount (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The number of redirects that occurred during the execution of the task.

## Declaration

```swift
var redirectCount: Int { get }
```

## See Also

### Accessing task metrics

- [transactionMetrics](transactionmetrics.md): An array of metrics for each individual request-response transaction made during the execution of the task.
- [URLSessionTaskTransactionMetrics](../urlsessiontasktransactionmetrics.md): An object that encapsualtes the performance metrics collected by the URL Loading System during the execution of a session task.
- [taskInterval](taskinterval.md): The time interval between when a task is instantiated and when the task is completed.

# redirectCount (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The number of redirects that occurred during the execution of the task.

## Declaration

```objectivec
@property (assign, readonly) NSUInteger redirectCount;
```

## See Also

### Accessing task metrics

- [transactionMetrics](transactionmetrics.md): An array of metrics for each individual request-response transaction made during the execution of the task.
- [NSURLSessionTaskTransactionMetrics](../urlsessiontasktransactionmetrics.md): An object that encapsualtes the performance metrics collected by the URL Loading System during the execution of a session task.
- [taskInterval](taskinterval.md): The time interval between when a task is instantiated and when the task is completed.
