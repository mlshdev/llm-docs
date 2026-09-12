> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptureoutput/datadroppedreason/latedata](https://developer.apple.com/documentation/avfoundation/avcaptureoutput/datadroppedreason/latedata)

# AVCaptureOutput.DataDroppedReason.lateData (Swift)

**Framework:** AVFoundation  
**Kind:** Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 17.0+ · visionOS 1.0+

The system dropped data because you’ve configured capture output to drop data when delegate queue is in a blocked state, and there’s data to deliver.

## Declaration

```swift
case lateData
```

<a id="Discussion"></a>

## Discussion

Use the [alwaysDiscardsLateVideoFrames](../../avcapturevideodataoutput/alwaysdiscardslatevideoframes.md) property of [AVCaptureVideoDataOutput](../../avcapturevideodataoutput.md) or the [alwaysDiscardsLateDepthData](../../avcapturedepthdataoutput/alwaysdiscardslatedepthdata.md) property of [AVCaptureDepthDataOutput](../../avcapturedepthdataoutput.md) to choose whether the capture output discards data.

## See Also

### Reasons

- [AVCaptureOutput.DataDroppedReason.none](none.md): The system didn’t drop data.
- [AVCaptureOutput.DataDroppedReason.outOfBuffers](outofbuffers.md): The system dropped data because the capture output exhausted its internal pool of memory buffers.
- [AVCaptureOutput.DataDroppedReason.discontinuity](discontinuity.md): The system dropped data because the device providing data experienced a discontinuity, and the output lost an unknown number of data objects.

# AVCaptureOutputDataDroppedReasonLateData (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 17.0+ · visionOS 1.0+

The system dropped data because you’ve configured capture output to drop data when delegate queue is in a blocked state, and there’s data to deliver.

## Declaration

```objectivec
AVCaptureOutputDataDroppedReasonLateData
```

<a id="Discussion"></a>

## Discussion

Use the [alwaysDiscardsLateVideoFrames](../../avcapturevideodataoutput/alwaysdiscardslatevideoframes.md) property of [AVCaptureVideoDataOutput](../../avcapturevideodataoutput.md) or the [alwaysDiscardsLateDepthData](../../avcapturedepthdataoutput/alwaysdiscardslatedepthdata.md) property of [AVCaptureDepthDataOutput](../../avcapturedepthdataoutput.md) to choose whether the capture output discards data.

## See Also

### Reasons

- [AVCaptureOutputDataDroppedReasonNone](none.md): The system didn’t drop data.
- [AVCaptureOutputDataDroppedReasonOutOfBuffers](outofbuffers.md): The system dropped data because the capture output exhausted its internal pool of memory buffers.
- [AVCaptureOutputDataDroppedReasonDiscontinuity](discontinuity.md): The system dropped data because the device providing data experienced a discontinuity, and the output lost an unknown number of data objects.
