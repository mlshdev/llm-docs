> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avcaptureeventphase](https://developer.apple.com/documentation/avkit/avcaptureeventphase)

# AVCaptureEventPhase (Swift)

**Framework:** AVKit  
**Kind:** Enumeration  
**Availability:** iOS 17.2+ · iPadOS 17.2+ · Mac Catalyst 17.2+

Constants that indicate the phase of a system capture event.

## Declaration

```swift
enum AVCaptureEventPhase
```

## Topics

### Creating a phase

- [init(rawValue:)](avcaptureeventphase/init%28rawvalue_%29.md)

### Event phases

- [AVCaptureEventPhase.began](avcaptureeventphase/began.md): A phase that indicates the beginning of a capture event.
- [AVCaptureEventPhase.ended](avcaptureeventphase/ended.md): A phase that indicates the end of a capture event.
- [AVCaptureEventPhase.cancelled](avcaptureeventphase/cancelled.md): A phase that indicates the cancellation of a capture event.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Inspecting the event

- [phase](avcaptureevent/phase.md): The current phase of a capture event.

# AVCaptureEventPhase (Objective-C)

**Framework:** AVKit  
**Kind:** Enumeration  
**Availability:** iOS 17.2+ · iPadOS 17.2+ · Mac Catalyst 17.2+

Constants that indicate the phase of a system capture event.

## Declaration

```objectivec
enum AVCaptureEventPhase : NSUInteger;
```

## Topics

### Event phases

- [AVCaptureEventPhaseBegan](avcaptureeventphase/began.md): A phase that indicates the beginning of a capture event.
- [AVCaptureEventPhaseEnded](avcaptureeventphase/ended.md): A phase that indicates the end of a capture event.
- [AVCaptureEventPhaseCancelled](avcaptureeventphase/cancelled.md): A phase that indicates the cancellation of a capture event.

## See Also

### Inspecting the event

- [phase](avcaptureevent/phase.md): The current phase of a capture event.
