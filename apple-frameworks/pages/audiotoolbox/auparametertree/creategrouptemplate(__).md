> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/auparametertree/creategrouptemplate(_:)](https://developer.apple.com/documentation/audiotoolbox/auparametertree/creategrouptemplate(_:))

# createGroupTemplate(\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Creates a template group which may be used as a prototype for further group instances.

## Declaration

```swift
class func createGroupTemplate(_ children: [AUParameterNode]) -> AUParameterGroup
```

## Parameters

- `children`: The template group’s child nodes.

<a id="return-value"></a>

## Return Value

A newly-initialized parameter group template.

<a id="Discussion"></a>

## Discussion

Template groups provide a way to construct multiple instances of identical parameter groups, sharing certain immutable state between the instances.

Template groups may not appear in trees except at the root.

## See Also

### Audio Unit Implementations

- [createParameter(withIdentifier:name:address:min:max:unit:unitName:flags:valueStrings:dependentParameters:)](createparameter%28withidentifier_name_address_min_max_unit_unitname_flags_valuestrings_dependentparameters_%29.md): Creates a single parameter object.
- [createGroup(withIdentifier:name:children:)](creategroup%28withidentifier_name_children_%29.md): Creates a parameter group object.
- [createGroup(fromTemplate:identifier:name:addressOffset:)](creategroup%28fromtemplate_identifier_name_addressoffset_%29.md): Initializes a group as a copied instance of a template group.
- [createTree(withChildren:)](createtree%28withchildren_%29.md): Creates a parameter tree object.

# createGroupTemplate: (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Creates a template group which may be used as a prototype for further group instances.

## Declaration

```objectivec
+ (AUParameterGroup *) createGroupTemplate:(NSArray<AUParameterNode *> *) children;
```

## Parameters

- `children`: The template group’s child nodes.

<a id="return-value"></a>

## Return Value

A newly-initialized parameter group template.

<a id="Discussion"></a>

## Discussion

Template groups provide a way to construct multiple instances of identical parameter groups, sharing certain immutable state between the instances.

Template groups may not appear in trees except at the root.

## See Also

### Audio Unit Implementations

- [createParameterWithIdentifier:name:address:min:max:unit:unitName:flags:valueStrings:dependentParameters:](createparameter%28withidentifier_name_address_min_max_unit_unitname_flags_valuestrings_dependentparameters_%29.md): Creates a single parameter object.
- [createGroupWithIdentifier:name:children:](creategroup%28withidentifier_name_children_%29.md): Creates a parameter group object.
- [createGroupFromTemplate:identifier:name:addressOffset:](creategroup%28fromtemplate_identifier_name_addressoffset_%29.md): Initializes a group as a copied instance of a template group.
- [createTreeWithChildren:](createtree%28withchildren_%29.md): Creates a parameter tree object.
