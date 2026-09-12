> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/mxmetricmanager/add(_:)](https://developer.apple.com/documentation/metrickit/mxmetricmanager/add(_:))

# add(\_:) (Swift)

**Framework:** MetricKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 12.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Registers to receive a daily report of app metrics from the metrics manager.

> Use [MetricManager](../metricmanager.md) instead.

## Declaration

```swift
func add(_ subscriber: any MXMetricManagerSubscriber)
```

## Parameters

- `subscriber`: The object that receives the daily metrics reports. The object must conform to [MXMetricManagerSubscriber](../mxmetricmanagersubscriber.md).

<a id="Discussion"></a>

## Discussion

> **Warning**

>  If you call this function from a method that deallocates the object, your app might crash.

## See Also

### Subscribing to reports

- [remove(\_:)](remove%28__%29.md): Deprecated. Unsubscribes from daily reports of app metrics.

# addSubscriber: (Objective-C)

**Framework:** MetricKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 12.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Registers to receive a daily report of app metrics from the metrics manager.

> Use [MetricManager](../metricmanager.md) instead.

## Declaration

```objectivec
- (void) addSubscriber:(id<MXMetricManagerSubscriber>) subscriber;
```

## Parameters

- `subscriber`: The object that receives the daily metrics reports. The object must conform to [MXMetricManagerSubscriber](../mxmetricmanagersubscriber.md).

<a id="Discussion"></a>

## Discussion

> **Warning**

>  If you call this function from a method that deallocates the object, your app might crash.

## See Also

### Subscribing to reports

- [removeSubscriber:](remove%28__%29.md): Deprecated. Unsubscribes from daily reports of app metrics.
