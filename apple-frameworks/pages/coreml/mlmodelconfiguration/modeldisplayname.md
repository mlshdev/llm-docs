> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlmodelconfiguration/modeldisplayname](https://developer.apple.com/documentation/coreml/mlmodelconfiguration/modeldisplayname)

# modelDisplayName (Swift)

**Framework:** Core ML  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A human readable name of a model for display purposes.

## Declaration

```swift
var modelDisplayName: String? { get set }
```

## See Also

### Configuring model parameters

- [functionName](functionname.md): Function name that `MLModel` will use.
- [parameters](parameters.md): A dictionary of configuration settings your app can override when loading a model.
- [MLParameterKey](../mlparameterkey.md): The keys for the parameter dictionary in a model configuration or a model update context.

# modelDisplayName (Objective-C)

**Framework:** Core ML  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A human readable name of a model for display purposes.

## Declaration

```objectivec
@property (copy, readwrite, nullable) NSString * modelDisplayName;
```

## See Also

### Configuring model parameters

- [functionName](functionname.md): Function name that `MLModel` will use.
- [parameters](parameters.md): A dictionary of configuration settings your app can override when loading a model.
- [MLParameterKey](../mlparameterkey.md): The keys for the parameter dictionary in a model configuration or a model update context.
