> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturesynchronizeddepthdata/depthdata](https://developer.apple.com/documentation/avfoundation/avcapturesynchronizeddepthdata/depthdata)

# depthData (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

The depth data captured at this synchronization point.

## Declaration

```swift
var depthData: AVDepthData { get }
```

<a id="Discussion"></a>

## Discussion

If the [depthDataWasDropped](depthdatawasdropped.md) property is [true](https://developer.apple.com/documentation/swift/true), this [AVDepthData](../avdepthdata.md) object does not contain a depth map (instead, it contains only metadata).

This value is equivalent to that provided by the [depthDataOutput(\_:didOutput:timestamp:connection:)](../avcapturedepthdataoutputdelegate/depthdataoutput%28__didoutput_timestamp_connection_%29.md) or [depthDataOutput(\_:didDrop:timestamp:connection:reason:)](../avcapturedepthdataoutputdelegate/depthdataoutput%28__diddrop_timestamp_connection_reason_%29.md) delegate method when using a depth capture output without a data output synchronizer.

# depthData (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

The depth data captured at this synchronization point.

## Declaration

```objectivec
@property (readonly) AVDepthData * depthData;
```

<a id="Discussion"></a>

## Discussion

If the [depthDataWasDropped](depthdatawasdropped.md) property is [true](https://developer.apple.com/documentation/swift/true), this [AVDepthData](../avdepthdata.md) object does not contain a depth map (instead, it contains only metadata).

This value is equivalent to that provided by the [depthDataOutput:didOutputDepthData:timestamp:connection:](../avcapturedepthdataoutputdelegate/depthdataoutput%28__didoutput_timestamp_connection_%29.md) or [depthDataOutput:didDropDepthData:timestamp:connection:reason:](../avcapturedepthdataoutputdelegate/depthdataoutput%28__diddrop_timestamp_connection_reason_%29.md) delegate method when using a depth capture output without a data output synchronizer.
