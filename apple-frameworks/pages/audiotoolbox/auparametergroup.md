> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/auparametergroup](https://developer.apple.com/documentation/audiotoolbox/auparametergroup)

# AUParameterGroup (Swift)

**Framework:** Audio Toolbox  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A parameter group object represents a group of related audio unit parameters.

## Declaration

```swift
class AUParameterGroup
```

<a id="overview"></a>

## Overview

A parameter group is KVC-compliant for its children. For example, calling the parameter group’s [value(forKey:)](../objectivec/nsobject-swift.class/value%28forkey_%29.md) method, with a key value of *volume*, returns a child whose [identifier](auparameternode/identifier.md) value matches that key.

## Topics

### Obtaining Group Parameters

- [allParameters](auparametergroup/allparameters.md): Returns a flat array of all parameters in the group, including those in child groups.
- [children](auparametergroup/children.md): The group’s child nodes.

### Initializers

- [init(coder:)](auparametergroup/init%28coder_%29.md)

## Relationships

### Inherits From

- [AUParameterNode](auparameternode.md)

### Inherited By

- [AUParameterTree](auparametertree.md)

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
- [AUParameterNode](auparameternode.md): An object that represents a node in an audio unit’s parameter tree.
- [AUParameterTree](auparametertree.md): An object that represents a top-level group node that contains all of an audio unit’s parameters.

# AUParameterGroup (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A parameter group object represents a group of related audio unit parameters.

## Declaration

```objectivec
@interface AUParameterGroup : AUParameterNode
```

<a id="overview"></a>

## Overview

A parameter group is KVC-compliant for its children. For example, calling the parameter group’s [valueForKey:](../objectivec/nsobject-swift.class/value%28forkey_%29.md) method, with a key value of *volume*, returns a child whose [identifier](auparameternode/identifier.md) value matches that key.

## Topics

### Obtaining Group Parameters

- [allParameters](auparametergroup/allparameters.md): Returns a flat array of all parameters in the group, including those in child groups.
- [children](auparametergroup/children.md): The group’s child nodes.

## Relationships

### Inherits From

- [AUParameterNode](auparameternode.md)

### Inherited By

- [AUParameterTree](auparametertree.md)

### Conforms To

- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Parameters

- [AUParameter](auparameter.md): An object that represents a single audio unit parameter.
- [AUParameterNode](auparameternode.md): An object that represents a node in an audio unit’s parameter tree.
- [AUParameterTree](auparametertree.md): An object that represents a top-level group node that contains all of an audio unit’s parameters.
