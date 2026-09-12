> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nshapticfeedbackmanager/performancetime](https://developer.apple.com/documentation/appkit/nshapticfeedbackmanager/performancetime)

# NSHapticFeedbackManager.PerformanceTime (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.11+

A time at which to provide haptic feedback to the user.

## Declaration

```swift
enum PerformanceTime
```

## Topics

### Constants

- [NSHapticFeedbackManager.PerformanceTime.default](performancetime/default.md): Allows the system to choose the most appropriate time for feedback to be provided. Currently, this is the next time the screen is updated.
- [NSHapticFeedbackManager.PerformanceTime.now](performancetime/now.md): Instructs the system to provide immediate haptic feedback to the user, rather than waiting for synchronization to occur with something visual occurring on screen.
- [NSHapticFeedbackManager.PerformanceTime.drawCompleted](performancetime/drawcompleted.md): Instructs the system to provide haptic feedback to the user the next time the screen is updated.

### Initializers

- [init(rawValue:)](performancetime/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Enumerations

- [NSHapticFeedbackManager.FeedbackPattern](feedbackpattern.md): A pattern of haptic feedback to be provided to the user.

# NSHapticFeedbackPerformanceTime (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.11+

A time at which to provide haptic feedback to the user.

## Declaration

```objectivec
enum NSHapticFeedbackPerformanceTime : NSUInteger;
```

## Topics

### Constants

- [NSHapticFeedbackPerformanceTimeDefault](performancetime/default.md): Allows the system to choose the most appropriate time for feedback to be provided. Currently, this is the next time the screen is updated.
- [NSHapticFeedbackPerformanceTimeNow](performancetime/now.md): Instructs the system to provide immediate haptic feedback to the user, rather than waiting for synchronization to occur with something visual occurring on screen.
- [NSHapticFeedbackPerformanceTimeDrawCompleted](performancetime/drawcompleted.md): Instructs the system to provide haptic feedback to the user the next time the screen is updated.

## See Also

### Enumerations

- [NSHapticFeedbackPattern](feedbackpattern.md): A pattern of haptic feedback to be provided to the user.
