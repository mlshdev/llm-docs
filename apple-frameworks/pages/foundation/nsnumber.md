> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsnumber](https://developer.apple.com/documentation/foundation/nsnumber)

# NSNumber (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An object wrapper for primitive scalar numeric values.

## Declaration

```swift
class NSNumber
```

## Mentioned In

- [Implementing Handoff in Your App](implementing-handoff-in-your-app.md)

<a id="overview"></a>

## Overview

`NSNumber` is a subclass of `NSValue` that offers a value as any C scalar (numeric) type. It defines a set of methods specifically for setting and accessing the value as a signed or unsigned `char`, `short int`, `int`, `long int`, `long long int`, `float`, or `double` or as a `BOOL`. (Note that number objects do not necessarily preserve the type they are created with.) It also defines a [compare(\_:)](nsnumber/compare%28__%29.md) method to determine the ordering of two `NSNumber` objects.

`NSNumber` is “toll-free bridged” with its Core Foundation counterparts: [CFNumber](../corefoundation/cfnumber.md) for integer and floating point values, and [CFBoolean](../corefoundation/cfboolean.md) for Boolean values. See [Toll-Free Bridging](https://developer.apple.com/library/archive/documentation/General/Conceptual/CocoaEncyclopedia/Toll-FreeBridgin/Toll-FreeBridgin.html#//apple_ref/doc/uid/TP40010810-CH2) for more information on toll-free bridging.

<a id="Value-Conversions"></a>

### Value Conversions

`NSNumber` provides readonly properties that return the object’s stored value converted to a particular Boolean, integer, unsigned integer, or floating point C scalar type. Because numeric types have different storage capabilities, attempting to initialize with a value of one type and access the value of another type may produce an erroneous result—for example, initializing with a `double` value exceeding `FLT_MAX` and accessing its [floatValue](nsnumber/floatvalue.md), or initializing with an negative integer value and accessing its [uintValue](nsnumber/uintvalue.md). In some cases, attempting to initialize with a value of a type and access the value of another type may result in loss of precision—for example, initializing with a `double` value with many significant digits and accessing its [floatValue](nsnumber/floatvalue.md), or initializing with a large integer value and accessing its [int8Value](nsnumber/int8value.md).

An `NSNumber` object initialized with a value of a particular type accessing the converted value of a different *kind* of type, such as `unsigned int` and `float`, will convert its stored value to that converted type in the following ways:

| `Value` | [boolValue](nsnumber/boolvalue.md) | [intValue](nsnumber/intvalue-95zzp.md) | [uintValue](nsnumber/uintvalue.md) | [floatValue](nsnumber/floatvalue.md) |
| --- | --- | --- | --- | --- |
| [false](https://developer.apple.com/documentation/swift/false) | [false](https://developer.apple.com/documentation/swift/false) | `0` | `0` | `0.0` |
| [true](https://developer.apple.com/documentation/swift/true) | [true](https://developer.apple.com/documentation/swift/true) | `1` | `1` | `1.0` |

| `Value` | [boolValue](nsnumber/boolvalue.md) | [intValue](nsnumber/intvalue-95zzp.md) | [uintValue](nsnumber/uintvalue.md) | [floatValue](nsnumber/floatvalue.md) |
| --- | --- | --- | --- | --- |
| `0` | [false](https://developer.apple.com/documentation/swift/false) | `0` | `0` | `0.0` |
| `1` | [true](https://developer.apple.com/documentation/swift/true) | `1` | `1` | `1.0` |
| `-1` | [true](https://developer.apple.com/documentation/swift/true) | `-1` | *invalid, erroneous result* | `-1.0` |

| `Value` | [boolValue](nsnumber/boolvalue.md) | [intValue](nsnumber/intvalue-95zzp.md) | [uintValue](nsnumber/uintvalue.md) | [floatValue](nsnumber/floatvalue.md) |
| --- | --- | --- | --- | --- |
| `0` | [false](https://developer.apple.com/documentation/swift/false) | `0` | `0` | `0.0` |
| `1` | [true](https://developer.apple.com/documentation/swift/true) | `1` | `1` | `1.0` |

| `Value` | [boolValue](nsnumber/boolvalue.md) | [intValue](nsnumber/intvalue-95zzp.md) | [uintValue](nsnumber/uintvalue.md) | [floatValue](nsnumber/floatvalue.md) |
| --- | --- | --- | --- | --- |
| `0.0` | [false](https://developer.apple.com/documentation/swift/false) | `0` | `0` | `0.0` |
| `1.0` | [true](https://developer.apple.com/documentation/swift/true) | `1` | `1` | `1.0` |
| `-1.0` | [true](https://developer.apple.com/documentation/swift/true) | `-1` | *invalid, erroneous result* | `-1.0` |

<a id="Subclassing-Notes"></a>

### Subclassing Notes

As with any class cluster, subclasses of `NSNumber` must override the primitive methods of its superclass, `NSValue`. In addition, there are two requirements around the data type your subclass represents:

1. Your implementation of [objCType](nsvalue/objctype.md) must return one of “`c`”, “`C`”, “`s`”, “`S`”, “`i`”, “`I`”, “`l`”, “`L`”, “`q`”, “`Q`”, “`f`”, and “`d`”. This is required for the other methods of [NSNumber](nsnumber.md) to behave correctly.
2. Your subclass must override the accessor method that corresponds to the declared type—for example, if your implementation of [objCType](nsvalue/objctype.md) returns  “`i`”, you must override [int32Value](nsnumber/int32value.md).

## Topics

### Initializing an NSNumber Object

- [init(value:)](nsnumber/init%28value_%29-1ojz2.md): Returns an `NSNumber` object initialized to contain a given value, treated as a `BOOL`.
- [init(value:)](nsnumber/init%28value_%29-8krjs.md): Returns an `NSNumber` object initialized to contain a given value, treated as a signed `char`.
- [init(value:)](nsnumber/init%28value_%29-15chk.md): Returns an `NSNumber` object initialized to contain `value`, treated as a `double`.
- [init(value:)](nsnumber/init%28value_%29-2vlwk.md): Returns an `NSNumber` object initialized to contain a given value, treated as a `float`.
- [init(value:)](nsnumber/init%28value_%29-7jvmg.md): Returns an `NSNumber` object initialized to contain a given value, treated as a signed `int`.
- [init(value:)](nsnumber/init%28value_%29-5jcjl.md): Returns an `NSNumber` object initialized to contain a given value, treated as an `NSInteger`.
- [init(value:)](nsnumber/init%28value_%29-40ad0.md): Returns an `NSNumber` object initialized to contain `value`, treated as a signed `long long`.
- [init(value:)](nsnumber/init%28value_%29-16drx.md): Returns an `NSNumber` object initialized to contain a given value, treated as a signed `short`.
- [init(value:)](nsnumber/init%28value_%29-8se67.md): Returns an `NSNumber` object initialized to contain a given value, treated as an `unsigned char`.
- [init(value:)](nsnumber/init%28value_%29-47coa.md): Returns an `NSNumber` object initialized to contain a given value, treated as an `unsigned int`.
- [init(value:)](nsnumber/init%28value_%29-3l4ek.md): Returns an `NSNumber` object initialized to contain a given value, treated as an `NSUInteger`.
- [init(value:)](nsnumber/init%28value_%29-43lc7.md): Returns an `NSNumber` object initialized to contain a given value, treated as an `unsigned long long`.
- [init(value:)](nsnumber/init%28value_%29-87y9m.md): Returns an `NSNumber` object initialized to contain a given value, treated as an `unsigned short`.

### Accessing Numeric Values

- [boolValue](nsnumber/boolvalue.md): The number object’s value expressed as a Boolean value.
- [int8Value](nsnumber/int8value.md): The number object’s value expressed as a `char`.
- [decimalValue](nsnumber/decimalvalue.md): The number object’s value expressed as an [Decimal](decimal.md) structure.
- [doubleValue](nsnumber/doublevalue.md): The number object’s value expressed as a `double`, converted as necessary.
- [floatValue](nsnumber/floatvalue.md): The number object’s value expressed as a `float`, converted as necessary.
- [int32Value](nsnumber/int32value.md): The number object’s value expressed as an `int`, converted as necessary.
- [intValue](nsnumber/intvalue-95zzp.md): The number object’s value expressed as an `NSInteger` object, converted as necessary.
- [int64Value](nsnumber/int64value.md): The number object’s value expressed as a `long long`, converted as necessary.
- [int16Value](nsnumber/int16value.md): The number object’s value expressed as a `short`, converted as necessary.
- [uint8Value](nsnumber/uint8value.md): The number object’s value expressed as an unsigned `char`, converted as necessary.
- [uintValue](nsnumber/uintvalue.md): The number object’s value expressed as an `NSUInteger` object, converted as necessary.
- [uint32Value](nsnumber/uint32value.md): The number object’s value expressed as an unsigned `int`, converted as necessary.
- [uint64Value](nsnumber/uint64value.md): The number object’s value expressed as an unsigned `long long`, converted as necessary.
- [uint16Value](nsnumber/uint16value.md): The number object’s value expressed as an unsigned `short`, converted as necessary.

### Retrieving String Representations

- [description(withLocale:)](nsnumber/description%28withlocale_%29.md): Returns a string that represents the contents of the number object for a given locale.
- [stringValue](nsnumber/stringvalue.md): The number object’s value expressed as a human-readable string.

### Comparing NSNumber Objects

- [compare(\_:)](nsnumber/compare%28__%29.md): Returns an `NSComparisonResult` value that indicates whether the number object’s value is greater than, equal to, or less than a given number.
- [isEqual(to:)](nsnumber/isequal%28to_%29.md): Returns a Boolean value that indicates whether the number object’s value and a given number are equal.

### Number Validation

- [NSDecimalIsNotANumber(\_:)](nsdecimalisnotanumber%28__%29.md): Returns a Boolean that indicates whether a given decimal contains a valid number.

### Initializers

- [init(bool:)](nsnumber/init%28bool_%29.md)
- [init(char:)](nsnumber/init%28char_%29.md)
- [init(coder:)](nsnumber/init%28coder_%29.md)
- [init(double:)](nsnumber/init%28double_%29.md)
- [init(float:)](nsnumber/init%28float_%29.md)
- [init(int:)](nsnumber/init%28int_%29.md)
- [init(integer:)](nsnumber/init%28integer_%29.md)
- [init(longLong:)](nsnumber/init%28longlong_%29.md)
- [init(short:)](nsnumber/init%28short_%29.md)
- [init(unsignedChar:)](nsnumber/init%28unsignedchar_%29.md)
- [init(unsignedInt:)](nsnumber/init%28unsignedint_%29.md)
- [init(unsignedInteger:)](nsnumber/init%28unsignedinteger_%29.md)
- [init(unsignedLongLong:)](nsnumber/init%28unsignedlonglong_%29.md)
- [init(unsignedShort:)](nsnumber/init%28unsignedshort_%29.md)

### Default Implementations

- [ExpressibleByBooleanLiteral Implementations](nsnumber/expressiblebybooleanliteral-implementations.md)
- [ExpressibleByFloatLiteral Implementations](nsnumber/expressiblebyfloatliteral-implementations.md)
- [ExpressibleByIntegerLiteral Implementations](nsnumber/expressiblebyintegerliteral-implementations.md)

## Relationships

### Inherits From

- [NSValue](nsvalue.md)

### Inherited By

- [NSDecimalNumber](nsdecimalnumber.md)

### Conforms To

- [CKRecordValue](../cloudkit/ckrecordvalue-c.protocol.md)
- [CKRecordValueProtocol](../cloudkit/ckrecordvalueprotocol.md)
- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [ExpressibleByBooleanLiteral](https://developer.apple.com/documentation/swift/expressiblebybooleanliteral)
- [ExpressibleByFloatLiteral](https://developer.apple.com/documentation/swift/expressiblebyfloatliteral)
- [ExpressibleByIntegerLiteral](https://developer.apple.com/documentation/swift/expressiblebyintegerliteral)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](nscoding.md)
- [NSCopying](nscopying.md)
- [NSFetchRequestResult](../coredata/nsfetchrequestresult.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# NSNumber (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An object wrapper for primitive scalar numeric values.

## Declaration

```objectivec
@interface NSNumber : NSValue
```

## Mentioned In

- [Implementing Handoff in Your App](implementing-handoff-in-your-app.md)

<a id="overview"></a>

## Overview

`NSNumber` is a subclass of `NSValue` that offers a value as any C scalar (numeric) type. It defines a set of methods specifically for setting and accessing the value as a signed or unsigned `char`, `short int`, `int`, `long int`, `long long int`, `float`, or `double` or as a `BOOL`. (Note that number objects do not necessarily preserve the type they are created with.) It also defines a [compare:](nsnumber/compare%28__%29.md) method to determine the ordering of two `NSNumber` objects.

`NSNumber` is “toll-free bridged” with its Core Foundation counterparts: [CFNumberRef](../corefoundation/cfnumber.md) for integer and floating point values, and [CFBooleanRef](../corefoundation/cfboolean.md) for Boolean values. See [Toll-Free Bridging](https://developer.apple.com/library/archive/documentation/General/Conceptual/CocoaEncyclopedia/Toll-FreeBridgin/Toll-FreeBridgin.html#//apple_ref/doc/uid/TP40010810-CH2) for more information on toll-free bridging.

<a id="Value-Conversions"></a>

### Value Conversions

`NSNumber` provides readonly properties that return the object’s stored value converted to a particular Boolean, integer, unsigned integer, or floating point C scalar type. Because numeric types have different storage capabilities, attempting to initialize with a value of one type and access the value of another type may produce an erroneous result—for example, initializing with a `double` value exceeding `FLT_MAX` and accessing its [floatValue](nsnumber/floatvalue.md), or initializing with an negative integer value and accessing its [unsignedIntegerValue](nsnumber/uintvalue.md). In some cases, attempting to initialize with a value of a type and access the value of another type may result in loss of precision—for example, initializing with a `double` value with many significant digits and accessing its [floatValue](nsnumber/floatvalue.md), or initializing with a large integer value and accessing its [charValue](nsnumber/int8value.md).

An `NSNumber` object initialized with a value of a particular type accessing the converted value of a different *kind* of type, such as `unsigned int` and `float`, will convert its stored value to that converted type in the following ways:

| `Value` | [boolValue](nsnumber/boolvalue.md) | [integerValue](nsnumber/intvalue-95zzp.md) | [unsignedIntegerValue](nsnumber/uintvalue.md) | [floatValue](nsnumber/floatvalue.md) |
| --- | --- | --- | --- | --- |
| [false](https://developer.apple.com/documentation/swift/false) | [false](https://developer.apple.com/documentation/swift/false) | `0` | `0` | `0.0` |
| [true](https://developer.apple.com/documentation/swift/true) | [true](https://developer.apple.com/documentation/swift/true) | `1` | `1` | `1.0` |

| `Value` | [boolValue](nsnumber/boolvalue.md) | [integerValue](nsnumber/intvalue-95zzp.md) | [unsignedIntegerValue](nsnumber/uintvalue.md) | [floatValue](nsnumber/floatvalue.md) |
| --- | --- | --- | --- | --- |
| `0` | [false](https://developer.apple.com/documentation/swift/false) | `0` | `0` | `0.0` |
| `1` | [true](https://developer.apple.com/documentation/swift/true) | `1` | `1` | `1.0` |
| `-1` | [true](https://developer.apple.com/documentation/swift/true) | `-1` | *invalid, erroneous result* | `-1.0` |

| `Value` | [boolValue](nsnumber/boolvalue.md) | [integerValue](nsnumber/intvalue-95zzp.md) | [unsignedIntegerValue](nsnumber/uintvalue.md) | [floatValue](nsnumber/floatvalue.md) |
| --- | --- | --- | --- | --- |
| `0` | [false](https://developer.apple.com/documentation/swift/false) | `0` | `0` | `0.0` |
| `1` | [true](https://developer.apple.com/documentation/swift/true) | `1` | `1` | `1.0` |

| `Value` | [boolValue](nsnumber/boolvalue.md) | [integerValue](nsnumber/intvalue-95zzp.md) | [unsignedIntegerValue](nsnumber/uintvalue.md) | [floatValue](nsnumber/floatvalue.md) |
| --- | --- | --- | --- | --- |
| `0.0` | [false](https://developer.apple.com/documentation/swift/false) | `0` | `0` | `0.0` |
| `1.0` | [true](https://developer.apple.com/documentation/swift/true) | `1` | `1` | `1.0` |
| `-1.0` | [true](https://developer.apple.com/documentation/swift/true) | `-1` | *invalid, erroneous result* | `-1.0` |

<a id="Subclassing-Notes"></a>

### Subclassing Notes

As with any class cluster, subclasses of `NSNumber` must override the primitive methods of its superclass, `NSValue`. In addition, there are two requirements around the data type your subclass represents:

1. Your implementation of [objCType](nsvalue/objctype.md) must return one of “`c`”, “`C`”, “`s`”, “`S`”, “`i`”, “`I`”, “`l`”, “`L`”, “`q`”, “`Q`”, “`f`”, and “`d`”. This is required for the other methods of [NSNumber](nsnumber.md) to behave correctly.
2. Your subclass must override the accessor method that corresponds to the declared type—for example, if your implementation of [objCType](nsvalue/objctype.md) returns  “`i`”, you must override [intValue](nsnumber/int32value.md).

## Topics

### Creating an NSNumber Object

- [numberWithBool:](nsnumber/numberwithbool_.md): Creates and returns an `NSNumber` object containing a given value, treating it as a `BOOL`.
- [numberWithChar:](nsnumber/numberwithchar_.md): Creates and returns an `NSNumber` object containing a given value, treating it as a signed `char`.
- [numberWithDouble:](nsnumber/numberwithdouble_.md): Creates and returns an `NSNumber` object containing a given value, treating it as a `double`.
- [numberWithFloat:](nsnumber/numberwithfloat_.md): Creates and returns an `NSNumber` object containing a given value, treating it as a `float`.
- [numberWithInt:](nsnumber/numberwithint_.md): Creates and returns an `NSNumber` object containing a given value, treating it as a signed `int`.
- [numberWithInteger:](nsnumber/numberwithinteger_.md): Creates and returns an `NSNumber` object containing a given value, treating it as an `NSInteger`.
- [numberWithLong:](nsnumber/numberwithlong_.md): Creates and returns an `NSNumber` object containing a given value, treating it as a signed `long`.
- [numberWithLongLong:](nsnumber/numberwithlonglong_.md): Creates and returns an `NSNumber` object containing a given value, treating it as a signed `long long`.
- [numberWithShort:](nsnumber/numberwithshort_.md): Creates and returns an `NSNumber` object containing `value`, treating it as a signed `short`.
- [numberWithUnsignedChar:](nsnumber/numberwithunsignedchar_.md): Creates and returns an `NSNumber` object containing a given value, treating it as an `unsigned char`.
- [numberWithUnsignedInt:](nsnumber/numberwithunsignedint_.md): Creates and returns an `NSNumber` object containing a given value, treating it as an `unsigned int`.
- [numberWithUnsignedInteger:](nsnumber/numberwithunsignedinteger_.md): Creates and returns an `NSNumber` object containing a given value, treating it as an `NSUInteger`.
- [numberWithUnsignedLong:](nsnumber/numberwithunsignedlong_.md): Creates and returns an `NSNumber` object containing a given value, treating it as an `unsigned long`.
- [numberWithUnsignedLongLong:](nsnumber/numberwithunsignedlonglong_.md): Creates and returns an `NSNumber` object containing a given value, treating it as an `unsigned long long`.
- [numberWithUnsignedShort:](nsnumber/numberwithunsignedshort_.md): Creates and returns an `NSNumber` object containing a given value, treating it as an `unsigned short`.

### Initializing an NSNumber Object

- [initWithBool:](nsnumber/init%28value_%29-1ojz2.md): Returns an `NSNumber` object initialized to contain a given value, treated as a `BOOL`.
- [initWithChar:](nsnumber/init%28value_%29-8krjs.md): Returns an `NSNumber` object initialized to contain a given value, treated as a signed `char`.
- [initWithDouble:](nsnumber/init%28value_%29-15chk.md): Returns an `NSNumber` object initialized to contain `value`, treated as a `double`.
- [initWithFloat:](nsnumber/init%28value_%29-2vlwk.md): Returns an `NSNumber` object initialized to contain a given value, treated as a `float`.
- [initWithInt:](nsnumber/init%28value_%29-7jvmg.md): Returns an `NSNumber` object initialized to contain a given value, treated as a signed `int`.
- [initWithInteger:](nsnumber/init%28value_%29-5jcjl.md): Returns an `NSNumber` object initialized to contain a given value, treated as an `NSInteger`.
- [initWithLong:](nsnumber/initwithlong_.md): Returns an `NSNumber` object initialized to contain a given value, treated as a signed `long`.
- [initWithLongLong:](nsnumber/init%28value_%29-40ad0.md): Returns an `NSNumber` object initialized to contain `value`, treated as a signed `long long`.
- [initWithShort:](nsnumber/init%28value_%29-16drx.md): Returns an `NSNumber` object initialized to contain a given value, treated as a signed `short`.
- [initWithUnsignedChar:](nsnumber/init%28value_%29-8se67.md): Returns an `NSNumber` object initialized to contain a given value, treated as an `unsigned char`.
- [initWithUnsignedInt:](nsnumber/init%28value_%29-47coa.md): Returns an `NSNumber` object initialized to contain a given value, treated as an `unsigned int`.
- [initWithUnsignedInteger:](nsnumber/init%28value_%29-3l4ek.md): Returns an `NSNumber` object initialized to contain a given value, treated as an `NSUInteger`.
- [initWithUnsignedLong:](nsnumber/initwithunsignedlong_.md): Returns an `NSNumber` object initialized to contain a given value, treated as an `unsigned long`.
- [initWithUnsignedLongLong:](nsnumber/init%28value_%29-43lc7.md): Returns an `NSNumber` object initialized to contain a given value, treated as an `unsigned long long`.
- [initWithUnsignedShort:](nsnumber/init%28value_%29-87y9m.md): Returns an `NSNumber` object initialized to contain a given value, treated as an `unsigned short`.

### Accessing Numeric Values

- [boolValue](nsnumber/boolvalue.md): The number object’s value expressed as a Boolean value.
- [charValue](nsnumber/int8value.md): The number object’s value expressed as a `char`.
- [decimalValue](nsnumber/decimalvalue.md): The number object’s value expressed as an [NSDecimal](decimal.md) structure.
- [doubleValue](nsnumber/doublevalue.md): The number object’s value expressed as a `double`, converted as necessary.
- [floatValue](nsnumber/floatvalue.md): The number object’s value expressed as a `float`, converted as necessary.
- [intValue](nsnumber/int32value.md): The number object’s value expressed as an `int`, converted as necessary.
- [integerValue](nsnumber/intvalue-95zzp.md): The number object’s value expressed as an `NSInteger` object, converted as necessary.
- [longLongValue](nsnumber/int64value.md): The number object’s value expressed as a `long long`, converted as necessary.
- [longValue](nsnumber/longvalue.md): The number object’s value expressed as a `long`, converted as necessary.
- [shortValue](nsnumber/int16value.md): The number object’s value expressed as a `short`, converted as necessary.
- [unsignedCharValue](nsnumber/uint8value.md): The number object’s value expressed as an unsigned `char`, converted as necessary.
- [unsignedIntegerValue](nsnumber/uintvalue.md): The number object’s value expressed as an `NSUInteger` object, converted as necessary.
- [unsignedIntValue](nsnumber/uint32value.md): The number object’s value expressed as an unsigned `int`, converted as necessary.
- [unsignedLongLongValue](nsnumber/uint64value.md): The number object’s value expressed as an unsigned `long long`, converted as necessary.
- [unsignedLongValue](nsnumber/unsignedlongvalue.md): The number object’s value expressed as an unsigned `long`, converted as necessary.
- [unsignedShortValue](nsnumber/uint16value.md): The number object’s value expressed as an unsigned `short`, converted as necessary.

### Retrieving String Representations

- [descriptionWithLocale:](nsnumber/description%28withlocale_%29.md): Returns a string that represents the contents of the number object for a given locale.
- [stringValue](nsnumber/stringvalue.md): The number object’s value expressed as a human-readable string.

### Comparing NSNumber Objects

- [compare:](nsnumber/compare%28__%29.md): Returns an `NSComparisonResult` value that indicates whether the number object’s value is greater than, equal to, or less than a given number.
- [isEqualToNumber:](nsnumber/isequal%28to_%29.md): Returns a Boolean value that indicates whether the number object’s value and a given number are equal.

### Number Validation

- [NSDecimalIsNotANumber](nsdecimalisnotanumber%28__%29.md): Returns a Boolean that indicates whether a given decimal contains a valid number.

### Instance Methods

- [initWithCoder:](nsnumber/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSValue](nsvalue.md)

### Inherited By

- [NSDecimalNumber](nsdecimalnumber.md)

### Conforms To

- [CKRecordValue](../cloudkit/ckrecordvalue-c.protocol.md)
- [CKRecordValueProtocol](../cloudkit/ckrecordvalueprotocol.md)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [NSFetchRequestResult](../coredata/nsfetchrequestresult.md)
- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Numbers

- [NSInteger](../objectivec/nsinteger.md): Describes an integer.
- [NSUInteger](../objectivec/nsuinteger.md): Describes an unsigned integer.
- [NSDecimal](decimal.md): A structure representing a base-10 number.
- [NSDecimalNumber](nsdecimalnumber.md): An object for representing and performing arithmetic on base-10 numbers.
- [NSNumberFormatter](numberformatter.md): A formatter that converts between numeric values and their textual representations.
