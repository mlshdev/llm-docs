> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/auparameter](https://developer.apple.com/documentation/audiotoolbox/auparameter)

# AUParameter (Swift)

**Framework:** Audio Toolbox  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

An object that represents a single audio unit parameter.

## Declaration

```swift
class AUParameter
```

## Topics

### Querying Parameter Properties

- [minValue](auparameter/minvalue.md): The parameter’s minimum value.
- [maxValue](auparameter/maxvalue.md): The parameter’s maximum value.
- [unit](auparameter/unit.md): The parameter’s unit of measurement.
- [unitName](auparameter/unitname.md): The parameter’s localized unit name.
- [flags](auparameter/flags.md): The parameter’s characteristic details.
- [address](auparameter/address.md): The parameter’s address.
- [valueStrings](auparameter/valuestrings.md): The parameter’s localized value strings.
- [dependentParameters](auparameter/dependentparameters.md): Any other parameter’s whose values may change as a side effect of this parameter’s value changing.

### Managing Parameter Values

- [value](auparameter/value.md): The parameter’s current value.
- [setValue(\_:originator:)](auparameter/setvalue%28__originator_%29.md): Sets the parameter’s value, avoiding redundant notifications to the originator.
- [setValue(\_:originator:atHostTime:)](auparameter/setvalue%28__originator_athosttime_%29.md): Sets the parameter’s value, preserving the host time of the gesture that initiated the change.
- [setValue(\_:originator:atHostTime:eventType:)](auparameter/setvalue%28__originator_athosttime_eventtype_%29.md)
- [string(fromValue:)](auparameter/string%28fromvalue_%29.md): Gets the string representation of a parameter value.
- [value(from:)](auparameter/value%28from_%29.md): Converts a string into a parameter value.

### Initializers

- [init(coder:)](auparameter/init%28coder_%29.md)

## Relationships

### Inherits From

- [AUParameterNode](auparameternode.md)

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

- [AUParameterGroup](auparametergroup.md): A parameter group object represents a group of related audio unit parameters.
- [AUParameterNode](auparameternode.md): An object that represents a node in an audio unit’s parameter tree.
- [AUParameterTree](auparametertree.md): An object that represents a top-level group node that contains all of an audio unit’s parameters.

# AUParameter (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

An object that represents a single audio unit parameter.

## Declaration

```objectivec
@interface AUParameter : AUParameterNode
```

## Topics

### Querying Parameter Properties

- [minValue](auparameter/minvalue.md): The parameter’s minimum value.
- [maxValue](auparameter/maxvalue.md): The parameter’s maximum value.
- [unit](auparameter/unit.md): The parameter’s unit of measurement.
- [unitName](auparameter/unitname.md): The parameter’s localized unit name.
- [flags](auparameter/flags.md): The parameter’s characteristic details.
- [address](auparameter/address.md): The parameter’s address.
- [valueStrings](auparameter/valuestrings.md): The parameter’s localized value strings.
- [dependentParameters](auparameter/dependentparameters.md): Any other parameter’s whose values may change as a side effect of this parameter’s value changing.

### Managing Parameter Values

- [value](auparameter/value.md): The parameter’s current value.
- [setValue:originator:](auparameter/setvalue%28__originator_%29.md): Sets the parameter’s value, avoiding redundant notifications to the originator.
- [setValue:originator:atHostTime:](auparameter/setvalue%28__originator_athosttime_%29.md): Sets the parameter’s value, preserving the host time of the gesture that initiated the change.
- [setValue:originator:atHostTime:eventType:](auparameter/setvalue%28__originator_athosttime_eventtype_%29.md)
- [stringFromValue:](auparameter/string%28fromvalue_%29.md): Gets the string representation of a parameter value.
- [valueFromString:](auparameter/value%28from_%29.md): Converts a string into a parameter value.

## Relationships

### Inherits From

- [AUParameterNode](auparameternode.md)

### Conforms To

- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Parameters

- [AUParameterGroup](auparametergroup.md): A parameter group object represents a group of related audio unit parameters.
- [AUParameterNode](auparameternode.md): An object that represents a node in an audio unit’s parameter tree.
- [AUParameterTree](auparametertree.md): An object that represents a top-level group node that contains all of an audio unit’s parameters.
