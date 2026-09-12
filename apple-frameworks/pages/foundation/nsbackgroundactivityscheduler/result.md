> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsbackgroundactivityscheduler/result](https://developer.apple.com/documentation/foundation/nsbackgroundactivityscheduler/result)

# NSBackgroundActivityScheduler.Result (Swift)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** macOS 10.10+

These constants indicate whether background activity has been completed successfully or whether additional processing should be deferred until a more optimal time.

## Declaration

```swift
enum Result
```

## Topics

### Constants

- [NSBackgroundActivityScheduler.Result.finished](result/finished.md): The activity has finished executing. If the activity repeats, the next invocation is scheduled by the system.
- [NSBackgroundActivityScheduler.Result.deferred](result/deferred.md): System conditions have changed since the time the activity began executing, and deferral of additional work is recommended.

### Initializers

- [init(rawValue:)](result/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Constants

- [QualityOfService](../qualityofservice.md): Constants that indicate the nature and importance of work to the system.

# NSBackgroundActivityResult (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** macOS 10.10+

These constants indicate whether background activity has been completed successfully or whether additional processing should be deferred until a more optimal time.

## Declaration

```objectivec
enum NSBackgroundActivityResult : NSInteger;
```

## Topics

### Constants

- [NSBackgroundActivityResultFinished](result/finished.md): The activity has finished executing. If the activity repeats, the next invocation is scheduled by the system.
- [NSBackgroundActivityResultDeferred](result/deferred.md): System conditions have changed since the time the activity began executing, and deferral of additional work is recommended.

## See Also

### Constants

- [NSQualityOfService](../qualityofservice.md): Constants that indicate the nature and importance of work to the system.
