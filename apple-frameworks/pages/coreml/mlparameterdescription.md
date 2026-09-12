> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlparameterdescription](https://developer.apple.com/documentation/coreml/mlparameterdescription)

# MLParameterDescription (Swift)

**Framework:** Core ML  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

A description of a model parameter that includes a default value and a constraint, if applicable.

## Declaration

```swift
class MLParameterDescription
```

## Topics

### Describing the model parameter

- [defaultValue](mlparameterdescription/defaultvalue.md): The default value for the parameter.
- [key](mlparameterdescription/key.md): The key for this parameter description value.

### Constraining numeric values

- [numericConstraint](mlparameterdescription/numericconstraint.md): The constraints of this paramter description value, if and only if the value is numerical.
- [MLNumericConstraint](mlnumericconstraint.md): The value limitations of a number.

### Initializers

- [init(coder:)](mlparameterdescription/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

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

### Accessing update descriptions

- [isUpdatable](mlmodeldescription/isupdatable.md): A Boolean value that indicates whether you can update the model with additional training.
- [trainingInputDescriptionsByName](mlmodeldescription/traininginputdescriptionsbyname.md): A dictionary of the training input feature descriptions, which the model keys by the input’s name.
- [parameterDescriptionsByKey](mlmodeldescription/parameterdescriptionsbykey.md): A dictionary of the descriptions for the model’s parameters.

# MLParameterDescription (Objective-C)

**Framework:** Core ML  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

A description of a model parameter that includes a default value and a constraint, if applicable.

## Declaration

```objectivec
@interface MLParameterDescription : NSObject
```

## Topics

### Describing the model parameter

- [defaultValue](mlparameterdescription/defaultvalue.md): The default value for the parameter.
- [key](mlparameterdescription/key.md): The key for this parameter description value.

### Constraining numeric values

- [numericConstraint](mlparameterdescription/numericconstraint.md): The constraints of this paramter description value, if and only if the value is numerical.
- [MLNumericConstraint](mlnumericconstraint.md): The value limitations of a number.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Accessing update descriptions

- [isUpdatable](mlmodeldescription/isupdatable.md): A Boolean value that indicates whether you can update the model with additional training.
- [trainingInputDescriptionsByName](mlmodeldescription/traininginputdescriptionsbyname.md): A dictionary of the training input feature descriptions, which the model keys by the input’s name.
- [parameterDescriptionsByKey](mlmodeldescription/parameterdescriptionsbykey.md): A dictionary of the descriptions for the model’s parameters.
