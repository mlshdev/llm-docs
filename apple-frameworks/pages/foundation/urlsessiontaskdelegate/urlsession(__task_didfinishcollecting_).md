> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsessiontaskdelegate/urlsession(_:task:didfinishcollecting:)](https://developer.apple.com/documentation/foundation/urlsessiontaskdelegate/urlsession(_:task:didfinishcollecting:))

# urlSession(\_:task:didFinishCollecting:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Tells the delegate that the session finished collecting metrics for the task.

## Declaration

```swift
optional func urlSession(_ session: URLSession, task: URLSessionTask, didFinishCollecting metrics: URLSessionTaskMetrics)
```

## Parameters

- `session`: The session collecting the metrics.
- `task`: The task whose metrics have been collected.
- `metrics`: The collected metrics.

## See Also

### Collecting task metrics

- [URLSessionTaskMetrics](../urlsessiontaskmetrics.md): An object encapsulating the metrics for a session task.

# URLSession:task:didFinishCollectingMetrics: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Tells the delegate that the session finished collecting metrics for the task.

## Declaration

```objectivec
- (void) URLSession:(NSURLSession *) session task:(NSURLSessionTask *) task didFinishCollectingMetrics:(NSURLSessionTaskMetrics *) metrics;
```

## Parameters

- `session`: The session collecting the metrics.
- `task`: The task whose metrics have been collected.
- `metrics`: The collected metrics.

## See Also

### Collecting task metrics

- [NSURLSessionTaskMetrics](../urlsessiontaskmetrics.md): An object encapsulating the metrics for a session task.
