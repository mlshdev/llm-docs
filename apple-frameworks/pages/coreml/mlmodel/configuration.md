> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlmodel/configuration](https://developer.apple.com/documentation/coreml/mlmodel/configuration)

# configuration (Swift)

**Framework:** Core ML  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

The configuration of the model set during initialization.

## Declaration

```swift
var configuration: MLModelConfiguration { get }
```

## See Also

### Inspecting a model

- [availableComputeDevices](availablecomputedevices-6klyt.md): The list of available compute devices that the model’s prediction methods use.
- [modelDescription](modeldescription.md): Model information you use at runtime during development, which Xcode also displays in its Core ML model editor view.
- [MLModelDescription](../mlmodeldescription.md): Information about a model, primarily the input and output format for each feature the model expects, and optional metadata.
- [parameterValue(for:)](parametervalue%28for_%29.md): Returns a model parameter value for a key.
- [MLParameterKey](../mlparameterkey.md): The keys for the parameter dictionary in a model configuration or a model update context.

# configuration (Objective-C)

**Framework:** Core ML  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

The configuration of the model set during initialization.

## Declaration

```objectivec
@property (nonatomic, readonly) MLModelConfiguration * configuration;
```

## See Also

### Inspecting a model

- [availableComputeDevices](availablecomputedevices-42uzt.md): The list of available compute devices that the model’s prediction can use.
- [modelDescription](modeldescription.md): Model information you use at runtime during development, which Xcode also displays in its Core ML model editor view.
- [MLModelDescription](../mlmodeldescription.md): Information about a model, primarily the input and output format for each feature the model expects, and optional metadata.
- [parameterValueForKey:error:](parametervalue%28for_%29.md): Returns a model parameter value for a key.
- [MLParameterKey](../mlparameterkey.md): The keys for the parameter dictionary in a model configuration or a model update context.
