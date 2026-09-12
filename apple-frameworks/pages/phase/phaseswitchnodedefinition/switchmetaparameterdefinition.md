> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phaseswitchnodedefinition/switchmetaparameterdefinition](https://developer.apple.com/documentation/phase/phaseswitchnodedefinition/switchmetaparameterdefinition)

# switchMetaParameterDefinition (Swift)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

The meta parameter that holds the name of the child node to invoke.

## Declaration

```swift
var switchMetaParameterDefinition: PHASEStringMetaParameterDefinition { get }
```

<a id="Discussion"></a>

## Discussion

The framework sets the value of this property to the [init(switchMetaParameterDefinition:)](init%28switchmetaparameterdefinition_%29.md) argument.

## See Also

### Managing Child Nodes

- [addSubtree(\_:switchValue:)](addsubtree%28__switchvalue_%29.md): Adds a child node with the given switch value.

# switchMetaParameterDefinition (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

The meta parameter that holds the name of the child node to invoke.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) PHASEStringMetaParameterDefinition * switchMetaParameterDefinition;
```

<a id="Discussion"></a>

## Discussion

The framework sets the value of this property to the [initWithSwitchMetaParameterDefinition:](init%28switchmetaparameterdefinition_%29.md) argument.

## See Also

### Managing Child Nodes

- [addSubtree:switchValue:](addsubtree%28__switchvalue_%29.md): Adds a child node with the given switch value.
