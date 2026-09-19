> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/urlsessiontaskmetrics/taskinterval

# taskInterval (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The time interval between when a task is instantiated and when the task is completed.

## Declaration

```swift
var taskInterval: DateInterval { get }
```

## See Also

### Accessing task metrics

- [transactionMetrics](transactionmetrics.md): An array of metrics for each individual request-response transaction made during the execution of the task.
- [URLSessionTaskTransactionMetrics](../urlsessiontasktransactionmetrics.md): An object that encapsualtes the performance metrics collected by the URL Loading System during the execution of a session task.
- [redirectCount](redirectcount.md): The number of redirects that occurred during the execution of the task.

# taskInterval (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The time interval between when a task is instantiated and when the task is completed.

## Declaration

```objectivec
@property (copy, readonly) NSDateInterval * taskInterval;
```

## See Also

### Accessing task metrics

- [transactionMetrics](transactionmetrics.md): An array of metrics for each individual request-response transaction made during the execution of the task.
- [NSURLSessionTaskTransactionMetrics](../urlsessiontasktransactionmetrics.md): An object that encapsualtes the performance metrics collected by the URL Loading System during the execution of a session task.
- [redirectCount](redirectcount.md): The number of redirects that occurred during the execution of the task.
