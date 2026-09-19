> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/phase/phaseswitchnodedefinition/init(switchmetaparameterdefinition:)

# init(switchMetaParameterDefinition:) (Swift)

**Framework:** PHASE  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Creates a node that invokes a child node based on the value of the given parameter.

## Declaration

```swift
init(switchMetaParameterDefinition: PHASEStringMetaParameterDefinition)
```

## Parameters

- `switchMetaParameterDefinition`: A string meta parameter that specifies the child node identifier to pass invocation on to.

## See Also

### Creating a Node

- [init(switchMetaParameterDefinition:identifier:)](init%28switchmetaparameterdefinition_identifier_%29.md): Creates a named node that invokes a child node based on the value of the given parameter.

# initWithSwitchMetaParameterDefinition: (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Creates a node that invokes a child node based on the value of the given parameter.

## Declaration

```objectivec
- (instancetype) initWithSwitchMetaParameterDefinition:(PHASEStringMetaParameterDefinition *) switchMetaParameterDefinition;
```

## Parameters

- `switchMetaParameterDefinition`: A string meta parameter that specifies the child node identifier to pass invocation on to.

## See Also

### Creating a Node

- [initWithSwitchMetaParameterDefinition:identifier:](init%28switchmetaparameterdefinition_identifier_%29.md): Creates a named node that invokes a child node based on the value of the given parameter.
