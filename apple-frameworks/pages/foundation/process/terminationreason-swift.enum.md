> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/process/terminationreason-swift.enum](https://developer.apple.com/documentation/foundation/process/terminationreason-swift.enum)

# Process.TerminationReason (Swift)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** macOS 10.6+

Constants that specify the termination reason values that the system returns.

## Declaration

```swift
enum TerminationReason
```

## Topics

### Constants

- [Process.TerminationReason.exit](terminationreason-swift.enum/exit.md): The task exited normally.
- [Process.TerminationReason.uncaughtSignal](terminationreason-swift.enum/uncaughtsignal.md): The task exited due to an uncaught signal.

### Initializers

- [init(rawValue:)](terminationreason-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Working with constants

- [QualityOfService](../qualityofservice.md): Constants that indicate the nature and importance of work to the system.

# NSTaskTerminationReason (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** macOS 10.6+

Constants that specify the termination reason values that the system returns.

## Declaration

```objectivec
enum NSTaskTerminationReason : NSInteger;
```

## Topics

### Constants

- [NSTaskTerminationReasonExit](terminationreason-swift.enum/exit.md): The task exited normally.
- [NSTaskTerminationReasonUncaughtSignal](terminationreason-swift.enum/uncaughtsignal.md): The task exited due to an uncaught signal.

## See Also

### Working with constants

- [NSQualityOfService](../qualityofservice.md): Constants that indicate the nature and importance of work to the system.
