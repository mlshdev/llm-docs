> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlmodelconfiguration](https://developer.apple.com/documentation/coreml/mlmodelconfiguration)

# MLModelConfiguration (Swift)

**Framework:** Core ML  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

The settings for creating or updating a machine learning model.

## Declaration

```swift
class MLModelConfiguration
```

<a id="overview"></a>

## Overview

Use a model configuration to:

- Set or override model parameters.
- Designate which device the model uses to make predictions, such as a GPU.
- Restrict the model to use a specific computational device category, such as a CPU.

You typically use a model configuration instance to configure an [MLModel](mlmodel.md) instance as you create it with [init(contentsOf:configuration:)](mlmodel/init%28contentsof_configuration_%29.md) or create an [MLUpdateTask](mlupdatetask.md). See [Personalizing a Model with On-Device Updates](personalizing-a-model-with-on-device-updates.md).

Configure your model parameters by setting values for each relevant [MLParameterKey](mlparameterkey.md) in the [parameters](mlmodelconfiguration/parameters.md) property.

## Topics

### Configuring model parameters

- [functionName](mlmodelconfiguration/functionname.md): Function name that `MLModel` will use.
- [modelDisplayName](mlmodelconfiguration/modeldisplayname.md): A human readable name of a model for display purposes.
- [parameters](mlmodelconfiguration/parameters.md): A dictionary of configuration settings your app can override when loading a model.
- [MLParameterKey](mlparameterkey.md): The keys for the parameter dictionary in a model configuration or a model update context.

### Configuring GPU usage

- [preferredMetalDevice](mlmodelconfiguration/preferredmetaldevice.md): The metal device you prefer this model use to make predictions (inference) and update the model.
- [allowLowPrecisionAccumulationOnGPU](mlmodelconfiguration/allowlowprecisionaccumulationongpu.md): A Boolean value that determines whether to allow low-precision accumulation on a GPU.

### Allowing access to processing units

- [computeUnits](mlmodelconfiguration/computeunits.md): The processing unit or units the model uses to make predictions.
- [MLComputeUnits](mlcomputeunits.md): The set of processing-unit configurations the model can use to make predictions.

### Getting optimization hints

- [optimizationHints](mlmodelconfiguration/optimizationhints-1oq0g.md): A group of hints for CoreML to optimize

### Initializers

- [init(coder:)](mlmodelconfiguration/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

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

### Supporting types

- [MLOptimizationHints](mloptimizationhints-swift.struct.md)
- [MLKey](mlkey.md): An abstract base class for machine learning key types.

# MLModelConfiguration (Objective-C)

**Framework:** Core ML  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

The settings for creating or updating a machine learning model.

## Declaration

```objectivec
@interface MLModelConfiguration : NSObject
```

<a id="overview"></a>

## Overview

Use a model configuration to:

- Set or override model parameters.
- Designate which device the model uses to make predictions, such as a GPU.
- Restrict the model to use a specific computational device category, such as a CPU.

You typically use a model configuration instance to configure an [MLModel](mlmodel.md) instance as you create it with [modelWithContentsOfURL:configuration:error:](mlmodel/init%28contentsof_configuration_%29.md) or create an [MLUpdateTask](mlupdatetask.md). See [Personalizing a Model with On-Device Updates](personalizing-a-model-with-on-device-updates.md).

Configure your model parameters by setting values for each relevant [MLParameterKey](mlparameterkey.md) in the [parameters](mlmodelconfiguration/parameters.md) property.

## Topics

### Configuring model parameters

- [functionName](mlmodelconfiguration/functionname.md): Function name that `MLModel` will use.
- [modelDisplayName](mlmodelconfiguration/modeldisplayname.md): A human readable name of a model for display purposes.
- [parameters](mlmodelconfiguration/parameters.md): A dictionary of configuration settings your app can override when loading a model.
- [MLParameterKey](mlparameterkey.md): The keys for the parameter dictionary in a model configuration or a model update context.

### Configuring GPU usage

- [preferredMetalDevice](mlmodelconfiguration/preferredmetaldevice.md): The metal device you prefer this model use to make predictions (inference) and update the model.
- [allowLowPrecisionAccumulationOnGPU](mlmodelconfiguration/allowlowprecisionaccumulationongpu.md): A Boolean value that determines whether to allow low-precision accumulation on a GPU.

### Allowing access to processing units

- [computeUnits](mlmodelconfiguration/computeunits.md): The processing unit or units the model uses to make predictions.
- [MLComputeUnits](mlcomputeunits.md): The set of processing-unit configurations the model can use to make predictions.

### Getting optimization hints

- [optimizationHints](mlmodelconfiguration/optimizationhints-81u6f.md): A group of hints for CoreML to optimize

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Supporting types

- [MLKey](mlkey.md): An abstract base class for machine learning key types.
