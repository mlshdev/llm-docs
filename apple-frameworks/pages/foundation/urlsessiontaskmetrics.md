> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsessiontaskmetrics](https://developer.apple.com/documentation/foundation/urlsessiontaskmetrics)

# URLSessionTaskMetrics (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

An object encapsulating the metrics for a session task.

## Declaration

```swift
class URLSessionTaskMetrics
```

<a id="overview"></a>

## Overview

Each [URLSessionTaskMetrics](urlsessiontaskmetrics.md) object contains the [taskInterval](urlsessiontaskmetrics/taskinterval.md) and [redirectCount](urlsessiontaskmetrics/redirectcount.md), as well as metrics for each request-and-response transaction made during the execution of the task.

## Topics

### Creating task metrics

- [init()](urlsessiontaskmetrics/init%28%29.md): Deprecated. Creates a task metrics instance.

### Accessing task metrics

- [transactionMetrics](urlsessiontaskmetrics/transactionmetrics.md): An array of metrics for each individual request-response transaction made during the execution of the task.
- [URLSessionTaskTransactionMetrics](urlsessiontasktransactionmetrics.md): An object that encapsualtes the performance metrics collected by the URL Loading System during the execution of a session task.
- [taskInterval](urlsessiontaskmetrics/taskinterval.md): The time interval between when a task is instantiated and when the task is completed.
- [redirectCount](urlsessiontaskmetrics/redirectcount.md): The number of redirects that occurred during the execution of the task.

### Type Methods

- [new()](urlsessiontaskmetrics/new%28%29.md): Deprecated. Creates a task metrics instance.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Collecting task metrics

- [urlSession(\_:task:didFinishCollecting:)](urlsessiontaskdelegate/urlsession%28__task_didfinishcollecting_%29.md): Tells the delegate that the session finished collecting metrics for the task.

# NSURLSessionTaskMetrics (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

An object encapsulating the metrics for a session task.

## Declaration

```objectivec
@interface NSURLSessionTaskMetrics : NSObject
```

<a id="overview"></a>

## Overview

Each [NSURLSessionTaskMetrics](urlsessiontaskmetrics.md) object contains the [taskInterval](urlsessiontaskmetrics/taskinterval.md) and [redirectCount](urlsessiontaskmetrics/redirectcount.md), as well as metrics for each request-and-response transaction made during the execution of the task.

## Topics

### Creating task metrics

- [init](urlsessiontaskmetrics/init%28%29.md): Deprecated. Creates a task metrics instance.

### Accessing task metrics

- [transactionMetrics](urlsessiontaskmetrics/transactionmetrics.md): An array of metrics for each individual request-response transaction made during the execution of the task.
- [NSURLSessionTaskTransactionMetrics](urlsessiontasktransactionmetrics.md): An object that encapsualtes the performance metrics collected by the URL Loading System during the execution of a session task.
- [taskInterval](urlsessiontaskmetrics/taskinterval.md): The time interval between when a task is instantiated and when the task is completed.
- [redirectCount](urlsessiontaskmetrics/redirectcount.md): The number of redirects that occurred during the execution of the task.

### Type Methods

- [new](urlsessiontaskmetrics/new%28%29.md): Deprecated. Creates a task metrics instance.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Collecting task metrics

- [URLSession:task:didFinishCollectingMetrics:](urlsessiontaskdelegate/urlsession%28__task_didfinishcollecting_%29.md): Tells the delegate that the session finished collecting metrics for the task.
