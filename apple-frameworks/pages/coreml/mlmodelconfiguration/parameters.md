> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlmodelconfiguration/parameters](https://developer.apple.com/documentation/coreml/mlmodelconfiguration/parameters)

# parameters (Swift)

**Framework:** Core ML  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A dictionary of configuration settings your app can override when loading a model.

## Declaration

```swift
var parameters: [MLParameterKey : Any]? { get set }
```

## See Also

### Configuring model parameters

- [functionName](functionname.md): Function name that `MLModel` will use.
- [modelDisplayName](modeldisplayname.md): A human readable name of a model for display purposes.
- [MLParameterKey](../mlparameterkey.md): The keys for the parameter dictionary in a model configuration or a model update context.

# parameters (Objective-C)

**Framework:** Core ML  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A dictionary of configuration settings your app can override when loading a model.

## Declaration

```objectivec
@property (nonatomic, readwrite, nullable) NSDictionary<MLParameterKey *,id> * parameters;
```

## See Also

### Configuring model parameters

- [functionName](functionname.md): Function name that `MLModel` will use.
- [modelDisplayName](modeldisplayname.md): A human readable name of a model for display purposes.
- [MLParameterKey](../mlparameterkey.md): The keys for the parameter dictionary in a model configuration or a model update context.
