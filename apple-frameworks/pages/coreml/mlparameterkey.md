> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlparameterkey](https://developer.apple.com/documentation/coreml/mlparameterkey)

# MLParameterKey (Swift)

**Framework:** Core ML  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

The keys for the parameter dictionary in a model configuration or a model update context.

## Declaration

```swift
class MLParameterKey
```

<a id="overview"></a>

## Overview

Use an [MLParameterKey](mlparameterkey.md) to retrieve a model’s parameter value using:

- The model’s [parameterValue(for:)](mlmodel/parametervalue%28for_%29.md) method
- The [parameters](mlmodelconfiguration/parameters.md) dictionary of an [MLModelConfiguration](mlmodelconfiguration.md)
- The [parameters](mlupdatecontext/parameters.md) dictionary of an [MLUpdateContext](mlupdatecontext.md)

> **Note**

>  To access the parameter of a specific model within a pipeline model, use the parameter key’s [scoped(to:)](mlparameterkey/scoped%28to_%29.md) method with the model’s name.

<a id="Overriding-model-and-layer-parameters"></a>

### Overriding model and layer parameters

To override a model’s default parameter values:

1. Create an [MLModelConfiguration](mlmodelconfiguration.md) instance.
2. Use an [MLParameterKey](mlparameterkey.md) for each parameter to set its value in the model configuration’s [parameters](mlmodelconfiguration/parameters.md) dictionary.
3. Create a new model instance using [init(contentsOf:configuration:)](mlmodel/init%28contentsof_configuration_%29.md) with your custom model configuration.

<a id="Configuring-update-parameters"></a>

### Configuring update parameters

To configure the update parameters for an [MLUpdateTask](mlupdatetask.md):

1. Create an [MLModelConfiguration](mlmodelconfiguration.md) instance.
2. Use an [MLParameterKey](mlparameterkey.md) for each parameter to set its value in the model configuration’s [parameters](mlmodelconfiguration/parameters.md) dictionary.
3. Create a new update task with your custom model configuration.

See [Personalizing a Model with On-Device Updates](personalizing-a-model-with-on-device-updates.md).

## Topics

### Scoping parameter keys

- [scoped(to:)](mlparameterkey/scoped%28to_%29.md): Creates a copy of a parameter key and adds the scope to it.

### Accessing model parameters

- [numberOfNeighbors](mlparameterkey/numberofneighbors.md): The key you use to access the number of neighbors that adjusts the affinity of a k-nearest-neighbor model.
- [linkedModelFileName](mlparameterkey/linkedmodelfilename.md): The key you use to access the linked model’s filename.
- [linkedModelSearchPath](mlparameterkey/linkedmodelsearchpath.md): The key you use to access the linked model’s search path.

### Accessing neural network layer parameters

- [weights](mlparameterkey/weights.md): The key you use to access the weights of a layer in a neural network model.
- [biases](mlparameterkey/biases.md): The key you use to access the biases of a layer in a neural network model.

### Accessing model update parameters

- [learningRate](mlparameterkey/learningrate.md): The key you use to access the optimizer’s learning rate parameter.
- [momentum](mlparameterkey/momentum.md): The key you use to access the stochastic gradient descent (SGD) optimizer’s momentum parameter.
- [miniBatchSize](mlparameterkey/minibatchsize.md): The key you use to access the optimizer’s mini batch-size parameter.
- [beta1](mlparameterkey/beta1.md): The key you use to access the Adam optimizer’s first beta parameter.
- [beta2](mlparameterkey/beta2.md): The key you use to access the Adam optimizer’s second beta parameter.
- [eps](mlparameterkey/eps.md): The key you use to access the Adam optimizer’s epsilon parameter.
- [epochs](mlparameterkey/epochs.md): The key you use to access the optimizer’s epochs parameter.
- [shuffle](mlparameterkey/shuffle.md): The key you use to access the shuffle parameter, a Boolean value that determines whether the model randomizes the data between epochs.
- [seed](mlparameterkey/seed.md): The key you use to access the seed parameter that initializes the random number generator for the shuffle option.

## Relationships

### Inherits From

- [MLKey](mlkey.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Inspecting a model

- [availableComputeDevices](mlmodel/availablecomputedevices-6klyt.md): The list of available compute devices that the model’s prediction methods use.
- [configuration](mlmodel/configuration.md): The configuration of the model set during initialization.
- [modelDescription](mlmodel/modeldescription.md): Model information you use at runtime during development, which Xcode also displays in its Core ML model editor view.
- [MLModelDescription](mlmodeldescription.md): Information about a model, primarily the input and output format for each feature the model expects, and optional metadata.
- [parameterValue(for:)](mlmodel/parametervalue%28for_%29.md): Returns a model parameter value for a key.

# MLParameterKey (Objective-C)

**Framework:** Core ML  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

The keys for the parameter dictionary in a model configuration or a model update context.

## Declaration

```objectivec
@interface MLParameterKey : MLKey
```

<a id="overview"></a>

## Overview

Use an [MLParameterKey](mlparameterkey.md) to retrieve a model’s parameter value using:

- The model’s [parameterValueForKey:error:](mlmodel/parametervalue%28for_%29.md) method
- The [parameters](mlmodelconfiguration/parameters.md) dictionary of an [MLModelConfiguration](mlmodelconfiguration.md)
- The [parameters](mlupdatecontext/parameters.md) dictionary of an [MLUpdateContext](mlupdatecontext.md)

> **Note**

>  To access the parameter of a specific model within a pipeline model, use the parameter key’s [scopedTo:](mlparameterkey/scoped%28to_%29.md) method with the model’s name.

<a id="Overriding-model-and-layer-parameters"></a>

### Overriding model and layer parameters

To override a model’s default parameter values:

1. Create an [MLModelConfiguration](mlmodelconfiguration.md) instance.
2. Use an [MLParameterKey](mlparameterkey.md) for each parameter to set its value in the model configuration’s [parameters](mlmodelconfiguration/parameters.md) dictionary.
3. Create a new model instance using [modelWithContentsOfURL:configuration:error:](mlmodel/init%28contentsof_configuration_%29.md) with your custom model configuration.

<a id="Configuring-update-parameters"></a>

### Configuring update parameters

To configure the update parameters for an [MLUpdateTask](mlupdatetask.md):

1. Create an [MLModelConfiguration](mlmodelconfiguration.md) instance.
2. Use an [MLParameterKey](mlparameterkey.md) for each parameter to set its value in the model configuration’s [parameters](mlmodelconfiguration/parameters.md) dictionary.
3. Create a new update task with your custom model configuration.

See [Personalizing a Model with On-Device Updates](personalizing-a-model-with-on-device-updates.md).

## Topics

### Scoping parameter keys

- [scopedTo:](mlparameterkey/scoped%28to_%29.md): Creates a copy of a parameter key and adds the scope to it.

### Accessing model parameters

- [numberOfNeighbors](mlparameterkey/numberofneighbors.md): The key you use to access the number of neighbors that adjusts the affinity of a k-nearest-neighbor model.
- [linkedModelFileName](mlparameterkey/linkedmodelfilename.md): The key you use to access the linked model’s filename.
- [linkedModelSearchPath](mlparameterkey/linkedmodelsearchpath.md): The key you use to access the linked model’s search path.

### Accessing neural network layer parameters

- [weights](mlparameterkey/weights.md): The key you use to access the weights of a layer in a neural network model.
- [biases](mlparameterkey/biases.md): The key you use to access the biases of a layer in a neural network model.

### Accessing model update parameters

- [learningRate](mlparameterkey/learningrate.md): The key you use to access the optimizer’s learning rate parameter.
- [momentum](mlparameterkey/momentum.md): The key you use to access the stochastic gradient descent (SGD) optimizer’s momentum parameter.
- [miniBatchSize](mlparameterkey/minibatchsize.md): The key you use to access the optimizer’s mini batch-size parameter.
- [beta1](mlparameterkey/beta1.md): The key you use to access the Adam optimizer’s first beta parameter.
- [beta2](mlparameterkey/beta2.md): The key you use to access the Adam optimizer’s second beta parameter.
- [eps](mlparameterkey/eps.md): The key you use to access the Adam optimizer’s epsilon parameter.
- [epochs](mlparameterkey/epochs.md): The key you use to access the optimizer’s epochs parameter.
- [shuffle](mlparameterkey/shuffle.md): The key you use to access the shuffle parameter, a Boolean value that determines whether the model randomizes the data between epochs.
- [seed](mlparameterkey/seed.md): The key you use to access the seed parameter that initializes the random number generator for the shuffle option.

## Relationships

### Inherits From

- [MLKey](mlkey.md)

## See Also

### Inspecting a model

- [availableComputeDevices](mlmodel/availablecomputedevices-42uzt.md): The list of available compute devices that the model’s prediction can use.
- [configuration](mlmodel/configuration.md): The configuration of the model set during initialization.
- [modelDescription](mlmodel/modeldescription.md): Model information you use at runtime during development, which Xcode also displays in its Core ML model editor view.
- [MLModelDescription](mlmodeldescription.md): Information about a model, primarily the input and output format for each feature the model expects, and optional metadata.
- [parameterValueForKey:error:](mlmodel/parametervalue%28for_%29.md): Returns a model parameter value for a key.
