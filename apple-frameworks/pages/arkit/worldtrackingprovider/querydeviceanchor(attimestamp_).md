> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/worldtrackingprovider/querydeviceanchor(attimestamp:)](https://developer.apple.com/documentation/arkit/worldtrackingprovider/querydeviceanchor(attimestamp:))

# queryDeviceAnchor(atTimestamp:)

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** macOS 26.0+ · visionOS 1.0+

The predicted pose of the current device at a given time.

## Declaration

```swift
final func queryDeviceAnchor(atTimestamp timestamp: TimeInterval) -> DeviceAnchor?
```

## Parameters

- `timestamp`: A time — now or in the future — to predict the device pose.

<a id="return-value"></a>

## Return Value

The predicted position and orientation of the device at the time you specify.

<a id="Discussion"></a>

## Discussion

Pass the `timestamp` parameter as absolute time in seconds. For example, to get the device’s current pose, pass [CACurrentMediaTime()](../../quartzcore/cacurrentmediatime%28%29.md) as the timestamp.

> **Important**

>  Predicting future device pose is a computationally expensive operation. You typically only use this method when implementing your own rendering with the [Compositor Services](../../compositorservices.md) framework.
