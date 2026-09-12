> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mltask](https://developer.apple.com/documentation/coreml/mltask)

# MLTask (Swift)

**Framework:** Core ML  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

An abstract base class for machine learning tasks.

## Declaration

```swift
class MLTask
```

<a id="overview"></a>

## Overview

You don’t create use this class directly. Instead, use a class that inherits from this one, such as [MLUpdateTask](mlupdatetask.md).

## Topics

### Identifying a task

- [taskIdentifier](mltask/taskidentifier.md): A unique name of the task to distinguish it from all other tasks at runtime.

### Starting and stopping a task

- [resume()](mltask/resume%28%29.md): Begins or resumes a machine learning task.
- [cancel()](mltask/cancel%28%29.md): Cancels a machine learning task before it completes.

### Checking the state of a task

- [state](mltask/state.md): The current state of the machine learning task.
- [MLTaskState](mltaskstate.md): The state of a machine learning task.
- [error](mltask/error.md): The underlying error if the task is in a failed state.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [MLUpdateTask](mlupdatetask.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### On-device model updates

- [Personalizing a Model with On-Device Updates](personalizing-a-model-with-on-device-updates.md): Modify an updatable Core ML model by running an update task with labeled data.
- [MLUpdateTask](mlupdatetask.md): A task that updates a model with additional training data.

# MLTask (Objective-C)

**Framework:** Core ML  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

An abstract base class for machine learning tasks.

## Declaration

```objectivec
@interface MLTask : NSObject
```

<a id="overview"></a>

## Overview

You don’t create use this class directly. Instead, use a class that inherits from this one, such as [MLUpdateTask](mlupdatetask.md).

## Topics

### Identifying a task

- [taskIdentifier](mltask/taskidentifier.md): A unique name of the task to distinguish it from all other tasks at runtime.

### Starting and stopping a task

- [resume](mltask/resume%28%29.md): Begins or resumes a machine learning task.
- [cancel](mltask/cancel%28%29.md): Cancels a machine learning task before it completes.

### Checking the state of a task

- [state](mltask/state.md): The current state of the machine learning task.
- [MLTaskState](mltaskstate.md): The state of a machine learning task.
- [error](mltask/error.md): The underlying error if the task is in a failed state.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [MLUpdateTask](mlupdatetask.md)

## See Also

### On-device model updates

- [Personalizing a Model with On-Device Updates](personalizing-a-model-with-on-device-updates.md): Modify an updatable Core ML model by running an update task with labeled data.
- [MLUpdateTask](mlupdatetask.md): A task that updates a model with additional training data.
