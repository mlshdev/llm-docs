> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturesmartframingmonitor/stopmonitoring()](https://developer.apple.com/documentation/avfoundation/avcapturesmartframingmonitor/stopmonitoring())

# stopMonitoring() (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Stops monitoring the device’s active scene and making framing recommendations.

## Declaration

```swift
func stopMonitoring()
```

## Mentioned In

- [Adopting smart framing in your camera app](../adopting-smart-framing-in-your-camera-app.md)

<a id="discussion"></a>

## Discussion

The monitor’s [recommendedFraming](recommendedframing.md) is `nil` when it is not actively running. Call this method to stop actively monitoring the scene and making framing recommendations. You may start monitoring before or after calling [startRunning()](../avcapturesession/startrunning%28%29.md), and may stop active monitoring without stopping the capture session by calling [stopMonitoring()](stopmonitoring%28%29.md) at any time.

## See Also

### Managing the life cycle

- [isMonitoring](ismonitoring.md): Yes when the receiver is actively monitoring.
- [startMonitoring()](startmonitoring%28%29.md): Begins monitoring the device’s active scene and making framing recommendations.

# stopMonitoring (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+

Stops monitoring the device’s active scene and making framing recommendations.

## Declaration

```objectivec
- (void) stopMonitoring;
```

## Mentioned In

- [Adopting smart framing in your camera app](../adopting-smart-framing-in-your-camera-app.md)

<a id="discussion"></a>

## Discussion

The monitor’s [recommendedFraming](recommendedframing.md) is `nil` when it is not actively running. Call this method to stop actively monitoring the scene and making framing recommendations. You may start monitoring before or after calling [startRunning](../avcapturesession/startrunning%28%29.md), and may stop active monitoring without stopping the capture session by calling [stopMonitoring](stopmonitoring%28%29.md) at any time.

## See Also

### Managing the life cycle

- [monitoring](ismonitoring.md): Yes when the receiver is actively monitoring.
- [startMonitoringWithError:](startmonitoring%28%29.md): Begins monitoring the device’s active scene and making framing recommendations.
