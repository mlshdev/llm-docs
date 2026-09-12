> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlmodel/modeldescription](https://developer.apple.com/documentation/coreml/mlmodel/modeldescription)

# modelDescription (Swift)

**Framework:** Core ML  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Model information you use at runtime during development, which Xcode also displays in its Core ML model editor view.

## Declaration

```swift
var modelDescription: MLModelDescription { get }
```

## See Also

### Inspecting a model

- [availableComputeDevices](availablecomputedevices-6klyt.md): The list of available compute devices that the model’s prediction methods use.
- [configuration](configuration.md): The configuration of the model set during initialization.
- [MLModelDescription](../mlmodeldescription.md): Information about a model, primarily the input and output format for each feature the model expects, and optional metadata.
- [parameterValue(for:)](parametervalue%28for_%29.md): Returns a model parameter value for a key.
- [MLParameterKey](../mlparameterkey.md): The keys for the parameter dictionary in a model configuration or a model update context.

# modelDescription (Objective-C)

**Framework:** Core ML  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Model information you use at runtime during development, which Xcode also displays in its Core ML model editor view.

## Declaration

```objectivec
@property (nonatomic, readonly) MLModelDescription * modelDescription;
```

## See Also

### Inspecting a model

- [availableComputeDevices](availablecomputedevices-42uzt.md): The list of available compute devices that the model’s prediction can use.
- [configuration](configuration.md): The configuration of the model set during initialization.
- [MLModelDescription](../mlmodeldescription.md): Information about a model, primarily the input and output format for each feature the model expects, and optional metadata.
- [parameterValueForKey:error:](parametervalue%28for_%29.md): Returns a model parameter value for a key.
- [MLParameterKey](../mlparameterkey.md): The keys for the parameter dictionary in a model configuration or a model update context.
