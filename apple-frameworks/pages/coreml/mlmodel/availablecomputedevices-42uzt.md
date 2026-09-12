> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlmodel/availablecomputedevices-42uzt](https://developer.apple.com/documentation/coreml/mlmodel/availablecomputedevices-42uzt)

# availableComputeDevices

**Interface language:** Objective-C

**Framework:** Core ML  
**Kind:** Type Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The list of available compute devices that the model’s prediction can use.

## Declaration

```objectivec
@property (class, nonatomic, copy, readonly) NSArray<id<MLComputeDeviceProtocol>> * availableComputeDevices;
```

## See Also

### Inspecting a model

- [configuration](configuration.md): The configuration of the model set during initialization.
- [modelDescription](modeldescription.md): Model information you use at runtime during development, which Xcode also displays in its Core ML model editor view.
- [MLModelDescription](../mlmodeldescription.md): Information about a model, primarily the input and output format for each feature the model expects, and optional metadata.
- [parameterValueForKey:error:](parametervalue%28for_%29.md): Returns a model parameter value for a key.
- [MLParameterKey](../mlparameterkey.md): The keys for the parameter dictionary in a model configuration or a model update context.
