> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmmotionactivityconfidence](https://developer.apple.com/documentation/coremotion/cmmotionactivityconfidence)

# CMMotionActivityConfidence (Swift)

**Framework:** Core Motion  
**Kind:** Enumeration  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · visionOS 1.0+ · watchOS 2.0+

The confidence that the motion data is accurate.

## Declaration

```swift
enum CMMotionActivityConfidence
```

## Topics

### Constants

- [CMMotionActivityConfidence.low](cmmotionactivityconfidence/low.md): Confidence is low.
- [CMMotionActivityConfidence.medium](cmmotionactivityconfidence/medium.md): Confidence is good.
- [CMMotionActivityConfidence.high](cmmotionactivityconfidence/high.md): Confidence is high.

### Initializers

- [init(rawValue:)](cmmotionactivityconfidence/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting Metadata for the Motion

- [startDate](cmmotionactivity/startdate.md): The time at which the change in motion occurred.
- [confidence](cmmotionactivity/confidence.md): The confidence in the assessment of the motion type.

# CMMotionActivityConfidence (Objective-C)

**Framework:** Core Motion  
**Kind:** Enumeration  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · visionOS 1.0+ · watchOS 2.0+

The confidence that the motion data is accurate.

## Declaration

```objectivec
enum CMMotionActivityConfidence : NSInteger;
```

## Topics

### Constants

- [CMMotionActivityConfidenceLow](cmmotionactivityconfidence/low.md): Confidence is low.
- [CMMotionActivityConfidenceMedium](cmmotionactivityconfidence/medium.md): Confidence is good.
- [CMMotionActivityConfidenceHigh](cmmotionactivityconfidence/high.md): Confidence is high.

## See Also

### Getting Metadata for the Motion

- [startDate](cmmotionactivity/startdate.md): The time at which the change in motion occurred.
- [confidence](cmmotionactivity/confidence.md): The confidence in the assessment of the motion type.
