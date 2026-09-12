> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/auparametertree/creategroup(fromtemplate:identifier:name:addressoffset:)](https://developer.apple.com/documentation/audiotoolbox/auparametertree/creategroup(fromtemplate:identifier:name:addressoffset:))

# createGroup(fromTemplate:identifier:name:addressOffset:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Initializes a group as a copied instance of a template group.

## Declaration

```swift
class func createGroup(fromTemplate templateGroup: AUParameterGroup, identifier: String, name: String, addressOffset: AUParameterAddress) -> AUParameterGroup
```

## Parameters

- `templateGroup`: A group to be used as a template and largely copied from.
- `identifier`: A non-localized, persistent identifier for the new group.
- `name`: A localized display name for the new group.
- `addressOffset`: The address offset for the new group’s parameters, with respect to the template group.

<a id="return-value"></a>

## Return Value

A newly-initialized parameter group object.

## See Also

### Audio Unit Implementations

- [createParameter(withIdentifier:name:address:min:max:unit:unitName:flags:valueStrings:dependentParameters:)](createparameter%28withidentifier_name_address_min_max_unit_unitname_flags_valuestrings_dependentparameters_%29.md): Creates a single parameter object.
- [createGroup(withIdentifier:name:children:)](creategroup%28withidentifier_name_children_%29.md): Creates a parameter group object.
- [createGroupTemplate(\_:)](creategrouptemplate%28__%29.md): Creates a template group which may be used as a prototype for further group instances.
- [createTree(withChildren:)](createtree%28withchildren_%29.md): Creates a parameter tree object.

# createGroupFromTemplate:identifier:name:addressOffset: (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Initializes a group as a copied instance of a template group.

## Declaration

```objectivec
+ (AUParameterGroup *) createGroupFromTemplate:(AUParameterGroup *) templateGroup identifier:(NSString *) identifier name:(NSString *) name addressOffset:(AUParameterAddress) addressOffset;
```

## Parameters

- `templateGroup`: A group to be used as a template and largely copied from.
- `identifier`: A non-localized, persistent identifier for the new group.
- `name`: A localized display name for the new group.
- `addressOffset`: The address offset for the new group’s parameters, with respect to the template group.

<a id="return-value"></a>

## Return Value

A newly-initialized parameter group object.

## See Also

### Audio Unit Implementations

- [createParameterWithIdentifier:name:address:min:max:unit:unitName:flags:valueStrings:dependentParameters:](createparameter%28withidentifier_name_address_min_max_unit_unitname_flags_valuestrings_dependentparameters_%29.md): Creates a single parameter object.
- [createGroupWithIdentifier:name:children:](creategroup%28withidentifier_name_children_%29.md): Creates a parameter group object.
- [createGroupTemplate:](creategrouptemplate%28__%29.md): Creates a template group which may be used as a prototype for further group instances.
- [createTreeWithChildren:](createtree%28withchildren_%29.md): Creates a parameter tree object.
