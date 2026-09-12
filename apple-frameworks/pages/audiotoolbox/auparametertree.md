> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/auparametertree](https://developer.apple.com/documentation/audiotoolbox/auparametertree)

# AUParameterTree (Swift)

**Framework:** Audio Toolbox  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

An object that represents a top-level group node that contains all of an audio unit’s parameters.

## Declaration

```swift
class AUParameterTree
```

<a id="overview"></a>

## Overview

An audio unit’s parameters are organized into a tree containing groups and parameters (groups may be nested).

The parameter tree is KVO-compliant. An audio unit may choose to dynamically rearrange the tree; when doing so, it must issue a KVO notification on the audio unit’s [parameterTree](auaudiounit/parametertree.md) property.

## Topics

### Obtaining Tree Parameters

- [parameter(withAddress:)](auparametertree/parameter%28withaddress_%29.md): Searches the tree for a parameter with a specific address.
- [parameter(withID:scope:element:)](auparametertree/parameter%28withid_scope_element_%29.md): Searches the tree for a specific version 2 audio unit parameter.

### Audio Unit Implementations

These methods are only of interest to audio unit subclasses.

- [createParameter(withIdentifier:name:address:min:max:unit:unitName:flags:valueStrings:dependentParameters:)](auparametertree/createparameter%28withidentifier_name_address_min_max_unit_unitname_flags_valuestrings_dependentparameters_%29.md): Creates a single parameter object.
- [createGroup(withIdentifier:name:children:)](auparametertree/creategroup%28withidentifier_name_children_%29.md): Creates a parameter group object.
- [createGroupTemplate(\_:)](auparametertree/creategrouptemplate%28__%29.md): Creates a template group which may be used as a prototype for further group instances.
- [createGroup(fromTemplate:identifier:name:addressOffset:)](auparametertree/creategroup%28fromtemplate_identifier_name_addressoffset_%29.md): Initializes a group as a copied instance of a template group.
- [createTree(withChildren:)](auparametertree/createtree%28withchildren_%29.md): Creates a parameter tree object.

## Relationships

### Inherits From

- [AUParameterGroup](auparametergroup.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Parameters

- [AUParameter](auparameter.md): An object that represents a single audio unit parameter.
- [AUParameterGroup](auparametergroup.md): A parameter group object represents a group of related audio unit parameters.
- [AUParameterNode](auparameternode.md): An object that represents a node in an audio unit’s parameter tree.

# AUParameterTree (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

An object that represents a top-level group node that contains all of an audio unit’s parameters.

## Declaration

```objectivec
@interface AUParameterTree : AUParameterGroup
```

<a id="overview"></a>

## Overview

An audio unit’s parameters are organized into a tree containing groups and parameters (groups may be nested).

The parameter tree is KVO-compliant. An audio unit may choose to dynamically rearrange the tree; when doing so, it must issue a KVO notification on the audio unit’s [parameterTree](auaudiounit/parametertree.md) property.

## Topics

### Obtaining Tree Parameters

- [parameterWithAddress:](auparametertree/parameter%28withaddress_%29.md): Searches the tree for a parameter with a specific address.
- [parameterWithID:scope:element:](auparametertree/parameter%28withid_scope_element_%29.md): Searches the tree for a specific version 2 audio unit parameter.

### Audio Unit Implementations

These methods are only of interest to audio unit subclasses.

- [createParameterWithIdentifier:name:address:min:max:unit:unitName:flags:valueStrings:dependentParameters:](auparametertree/createparameter%28withidentifier_name_address_min_max_unit_unitname_flags_valuestrings_dependentparameters_%29.md): Creates a single parameter object.
- [createGroupWithIdentifier:name:children:](auparametertree/creategroup%28withidentifier_name_children_%29.md): Creates a parameter group object.
- [createGroupTemplate:](auparametertree/creategrouptemplate%28__%29.md): Creates a template group which may be used as a prototype for further group instances.
- [createGroupFromTemplate:identifier:name:addressOffset:](auparametertree/creategroup%28fromtemplate_identifier_name_addressoffset_%29.md): Initializes a group as a copied instance of a template group.
- [createTreeWithChildren:](auparametertree/createtree%28withchildren_%29.md): Creates a parameter tree object.

## Relationships

### Inherits From

- [AUParameterGroup](auparametergroup.md)

### Conforms To

- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Parameters

- [AUParameter](auparameter.md): An object that represents a single audio unit parameter.
- [AUParameterGroup](auparametergroup.md): A parameter group object represents a group of related audio unit parameters.
- [AUParameterNode](auparameternode.md): An object that represents a node in an audio unit’s parameter tree.
