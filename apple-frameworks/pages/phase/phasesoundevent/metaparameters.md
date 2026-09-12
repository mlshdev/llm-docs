> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasesoundevent/metaparameters](https://developer.apple.com/documentation/phase/phasesoundevent/metaparameters)

# metaParameters (Swift)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

The object’s meta parameters.

## Declaration

```swift
var metaParameters: [String : PHASEMetaParameter] { get }
```

<a id="Discussion"></a>

## Discussion

Each meta parameter contained in this dictionary affects only the sound event instance when you change the parameter’s value at runtime. As a read-only dictionary, the framework sets the contents based on the parameter you pass into a node definition initializer, for example, [init(switchMetaParameterDefinition:)](../phaseswitchnodedefinition/init%28switchmetaparameterdefinition_%29.md). The dictionary key is the [identifier](../phasemetaparameter/identifier.md) of the source [PHASEMetaParameterDefinition](../phasemetaparameterdefinition.md).

> **Tip**

>  To propagate a metaparameter change to multiple sound events instead of just one, register the metaparameter globally by calling [registerGlobalMetaParameter(metaParameterDefinition:)](../phaseassetregistry/registerglobalmetaparameter%28metaparameterdefinition_%29.md). To change its value, access the metaparameter through the asset registry’s [globalMetaParameters](../phaseassetregistry/globalmetaparameters.md) dictionary instead.

## See Also

### Configuring Mixers and Metaparameters

- [mixers](mixers.md): Nodes in the event tree that control the volume of their child nodes.

# metaParameters (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

The object’s meta parameters.

## Declaration

```objectivec
@property (copy, readonly) NSDictionary<NSString *,PHASEMetaParameter *> * metaParameters;
```

<a id="Discussion"></a>

## Discussion

Each meta parameter contained in this dictionary affects only the sound event instance when you change the parameter’s value at runtime. As a read-only dictionary, the framework sets the contents based on the parameter you pass into a node definition initializer, for example, [initWithSwitchMetaParameterDefinition:](../phaseswitchnodedefinition/init%28switchmetaparameterdefinition_%29.md). The dictionary key is the [identifier](../phasemetaparameter/identifier.md) of the source [PHASEMetaParameterDefinition](../phasemetaparameterdefinition.md).

> **Tip**

>  To propagate a metaparameter change to multiple sound events instead of just one, register the metaparameter globally by calling [registerGlobalMetaParameter:error:](../phaseassetregistry/registerglobalmetaparameter%28metaparameterdefinition_%29.md). To change its value, access the metaparameter through the asset registry’s [globalMetaParameters](../phaseassetregistry/globalmetaparameters.md) dictionary instead.

## See Also

### Configuring Mixers and Metaparameters

- [mixers](mixers.md): Nodes in the event tree that control the volume of their child nodes.
