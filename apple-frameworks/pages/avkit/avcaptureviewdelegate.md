> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avkit/avcaptureviewdelegate

# AVCaptureViewDelegate (Swift)

**Framework:** AVKit  
**Kind:** Protocol  
**Availability:** macOS 10.9+

The protocol that defines the methods you can implement to respond to capture view events.

## Declaration

```swift
protocol AVCaptureViewDelegate : NSObjectProtocol
```

## Topics

### Starting a new recording

- [captureView(\_:startRecordingTo:)](avcaptureviewdelegate/captureview%28__startrecordingto_%29.md): Tells the delegate that the user has made a request to start a new recording.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Capture views

- [AVCaptureView](avcaptureview.md): A view that displays standard user interface controls for capturing media data.

# AVCaptureViewDelegate (Objective-C)

**Framework:** AVKit  
**Kind:** Protocol  
**Availability:** macOS 10.9+

The protocol that defines the methods you can implement to respond to capture view events.

## Declaration

```objectivec
@protocol AVCaptureViewDelegate <NSObject>
```

## Topics

### Starting a new recording

- [captureView:startRecordingToFileOutput:](avcaptureviewdelegate/captureview%28__startrecordingto_%29.md): Tells the delegate that the user has made a request to start a new recording.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Capture views

- [AVCaptureView](avcaptureview.md): A view that displays standard user interface controls for capturing media data.
