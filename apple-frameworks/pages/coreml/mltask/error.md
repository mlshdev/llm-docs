> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mltask/error](https://developer.apple.com/documentation/coreml/mltask/error)

# error (Swift)

**Framework:** Core ML  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

The underlying error if the task is in a failed state.

## Declaration

```swift
var error: (any Error)? { get }
```

## See Also

### Checking the state of a task

- [state](state.md): The current state of the machine learning task.
- [MLTaskState](../mltaskstate.md): The state of a machine learning task.

# error (Objective-C)

**Framework:** Core ML  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

The underlying error if the task is in a failed state.

## Declaration

```objectivec
@property (atomic, copy, readonly, nullable) NSError * error;
```

## See Also

### Checking the state of a task

- [state](state.md): The current state of the machine learning task.
- [MLTaskState](../mltaskstate.md): The state of a machine learning task.
