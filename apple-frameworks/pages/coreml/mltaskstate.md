> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mltaskstate](https://developer.apple.com/documentation/coreml/mltaskstate)

# MLTaskState (Swift)

**Framework:** Core ML  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

The state of a machine learning task.

## Declaration

```swift
enum MLTaskState
```

## Topics

### Transient states

- [MLTaskState.running](mltaskstate/running.md): The state of a machine learning task that’s executing.
- [MLTaskState.suspended](mltaskstate/suspended.md): The state of a machine learning task that’s paused.
- [MLTaskState.cancelling](mltaskstate/cancelling.md): The state of a machine learning task that’s in mid-termination, before it could finish successfully.

### Final states

- [MLTaskState.completed](mltaskstate/completed.md): The state of a machine learning task that has finished successfully.
- [MLTaskState.failed](mltaskstate/failed.md): The state of a machine learning task that has terminated due to an error.

### Creating a task state

- [init(rawValue:)](mltaskstate/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Checking the state of a task

- [state](mltask/state.md): The current state of the machine learning task.
- [error](mltask/error.md): The underlying error if the task is in a failed state.

# MLTaskState (Objective-C)

**Framework:** Core ML  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The state of a machine learning task.

## Declaration

```objectivec
enum MLTaskState : NSInteger;
```

## Topics

### Transient states

- [MLTaskStateRunning](mltaskstate/running.md): The state of a machine learning task that’s executing.
- [MLTaskStateSuspended](mltaskstate/suspended.md): The state of a machine learning task that’s paused.
- [MLTaskStateCancelling](mltaskstate/cancelling.md): The state of a machine learning task that’s in mid-termination, before it could finish successfully.

### Final states

- [MLTaskStateCompleted](mltaskstate/completed.md): The state of a machine learning task that has finished successfully.
- [MLTaskStateFailed](mltaskstate/failed.md): The state of a machine learning task that has terminated due to an error.

## See Also

### Checking the state of a task

- [state](mltask/state.md): The current state of the machine learning task.
- [error](mltask/error.md): The underlying error if the task is in a failed state.
