> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/auparametertree/createtree(withchildren:)](https://developer.apple.com/documentation/audiotoolbox/auparametertree/createtree(withchildren:))

# createTree(withChildren:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Creates a parameter tree object.

## Declaration

```swift
class func createTree(withChildren children: [AUParameterNode]) -> AUParameterTree
```

## Parameters

- `children`: The tree’s top-level children nodes.

<a id="return-value"></a>

## Return Value

A newly-initialized parameter tree object.

## See Also

### Related Documentation

- [AUParameterTree](../auparametertree.md): An object that represents a top-level group node that contains all of an audio unit’s parameters.

### Audio Unit Implementations

- [createParameter(withIdentifier:name:address:min:max:unit:unitName:flags:valueStrings:dependentParameters:)](createparameter%28withidentifier_name_address_min_max_unit_unitname_flags_valuestrings_dependentparameters_%29.md): Creates a single parameter object.
- [createGroup(withIdentifier:name:children:)](creategroup%28withidentifier_name_children_%29.md): Creates a parameter group object.
- [createGroupTemplate(\_:)](creategrouptemplate%28__%29.md): Creates a template group which may be used as a prototype for further group instances.
- [createGroup(fromTemplate:identifier:name:addressOffset:)](creategroup%28fromtemplate_identifier_name_addressoffset_%29.md): Initializes a group as a copied instance of a template group.

# createTreeWithChildren: (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Creates a parameter tree object.

## Declaration

```objectivec
+ (AUParameterTree *) createTreeWithChildren:(NSArray<AUParameterNode *> *) children;
```

## Parameters

- `children`: The tree’s top-level children nodes.

<a id="return-value"></a>

## Return Value

A newly-initialized parameter tree object.

## See Also

### Related Documentation

- [AUParameterTree](../auparametertree.md): An object that represents a top-level group node that contains all of an audio unit’s parameters.

### Audio Unit Implementations

- [createParameterWithIdentifier:name:address:min:max:unit:unitName:flags:valueStrings:dependentParameters:](createparameter%28withidentifier_name_address_min_max_unit_unitname_flags_valuestrings_dependentparameters_%29.md): Creates a single parameter object.
- [createGroupWithIdentifier:name:children:](creategroup%28withidentifier_name_children_%29.md): Creates a parameter group object.
- [createGroupTemplate:](creategrouptemplate%28__%29.md): Creates a template group which may be used as a prototype for further group instances.
- [createGroupFromTemplate:identifier:name:addressOffset:](creategroup%28fromtemplate_identifier_name_addressoffset_%29.md): Initializes a group as a copied instance of a template group.
