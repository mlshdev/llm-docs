> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/phase/phaseswitchnodedefinition/init(switchmetaparameterdefinition:identifier:)

# init(switchMetaParameterDefinition:identifier:) (Swift)

**Framework:** PHASE  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Creates a named node that invokes a child node based on the value of the given parameter.

## Declaration

```swift
convenience init(switchMetaParameterDefinition: PHASEStringMetaParameterDefinition, identifier: String)
```

## Parameters

- `switchMetaParameterDefinition`: A string meta parameter that specifies the child node identifier to pass invocation on to.
- `identifier`: A unique name for the switch node.

## See Also

### Creating a Node

- [init(switchMetaParameterDefinition:)](init%28switchmetaparameterdefinition_%29.md): Creates a node that invokes a child node based on the value of the given parameter.

# initWithSwitchMetaParameterDefinition:identifier: (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Creates a named node that invokes a child node based on the value of the given parameter.

## Declaration

```objectivec
- (instancetype) initWithSwitchMetaParameterDefinition:(PHASEStringMetaParameterDefinition *) switchMetaParameterDefinition identifier:(NSString *) identifier;
```

## Parameters

- `switchMetaParameterDefinition`: A string meta parameter that specifies the child node identifier to pass invocation on to.
- `identifier`: A unique name for the switch node.

## See Also

### Creating a Node

- [initWithSwitchMetaParameterDefinition:](init%28switchmetaparameterdefinition_%29.md): Creates a node that invokes a child node based on the value of the given parameter.
