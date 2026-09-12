> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insettaskattributetemporaleventtriggerunsupportedreason](https://developer.apple.com/documentation/intents/insettaskattributetemporaleventtriggerunsupportedreason)

# INSetTaskAttributeTemporalEventTriggerUnsupportedReason (Swift)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

Reasons the app can’t modify the temporal event trigger of the task.

## Declaration

```swift
enum INSetTaskAttributeTemporalEventTriggerUnsupportedReason
```

## Topics

### Reasons

- [INSetTaskAttributeTemporalEventTriggerUnsupportedReason.invalidRecurrence](insettaskattributetemporaleventtriggerunsupportedreason/invalidrecurrence.md): Deprecated. The temporal event trigger refers to an invalid or unsupported schedule for repeating a task.
- [INSetTaskAttributeTemporalEventTriggerUnsupportedReason.timeInPast](insettaskattributetemporaleventtriggerunsupportedreason/timeinpast.md): Deprecated. The temporal event trigger refers to a moment or time span that has already occurred.

### Initializers

- [init(rawValue:)](insettaskattributetemporaleventtriggerunsupportedreason/init%28rawvalue_%29.md): Deprecated.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating a Resolution Result

- [init(temporalEventTriggerResolutionResult:)](insettaskattributetemporaleventtriggerresolutionresult/init%28temporaleventtriggerresolutionresult_%29.md): Deprecated. Creates an object with a resolution that successfully matches the specified temporal event.
- [unsupported(forReason:)](insettaskattributetemporaleventtriggerresolutionresult/unsupported%28forreason_%29.md): Deprecated. Creates an object with a resolution that provides a reason the temporal event trigger can’t be applied to the task the user intends to modify.

# INSetTaskAttributeTemporalEventTriggerUnsupportedReason (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

Reasons the app can’t modify the temporal event trigger of the task.

## Declaration

```objectivec
enum INSetTaskAttributeTemporalEventTriggerUnsupportedReason : NSInteger;
```

## Topics

### Reasons

- [INSetTaskAttributeTemporalEventTriggerUnsupportedReasonInvalidRecurrence](insettaskattributetemporaleventtriggerunsupportedreason/invalidrecurrence.md): Deprecated. The temporal event trigger refers to an invalid or unsupported schedule for repeating a task.
- [INSetTaskAttributeTemporalEventTriggerUnsupportedReasonTimeInPast](insettaskattributetemporaleventtriggerunsupportedreason/timeinpast.md): Deprecated. The temporal event trigger refers to a moment or time span that has already occurred.

## See Also

### Creating a Resolution Result

- [initWithTemporalEventTriggerResolutionResult:](insettaskattributetemporaleventtriggerresolutionresult/init%28temporaleventtriggerresolutionresult_%29.md): Deprecated. Creates an object with a resolution that successfully matches the specified temporal event.
- [unsupportedForReason:](insettaskattributetemporaleventtriggerresolutionresult/unsupported%28forreason_%29.md): Deprecated. Creates an object with a resolution that provides a reason the temporal event trigger can’t be applied to the task the user intends to modify.
