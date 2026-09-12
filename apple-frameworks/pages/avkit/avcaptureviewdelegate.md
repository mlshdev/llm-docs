> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avcaptureviewdelegate](https://developer.apple.com/documentation/avkit/avcaptureviewdelegate)

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

### Starting a New Recording

- [captureView(\_:startRecordingTo:)](avcaptureviewdelegate/captureview%28__startrecordingto_%29.md): Tells the delegate that the user has made a request to start a new recording.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Configuring the Delegate

- [delegate](avcaptureview/delegate.md): The capture view’s delegate object.

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

### Starting a New Recording

- [captureView:startRecordingToFileOutput:](avcaptureviewdelegate/captureview%28__startrecordingto_%29.md): Tells the delegate that the user has made a request to start a new recording.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Configuring the Delegate

- [delegate](avcaptureview/delegate.md): The capture view’s delegate object.
