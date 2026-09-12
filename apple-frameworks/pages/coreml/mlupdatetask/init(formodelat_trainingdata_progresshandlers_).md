> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlupdatetask/init(formodelat:trainingdata:progresshandlers:)](https://developer.apple.com/documentation/coreml/mlupdatetask/init(formodelat:trainingdata:progresshandlers:))

# init(forModelAt:trainingData:progressHandlers:) (Swift)

**Framework:** Core ML  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Creates a task that updates the model at the URL with the training data, and calls the progress handlers during and after the update.

## Declaration

```swift
convenience init(forModelAt modelURL: URL, trainingData: any MLBatchProvider, progressHandlers: MLUpdateProgressHandlers) throws
```

## Parameters

- `modelURL`: The location in the file system of a model file (*ModelName*`.mlmodelc`).
- `trainingData`: The update data for the model, contained in a batch provider.
- `progressHandlers`: The closures the task calls during the update process.

## See Also

### Creating an update task

- [init(forModelAt:trainingData:completionHandler:)](init%28formodelat_trainingdata_completionhandler_%29.md): Creates a task that updates the model at the URL with the training data, and calls the completion handler when the update completes.
- [init(forModelAt:trainingData:configuration:completionHandler:)](init%28formodelat_trainingdata_configuration_completionhandler_%29.md): Creates a task that updates the model at the URL with the training data and configuration, and calls the completion handler when the update completes.
- [init(forModelAt:trainingData:configuration:progressHandlers:)](init%28formodelat_trainingdata_configuration_progresshandlers_%29.md): Creates a task that updates the model at the URL with the training data and configuration, and calls the progress handlers during and after the update.
- [init(forModelAtURL:trainingData:completionHandler:)](init%28formodelaturl_trainingdata_completionhandler_%29.md)
- [init(forModelAtURL:trainingData:progressHandlers:)](init%28formodelaturl_trainingdata_progresshandlers_%29.md)
- [init(forModelAtURL:trainingData:configuration:completionHandler:)](init%28formodelaturl_trainingdata_configuration_completionhandler_%29.md)
- [init(forModelAtURL:trainingData:configuration:progressHandlers:)](init%28formodelaturl_trainingdata_configuration_progresshandlers_%29.md)
- [MLBatchProvider](../mlbatchprovider.md): An interface that represents a collection of feature providers.
- [MLModelConfiguration](../mlmodelconfiguration.md): The settings for creating or updating a machine learning model.
- [MLUpdateContext](../mlupdatecontext.md): The context an update task provides to your app’s completion and update progress handlers.
- [MLUpdateProgressHandlers](../mlupdateprogresshandlers.md): A collection of closures an update task uses to notify your app of its progress.

# updateTaskForModelAtURL:trainingData:progressHandlers:error: (Objective-C)

**Framework:** Core ML  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Creates a task that updates the model at the URL with the training data, and calls the progress handlers during and after the update.

## Declaration

```objectivec
+ (instancetype) updateTaskForModelAtURL:(NSURL *) modelURL trainingData:(id<MLBatchProvider>) trainingData progressHandlers:(MLUpdateProgressHandlers *) progressHandlers error:(NSError **) error;
```

## Parameters

- `modelURL`: The location in the file system of a model file (*ModelName*`.mlmodelc`).
- `trainingData`: The update data for the model, contained in a batch provider.
- `progressHandlers`: The closures the task calls during the update process.
- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

## See Also

### Creating an update task

- [updateTaskForModelAtURL:trainingData:completionHandler:error:](init%28formodelat_trainingdata_completionhandler_%29.md): Creates a task that updates the model at the URL with the training data, and calls the completion handler when the update completes.
- [updateTaskForModelAtURL:trainingData:configuration:completionHandler:error:](init%28formodelat_trainingdata_configuration_completionhandler_%29.md): Creates a task that updates the model at the URL with the training data and configuration, and calls the completion handler when the update completes.
- [updateTaskForModelAtURL:trainingData:configuration:progressHandlers:error:](init%28formodelat_trainingdata_configuration_progresshandlers_%29.md): Creates a task that updates the model at the URL with the training data and configuration, and calls the progress handlers during and after the update.
- [MLBatchProvider](../mlbatchprovider.md): An interface that represents a collection of feature providers.
- [MLModelConfiguration](../mlmodelconfiguration.md): The settings for creating or updating a machine learning model.
- [MLUpdateContext](../mlupdatecontext.md): The context an update task provides to your app’s completion and update progress handlers.
- [MLUpdateProgressHandlers](../mlupdateprogresshandlers.md): A collection of closures an update task uses to notify your app of its progress.
