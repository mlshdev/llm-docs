> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfnumbertype](https://developer.apple.com/documentation/corefoundation/cfnumbertype)

# CFNumberType (Swift)

**Framework:** Core Foundation  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Flags used by CFNumber to indicate the data type of a value.

## Declaration

```swift
enum CFNumberType
```

<a id="overview"></a>

## Overview

The type specified in the call to [CFNumberCreate(\_:\_:\_:)](cfnumbercreate%28______%29.md) is not necessarily preserved when creating a new CFNumber object. A CFNumber object uses whatever internal storage type the creation function deems appropriate. Use the [CFNumberGetType(\_:)](cfnumbergettype%28__%29.md) function to find out what type the CFNumber object used to store your value.

## Topics

### Constants

- [CFNumberType.sInt8Type](cfnumbertype/sint8type.md): Eight-bit, signed integer. The `SInt8` data type is defined in `MacTypes.h`.
- [CFNumberType.sInt16Type](cfnumbertype/sint16type.md): Sixteen-bit, signed integer. The `SInt16` data type is defined in `MacTypes.h`.
- [CFNumberType.sInt32Type](cfnumbertype/sint32type.md): Thirty-two-bit, signed integer. The `SInt32` data type is defined in `MacTypes.h`.
- [CFNumberType.sInt64Type](cfnumbertype/sint64type.md): Sixty-four-bit, signed integer. The `SInt64` data type is defined in `MacTypes.h`.
- [CFNumberType.float32Type](cfnumbertype/float32type.md): Thirty-two-bit real. The `Float32` data type is defined in `MacTypes.h`.
- [CFNumberType.float64Type](cfnumbertype/float64type.md): Sixty-four-bit real. The `Float64` data type is defined in `MacTypes.h` and conforms to the 64-bit IEEE 754 standard.
- [CFNumberType.charType](cfnumbertype/chartype.md): Basic C `char` type.
- [CFNumberType.shortType](cfnumbertype/shorttype.md): Basic C `short` type.
- [CFNumberType.intType](cfnumbertype/inttype.md): Basic C `int` type.
- [CFNumberType.longType](cfnumbertype/longtype.md): Basic C `long` type.
- [CFNumberType.longLongType](cfnumbertype/longlongtype.md): Basic C `long long` type.
- [CFNumberType.floatType](cfnumbertype/floattype.md): Basic C `float` type.
- [CFNumberType.doubleType](cfnumbertype/doubletype.md): Basic C `double` type.
- [CFNumberType.cfIndexType](cfnumbertype/cfindextype.md): CFIndex value.
- [CFNumberType.nsIntegerType](cfnumbertype/nsintegertype.md): `NSInteger` value.
- [CFNumberType.cgFloatType](cfnumbertype/cgfloattype.md): `CGFloat` value.
- [maxType](cfnumbertype/maxtype.md): Same as [CFNumberType.cgFloatType](cfnumbertype/cgfloattype.md).

### Initializers

- [init(rawValue:)](cfnumbertype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Constants

- [Predefined Values](predefined-values.md): CFNumber provides some predefined number values.

# CFNumberType (Objective-C)

**Framework:** Core Foundation  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Flags used by CFNumber to indicate the data type of a value.

## Declaration

```objectivec
enum CFNumberType : CFIndex;
```

<a id="overview"></a>

## Overview

The type specified in the call to [CFNumberCreate](cfnumbercreate%28______%29.md) is not necessarily preserved when creating a new CFNumber object. A CFNumber object uses whatever internal storage type the creation function deems appropriate. Use the [CFNumberGetType](cfnumbergettype%28__%29.md) function to find out what type the CFNumber object used to store your value.

## Topics

### Constants

- [kCFNumberSInt8Type](cfnumbertype/sint8type.md): Eight-bit, signed integer. The `SInt8` data type is defined in `MacTypes.h`.
- [kCFNumberSInt16Type](cfnumbertype/sint16type.md): Sixteen-bit, signed integer. The `SInt16` data type is defined in `MacTypes.h`.
- [kCFNumberSInt32Type](cfnumbertype/sint32type.md): Thirty-two-bit, signed integer. The `SInt32` data type is defined in `MacTypes.h`.
- [kCFNumberSInt64Type](cfnumbertype/sint64type.md): Sixty-four-bit, signed integer. The `SInt64` data type is defined in `MacTypes.h`.
- [kCFNumberFloat32Type](cfnumbertype/float32type.md): Thirty-two-bit real. The `Float32` data type is defined in `MacTypes.h`.
- [kCFNumberFloat64Type](cfnumbertype/float64type.md): Sixty-four-bit real. The `Float64` data type is defined in `MacTypes.h` and conforms to the 64-bit IEEE 754 standard.
- [kCFNumberCharType](cfnumbertype/chartype.md): Basic C `char` type.
- [kCFNumberShortType](cfnumbertype/shorttype.md): Basic C `short` type.
- [kCFNumberIntType](cfnumbertype/inttype.md): Basic C `int` type.
- [kCFNumberLongType](cfnumbertype/longtype.md): Basic C `long` type.
- [kCFNumberLongLongType](cfnumbertype/longlongtype.md): Basic C `long long` type.
- [kCFNumberFloatType](cfnumbertype/floattype.md): Basic C `float` type.
- [kCFNumberDoubleType](cfnumbertype/doubletype.md): Basic C `double` type.
- [kCFNumberCFIndexType](cfnumbertype/cfindextype.md): CFIndex value.
- [kCFNumberNSIntegerType](cfnumbertype/nsintegertype.md): `NSInteger` value.
- [kCFNumberCGFloatType](cfnumbertype/cgfloattype.md): `CGFloat` value.
- [kCFNumberMaxType](cfnumbertype/maxtype.md): Same as [kCFNumberCGFloatType](cfnumbertype/cgfloattype.md).

## See Also

### Constants

- [Predefined Values](predefined-values.md): CFNumber provides some predefined number values.
