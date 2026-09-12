> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mltask/state](https://developer.apple.com/documentation/coreml/mltask/state)

# state (Swift)

**Framework:** Core ML  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

The current state of the machine learning task.

## Declaration

```swift
var state: MLTaskState { get }
```

## See Also

### Checking the state of a task

- [MLTaskState](../mltaskstate.md): The state of a machine learning task.
- [error](error.md): The underlying error if the task is in a failed state.

# state (Objective-C)

**Framework:** Core ML  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

The current state of the machine learning task.

## Declaration

```objectivec
@property (atomic, assign, readonly) MLTaskState state;
```

## See Also

### Checking the state of a task

- [MLTaskState](../mltaskstate.md): The state of a machine learning task.
- [error](error.md): The underlying error if the task is in a failed state.
