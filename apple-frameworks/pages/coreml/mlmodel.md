> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlmodel](https://developer.apple.com/documentation/coreml/mlmodel)

# MLModel (Swift)

**Framework:** Core ML  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

An encapsulation of all the details of your machine learning model.

## Declaration

```swift
class MLModel
```

## Mentioned In

- [Downloading and Compiling a Model on the User’s Device](downloading-and-compiling-a-model-on-the-user-s-device.md)
- [Encrypting a Model in Your App](encrypting-a-model-in-your-app.md)

<a id="overview"></a>

## Overview

[MLModel](mlmodel.md) encapsulates a model’s prediction methods, configuration, and model description.

In most cases, you can use Core ML without accessing the [MLModel](mlmodel.md) class directly. Instead, use the programmer-friendly wrapper class that Xcode automatically generates when you add a model (see [Integrating a Core ML Model into Your App](integrating-a-core-ml-model-into-your-app.md)). If your app needs the [MLModel](mlmodel.md) interface, use the wrapper class’s `model` property.

With the [MLModel](mlmodel.md) interface, you can:

- Make a prediction with your app’s custom [MLFeatureProvider](mlfeatureprovider.md) by calling [prediction(from:)](https://developer.apple.com/documentation/coreml/mlmodel/prediction%28from:%29-9y2aa) or [prediction(from:options:)](https://developer.apple.com/documentation/coreml/mlmodel/prediction%28from:options:%29-81mr6).
- Make multiple predictions with your app’s custom [MLBatchProvider](mlbatchprovider.md) by calling [predictions(fromBatch:)](mlmodel/predictions%28frombatch_%29.md) or [predictions(from:options:)](mlmodel/predictions%28from_options_%29.md).
- Inspect your model’s [metadata](mlmodeldescription/metadata.md) and [MLFeatureDescription](mlfeaturedescription.md) instances through [modelDescription](mlmodel/modeldescription.md).

If your app downloads and compiles a model on the user’s device, you must use the [MLModel](mlmodel.md) class directly to make predictions. See [Downloading and Compiling a Model on the User’s Device](downloading-and-compiling-a-model-on-the-user-s-device.md).

> **Important**

>  Use an [MLModel](mlmodel.md) instance on one thread or one dispatch queue at a time. Do this by either serializing method calls to the model, or by creating a separate model instance for each thread and dispatch queue.

## Topics

### Loading a model

- [load(contentsOf:configuration:)](mlmodel/load%28contentsof_configuration_%29.md): Construct a model asynchronously from a compiled model asset.
- [load(\_:configuration:completionHandler:)](mlmodel/load%28__configuration_completionhandler_%29.md): Construct a model asynchronously from a compiled model asset.
- [load(contentsOf:configuration:completionHandler:)](mlmodel/load%28contentsof_configuration_completionhandler_%29.md): Creates a Core ML model instance asynchronously from a compiled model file, a custom configuration, and a completion handler.
- [init(contentsOf:)](mlmodel/init%28contentsof_%29.md): Creates a Core ML model instance from a compiled model file.
- [init(contentsOf:configuration:)](mlmodel/init%28contentsof_configuration_%29.md): Creates a Core ML model instance from a compiled model file and a custom configuration.
- [init(contentsOfURL:)](mlmodel/init%28contentsofurl_%29.md)
- [init(contentsOfURL:configuration:)](mlmodel/init%28contentsofurl_configuration_%29.md)

### Compiling a model

- [compileModel(at:)](mlmodel/compilemodel%28at_%29.md)
- [compileModel(at:completionHandler:)](mlmodel/compilemodel%28at_completionhandler_%29.md): Compile a model for a device.

### Making predictions

- [prediction(from:)](mlmodel/prediction%28from_%29.md)
- [prediction(from:options:)](mlmodel/prediction%28from_options_%29.md)
- [predictions(fromBatch:)](mlmodel/predictions%28frombatch_%29.md): Generates predictions for each input feature provider within the batch provider.
- [predictions(from:options:)](mlmodel/predictions%28from_options_%29.md): Generates a prediction for each input feature provider within the batch provider using the prediction options.
- [prediction(from:using:)](mlmodel/prediction%28from_using_%29.md)
- [prediction(from:using:options:)](mlmodel/prediction%28from_using_options_%29.md)
- [MLPredictionOptions](mlpredictionoptions.md): The options available when making a prediction.
- [Background Inference](../bundleresources/entitlements/com.apple.developer.background-tasks.continued-processing.inference.md): An entitlement that lets a background task run inference on the Neural Engine.

### Making state

- [makeState()](mlmodel/makestate%28%29.md): Creates a new state object.

### Inspecting a model

- [availableComputeDevices](mlmodel/availablecomputedevices-6klyt.md): The list of available compute devices that the model’s prediction methods use.
- [configuration](mlmodel/configuration.md): The configuration of the model set during initialization.
- [modelDescription](mlmodel/modeldescription.md): Model information you use at runtime during development, which Xcode also displays in its Core ML model editor view.
- [MLModelDescription](mlmodeldescription.md): Information about a model, primarily the input and output format for each feature the model expects, and optional metadata.
- [parameterValue(for:)](mlmodel/parametervalue%28for_%29.md): Returns a model parameter value for a key.
- [MLParameterKey](mlparameterkey.md): The keys for the parameter dictionary in a model configuration or a model update context.

### Supporting types

- [MLModelConfiguration](mlmodelconfiguration.md): The settings for creating or updating a machine learning model.
- [MLOptimizationHints](mloptimizationhints-swift.struct.md)
- [MLKey](mlkey.md): An abstract base class for machine learning key types.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Core ML models

- [Getting a Core ML Model](getting-a-core-ml-model.md): Obtain a Core ML model to use in your app.
- [Updating a Model File to a Model Package](updating-a-model-file-to-a-model-package.md): Convert a Core ML model file into a model package in Xcode.
- [Integrating a Core ML Model into Your App](integrating-a-core-ml-model-into-your-app.md): Add a simple model to an app, pass input data to the model, and process the model’s predictions.
- [Model Customization](model-customization.md): Expand and modify your model with new layers.
- [Model Personalization](model-personalization.md): Update your model to adapt to new data.

# MLModel (Objective-C)

**Framework:** Core ML  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

An encapsulation of all the details of your machine learning model.

## Declaration

```objectivec
@interface MLModel : NSObject
```

## Mentioned In

- [Downloading and Compiling a Model on the User’s Device](downloading-and-compiling-a-model-on-the-user-s-device.md)
- [Encrypting a Model in Your App](encrypting-a-model-in-your-app.md)

<a id="overview"></a>

## Overview

[MLModel](mlmodel.md) encapsulates a model’s prediction methods, configuration, and model description.

In most cases, you can use Core ML without accessing the [MLModel](mlmodel.md) class directly. Instead, use the programmer-friendly wrapper class that Xcode automatically generates when you add a model (see [Integrating a Core ML Model into Your App](integrating-a-core-ml-model-into-your-app.md)). If your app needs the [MLModel](mlmodel.md) interface, use the wrapper class’s `model` property.

With the [MLModel](mlmodel.md) interface, you can:

- Make a prediction with your app’s custom [MLFeatureProvider](mlfeatureprovider.md) by calling [predictionFromFeatures:error:](https://developer.apple.com/documentation/coreml/mlmodel/prediction%28from:%29-9y2aa) or [predictionFromFeatures:options:error:](https://developer.apple.com/documentation/coreml/mlmodel/prediction%28from:options:%29-81mr6).
- Make multiple predictions with your app’s custom [MLBatchProvider](mlbatchprovider.md) by calling [predictionsFromBatch:error:](mlmodel/predictions%28frombatch_%29.md) or [predictionsFromBatch:options:error:](mlmodel/predictions%28from_options_%29.md).
- Inspect your model’s [metadata](mlmodeldescription/metadata.md) and [MLFeatureDescription](mlfeaturedescription.md) instances through [modelDescription](mlmodel/modeldescription.md).

If your app downloads and compiles a model on the user’s device, you must use the [MLModel](mlmodel.md) class directly to make predictions. See [Downloading and Compiling a Model on the User’s Device](downloading-and-compiling-a-model-on-the-user-s-device.md).

> **Important**

>  Use an [MLModel](mlmodel.md) instance on one thread or one dispatch queue at a time. Do this by either serializing method calls to the model, or by creating a separate model instance for each thread and dispatch queue.

## Topics

### Loading a model

- [loadContentsOfURL:configuration:completionHandler:](mlmodel/loadcontentsofurl_configuration_completionhandler_.md): Creates a Core ML model instance asynchronously from a compiled model file, a custom configuration, and a completion handler.

### Loading a model

- [predictionFromFeatures:completionHandler:](mlmodel/predictionfromfeatures_completionhandler_.md): Generates a prediction asynchronously from the feature values within the input feature provider.
- [predictionFromFeatures:options:completionHandler:](mlmodel/predictionfromfeatures_options_completionhandler_.md): Generates a prediction asynchronously from the feature values within the input feature provider using the prediction options.
- [predictionFromFeatures:usingState:options:completionHandler:](mlmodel/predictionfromfeatures_usingstate_options_completionhandler_.md): Run a stateful prediction asynchronously.

### Making state

- [newState](mlmodel/newstate.md): Creates a new state object.

### Inspecting a model

- [availableComputeDevices](mlmodel/availablecomputedevices-42uzt.md): The list of available compute devices that the model’s prediction can use.
- [configuration](mlmodel/configuration.md): The configuration of the model set during initialization.
- [modelDescription](mlmodel/modeldescription.md): Model information you use at runtime during development, which Xcode also displays in its Core ML model editor view.
- [MLModelDescription](mlmodeldescription.md): Information about a model, primarily the input and output format for each feature the model expects, and optional metadata.
- [parameterValueForKey:error:](mlmodel/parametervalue%28for_%29.md): Returns a model parameter value for a key.
- [MLParameterKey](mlparameterkey.md): The keys for the parameter dictionary in a model configuration or a model update context.

### Supporting types

- [MLModelConfiguration](mlmodelconfiguration.md): The settings for creating or updating a machine learning model.
- [MLKey](mlkey.md): An abstract base class for machine learning key types.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Core ML models

- [Getting a Core ML Model](getting-a-core-ml-model.md): Obtain a Core ML model to use in your app.
- [Updating a Model File to a Model Package](updating-a-model-file-to-a-model-package.md): Convert a Core ML model file into a model package in Xcode.
- [Integrating a Core ML Model into Your App](integrating-a-core-ml-model-into-your-app.md): Add a simple model to an app, pass input data to the model, and process the model’s predictions.
- [Model Customization](model-customization.md): Expand and modify your model with new layers.
- [Model Personalization](model-personalization.md): Update your model to adapt to new data.
