> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsessiontasktransactionmetrics/init()](https://developer.apple.com/documentation/foundation/urlsessiontasktransactionmetrics/init())

# init() (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 10.0+ (deprecated in 13.0) · iPadOS 10.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.12+ (deprecated in 10.15) · tvOS 10.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 6.0)

Creates a transaction metrics instance.

> Not supported

## Declaration

```swift
init()
```

<a id="Discussion"></a>

## Discussion

You should never need to create your own [URLSessionTaskTransactionMetrics](../urlsessiontasktransactionmetrics.md) instances. The [URLSession](../urlsession.md) creates task transaction metrics as part of the [URLSessionTaskMetrics](../urlsessiontaskmetrics.md) instance that it delivers to the [urlSession(\_:task:didFinishCollecting:)](../urlsessiontaskdelegate/urlsession%28__task_didfinishcollecting_%29.md) method of [URLSessionTaskDelegate](../urlsessiontaskdelegate.md).

## See Also

### Creating transaction metrics

- [new()](new%28%29.md): Deprecated. Creates a new transaction metrics instance.

# init (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 13.0) · iPadOS 10.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.12+ (deprecated in 10.15) · tvOS 10.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 6.0)

Creates a transaction metrics instance.

> Not supported

## Declaration

```objectivec
- (instancetype) init;
```

<a id="Discussion"></a>

## Discussion

You should never need to create your own [NSURLSessionTaskTransactionMetrics](../urlsessiontasktransactionmetrics.md) instances. The [NSURLSession](../urlsession.md) creates task transaction metrics as part of the [NSURLSessionTaskMetrics](../urlsessiontaskmetrics.md) instance that it delivers to the [URLSession:task:didFinishCollectingMetrics:](../urlsessiontaskdelegate/urlsession%28__task_didfinishcollecting_%29.md) method of [NSURLSessionTaskDelegate](../urlsessiontaskdelegate.md).

## See Also

### Creating transaction metrics

- [new](new%28%29.md): Deprecated. Creates a new transaction metrics instance.
