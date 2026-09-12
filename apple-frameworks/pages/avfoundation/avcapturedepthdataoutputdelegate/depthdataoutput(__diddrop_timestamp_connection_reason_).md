> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedepthdataoutputdelegate/depthdataoutput(_:diddrop:timestamp:connection:reason:)](https://developer.apple.com/documentation/avfoundation/avcapturedepthdataoutputdelegate/depthdataoutput(_:diddrop:timestamp:connection:reason:))

# depthDataOutput(\_:didDrop:timestamp:connection:reason:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

Informs the delegate that captured depth data was not processed.

## Declaration

```swift
optional func depthDataOutput(_ output: AVCaptureDepthDataOutput, didDrop depthData: AVDepthData, timestamp: CMTime, connection: AVCaptureConnection, reason: AVCaptureOutput.DataDroppedReason)
```

## Parameters

- `output`: The depth data output providing data.
- `depthData`: A depth data object containing information about the  dropped data, such as its data type. Because this depth data was not captured or processed, its [depthDataMap](../avdepthdata/depthdatamap.md) property is empty.
- `timestamp`: The time at which the data was captured.
- `connection`: The capture connection through which the data was captured.
- `reason`: The reason depth data was dropped.

<a id="Discussion"></a>

## Discussion

The capture output calls this method once for each incident of dropped depth data. The object in the `depthData` parameter is an empty shell, and doesn’t contain a depth data backing pixel buffer.

The capture output calls this method on the dispatch queue specified by its [delegateCallbackQueue](../avcapturedepthdataoutput/delegatecallbackqueue.md) property. Because this method executes on the same dispatch queue that outputs depth data, your implementation must be efficient to prevent further capture performance problems such as additional drops.

## See Also

### Receiving depth data

- [depthDataOutput(\_:didOutput:timestamp:connection:)](depthdataoutput%28__didoutput_timestamp_connection_%29.md): Provides newly captured depth data to the delegate.
- [AVCaptureOutput.DataDroppedReason](../avcaptureoutput/datadroppedreason.md): Constants that define reasons for why the system dropped a frame.

# depthDataOutput:didDropDepthData:timestamp:connection:reason: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

Informs the delegate that captured depth data was not processed.

## Declaration

```objectivec
- (void) depthDataOutput:(AVCaptureDepthDataOutput *) output didDropDepthData:(AVDepthData *) depthData timestamp:(CMTime) timestamp connection:(AVCaptureConnection *) connection reason:(AVCaptureOutputDataDroppedReason) reason;
```

## Parameters

- `output`: The depth data output providing data.
- `depthData`: A depth data object containing information about the  dropped data, such as its data type. Because this depth data was not captured or processed, its [depthDataMap](../avdepthdata/depthdatamap.md) property is empty.
- `timestamp`: The time at which the data was captured.
- `connection`: The capture connection through which the data was captured.
- `reason`: The reason depth data was dropped.

<a id="Discussion"></a>

## Discussion

The capture output calls this method once for each incident of dropped depth data. The object in the `depthData` parameter is an empty shell, and doesn’t contain a depth data backing pixel buffer.

The capture output calls this method on the dispatch queue specified by its [delegateCallbackQueue](../avcapturedepthdataoutput/delegatecallbackqueue.md) property. Because this method executes on the same dispatch queue that outputs depth data, your implementation must be efficient to prevent further capture performance problems such as additional drops.

## See Also

### Receiving depth data

- [depthDataOutput:didOutputDepthData:timestamp:connection:](depthdataoutput%28__didoutput_timestamp_connection_%29.md): Provides newly captured depth data to the delegate.
- [AVCaptureOutputDataDroppedReason](../avcaptureoutput/datadroppedreason.md): Constants that define reasons for why the system dropped a frame.
