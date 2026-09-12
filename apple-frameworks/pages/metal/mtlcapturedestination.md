> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcapturedestination](https://developer.apple.com/documentation/metal/mtlcapturedestination)

# MTLCaptureDestination (Swift)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

The kinds of destinations for captured command data.

## Declaration

```swift
enum MTLCaptureDestination
```

## Topics

### Choosing a destination

- [MTLCaptureDestination.developerTools](mtlcapturedestination/developertools.md): An option specifying that data should be captured to Xcode and that execution should stop in Xcode after the data is captured.
- [MTLCaptureDestination.gpuTraceDocument](mtlcapturedestination/gputracedocument.md): An option specifying that the captured command data should be saved to a GPU trace document.

### Initializers

- [init(rawValue:)](mtlcapturedestination/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Frame capture

- [MTLCaptureDescriptor](mtlcapturedescriptor.md): A configuration for a Metal capture session.
- [MTLCaptureManager](mtlcapturemanager.md): An instance you use to capture Metal command data in your app.
- [MTLCaptureScope](mtlcapturescope.md): A type that can programmatically customize a GPU frame capture.

# MTLCaptureDestination (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

The kinds of destinations for captured command data.

## Declaration

```objectivec
enum MTLCaptureDestination : NSInteger;
```

## Topics

### Choosing a destination

- [MTLCaptureDestinationDeveloperTools](mtlcapturedestination/developertools.md): An option specifying that data should be captured to Xcode and that execution should stop in Xcode after the data is captured.
- [MTLCaptureDestinationGPUTraceDocument](mtlcapturedestination/gputracedocument.md): An option specifying that the captured command data should be saved to a GPU trace document.

## See Also

### Frame capture

- [MTLCaptureDescriptor](mtlcapturedescriptor.md): A configuration for a Metal capture session.
- [MTLCaptureManager](mtlcapturemanager.md): An instance you use to capture Metal command data in your app.
- [MTLCaptureScope](mtlcapturescope.md): A type that can programmatically customize a GPU frame capture.
