> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturesmartframingmonitor/ismonitoring](https://developer.apple.com/documentation/avfoundation/avcapturesmartframingmonitor/ismonitoring)

# isMonitoring (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Yes when the receiver is actively monitoring.

## Declaration

```swift
var isMonitoring: Bool { get }
```

<a id="discussion"></a>

## Discussion

See [startMonitoring()](startmonitoring%28%29.md) and [stopMonitoring()](stopmonitoring%28%29.md).

## See Also

### Managing the life cycle

- [startMonitoring()](startmonitoring%28%29.md): Begins monitoring the device’s active scene and making framing recommendations.
- [stopMonitoring()](stopmonitoring%28%29.md): Stops monitoring the device’s active scene and making framing recommendations.

# monitoring (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+

Yes when the receiver is actively monitoring.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isMonitoring) BOOL monitoring;
```

<a id="discussion"></a>

## Discussion

See [startMonitoringWithError:](startmonitoring%28%29.md) and [stopMonitoring](stopmonitoring%28%29.md).

## See Also

### Managing the life cycle

- [startMonitoringWithError:](startmonitoring%28%29.md): Begins monitoring the device’s active scene and making framing recommendations.
- [stopMonitoring](stopmonitoring%28%29.md): Stops monitoring the device’s active scene and making framing recommendations.
