> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlcustomlayer](https://developer.apple.com/documentation/coreml/mlcustomlayer)

# MLCustomLayer (Swift)

**Framework:** Core ML  
**Kind:** Protocol  
**Availability:** iOS 11.2+ · iPadOS 11.2+ · Mac Catalyst 13.1+ · macOS 10.13.2+ · tvOS 11.2+ · visionOS 1.0+ · watchOS 4.2+

An interface that defines the behavior of a custom layer in your neural network model.

## Declaration

```swift
protocol MLCustomLayer
```

## Mentioned In

- [Creating and Integrating a Model with Custom Layers](creating-and-integrating-a-model-with-custom-layers.md)

<a id="overview"></a>

## Overview

You use the [MLCustomLayer](mlcustomlayer.md) protocol to define the behavior of your own neural network layers in Core ML models. You can deploy novel or proprietary models on your own release schedule. Custom layers also provide a mechanism for pre- or post-processing during model evaluation.

## Topics

### Creating a layer

- [init(parameters:)](mlcustomlayer/init%28parameters_%29.md): Initializes the custom layer implementation.

### Integrating a layer

- [setWeightData(\_:)](mlcustomlayer/setweightdata%28__%29.md): Assigns the weights for the connections within the layer.
- [outputShapes(forInputShapes:)](mlcustomlayer/outputshapes%28forinputshapes_%29.md): Calculates the shapes of the output of this layer for the given input shapes.

### Evaluating a layer

- [evaluate(inputs:outputs:)](mlcustomlayer/evaluate%28inputs_outputs_%29.md): Evaluates the custom layer with the given inputs.
- [encode(commandBuffer:inputs:outputs:)](mlcustomlayer/encode%28commandbuffer_inputs_outputs_%29.md): Encodes GPU commands to evaluate the custom layer.

### Initializers

- [init(parameterDictionary:)](mlcustomlayer/init%28parameterdictionary_%29.md)

## See Also

### Custom model layers

- [Creating and Integrating a Model with Custom Layers](creating-and-integrating-a-model-with-custom-layers.md): Add models with custom neural-network layers to your app.

# MLCustomLayer (Objective-C)

**Framework:** Core ML  
**Kind:** Protocol  
**Availability:** iOS 11.2+ · iPadOS 11.2+ · Mac Catalyst 13.1+ · macOS 10.13.2+ · tvOS 11.2+ · visionOS 1.0+ · watchOS 4.2+

An interface that defines the behavior of a custom layer in your neural network model.

## Declaration

```objectivec
@protocol MLCustomLayer
```

## Mentioned In

- [Creating and Integrating a Model with Custom Layers](creating-and-integrating-a-model-with-custom-layers.md)

<a id="overview"></a>

## Overview

You use the [MLCustomLayer](mlcustomlayer.md) protocol to define the behavior of your own neural network layers in Core ML models. You can deploy novel or proprietary models on your own release schedule. Custom layers also provide a mechanism for pre- or post-processing during model evaluation.

## Topics

### Creating a layer

- [initWithParameterDictionary:error:](mlcustomlayer/init%28parameters_%29.md): Initializes the custom layer implementation.

### Integrating a layer

- [setWeightData:error:](mlcustomlayer/setweightdata%28__%29.md): Assigns the weights for the connections within the layer.
- [outputShapesForInputShapes:error:](mlcustomlayer/outputshapes%28forinputshapes_%29.md): Calculates the shapes of the output of this layer for the given input shapes.

### Evaluating a layer

- [evaluateOnCPUWithInputs:outputs:error:](mlcustomlayer/evaluate%28inputs_outputs_%29.md): Evaluates the custom layer with the given inputs.
- [encodeToCommandBuffer:inputs:outputs:error:](mlcustomlayer/encode%28commandbuffer_inputs_outputs_%29.md): Encodes GPU commands to evaluate the custom layer.

## See Also

### Custom model layers

- [Creating and Integrating a Model with Custom Layers](creating-and-integrating-a-model-with-custom-layers.md): Add models with custom neural-network layers to your app.
