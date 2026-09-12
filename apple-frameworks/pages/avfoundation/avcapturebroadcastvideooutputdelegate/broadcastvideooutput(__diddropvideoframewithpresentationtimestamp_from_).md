> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturebroadcastvideooutputdelegate/broadcastvideooutput(_:diddropvideoframewithpresentationtimestamp:from:)](https://developer.apple.com/documentation/avfoundation/avcapturebroadcastvideooutputdelegate/broadcastvideooutput(_:diddropvideoframewithpresentationtimestamp:from:))

# broadcastVideoOutput(\_:didDropVideoFrameWithPresentationTimeStamp:from:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

Called when a video frame is dropped during broadcast video output processing.

## Declaration

```swift
optional func broadcastVideoOutput(_ output: AVCaptureBroadcastVideoOutput, didDropVideoFrameWithPresentationTimeStamp presentationTimeStamp: CMTime, from connection: AVCaptureConnection)
```

## Parameters

- `output`: The [AVCaptureBroadcastVideoOutput](../avcapturebroadcastvideooutput.md) instance that dropped the video frame.
- `presentationTimeStamp`: The presentation timestamp (PTS) of the dropped video frame.
- `connection`: The [AVCaptureConnection](../avcaptureconnection.md) associated with the dropped video frame.

<a id="discussion"></a>

## Discussion

This method is called whenever the broadcast video output system needs to drop a video frame due to performance constraints, destination issues, buffer overruns, or encoding failures.

# broadcastVideoOutput:didDropVideoFrameWithPresentationTimeStamp:fromConnection: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

Called when a video frame is dropped during broadcast video output processing.

## Declaration

```objectivec
- (void) broadcastVideoOutput:(AVCaptureBroadcastVideoOutput *) output didDropVideoFrameWithPresentationTimeStamp:(CMTime) presentationTimeStamp fromConnection:(AVCaptureConnection *) connection;
```

## Parameters

- `output`: The [AVCaptureBroadcastVideoOutput](../avcapturebroadcastvideooutput.md) instance that dropped the video frame.
- `presentationTimeStamp`: The presentation timestamp (PTS) of the dropped video frame.
- `connection`: The [AVCaptureConnection](../avcaptureconnection.md) associated with the dropped video frame.

<a id="discussion"></a>

## Discussion

This method is called whenever the broadcast video output system needs to drop a video frame due to performance constraints, destination issues, buffer overruns, or encoding failures.
