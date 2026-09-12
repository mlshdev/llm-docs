> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlnumericconstraint](https://developer.apple.com/documentation/coreml/mlnumericconstraint)

# MLNumericConstraint (Swift)

**Framework:** Core ML  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

The value limitations of a number.

## Declaration

```swift
class MLNumericConstraint
```

## Topics

### Numeric Constraints

- [minNumber](mlnumericconstraint/minnumber.md): The smallest numerical value allowed by this constraint.
- [maxNumber](mlnumericconstraint/maxnumber.md): The largest numerical value allowed by this constraint.
- [enumeratedNumbers](mlnumericconstraint/enumeratednumbers.md): A set of the numbers allowed in this constraint.

### Initializers

- [init(coder:)](mlnumericconstraint/init%28coder_%29.md)

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

### Constraining numeric values

- [numericConstraint](mlparameterdescription/numericconstraint.md): The constraints of this paramter description value, if and only if the value is numerical.

# MLNumericConstraint (Objective-C)

**Framework:** Core ML  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

The value limitations of a number.

## Declaration

```objectivec
@interface MLNumericConstraint : NSObject
```

## Topics

### Numeric Constraints

- [minNumber](mlnumericconstraint/minnumber.md): The smallest numerical value allowed by this constraint.
- [maxNumber](mlnumericconstraint/maxnumber.md): The largest numerical value allowed by this constraint.
- [enumeratedNumbers](mlnumericconstraint/enumeratednumbers.md): A set of the numbers allowed in this constraint.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Constraining numeric values

- [numericConstraint](mlparameterdescription/numericconstraint.md): The constraints of this paramter description value, if and only if the value is numerical.
