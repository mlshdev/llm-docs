> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmcamerastreamcontroldelegate](https://developer.apple.com/documentation/homekit/hmcamerastreamcontroldelegate)

# HMCameraStreamControlDelegate (Swift)

**Framework:** HomeKit  
**Kind:** Protocol  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A protocol that gives the delegate updates on the camera stream.

## Declaration

```swift
protocol HMCameraStreamControlDelegate : NSObjectProtocol
```

## Topics

### Observing stream activity

- [cameraStreamControlDidStartStream(\_:)](hmcamerastreamcontroldelegate/camerastreamcontroldidstartstream%28__%29.md): Tells the delegate that the camera stream has started.
- [cameraStreamControl(\_:didStopStreamWithError:)](hmcamerastreamcontroldelegate/camerastreamcontrol%28__didstopstreamwitherror_%29.md): Tells the delegate that the camera stream has stopped.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Observing stream activity

- [delegate](hmcamerastreamcontrol/delegate.md): Delegate that receives updates as the camera stream changes.

# HMCameraStreamControlDelegate (Objective-C)

**Framework:** HomeKit  
**Kind:** Protocol  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A protocol that gives the delegate updates on the camera stream.

## Declaration

```objectivec
@protocol HMCameraStreamControlDelegate <NSObject>
```

## Topics

### Observing stream activity

- [cameraStreamControlDidStartStream:](hmcamerastreamcontroldelegate/camerastreamcontroldidstartstream%28__%29.md): Tells the delegate that the camera stream has started.
- [cameraStreamControl:didStopStreamWithError:](hmcamerastreamcontroldelegate/camerastreamcontrol%28__didstopstreamwitherror_%29.md): Tells the delegate that the camera stream has stopped.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Observing stream activity

- [delegate](hmcamerastreamcontrol/delegate.md): Delegate that receives updates as the camera stream changes.
