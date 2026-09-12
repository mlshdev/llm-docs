> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptureoutput/datadroppedreason/discontinuity](https://developer.apple.com/documentation/avfoundation/avcaptureoutput/datadroppedreason/discontinuity)

# AVCaptureOutput.DataDroppedReason.discontinuity (Swift)

**Framework:** AVFoundation  
**Kind:** Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 17.0+ · visionOS 1.0+

The system dropped data because the device providing data experienced a discontinuity, and the output lost an unknown number of data objects.

## Declaration

```swift
case discontinuity
```

<a id="Discussion"></a>

## Discussion

A discontinuity is a situation where the capture system can’t ensure that minimal time passes between the capture of data buffers. This kind of situation can arise when the system as a whole is too busy to handle the data.

## See Also

### Reasons

- [AVCaptureOutput.DataDroppedReason.none](none.md): The system didn’t drop data.
- [AVCaptureOutput.DataDroppedReason.lateData](latedata.md): The system dropped data because you’ve configured capture output to drop data when delegate queue is in a blocked state, and there’s data to deliver.
- [AVCaptureOutput.DataDroppedReason.outOfBuffers](outofbuffers.md): The system dropped data because the capture output exhausted its internal pool of memory buffers.

# AVCaptureOutputDataDroppedReasonDiscontinuity (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 17.0+ · visionOS 1.0+

The system dropped data because the device providing data experienced a discontinuity, and the output lost an unknown number of data objects.

## Declaration

```objectivec
AVCaptureOutputDataDroppedReasonDiscontinuity
```

<a id="Discussion"></a>

## Discussion

A discontinuity is a situation where the capture system can’t ensure that minimal time passes between the capture of data buffers. This kind of situation can arise when the system as a whole is too busy to handle the data.

## See Also

### Reasons

- [AVCaptureOutputDataDroppedReasonNone](none.md): The system didn’t drop data.
- [AVCaptureOutputDataDroppedReasonLateData](latedata.md): The system dropped data because you’ve configured capture output to drop data when delegate queue is in a blocked state, and there’s data to deliver.
- [AVCaptureOutputDataDroppedReasonOutOfBuffers](outofbuffers.md): The system dropped data because the capture output exhausted its internal pool of memory buffers.
