> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturephotooutput/qualityprioritization](https://developer.apple.com/documentation/avfoundation/avcapturephotooutput/qualityprioritization)

# AVCapturePhotoOutput.QualityPrioritization (Swift)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · macOS 13.0+ · tvOS 17.0+

Constants that indicate how to prioritize photo quality relative to capture speed.

## Declaration

```swift
enum QualityPrioritization
```

## Topics

### Specifying priority

- [AVCapturePhotoOutput.QualityPrioritization.speed](qualityprioritization/speed.md): Speed of photo delivery is most important, even at the expense of quality.
- [AVCapturePhotoOutput.QualityPrioritization.quality](qualityprioritization/quality.md): Photo quality is most important, even at the expense of shot-to-shot time.
- [AVCapturePhotoOutput.QualityPrioritization.balanced](qualityprioritization/balanced.md): Priority is balanced between photo quality and speed of delivery.

### Initializers

- [init(rawValue:)](qualityprioritization/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Setting the capture prioritization

- [maxPhotoQualityPrioritization](maxphotoqualityprioritization.md): The highest quality the photo output should prepare to deliver on a capture-by-capture basis.

# AVCapturePhotoQualityPrioritization (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · macOS 13.0+ · tvOS 17.0+

Constants that indicate how to prioritize photo quality relative to capture speed.

## Declaration

```objectivec
enum AVCapturePhotoQualityPrioritization : NSInteger;
```

## Topics

### Specifying priority

- [AVCapturePhotoQualityPrioritizationSpeed](qualityprioritization/speed.md): Speed of photo delivery is most important, even at the expense of quality.
- [AVCapturePhotoQualityPrioritizationQuality](qualityprioritization/quality.md): Photo quality is most important, even at the expense of shot-to-shot time.
- [AVCapturePhotoQualityPrioritizationBalanced](qualityprioritization/balanced.md): Priority is balanced between photo quality and speed of delivery.

## See Also

### Setting the capture prioritization

- [maxPhotoQualityPrioritization](maxphotoqualityprioritization.md): The highest quality the photo output should prepare to deliver on a capture-by-capture basis.
