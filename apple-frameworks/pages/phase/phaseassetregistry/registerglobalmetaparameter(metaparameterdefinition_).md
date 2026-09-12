> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phaseassetregistry/registerglobalmetaparameter(metaparameterdefinition:)](https://developer.apple.com/documentation/phase/phaseassetregistry/registerglobalmetaparameter(metaparameterdefinition:))

# registerGlobalMetaParameter(metaParameterDefinition:) (Swift)

**Framework:** PHASE  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Registers a global metaparameter with the asset registry.

## Declaration

```swift
func registerGlobalMetaParameter(metaParameterDefinition: PHASEMetaParameterDefinition) throws -> PHASEGlobalMetaParameterAsset
```

## Parameters

- `metaParameterDefinition`: A single parameter that controls the value of multiple parameters.

<a id="return-value"></a>

## Return Value

A global metaparameter object. If an error occurs, the function returns `nil`.

<a id="Discussion"></a>

## Discussion

Global metaparameters attach to any number of sound event assets. When an app adjusts a global metaparameter at runtime, the change propagates immediately to all the attached sound events.

> **Note**

>  Although you register a global metaparameter definition ([PHASEMetaParameterDefinition](../phasemetaparameterdefinition.md)) with this function, you receive a global metaparameter instance ([PHASEMetaParameter](../phasemetaparameter.md)) when you access the parameter by its [identifier](../phasemetaparameter/identifier.md) using the [globalMetaParameters](globalmetaparameters.md) dictionary.

## See Also

### Registering Global Metaparameters

- [globalMetaParameters](globalmetaparameters.md): A dictionary of metaparameters that all sound event assets share.

# registerGlobalMetaParameter:error: (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Registers a global metaparameter with the asset registry.

## Declaration

```objectivec
- (PHASEGlobalMetaParameterAsset *) registerGlobalMetaParameter:(PHASEMetaParameterDefinition *) metaParameterDefinition error:(NSError **) error;
```

## Parameters

- `metaParameterDefinition`: A single parameter that controls the value of multiple parameters.
- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

<a id="return-value"></a>

## Return Value

A global metaparameter object. If an error occurs, the function returns `nil`.

<a id="Discussion"></a>

## Discussion

Global metaparameters attach to any number of sound event assets. When an app adjusts a global metaparameter at runtime, the change propagates immediately to all the attached sound events.

> **Note**

>  Although you register a global metaparameter definition ([PHASEMetaParameterDefinition](../phasemetaparameterdefinition.md)) with this function, you receive a global metaparameter instance ([PHASEMetaParameter](../phasemetaparameter.md)) when you access the parameter by its [identifier](../phasemetaparameter/identifier.md) using the [globalMetaParameters](globalmetaparameters.md) dictionary.

## See Also

### Registering Global Metaparameters

- [globalMetaParameters](globalmetaparameters.md): A dictionary of metaparameters that all sound event assets share.
