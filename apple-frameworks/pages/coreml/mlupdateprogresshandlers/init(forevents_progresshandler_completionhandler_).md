> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlupdateprogresshandlers/init(forevents:progresshandler:completionhandler:)](https://developer.apple.com/documentation/coreml/mlupdateprogresshandlers/init(forevents:progresshandler:completionhandler:))

# init(forEvents:progressHandler:completionHandler:) (Swift)

**Framework:** Core ML  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

Creates the collection of closures an update task uses to notify your app of its progress.

## Declaration

```swift
init(forEvents interestedEvents: MLUpdateProgressEvent, progressHandler: ((MLUpdateContext) -> Void)?, completionHandler: @escaping (MLUpdateContext) -> Void)
```

## Parameters

- `interestedEvents`: The events for which the update task will call your closures for, contained in an option set.
- `progressHandler`: The closure an update task uses to notify your app. The update task only uses this closure for the events you specified in `interestedEvents`.
- `completionHandler`: The closure that an update tasks uses to notify you when it is complete.

## See Also

### Creating progress handlers

- [MLUpdateProgressEvent](../mlupdateprogressevent.md): A type of event during a model update task.
- [MLUpdateContext](../mlupdatecontext.md): The context an update task provides to your app’s completion and update progress handlers.

# initForEvents:progressHandler:completionHandler: (Objective-C)

**Framework:** Core ML  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

Creates the collection of closures an update task uses to notify your app of its progress.

## Declaration

```objectivec
- (instancetype) initForEvents:(MLUpdateProgressEvent) interestedEvents progressHandler:(void (^)(MLUpdateContext *context)) progressHandler completionHandler:(void (^)(MLUpdateContext *context)) completionHandler;
```

## Parameters

- `interestedEvents`: The events for which the update task will call your closures for, contained in an option set.
- `progressHandler`: The closure an update task uses to notify your app. The update task only uses this closure for the events you specified in `interestedEvents`.
- `completionHandler`: The closure that an update tasks uses to notify you when it is complete.

## See Also

### Creating progress handlers

- [MLUpdateProgressEvent](../mlupdateprogressevent.md): A type of event during a model update task.
- [MLUpdateContext](../mlupdatecontext.md): The context an update task provides to your app’s completion and update progress handlers.
