> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreml/mlmodeldescription/traininginputdescriptionsbyname

# trainingInputDescriptionsByName (Swift)

**Framework:** Core ML  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

A dictionary of the training input feature descriptions, which the model keys by the input’s name.

## Declaration

```swift
var trainingInputDescriptionsByName: [String : MLFeatureDescription] { get }
```

## See Also

### Accessing update descriptions

- [isUpdatable](isupdatable.md): A Boolean value that indicates whether you can update the model with additional training.
- [parameterDescriptionsByKey](parameterdescriptionsbykey.md): A dictionary of the descriptions for the model’s parameters.
- [MLParameterDescription](../mlparameterdescription.md): A description of a model parameter that includes a default value and a constraint, if applicable.

# trainingInputDescriptionsByName (Objective-C)

**Framework:** Core ML  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

A dictionary of the training input feature descriptions, which the model keys by the input’s name.

## Declaration

```objectivec
@property (nonatomic, readonly) NSDictionary<NSString *,MLFeatureDescription *> * trainingInputDescriptionsByName;
```

## See Also

### Accessing update descriptions

- [isUpdatable](isupdatable.md): A Boolean value that indicates whether you can update the model with additional training.
- [parameterDescriptionsByKey](parameterdescriptionsbykey.md): A dictionary of the descriptions for the model’s parameters.
- [MLParameterDescription](../mlparameterdescription.md): A description of a model parameter that includes a default value and a constraint, if applicable.
