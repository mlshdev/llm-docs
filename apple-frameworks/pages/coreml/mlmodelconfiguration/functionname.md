> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlmodelconfiguration/functionname](https://developer.apple.com/documentation/coreml/mlmodelconfiguration/functionname)

# functionName (Swift)

**Framework:** Core ML  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Function name that `MLModel` will use.

## Declaration

```swift
var functionName: String? { get set }
```

<a id="discussion"></a>

## Discussion

Some model types (e.g. ML Program) supports multiple functions in a model asset, where each `MLModel` instance is associated with a particular function.

Use `MLModelAsset` to get the list of available functions. Use `nil` to use a default function.

```swift
let configuration = MLModelConfiguration()
configuration.functionName = "my_function"
```

## See Also

### Configuring model parameters

- [modelDisplayName](modeldisplayname.md): A human readable name of a model for display purposes.
- [parameters](parameters.md): A dictionary of configuration settings your app can override when loading a model.
- [MLParameterKey](../mlparameterkey.md): The keys for the parameter dictionary in a model configuration or a model update context.

# functionName (Objective-C)

**Framework:** Core ML  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Function name that `MLModel` will use.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) NSString * functionName;
```

<a id="discussion"></a>

## Discussion

Some model types (e.g. ML Program) supports multiple functions in a model asset, where each `MLModel` instance is associated with a particular function.

Use `MLModelAsset` to get the list of available functions. Use `nil` to use a default function.

```swift
let configuration = MLModelConfiguration()
configuration.functionName = "my_function"
```

## See Also

### Configuring model parameters

- [modelDisplayName](modeldisplayname.md): A human readable name of a model for display purposes.
- [parameters](parameters.md): A dictionary of configuration settings your app can override when loading a model.
- [MLParameterKey](../mlparameterkey.md): The keys for the parameter dictionary in a model configuration or a model update context.
