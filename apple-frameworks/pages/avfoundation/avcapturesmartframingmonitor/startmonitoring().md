> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturesmartframingmonitor/startmonitoring()](https://developer.apple.com/documentation/avfoundation/avcapturesmartframingmonitor/startmonitoring())

# startMonitoring() (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Begins monitoring the device’s active scene and making framing recommendations.

## Declaration

```swift
func startMonitoring() throws
```

## Mentioned In

- [Adopting smart framing in your camera app](../adopting-smart-framing-in-your-camera-app.md)

<a id="discussion"></a>

## Discussion

The monitor’s [recommendedFraming](recommendedframing.md) is `nil` when it is not actively running. Call this method to start monitoring. You may start monitoring before or after calling [startRunning()](../avcapturesession/startrunning%28%29.md),  and you may stop active monitoring without stopping the capture session by calling [stopMonitoring()](stopmonitoring%28%29.md) at any time, but you must set [enabledFramings](enabledframings.md) before running your capture session so that the monitor is prepared for your desired framing recommendations. While the monitor is running, you may set [enabledFramings](enabledframings.md) at any time to change the framing choices the monitor should consider in its recommendations.

## See Also

### Managing the life cycle

- [isMonitoring](ismonitoring.md): Yes when the receiver is actively monitoring.
- [stopMonitoring()](stopmonitoring%28%29.md): Stops monitoring the device’s active scene and making framing recommendations.

# startMonitoringWithError: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+

Begins monitoring the device’s active scene and making framing recommendations.

## Declaration

```objectivec
- (BOOL) startMonitoringWithError:(NSError **) outError;
```

## Parameters

- `outError`: A pointer to an `NSError` indicating why [startMonitoringWithError:](startmonitoring%28%29.md) failed, or to a `nil` `NSError` on success.

<a id="return-value"></a>

## Return Value

`true` if successful, `false` if monitoring could not be started.

## Mentioned In

- [Adopting smart framing in your camera app](../adopting-smart-framing-in-your-camera-app.md)

<a id="discussion"></a>

## Discussion

The monitor’s [recommendedFraming](recommendedframing.md) is `nil` when it is not actively running. Call this method to start monitoring. You may start monitoring before or after calling [startRunning](../avcapturesession/startrunning%28%29.md),  and you may stop active monitoring without stopping the capture session by calling [stopMonitoring](stopmonitoring%28%29.md) at any time, but you must set [enabledFramings](enabledframings.md) before running your capture session so that the monitor is prepared for your desired framing recommendations. While the monitor is running, you may set [enabledFramings](enabledframings.md) at any time to change the framing choices the monitor should consider in its recommendations.

## See Also

### Managing the life cycle

- [monitoring](ismonitoring.md): Yes when the receiver is actively monitoring.
- [stopMonitoring](stopmonitoring%28%29.md): Stops monitoring the device’s active scene and making framing recommendations.
