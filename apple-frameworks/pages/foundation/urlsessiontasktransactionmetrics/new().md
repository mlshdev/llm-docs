> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsessiontasktransactionmetrics/new()](https://developer.apple.com/documentation/foundation/urlsessiontasktransactionmetrics/new())

# new() (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 10.0+ (deprecated in 13.0) · iPadOS 10.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.12+ (deprecated in 10.15) · tvOS 10.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 6.0)

Creates a new transaction metrics instance.

> Not supported

## Declaration

```swift
class func new() -> Self
```

<a id="Discussion"></a>

## Discussion

You should never need to create your own [URLSessionTaskTransactionMetrics](../urlsessiontasktransactionmetrics.md) instances. The [URLSession](../urlsession.md) creates task transaction metrics as part of the [URLSessionTaskMetrics](../urlsessiontaskmetrics.md) instance that it delivers to the [urlSession(\_:task:didFinishCollecting:)](../urlsessiontaskdelegate/urlsession%28__task_didfinishcollecting_%29.md) method of [URLSessionTaskDelegate](../urlsessiontaskdelegate.md).

## See Also

### Creating transaction metrics

- [init()](init%28%29.md): Deprecated. Creates a transaction metrics instance.

# new (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 10.0+ (deprecated in 13.0) · iPadOS 10.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.12+ (deprecated in 10.15) · tvOS 10.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 6.0)

Creates a new transaction metrics instance.

> Not supported

## Declaration

```objectivec
+ (instancetype) new;
```

<a id="Discussion"></a>

## Discussion

You should never need to create your own [NSURLSessionTaskTransactionMetrics](../urlsessiontasktransactionmetrics.md) instances. The [NSURLSession](../urlsession.md) creates task transaction metrics as part of the [NSURLSessionTaskMetrics](../urlsessiontaskmetrics.md) instance that it delivers to the [URLSession:task:didFinishCollectingMetrics:](../urlsessiontaskdelegate/urlsession%28__task_didfinishcollecting_%29.md) method of [NSURLSessionTaskDelegate](../urlsessiontaskdelegate.md).

## See Also

### Creating transaction metrics

- [init](init%28%29.md): Deprecated. Creates a transaction metrics instance.
