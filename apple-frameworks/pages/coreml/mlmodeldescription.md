> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlmodeldescription](https://developer.apple.com/documentation/coreml/mlmodeldescription)

# MLModelDescription (Swift)

**Framework:** Core ML  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Information about a model, primarily the input and output format for each feature the model expects, and optional metadata.

## Declaration

```swift
class MLModelDescription
```

## Topics

### Accessing feature descriptions

- [stateDescriptionsByName](mlmodeldescription/statedescriptionsbyname.md): Description of the state features.
- [inputDescriptionsByName](mlmodeldescription/inputdescriptionsbyname.md): A dictionary of input feature descriptions, which the model keys by the input’s name.
- [outputDescriptionsByName](mlmodeldescription/outputdescriptionsbyname.md): A dictionary of output feature descriptions, which the model keys by the output’s name.
- [MLFeatureDescription](mlfeaturedescription.md): The name, type, and constraints of an input or output feature.

### Accessing metadata

- [classLabels](mlmodeldescription/classlabels.md): An array of labels, which can be either strings or a numbers, for classifier models.
- [metadata](mlmodeldescription/metadata.md): A dictionary of the model’s creation information, such as its description, author, version, and license.
- [MLModelMetadataKey](mlmodelmetadatakey.md): The set of keys the model uses to store values in its metadata dictionary.

### Accessing prediction names

- [predictedFeatureName](mlmodeldescription/predictedfeaturename.md): The name of the primary prediction feature output description.
- [predictedProbabilitiesName](mlmodeldescription/predictedprobabilitiesname.md): The name of the feature output description for all probabilities of a prediction.

### Accessing update descriptions

- [isUpdatable](mlmodeldescription/isupdatable.md): A Boolean value that indicates whether you can update the model with additional training.
- [trainingInputDescriptionsByName](mlmodeldescription/traininginputdescriptionsbyname.md): A dictionary of the training input feature descriptions, which the model keys by the input’s name.
- [parameterDescriptionsByKey](mlmodeldescription/parameterdescriptionsbykey.md): A dictionary of the descriptions for the model’s parameters.
- [MLParameterDescription](mlparameterdescription.md): A description of a model parameter that includes a default value and a constraint, if applicable.

### Initializers

- [init(coder:)](mlmodeldescription/init%28coder_%29.md)

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
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Inspecting a model

- [availableComputeDevices](mlmodel/availablecomputedevices-6klyt.md): The list of available compute devices that the model’s prediction methods use.
- [configuration](mlmodel/configuration.md): The configuration of the model set during initialization.
- [modelDescription](mlmodel/modeldescription.md): Model information you use at runtime during development, which Xcode also displays in its Core ML model editor view.
- [parameterValue(for:)](mlmodel/parametervalue%28for_%29.md): Returns a model parameter value for a key.
- [MLParameterKey](mlparameterkey.md): The keys for the parameter dictionary in a model configuration or a model update context.

# MLModelDescription (Objective-C)

**Framework:** Core ML  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Information about a model, primarily the input and output format for each feature the model expects, and optional metadata.

## Declaration

```objectivec
@interface MLModelDescription : NSObject
```

## Topics

### Accessing feature descriptions

- [stateDescriptionsByName](mlmodeldescription/statedescriptionsbyname.md): Description of the state features.
- [inputDescriptionsByName](mlmodeldescription/inputdescriptionsbyname.md): A dictionary of input feature descriptions, which the model keys by the input’s name.
- [outputDescriptionsByName](mlmodeldescription/outputdescriptionsbyname.md): A dictionary of output feature descriptions, which the model keys by the output’s name.
- [MLFeatureDescription](mlfeaturedescription.md): The name, type, and constraints of an input or output feature.

### Accessing metadata

- [classLabels](mlmodeldescription/classlabels.md): An array of labels, which can be either strings or a numbers, for classifier models.
- [metadata](mlmodeldescription/metadata.md): A dictionary of the model’s creation information, such as its description, author, version, and license.
- [MLModelMetadataKey](mlmodelmetadatakey.md): The set of keys the model uses to store values in its metadata dictionary.

### Accessing prediction names

- [predictedFeatureName](mlmodeldescription/predictedfeaturename.md): The name of the primary prediction feature output description.
- [predictedProbabilitiesName](mlmodeldescription/predictedprobabilitiesname.md): The name of the feature output description for all probabilities of a prediction.

### Accessing update descriptions

- [isUpdatable](mlmodeldescription/isupdatable.md): A Boolean value that indicates whether you can update the model with additional training.
- [trainingInputDescriptionsByName](mlmodeldescription/traininginputdescriptionsbyname.md): A dictionary of the training input feature descriptions, which the model keys by the input’s name.
- [parameterDescriptionsByKey](mlmodeldescription/parameterdescriptionsbykey.md): A dictionary of the descriptions for the model’s parameters.
- [MLParameterDescription](mlparameterdescription.md): A description of a model parameter that includes a default value and a constraint, if applicable.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Inspecting a model

- [availableComputeDevices](mlmodel/availablecomputedevices-42uzt.md): The list of available compute devices that the model’s prediction can use.
- [configuration](mlmodel/configuration.md): The configuration of the model set during initialization.
- [modelDescription](mlmodel/modeldescription.md): Model information you use at runtime during development, which Xcode also displays in its Core ML model editor view.
- [parameterValueForKey:error:](mlmodel/parametervalue%28for_%29.md): Returns a model parameter value for a key.
- [MLParameterKey](mlparameterkey.md): The keys for the parameter dictionary in a model configuration or a model update context.
