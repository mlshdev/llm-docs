> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlupdatecontext/parameters](https://developer.apple.com/documentation/coreml/mlupdatecontext/parameters)

# parameters (Swift)

**Framework:** Core ML  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

The parameters for the update task.

## Declaration

```swift
var parameters: [MLParameterKey : Any] { get }
```

## See Also

### Getting the update context

- [event](event.md): The event type that triggered an update task to notify your app’s completion and update progress handlers.
- [MLUpdateProgressEvent](../mlupdateprogressevent.md): A type of event during a model update task.
- [task](task.md): The update task that generated the update context.
- [MLParameterKey](../mlparameterkey.md): The keys for the parameter dictionary in a model configuration or a model update context.

# parameters (Objective-C)

**Framework:** Core ML  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

The parameters for the update task.

## Declaration

```objectivec
@property (nonatomic, readonly) NSDictionary<MLParameterKey *,id> * parameters;
```

## See Also

### Getting the update context

- [event](event.md): The event type that triggered an update task to notify your app’s completion and update progress handlers.
- [MLUpdateProgressEvent](../mlupdateprogressevent.md): A type of event during a model update task.
- [task](task.md): The update task that generated the update context.
- [MLParameterKey](../mlparameterkey.md): The keys for the parameter dictionary in a model configuration or a model update context.
