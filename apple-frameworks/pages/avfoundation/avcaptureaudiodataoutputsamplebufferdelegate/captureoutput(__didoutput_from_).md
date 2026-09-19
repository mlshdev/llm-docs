> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avcaptureaudiodataoutputsamplebufferdelegate/captureoutput(_:didoutput:from:)

# captureOutput(\_:didOutput:from:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+

Notifies the delegate that a sample buffer was written.

## Declaration

```swift
optional func captureOutput(_ output: AVCaptureOutput, didOutput sampleBuffer: CMSampleBuffer, from connection: AVCaptureConnection)
```

## Parameters

- `output`: The capture output object.
- `sampleBuffer`: The sample buffer that was output.
- `connection`: The connection.

# captureOutput:didOutputSampleBuffer:fromConnection: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+

Notifies the delegate that a sample buffer was written.

## Declaration

```objectivec
- (void) captureOutput:(AVCaptureOutput *) output didOutputSampleBuffer:(CMSampleBufferRef) sampleBuffer fromConnection:(AVCaptureConnection *) connection;
```

## Parameters

- `output`: The capture output object.
- `sampleBuffer`: The sample buffer that was output.
- `connection`: The connection.
