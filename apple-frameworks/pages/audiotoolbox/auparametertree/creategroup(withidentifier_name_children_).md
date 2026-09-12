> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/auparametertree/creategroup(withidentifier:name:children:)](https://developer.apple.com/documentation/audiotoolbox/auparametertree/creategroup(withidentifier:name:children:))

# createGroup(withIdentifier:name:children:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Creates a parameter group object.

## Declaration

```swift
class func createGroup(withIdentifier identifier: String, name: String, children: [AUParameterNode]) -> AUParameterGroup
```

## Parameters

- `identifier`: A non-localized, persistent identifier for the group.
- `name`: A localized display name for the group.
- `children`: The group’s child nodes.

<a id="return-value"></a>

## Return Value

A newly-initialized parameter group object.

## See Also

### Related Documentation

- [AUParameterGroup](../auparametergroup.md): A parameter group object represents a group of related audio unit parameters.

### Audio Unit Implementations

- [createParameter(withIdentifier:name:address:min:max:unit:unitName:flags:valueStrings:dependentParameters:)](createparameter%28withidentifier_name_address_min_max_unit_unitname_flags_valuestrings_dependentparameters_%29.md): Creates a single parameter object.
- [createGroupTemplate(\_:)](creategrouptemplate%28__%29.md): Creates a template group which may be used as a prototype for further group instances.
- [createGroup(fromTemplate:identifier:name:addressOffset:)](creategroup%28fromtemplate_identifier_name_addressoffset_%29.md): Initializes a group as a copied instance of a template group.
- [createTree(withChildren:)](createtree%28withchildren_%29.md): Creates a parameter tree object.

# createGroupWithIdentifier:name:children: (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Creates a parameter group object.

## Declaration

```objectivec
+ (AUParameterGroup *) createGroupWithIdentifier:(NSString *) identifier name:(NSString *) name children:(NSArray<AUParameterNode *> *) children;
```

## Parameters

- `identifier`: A non-localized, persistent identifier for the group.
- `name`: A localized display name for the group.
- `children`: The group’s child nodes.

<a id="return-value"></a>

## Return Value

A newly-initialized parameter group object.

## See Also

### Related Documentation

- [AUParameterGroup](../auparametergroup.md): A parameter group object represents a group of related audio unit parameters.

### Audio Unit Implementations

- [createParameterWithIdentifier:name:address:min:max:unit:unitName:flags:valueStrings:dependentParameters:](createparameter%28withidentifier_name_address_min_max_unit_unitname_flags_valuestrings_dependentparameters_%29.md): Creates a single parameter object.
- [createGroupTemplate:](creategrouptemplate%28__%29.md): Creates a template group which may be used as a prototype for further group instances.
- [createGroupFromTemplate:identifier:name:addressOffset:](creategroup%28fromtemplate_identifier_name_addressoffset_%29.md): Initializes a group as a copied instance of a template group.
- [createTreeWithChildren:](createtree%28withchildren_%29.md): Creates a parameter tree object.
