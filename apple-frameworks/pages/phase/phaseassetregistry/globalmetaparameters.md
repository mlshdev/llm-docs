> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phaseassetregistry/globalmetaparameters](https://developer.apple.com/documentation/phase/phaseassetregistry/globalmetaparameters)

# globalMetaParameters (Swift)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

A dictionary of metaparameters that all sound event assets share.

## Declaration

```swift
var globalMetaParameters: [String : PHASEMetaParameter] { get }
```

<a id="Discussion"></a>

## Discussion

When you change a value for a metaparameter in this dictionary, every sound event attached to the metaparameter observes the change. The dictionary key is the [identifier](../phasemetaparameter/identifier.md) of the [PHASEMetaParameterDefinition](../phasemetaparameterdefinition.md) you pass into [registerGlobalMetaParameter(metaParameterDefinition:)](registerglobalmetaparameter%28metaparameterdefinition_%29.md).

> **Tip**

>  To adjust a value for a single sound event, access the metaparameter through the [metaParameters](../phasesoundevent/metaparameters.md) property instead.

## See Also

### Registering Global Metaparameters

- [registerGlobalMetaParameter(metaParameterDefinition:)](registerglobalmetaparameter%28metaparameterdefinition_%29.md): Registers a global metaparameter with the asset registry.

# globalMetaParameters (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

A dictionary of metaparameters that all sound event assets share.

## Declaration

```objectivec
@property (atomic, copy, readonly) NSDictionary<NSString *,PHASEMetaParameter *> * globalMetaParameters;
```

<a id="Discussion"></a>

## Discussion

When you change a value for a metaparameter in this dictionary, every sound event attached to the metaparameter observes the change. The dictionary key is the [identifier](../phasemetaparameter/identifier.md) of the [PHASEMetaParameterDefinition](../phasemetaparameterdefinition.md) you pass into [registerGlobalMetaParameter:error:](registerglobalmetaparameter%28metaparameterdefinition_%29.md).

> **Tip**

>  To adjust a value for a single sound event, access the metaparameter through the [metaParameters](../phasesoundevent/metaparameters.md) property instead.

## See Also

### Registering Global Metaparameters

- [registerGlobalMetaParameter:error:](registerglobalmetaparameter%28metaparameterdefinition_%29.md): Registers a global metaparameter with the asset registry.
