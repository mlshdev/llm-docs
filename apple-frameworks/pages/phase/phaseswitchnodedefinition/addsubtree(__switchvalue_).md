> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/phase/phaseswitchnodedefinition/addsubtree(_:switchvalue:)

# addSubtree(\_:switchValue:) (Swift)

**Framework:** PHASE  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Adds a child node with the given switch value.

## Declaration

```swift
func addSubtree(_ subtree: PHASESoundEventNodeDefinition, switchValue: String)
```

## Parameters

- `subtree`: The child node, which itself can contain a hierarchical tree of descendent nodes.
- `switchValue`: The meta parameter value that invokes the `subtree` child node.

## See Also

### Managing Child Nodes

- [switchMetaParameterDefinition](switchmetaparameterdefinition.md): The meta parameter that holds the name of the child node to invoke.

# addSubtree:switchValue: (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Adds a child node with the given switch value.

## Declaration

```objectivec
- (void) addSubtree:(PHASESoundEventNodeDefinition *) subtree switchValue:(NSString *) switchValue;
```

## Parameters

- `subtree`: The child node, which itself can contain a hierarchical tree of descendent nodes.
- `switchValue`: The meta parameter value that invokes the `subtree` child node.

## See Also

### Managing Child Nodes

- [switchMetaParameterDefinition](switchmetaparameterdefinition.md): The meta parameter that holds the name of the child node to invoke.
