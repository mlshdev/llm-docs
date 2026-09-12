> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlmodel/parametervalue(for:)](https://developer.apple.com/documentation/coreml/mlmodel/parametervalue(for:))

# parameterValue(for:) (Swift)

**Framework:** Core ML  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Returns a model parameter value for a key.

## Declaration

```swift
func parameterValue(for key: MLParameterKey) throws -> Any
```

## Parameters

- `key`: The key to a model parameter value.

## See Also

### Inspecting a model

- [availableComputeDevices](availablecomputedevices-6klyt.md): The list of available compute devices that the model’s prediction methods use.
- [configuration](configuration.md): The configuration of the model set during initialization.
- [modelDescription](modeldescription.md): Model information you use at runtime during development, which Xcode also displays in its Core ML model editor view.
- [MLModelDescription](../mlmodeldescription.md): Information about a model, primarily the input and output format for each feature the model expects, and optional metadata.
- [MLParameterKey](../mlparameterkey.md): The keys for the parameter dictionary in a model configuration or a model update context.

# parameterValueForKey:error: (Objective-C)

**Framework:** Core ML  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Returns a model parameter value for a key.

## Declaration

```objectivec
- (id) parameterValueForKey:(MLParameterKey *) key error:(NSError **) error;
```

## Parameters

- `key`: The key to a model parameter value.
- `error`: On return in Objective-C, if an error occurs, a pointer to an error information instance; otherwise `nil`.

## See Also

### Inspecting a model

- [availableComputeDevices](availablecomputedevices-42uzt.md): The list of available compute devices that the model’s prediction can use.
- [configuration](configuration.md): The configuration of the model set during initialization.
- [modelDescription](modeldescription.md): Model information you use at runtime during development, which Xcode also displays in its Core ML model editor view.
- [MLModelDescription](../mlmodeldescription.md): Information about a model, primarily the input and output format for each feature the model expects, and optional metadata.
- [MLParameterKey](../mlparameterkey.md): The keys for the parameter dictionary in a model configuration or a model update context.
