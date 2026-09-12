> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdecimalnumber](https://developer.apple.com/documentation/foundation/nsdecimalnumber)

# NSDecimalNumber (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An object for representing and performing arithmetic on base-10 numbers.

## Declaration

```swift
class NSDecimalNumber
```

<a id="overview"></a>

## Overview

In Swift, this object bridges to [Decimal](decimal.md); use [NSDecimalNumber](nsdecimalnumber.md) when you need reference semantics or other Foundation-specific behavior.

`NSDecimalNumber`, an immutable subclass of `NSNumber`, provides an object-oriented wrapper for doing base-10 arithmetic. An instance can represent any number that can be expressed as `mantissa x 10^exponent` where mantissa is a decimal integer up to 38 digits long, and exponent is an integer from –128 through 127.

> **Important**

>  The Swift overlay to the Foundation framework provides the [Decimal](decimal.md) structure, which bridges to the [NSDecimalNumber](nsdecimalnumber.md) class. For more information about value types, see [Working with Foundation Types](https://developer.apple.com/documentation/swift/working-with-foundation-types).

## Topics

### Creating a Decimal Number

- [one](nsdecimalnumber/one.md): A decimal number equivalent to the number 1.0.
- [zero](nsdecimalnumber/zero.md): A decimal number equivalent to the number 0.0.
- [notANumber](nsdecimalnumber/notanumber.md): A decimal number that specifies no number.

### Initializing a Decimal Number

- [init(decimal:)](nsdecimalnumber/init%28decimal_%29.md): Initializes a decimal number to represent a given decimal.
- [init(mantissa:exponent:isNegative:)](nsdecimalnumber/init%28mantissa_exponent_isnegative_%29.md): Initializes a decimal number using the given mantissa, exponent, and sign.
- [init(string:)](nsdecimalnumber/init%28string_%29.md): Initializes a decimal number so that its value is equivalent to that in a given numeric string.
- [init(string:locale:)](nsdecimalnumber/init%28string_locale_%29.md): Initializes a decimal number so that its value is equivalent to that in a given numeric string, interpreted using a given locale.

### Performing Arithmetic

- [adding(\_:)](nsdecimalnumber/adding%28__%29.md): Adds this number to another given number.
- [subtracting(\_:)](nsdecimalnumber/subtracting%28__%29.md): Subtracts another given number from this one.
- [multiplying(by:)](nsdecimalnumber/multiplying%28by_%29.md): Multiplies the number by another given number.
- [dividing(by:)](nsdecimalnumber/dividing%28by_%29.md): Divides the number by another given number.
- [raising(toPower:)](nsdecimalnumber/raising%28topower_%29.md): Raises the number to a given power.
- [multiplying(byPowerOf10:)](nsdecimalnumber/multiplying%28bypowerof10_%29.md): Multiplies the number by 10 raised to the given power.
- [adding(\_:withBehavior:)](nsdecimalnumber/adding%28__withbehavior_%29.md): Adds this number to another given number using the specified behavior.
- [subtracting(\_:withBehavior:)](nsdecimalnumber/subtracting%28__withbehavior_%29.md): Subtracts this a given number from this one using the specified behavior.
- [multiplying(by:withBehavior:)](nsdecimalnumber/multiplying%28by_withbehavior_%29.md): Multiplies this number by another given number using the specified behavior.
- [dividing(by:withBehavior:)](nsdecimalnumber/dividing%28by_withbehavior_%29.md): Divides this number by another given number using the specified behavior.
- [raising(toPower:withBehavior:)](nsdecimalnumber/raising%28topower_withbehavior_%29.md): Raises the number to a given power using the specified behavior.
- [multiplying(byPowerOf10:withBehavior:)](nsdecimalnumber/multiplying%28bypowerof10_withbehavior_%29.md): Multiplies the number by 10 raised to the given power using the specified behavior.

### Rounding Off

- [rounding(accordingToBehavior:)](nsdecimalnumber/rounding%28accordingtobehavior_%29.md): Returns a rounded version of the decimal number using the specified rounding behavior.

### Managing Behavior

- [defaultBehavior](nsdecimalnumber/defaultbehavior.md): The way arithmetic methods round off and handle error conditions.
- [NSDecimalNumberBehaviors](nsdecimalnumberbehaviors.md): A protocol that declares three methods that control the discretionary aspects of working with decimal numbers.
- [NSDecimalNumberHandler](nsdecimalnumberhandler.md): A class that adopts the decimal number behaviors protocol.

### Accessing the Value

- [decimalValue](nsdecimalnumber/decimalvalue.md): The decimal number’s value, expressed as an [Decimal](decimal.md) structure.
- [doubleValue](nsdecimalnumber/doublevalue.md): The decimal number’s closest approximate `double` value.
- [description(withLocale:)](nsdecimalnumber/description%28withlocale_%29.md): Returns a string representation of the decimal number appropriate for the specified locale.
- [objCType](nsdecimalnumber/objctype.md): A C string containing the Objective-C type for the data contained in the decimal number object.

### Comparing Decimal Numbers

- [compare(\_:)](nsdecimalnumber/compare%28__%29.md): Compares this decimal number and another.

### Getting Maximum and Minimum Possible Values

- [maximum](nsdecimalnumber/maximum.md): Returns the largest possible value of a decimal number.
- [minimum](nsdecimalnumber/minimum.md): Returns the smallest possible value of a decimal number.

### Recognizing Exceptions

Exceptions with these names may be raised to indicate computational errors with decimal numbers.

- [decimalNumberExactnessException](nsexceptionname/decimalnumberexactnessexception.md): The exception raised if there is an exactness error.
- [decimalNumberOverflowException](nsexceptionname/decimalnumberoverflowexception.md): The exception raised on overflow.
- [decimalNumberUnderflowException](nsexceptionname/decimalnumberunderflowexception.md): The exception raised on underflow.
- [decimalNumberDivideByZeroException](nsexceptionname/decimalnumberdividebyzeroexception.md): The exception raised on divide by zero.

## Relationships

### Inherits From

- [NSNumber](nsnumber.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByBooleanLiteral](https://developer.apple.com/documentation/swift/expressiblebybooleanliteral)
- [ExpressibleByFloatLiteral](https://developer.apple.com/documentation/swift/expressiblebyfloatliteral)
- [ExpressibleByIntegerLiteral](https://developer.apple.com/documentation/swift/expressiblebyintegerliteral)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](nscoding.md)
- [NSCopying](nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# NSDecimalNumber (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An object for representing and performing arithmetic on base-10 numbers.

## Declaration

```objectivec
@interface NSDecimalNumber : NSNumber
```

<a id="overview"></a>

## Overview

In Swift, this object bridges to [NSDecimal](decimal.md); use [NSDecimalNumber](nsdecimalnumber.md) when you need reference semantics or other Foundation-specific behavior.

`NSDecimalNumber`, an immutable subclass of `NSNumber`, provides an object-oriented wrapper for doing base-10 arithmetic. An instance can represent any number that can be expressed as `mantissa x 10^exponent` where mantissa is a decimal integer up to 38 digits long, and exponent is an integer from –128 through 127.

> **Important**

>  The Swift overlay to the Foundation framework provides the [NSDecimal](decimal.md) structure, which bridges to the [NSDecimalNumber](nsdecimalnumber.md) class. For more information about value types, see [Working with Foundation Types](https://developer.apple.com/documentation/swift/working-with-foundation-types).

## Topics

### Creating a Decimal Number

- [decimalNumberWithDecimal:](nsdecimalnumber/decimalnumberwithdecimal_.md): Creates and returns a decimal number equivalent to a given decimal structure.
- [decimalNumberWithMantissa:exponent:isNegative:](nsdecimalnumber/decimalnumberwithmantissa_exponent_isnegative_.md): Creates and returns a decimal number equivalent to the number specified by the arguments.
- [decimalNumberWithString:](nsdecimalnumber/decimalnumberwithstring_.md): Creates a decimal number whose value is equivalent to that in a given numeric string.
- [decimalNumberWithString:locale:](nsdecimalnumber/decimalnumberwithstring_locale_.md): Creates a decimal number whose value is equivalent to that in a given numeric string, interpreted using a given locale.
- [one](nsdecimalnumber/one.md): A decimal number equivalent to the number 1.0.
- [zero](nsdecimalnumber/zero.md): A decimal number equivalent to the number 0.0.
- [notANumber](nsdecimalnumber/notanumber.md): A decimal number that specifies no number.

### Initializing a Decimal Number

- [initWithDecimal:](nsdecimalnumber/init%28decimal_%29.md): Initializes a decimal number to represent a given decimal.
- [initWithMantissa:exponent:isNegative:](nsdecimalnumber/init%28mantissa_exponent_isnegative_%29.md): Initializes a decimal number using the given mantissa, exponent, and sign.
- [initWithString:](nsdecimalnumber/init%28string_%29.md): Initializes a decimal number so that its value is equivalent to that in a given numeric string.
- [initWithString:locale:](nsdecimalnumber/init%28string_locale_%29.md): Initializes a decimal number so that its value is equivalent to that in a given numeric string, interpreted using a given locale.

### Performing Arithmetic

- [decimalNumberByAdding:](nsdecimalnumber/adding%28__%29.md): Adds this number to another given number.
- [decimalNumberBySubtracting:](nsdecimalnumber/subtracting%28__%29.md): Subtracts another given number from this one.
- [decimalNumberByMultiplyingBy:](nsdecimalnumber/multiplying%28by_%29.md): Multiplies the number by another given number.
- [decimalNumberByDividingBy:](nsdecimalnumber/dividing%28by_%29.md): Divides the number by another given number.
- [decimalNumberByRaisingToPower:](nsdecimalnumber/raising%28topower_%29.md): Raises the number to a given power.
- [decimalNumberByMultiplyingByPowerOf10:](nsdecimalnumber/multiplying%28bypowerof10_%29.md): Multiplies the number by 10 raised to the given power.
- [decimalNumberByAdding:withBehavior:](nsdecimalnumber/adding%28__withbehavior_%29.md): Adds this number to another given number using the specified behavior.
- [decimalNumberBySubtracting:withBehavior:](nsdecimalnumber/subtracting%28__withbehavior_%29.md): Subtracts this a given number from this one using the specified behavior.
- [decimalNumberByMultiplyingBy:withBehavior:](nsdecimalnumber/multiplying%28by_withbehavior_%29.md): Multiplies this number by another given number using the specified behavior.
- [decimalNumberByDividingBy:withBehavior:](nsdecimalnumber/dividing%28by_withbehavior_%29.md): Divides this number by another given number using the specified behavior.
- [decimalNumberByRaisingToPower:withBehavior:](nsdecimalnumber/raising%28topower_withbehavior_%29.md): Raises the number to a given power using the specified behavior.
- [decimalNumberByMultiplyingByPowerOf10:withBehavior:](nsdecimalnumber/multiplying%28bypowerof10_withbehavior_%29.md): Multiplies the number by 10 raised to the given power using the specified behavior.

### Rounding Off

- [decimalNumberByRoundingAccordingToBehavior:](nsdecimalnumber/rounding%28accordingtobehavior_%29.md): Returns a rounded version of the decimal number using the specified rounding behavior.

### Managing Behavior

- [defaultBehavior](nsdecimalnumber/defaultbehavior.md): The way arithmetic methods round off and handle error conditions.
- [NSDecimalNumberBehaviors](nsdecimalnumberbehaviors.md): A protocol that declares three methods that control the discretionary aspects of working with decimal numbers.
- [NSDecimalNumberHandler](nsdecimalnumberhandler.md): A class that adopts the decimal number behaviors protocol.

### Accessing the Value

- [decimalValue](nsdecimalnumber/decimalvalue.md): The decimal number’s value, expressed as an [NSDecimal](decimal.md) structure.
- [doubleValue](nsdecimalnumber/doublevalue.md): The decimal number’s closest approximate `double` value.
- [descriptionWithLocale:](nsdecimalnumber/description%28withlocale_%29.md): Returns a string representation of the decimal number appropriate for the specified locale.
- [objCType](nsdecimalnumber/objctype.md): A C string containing the Objective-C type for the data contained in the decimal number object.

### Comparing Decimal Numbers

- [compare:](nsdecimalnumber/compare%28__%29.md): Compares this decimal number and another.

### Getting Maximum and Minimum Possible Values

- [maximumDecimalNumber](nsdecimalnumber/maximum.md): Returns the largest possible value of a decimal number.
- [minimumDecimalNumber](nsdecimalnumber/minimum.md): Returns the smallest possible value of a decimal number.

### Recognizing Exceptions

Exceptions with these names may be raised to indicate computational errors with decimal numbers.

- [NSDecimalNumberExactnessException](nsexceptionname/decimalnumberexactnessexception.md): The exception raised if there is an exactness error.
- [NSDecimalNumberOverflowException](nsexceptionname/decimalnumberoverflowexception.md): The exception raised on overflow.
- [NSDecimalNumberUnderflowException](nsexceptionname/decimalnumberunderflowexception.md): The exception raised on underflow.
- [NSDecimalNumberDivideByZeroException](nsexceptionname/decimalnumberdividebyzeroexception.md): The exception raised on divide by zero.

## Relationships

### Inherits From

- [NSNumber](nsnumber.md)

## See Also

### Numbers

- [NSInteger](../objectivec/nsinteger.md): Describes an integer.
- [NSUInteger](../objectivec/nsuinteger.md): Describes an unsigned integer.
- [NSDecimal](decimal.md): A structure representing a base-10 number.
- [NSNumber](nsnumber.md): An object wrapper for primitive scalar numeric values.
- [NSNumberFormatter](numberformatter.md): A formatter that converts between numeric values and their textual representations.
