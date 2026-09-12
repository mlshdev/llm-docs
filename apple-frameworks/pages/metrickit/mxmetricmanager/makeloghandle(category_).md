> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/mxmetricmanager/makeloghandle(category:)](https://developer.apple.com/documentation/metrickit/mxmetricmanager/makeloghandle(category:))

# makeLogHandle(category:) (Swift)

**Framework:** MetricKit  
**Kind:** Type Method  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 12.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Returns a log handle used for writing custom metric events.

> Use [logHandle(category:)](../metricmanager/loghandle%28category_%29.md) instead.

## Declaration

```swift
class func makeLogHandle(category: String) -> OSLog
```

## Parameters

- `category`: A developer-specified string containing the name of the category of custom metrics written to the log.

<a id="return-value"></a>

## Return Value

A customized [OSLog](../../os/oslog.md) object used for writing custom metrics of the same category.

<a id="Discussion"></a>

## Discussion

The object returned by this method saves only custom signpost metrics. Other kinds of [os_log](../../os/os_log.md) messages aren’t persisted.

# makeLogHandleWithCategory: (Objective-C)

**Framework:** MetricKit  
**Kind:** Type Method  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 12.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Returns a log handle used for writing custom metric events.

> Use [logHandle(category:)](../metricmanager/loghandle%28category_%29.md) instead.

## Declaration

```objectivec
+ (os_log_t) makeLogHandleWithCategory:(NSString *) category;
```

## Parameters

- `category`: A developer-specified string containing the name of the category of custom metrics written to the log.

<a id="return-value"></a>

## Return Value

A customized [OSLog](../../os/oslog.md) object used for writing custom metrics of the same category.

<a id="Discussion"></a>

## Discussion

The object returned by this method saves only custom signpost metrics. Other kinds of [os_log](../../os/os_log.md) messages aren’t persisted.
