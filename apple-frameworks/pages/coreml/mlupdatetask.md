> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlupdatetask](https://developer.apple.com/documentation/coreml/mlupdatetask)

# MLUpdateTask (Swift)

**Framework:** Core ML  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

A task that updates a model with additional training data.

## Declaration

```swift
class MLUpdateTask
```

<a id="overview"></a>

## Overview

Use an [MLUpdateTask](mlupdatetask.md) to update a machine learning model on a user’s device.

## Topics

### Creating an update task

- [init(forModelAt:trainingData:completionHandler:)](mlupdatetask/init%28formodelat_trainingdata_completionhandler_%29.md): Creates a task that updates the model at the URL with the training data, and calls the completion handler when the update completes.
- [init(forModelAt:trainingData:progressHandlers:)](mlupdatetask/init%28formodelat_trainingdata_progresshandlers_%29.md): Creates a task that updates the model at the URL with the training data, and calls the progress handlers during and after the update.
- [init(forModelAt:trainingData:configuration:completionHandler:)](mlupdatetask/init%28formodelat_trainingdata_configuration_completionhandler_%29.md): Creates a task that updates the model at the URL with the training data and configuration, and calls the completion handler when the update completes.
- [init(forModelAt:trainingData:configuration:progressHandlers:)](mlupdatetask/init%28formodelat_trainingdata_configuration_progresshandlers_%29.md): Creates a task that updates the model at the URL with the training data and configuration, and calls the progress handlers during and after the update.
- [init(forModelAtURL:trainingData:completionHandler:)](mlupdatetask/init%28formodelaturl_trainingdata_completionhandler_%29.md)
- [init(forModelAtURL:trainingData:progressHandlers:)](mlupdatetask/init%28formodelaturl_trainingdata_progresshandlers_%29.md)
- [init(forModelAtURL:trainingData:configuration:completionHandler:)](mlupdatetask/init%28formodelaturl_trainingdata_configuration_completionhandler_%29.md)
- [init(forModelAtURL:trainingData:configuration:progressHandlers:)](mlupdatetask/init%28formodelaturl_trainingdata_configuration_progresshandlers_%29.md)
- [MLBatchProvider](mlbatchprovider.md): An interface that represents a collection of feature providers.
- [MLModelConfiguration](mlmodelconfiguration.md): The settings for creating or updating a machine learning model.
- [MLUpdateContext](mlupdatecontext.md): The context an update task provides to your app’s completion and update progress handlers.
- [MLUpdateProgressHandlers](mlupdateprogresshandlers.md): A collection of closures an update task uses to notify your app of its progress.

### Starting and Resuming an Update

- [resume(withParameters:)](mlupdatetask/resume%28withparameters_%29.md): Resumes a model update with updated parameter values.
- [MLParameterKey](mlparameterkey.md): The keys for the parameter dictionary in a model configuration or a model update context.

## Relationships

### Inherits From

- [MLTask](mltask.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### On-device model updates

- [MLTask](mltask.md): An abstract base class for machine learning tasks.
- [Personalizing a Model with On-Device Updates](personalizing-a-model-with-on-device-updates.md): Modify an updatable Core ML model by running an update task with labeled data.

# MLUpdateTask (Objective-C)

**Framework:** Core ML  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

A task that updates a model with additional training data.

## Declaration

```objectivec
@interface MLUpdateTask : MLTask
```

<a id="overview"></a>

## Overview

Use an [MLUpdateTask](mlupdatetask.md) to update a machine learning model on a user’s device.

## Topics

### Creating an update task

- [updateTaskForModelAtURL:trainingData:completionHandler:error:](mlupdatetask/init%28formodelat_trainingdata_completionhandler_%29.md): Creates a task that updates the model at the URL with the training data, and calls the completion handler when the update completes.
- [updateTaskForModelAtURL:trainingData:progressHandlers:error:](mlupdatetask/init%28formodelat_trainingdata_progresshandlers_%29.md): Creates a task that updates the model at the URL with the training data, and calls the progress handlers during and after the update.
- [updateTaskForModelAtURL:trainingData:configuration:completionHandler:error:](mlupdatetask/init%28formodelat_trainingdata_configuration_completionhandler_%29.md): Creates a task that updates the model at the URL with the training data and configuration, and calls the completion handler when the update completes.
- [updateTaskForModelAtURL:trainingData:configuration:progressHandlers:error:](mlupdatetask/init%28formodelat_trainingdata_configuration_progresshandlers_%29.md): Creates a task that updates the model at the URL with the training data and configuration, and calls the progress handlers during and after the update.
- [MLBatchProvider](mlbatchprovider.md): An interface that represents a collection of feature providers.
- [MLModelConfiguration](mlmodelconfiguration.md): The settings for creating or updating a machine learning model.
- [MLUpdateContext](mlupdatecontext.md): The context an update task provides to your app’s completion and update progress handlers.
- [MLUpdateProgressHandlers](mlupdateprogresshandlers.md): A collection of closures an update task uses to notify your app of its progress.

### Starting and Resuming an Update

- [resumeWithParameters:](mlupdatetask/resume%28withparameters_%29.md): Resumes a model update with updated parameter values.
- [MLParameterKey](mlparameterkey.md): The keys for the parameter dictionary in a model configuration or a model update context.

## Relationships

### Inherits From

- [MLTask](mltask.md)

## See Also

### On-device model updates

- [MLTask](mltask.md): An abstract base class for machine learning tasks.
- [Personalizing a Model with On-Device Updates](personalizing-a-model-with-on-device-updates.md): Modify an updatable Core ML model by running an update task with labeled data.
