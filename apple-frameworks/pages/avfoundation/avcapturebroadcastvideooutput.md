> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturebroadcastvideooutput](https://developer.apple.com/documentation/avfoundation/avcapturebroadcastvideooutput)

# AVCaptureBroadcastVideoOutput (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

[AVCaptureBroadcastVideoOutput](avcapturebroadcastvideooutput.md) is a subclass of [AVCaptureOutput](avcaptureoutput.md) that delivers broadcast-quality video and ancillary data through the device’s DisplayPort hardware interface (USB-C DP Alt Mode)

## Declaration

```swift
class AVCaptureBroadcastVideoOutput
```

<a id="overview"></a>

## Overview

Not all [AVCaptureDevice.Format](avcapturedevice/format.md) instances support [AVCaptureBroadcastVideoOutput](avcapturebroadcastvideooutput.md). Before adding this output to a session, check the device format’s `AVCaptureDeviceFormat.unsupportedCaptureOutputClasses` property to verify that [AVCaptureBroadcastVideoOutput](avcapturebroadcastvideooutput.md) is not listed. If the current format does not support broadcast video output, the connection will be marked inactive and no samples will be delivered.

## Topics

### Creating a broadcast video output

- [init()](avcapturebroadcastvideooutput/init%28%29.md)

### Managing the Output

- [delegate](avcapturebroadcastvideooutput/delegate.md): The receiver’s delegate.
- [delegateCallbackQueue](avcapturebroadcastvideooutput/delegatecallbackqueue.md): The dispatch queue on which all [AVCaptureBroadcastVideoOutputDelegate](avcapturebroadcastvideooutputdelegate.md) methods will be called.
- [setDelegate(\_:queue:)](avcapturebroadcastvideooutput/setdelegate%28__queue_%29.md): Sets the receiver’s delegate and the dispatch queue on which the delegate will be called.

### Managing Video Output

- [videoSettings](avcapturebroadcastvideooutput/videosettings.md): The current video output settings for the broadcast video output.
- [maxBufferedFrameCount](avcapturebroadcastvideooutput/maxbufferedframecount.md): This represents the maximum count of buffered frames. By default the value is 0, which means late frames are immediately dropped to maintain minimal latency.
- [maxSupportedBufferedFrameCount](avcapturebroadcastvideooutput/maxsupportedbufferedframecount.md): The maximum value supported for maxBufferedFrameCount.
- [resetFrameBuffer()](avcapturebroadcastvideooutput/resetframebuffer%28%29.md): Tells the broadcast video output to reset the frame buffer and drop all currently buffered frames.
- [droppedFrameReplacementPolicy](avcapturebroadcastvideooutput/droppedframereplacementpolicy-swift.property.md): The strategy used to replace dropped video frames.

### Dropped Frame Replacement

- [AVCaptureBroadcastVideoOutput.DroppedFrameReplacementPolicy](avcapturebroadcastvideooutput/droppedframereplacementpolicy-swift.enum.md): Constants indicating the replacement policy when a video frame is dropped.

### Instance Properties

- [ancillaryDataEncoder](avcapturebroadcastvideooutput/ancillarydataencoder.md): The AVCaptureAncillaryDataEncoder that sends per-frame lens/camera/user-defined acquisition data along with the video buffer.

### Type Methods

- [new()](avcapturebroadcastvideooutput/new%28%29.md)

## Relationships

### Inherits From

- [AVCaptureOutput](avcaptureoutput.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Related Documentation

- [AVCaptureBroadcastVideoOutputDelegate](avcapturebroadcastvideooutputdelegate.md): Protocol for receiving broadcast video output events and data.

### Broadcast video output

- [AVCaptureBroadcastVideoOutputDelegate](avcapturebroadcastvideooutputdelegate.md): Protocol for receiving broadcast video output events and data.
- [AVCaptureAncillaryDataEncoder](avcaptureancillarydataencoder.md)
- [AVCaptureAncillaryDataUserKey](avcaptureancillarydatauserkey.md): Clients may use an AVCaptureAncillaryDataUserKey to inspect the [currentUserDefinedAncillaryData](avcaptureancillarydataencoder/currentuserdefinedancillarydata.md).

# AVCaptureBroadcastVideoOutput (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

[AVCaptureBroadcastVideoOutput](avcapturebroadcastvideooutput.md) is a subclass of [AVCaptureOutput](avcaptureoutput.md) that delivers broadcast-quality video and ancillary data through the device’s DisplayPort hardware interface (USB-C DP Alt Mode)

## Declaration

```objectivec
@interface AVCaptureBroadcastVideoOutput : AVCaptureOutput
```

<a id="overview"></a>

## Overview

Not all [AVCaptureDeviceFormat](avcapturedevice/format.md) instances support [AVCaptureBroadcastVideoOutput](avcapturebroadcastvideooutput.md). Before adding this output to a session, check the device format’s `AVCaptureDeviceFormat.unsupportedCaptureOutputClasses` property to verify that [AVCaptureBroadcastVideoOutput](avcapturebroadcastvideooutput.md) is not listed. If the current format does not support broadcast video output, the connection will be marked inactive and no samples will be delivered.

## Topics

### Creating a broadcast video output

- [init](avcapturebroadcastvideooutput/init%28%29.md)

### Managing the Output

- [delegate](avcapturebroadcastvideooutput/delegate.md): The receiver’s delegate.
- [delegateCallbackQueue](avcapturebroadcastvideooutput/delegatecallbackqueue.md): The dispatch queue on which all [AVCaptureBroadcastVideoOutputDelegate](avcapturebroadcastvideooutputdelegate.md) methods will be called.
- [setDelegate:queue:](avcapturebroadcastvideooutput/setdelegate%28__queue_%29.md): Sets the receiver’s delegate and the dispatch queue on which the delegate will be called.

### Managing Video Output

- [videoSettings](avcapturebroadcastvideooutput/videosettings.md): The current video output settings for the broadcast video output.
- [maxBufferedFrameCount](avcapturebroadcastvideooutput/maxbufferedframecount.md): This represents the maximum count of buffered frames. By default the value is 0, which means late frames are immediately dropped to maintain minimal latency.
- [maxSupportedBufferedFrameCount](avcapturebroadcastvideooutput/maxsupportedbufferedframecount.md): The maximum value supported for maxBufferedFrameCount.
- [resetFrameBuffer](avcapturebroadcastvideooutput/resetframebuffer%28%29.md): Tells the broadcast video output to reset the frame buffer and drop all currently buffered frames.
- [droppedFrameReplacementPolicy](avcapturebroadcastvideooutput/droppedframereplacementpolicy-swift.property.md): The strategy used to replace dropped video frames.

### Dropped Frame Replacement

- [AVCaptureBroadcastVideoOutputDroppedFrameReplacementPolicy](avcapturebroadcastvideooutput/droppedframereplacementpolicy-swift.enum.md): Constants indicating the replacement policy when a video frame is dropped.

### Instance Properties

- [ancillaryDataEncoder](avcapturebroadcastvideooutput/ancillarydataencoder.md): The AVCaptureAncillaryDataEncoder that sends per-frame lens/camera/user-defined acquisition data along with the video buffer.

### Type Methods

- [new](avcapturebroadcastvideooutput/new%28%29.md)

## Relationships

### Inherits From

- [AVCaptureOutput](avcaptureoutput.md)

## See Also

### Related Documentation

- [AVCaptureBroadcastVideoOutputDelegate](avcapturebroadcastvideooutputdelegate.md): Protocol for receiving broadcast video output events and data.

### Broadcast video output

- [AVCaptureBroadcastVideoOutputDelegate](avcapturebroadcastvideooutputdelegate.md): Protocol for receiving broadcast video output events and data.
- [AVCaptureAncillaryDataEncoder](avcaptureancillarydataencoder.md)
- [AVCaptureAncillaryDataUserKey](avcaptureancillarydatauserkey.md): Clients may use an AVCaptureAncillaryDataUserKey to inspect the [currentUserDefinedAncillaryData](avcaptureancillarydataencoder/currentuserdefinedancillarydata.md).
