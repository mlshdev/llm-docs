> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsessiontaskmetrics/init()](https://developer.apple.com/documentation/foundation/urlsessiontaskmetrics/init())

# init() (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 10.0+ (deprecated in 13.0) · iPadOS 10.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.12+ (deprecated in 10.15) · tvOS 10.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 6.0)

Creates a task metrics instance.

> Not supported

## Declaration

```swift
init()
```

<a id="Discussion"></a>

## Discussion

You should never need to create your own [URLSessionTaskMetrics](../urlsessiontaskmetrics.md) instances. If you are interested in task metrics, implement the [urlSession(\_:task:didFinishCollecting:)](../urlsessiontaskdelegate/urlsession%28__task_didfinishcollecting_%29.md) method of [URLSessionTaskDelegate](../urlsessiontaskdelegate.md). The [URLSession](../urlsession.md) will collect task metrics for you and deliver them to this method.

# init (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 13.0) · iPadOS 10.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.12+ (deprecated in 10.15) · tvOS 10.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 6.0)

Creates a task metrics instance.

> Not supported

## Declaration

```objectivec
- (instancetype) init;
```

<a id="Discussion"></a>

## Discussion

You should never need to create your own [NSURLSessionTaskMetrics](../urlsessiontaskmetrics.md) instances. If you are interested in task metrics, implement the [URLSession:task:didFinishCollectingMetrics:](../urlsessiontaskdelegate/urlsession%28__task_didfinishcollecting_%29.md) method of [NSURLSessionTaskDelegate](../urlsessiontaskdelegate.md). The [NSURLSession](../urlsession.md) will collect task metrics for you and deliver them to this method.
