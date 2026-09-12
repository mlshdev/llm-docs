> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/mxmetricmanager/remove(_:)](https://developer.apple.com/documentation/metrickit/mxmetricmanager/remove(_:))

# remove(\_:) (Swift)

**Framework:** MetricKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 12.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Unsubscribes from daily reports of app metrics.

> Use [MetricManager](../metricmanager.md) instead.

## Declaration

```swift
func remove(_ subscriber: any MXMetricManagerSubscriber)
```

## Parameters

- `subscriber`: The object that receives daily metrics reports. Passing an object that is not currently subscribed does nothing.

<a id="Discussion"></a>

## Discussion

> **Warning**

>  If you call this function from a method that deallocates the object, your app might crash.

## See Also

### Subscribing to reports

- [add(\_:)](add%28__%29.md): Deprecated. Registers to receive a daily report of app metrics from the metrics manager.

# removeSubscriber: (Objective-C)

**Framework:** MetricKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 12.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Unsubscribes from daily reports of app metrics.

> Use [MetricManager](../metricmanager.md) instead.

## Declaration

```objectivec
- (void) removeSubscriber:(id<MXMetricManagerSubscriber>) subscriber;
```

## Parameters

- `subscriber`: The object that receives daily metrics reports. Passing an object that is not currently subscribed does nothing.

<a id="Discussion"></a>

## Discussion

> **Warning**

>  If you call this function from a method that deallocates the object, your app might crash.

## See Also

### Subscribing to reports

- [addSubscriber:](add%28__%29.md): Deprecated. Registers to receive a daily report of app metrics from the metrics manager.
