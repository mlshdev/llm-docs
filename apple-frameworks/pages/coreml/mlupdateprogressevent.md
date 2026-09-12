> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlupdateprogressevent](https://developer.apple.com/documentation/coreml/mlupdateprogressevent)

# MLUpdateProgressEvent (Swift)

**Framework:** Core ML  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

A type of event during a model update task.

## Declaration

```swift
struct MLUpdateProgressEvent
```

## Topics

### Getting progress event types

- [trainingBegin](mlupdateprogressevent/trainingbegin.md): An event that represents the start of training.
- [miniBatchEnd](mlupdateprogressevent/minibatchend.md): An event that represents the end of a mini-batch within a training epoch.
- [epochEnd](mlupdateprogressevent/epochend.md): An event that represents the end of training epoch.

### Creating a progress event

- [init(rawValue:)](mlupdateprogressevent/init%28rawvalue_%29.md): Creates a progress event for the given integer.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Getting the update context

- [event](mlupdatecontext/event.md): The event type that triggered an update task to notify your app’s completion and update progress handlers.
- [task](mlupdatecontext/task.md): The update task that generated the update context.
- [parameters](mlupdatecontext/parameters.md): The parameters for the update task.
- [MLParameterKey](mlparameterkey.md): The keys for the parameter dictionary in a model configuration or a model update context.

# MLUpdateProgressEvent (Objective-C)

**Framework:** Core ML  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

A type of event during a model update task.

## Declaration

```objectivec
enum MLUpdateProgressEvent : NSInteger;
```

## Topics

### Getting progress event types

- [MLUpdateProgressEventTrainingBegin](mlupdateprogressevent/trainingbegin.md): An event that represents the start of training.
- [MLUpdateProgressEventMiniBatchEnd](mlupdateprogressevent/minibatchend.md): An event that represents the end of a mini-batch within a training epoch.
- [MLUpdateProgressEventEpochEnd](mlupdateprogressevent/epochend.md): An event that represents the end of training epoch.

## See Also

### Getting the update context

- [event](mlupdatecontext/event.md): The event type that triggered an update task to notify your app’s completion and update progress handlers.
- [task](mlupdatecontext/task.md): The update task that generated the update context.
- [parameters](mlupdatecontext/parameters.md): The parameters for the update task.
- [MLParameterKey](mlparameterkey.md): The keys for the parameter dictionary in a model configuration or a model update context.
