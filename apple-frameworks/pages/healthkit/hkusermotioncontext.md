> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkusermotioncontext](https://developer.apple.com/documentation/healthkit/hkusermotioncontext)

# HKUserMotionContext (Swift)

**Framework:** HealthKit  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

The type of motion performed during the sample.

## Declaration

```swift
enum HKUserMotionContext
```

## Topics

### Motion contexts

- [HKUserMotionContext.notSet](hkusermotioncontext/notset.md): The person’s motion was not specified.
- [HKUserMotionContext.active](hkusermotioncontext/active.md): The person was active during the sample.
- [HKUserMotionContext.stationary](hkusermotioncontext/stationary.md): The person was stationary during the sample.

### Initializers

- [init(rawValue:)](hkusermotioncontext/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# HKUserMotionContext (Objective-C)

**Framework:** HealthKit  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

The type of motion performed during the sample.

## Declaration

```objectivec
enum HKUserMotionContext : NSInteger;
```

## Topics

### Motion contexts

- [HKUserMotionContextNotSet](hkusermotioncontext/notset.md): The person’s motion was not specified.
- [HKUserMotionContextActive](hkusermotioncontext/active.md): The person was active during the sample.
- [HKUserMotionContextStationary](hkusermotioncontext/stationary.md): The person was stationary during the sample.
