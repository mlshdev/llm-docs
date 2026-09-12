> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlupdatecontext/task](https://developer.apple.com/documentation/coreml/mlupdatecontext/task)

# task (Swift)

**Framework:** Core ML  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

The update task that generated the update context.

## Declaration

```swift
var task: MLUpdateTask { get }
```

## See Also

### Getting the update context

- [event](event.md): The event type that triggered an update task to notify your app’s completion and update progress handlers.
- [MLUpdateProgressEvent](../mlupdateprogressevent.md): A type of event during a model update task.
- [parameters](parameters.md): The parameters for the update task.
- [MLParameterKey](../mlparameterkey.md): The keys for the parameter dictionary in a model configuration or a model update context.

# task (Objective-C)

**Framework:** Core ML  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

The update task that generated the update context.

## Declaration

```objectivec
@property (nonatomic, readonly) MLUpdateTask * task;
```

## See Also

### Getting the update context

- [event](event.md): The event type that triggered an update task to notify your app’s completion and update progress handlers.
- [MLUpdateProgressEvent](../mlupdateprogressevent.md): A type of event during a model update task.
- [parameters](parameters.md): The parameters for the update task.
- [MLParameterKey](../mlparameterkey.md): The keys for the parameter dictionary in a model configuration or a model update context.
