> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlupdatecontext/event](https://developer.apple.com/documentation/coreml/mlupdatecontext/event)

# event (Swift)

**Framework:** Core ML  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

The event type that triggered an update task to notify your app’s completion and update progress handlers.

## Declaration

```swift
var event: MLUpdateProgressEvent { get }
```

## See Also

### Getting the update context

- [MLUpdateProgressEvent](../mlupdateprogressevent.md): A type of event during a model update task.
- [task](task.md): The update task that generated the update context.
- [parameters](parameters.md): The parameters for the update task.
- [MLParameterKey](../mlparameterkey.md): The keys for the parameter dictionary in a model configuration or a model update context.

# event (Objective-C)

**Framework:** Core ML  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

The event type that triggered an update task to notify your app’s completion and update progress handlers.

## Declaration

```objectivec
@property (nonatomic, readonly) MLUpdateProgressEvent event;
```

## See Also

### Getting the update context

- [MLUpdateProgressEvent](../mlupdateprogressevent.md): A type of event during a model update task.
- [task](task.md): The update task that generated the update context.
- [parameters](parameters.md): The parameters for the update task.
- [MLParameterKey](../mlparameterkey.md): The keys for the parameter dictionary in a model configuration or a model update context.
