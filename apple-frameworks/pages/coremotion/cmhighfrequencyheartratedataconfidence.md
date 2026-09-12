> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmhighfrequencyheartratedataconfidence](https://developer.apple.com/documentation/coremotion/cmhighfrequencyheartratedataconfidence)

# CMHighFrequencyHeartRateDataConfidence (Swift)

**Framework:** Core Motion  
**Kind:** Enumeration  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · visionOS 1.0+ · watchOS 10.0+

The level of confidence in the accuracy of the heart rate data.

## Declaration

```swift
enum CMHighFrequencyHeartRateDataConfidence
```

## Topics

### Levels of confidence

- [CMHighFrequencyHeartRateDataConfidence.low](cmhighfrequencyheartratedataconfidence/low.md): A low level of confidence in the heart rate data.
- [CMHighFrequencyHeartRateDataConfidence.medium](cmhighfrequencyheartratedataconfidence/medium.md): A medium level of confidence in the heart rate data.
- [CMHighFrequencyHeartRateDataConfidence.high](cmhighfrequencyheartratedataconfidence/high.md): A high level of confidence in the heart rate data.
- [CMHighFrequencyHeartRateDataConfidence.highest](cmhighfrequencyheartratedataconfidence/highest.md): The highest level of confidence in the heart rate data.

### Initializers

- [init(rawValue:)](cmhighfrequencyheartratedataconfidence/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing heart rate data

- [heartRate](cmhighfrequencyheartratedata/heartrate.md): The heart rate value in units of beats per minute (BPM).
- [confidence](cmhighfrequencyheartratedata/confidence.md): The confidence level of the heart rate value.

# CMHighFrequencyHeartRateDataConfidence (Objective-C)

**Framework:** Core Motion  
**Kind:** Enumeration  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · visionOS 1.0+ · watchOS 10.0+

The level of confidence in the accuracy of the heart rate data.

## Declaration

```objectivec
enum CMHighFrequencyHeartRateDataConfidence : NSInteger;
```

## Topics

### Levels of confidence

- [CMHighFrequencyHeartRateDataConfidenceLow](cmhighfrequencyheartratedataconfidence/low.md): A low level of confidence in the heart rate data.
- [CMHighFrequencyHeartRateDataConfidenceMedium](cmhighfrequencyheartratedataconfidence/medium.md): A medium level of confidence in the heart rate data.
- [CMHighFrequencyHeartRateDataConfidenceHigh](cmhighfrequencyheartratedataconfidence/high.md): A high level of confidence in the heart rate data.
- [CMHighFrequencyHeartRateDataConfidenceHighest](cmhighfrequencyheartratedataconfidence/highest.md): The highest level of confidence in the heart rate data.

## See Also

### Accessing heart rate data

- [heartRate](cmhighfrequencyheartratedata/heartrate.md): The heart rate value in units of beats per minute (BPM).
- [confidence](cmhighfrequencyheartratedata/confidence.md): The confidence level of the heart rate value.
