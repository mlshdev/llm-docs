> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturebroadcastvideooutputdelegate](https://developer.apple.com/documentation/avfoundation/avcapturebroadcastvideooutputdelegate)

# AVCaptureBroadcastVideoOutputDelegate (Swift)

**Framework:** AVFoundation  
**Kind:** Protocol  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

Protocol for receiving broadcast video output events and data.

## Declaration

```swift
protocol AVCaptureBroadcastVideoOutputDelegate : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Objects conforming to this protocol can be set as delegates to receive notifications about broadcast video output operations, including dropped frames and ancillary data processing.

## Topics

### Responding to dropped frames

- [broadcastVideoOutput(\_:didDropVideoFrameWithPresentationTimeStamp:from:)](avcapturebroadcastvideooutputdelegate/broadcastvideooutput%28__diddropvideoframewithpresentationtimestamp_from_%29.md): Called when a video frame is dropped during broadcast video output processing.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Broadcast video output

- [AVCaptureBroadcastVideoOutput](avcapturebroadcastvideooutput.md): [AVCaptureBroadcastVideoOutput](avcapturebroadcastvideooutput.md) is a subclass of [AVCaptureOutput](avcaptureoutput.md) that delivers broadcast-quality video and ancillary data through the device’s DisplayPort hardware interface (USB-C DP Alt Mode)
- [AVCaptureAncillaryDataEncoder](avcaptureancillarydataencoder.md)
- [AVCaptureAncillaryDataUserKey](avcaptureancillarydatauserkey.md): Clients may use an AVCaptureAncillaryDataUserKey to inspect the [currentUserDefinedAncillaryData](avcaptureancillarydataencoder/currentuserdefinedancillarydata.md).

# AVCaptureBroadcastVideoOutputDelegate (Objective-C)

**Framework:** AVFoundation  
**Kind:** Protocol  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

Protocol for receiving broadcast video output events and data.

## Declaration

```objectivec
@protocol AVCaptureBroadcastVideoOutputDelegate <NSObject>
```

<a id="overview"></a>

## Overview

Objects conforming to this protocol can be set as delegates to receive notifications about broadcast video output operations, including dropped frames and ancillary data processing.

## Topics

### Responding to dropped frames

- [broadcastVideoOutput:didDropVideoFrameWithPresentationTimeStamp:fromConnection:](avcapturebroadcastvideooutputdelegate/broadcastvideooutput%28__diddropvideoframewithpresentationtimestamp_from_%29.md): Called when a video frame is dropped during broadcast video output processing.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Broadcast video output

- [AVCaptureBroadcastVideoOutput](avcapturebroadcastvideooutput.md): [AVCaptureBroadcastVideoOutput](avcapturebroadcastvideooutput.md) is a subclass of [AVCaptureOutput](avcaptureoutput.md) that delivers broadcast-quality video and ancillary data through the device’s DisplayPort hardware interface (USB-C DP Alt Mode)
- [AVCaptureAncillaryDataEncoder](avcaptureancillarydataencoder.md)
- [AVCaptureAncillaryDataUserKey](avcaptureancillarydatauserkey.md): Clients may use an AVCaptureAncillaryDataUserKey to inspect the [currentUserDefinedAncillaryData](avcaptureancillarydataencoder/currentuserdefinedancillarydata.md).
