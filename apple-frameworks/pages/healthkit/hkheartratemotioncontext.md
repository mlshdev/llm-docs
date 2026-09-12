> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkheartratemotioncontext](https://developer.apple.com/documentation/healthkit/hkheartratemotioncontext)

# HKHeartRateMotionContext (Swift)

**Framework:** HealthKit  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 4.0+

Values that indicate the user’s level of activity when the heart rate sample was measured.

## Declaration

```swift
enum HKHeartRateMotionContext
```

## Topics

### Motion Contextes

- [HKHeartRateMotionContext.active](hkheartratemotioncontext/active.md): A value indicating that the user was in motion during the heart rate sample.
- [HKHeartRateMotionContext.notSet](hkheartratemotioncontext/notset.md): A value indicating that the user’s activity level could not be determined.
- [HKHeartRateMotionContext.sedentary](hkheartratemotioncontext/sedentary.md): A value indicating that the user has been still for at least 5 minutes prior to the heart rate sample.

### Initializers

- [init(rawValue:)](hkheartratemotioncontext/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Related Documentation

- [heartRate](hkquantitytypeidentifier/heartrate.md): A quantity sample type that measures the user’s heart rate.

# HKHeartRateMotionContext (Objective-C)

**Framework:** HealthKit  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 4.0+

Values that indicate the user’s level of activity when the heart rate sample was measured.

## Declaration

```objectivec
enum HKHeartRateMotionContext : NSInteger;
```

## Topics

### Motion Contextes

- [HKHeartRateMotionContextActive](hkheartratemotioncontext/active.md): A value indicating that the user was in motion during the heart rate sample.
- [HKHeartRateMotionContextNotSet](hkheartratemotioncontext/notset.md): A value indicating that the user’s activity level could not be determined.
- [HKHeartRateMotionContextSedentary](hkheartratemotioncontext/sedentary.md): A value indicating that the user has been still for at least 5 minutes prior to the heart rate sample.

## See Also

### Related Documentation

- [HKQuantityTypeIdentifierHeartRate](hkquantitytypeidentifier/heartrate.md): A quantity sample type that measures the user’s heart rate.
