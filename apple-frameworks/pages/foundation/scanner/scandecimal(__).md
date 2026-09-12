> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/scanner/scandecimal(_:)](https://developer.apple.com/documentation/foundation/scanner/scandecimal(_:))

# scanDecimal(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 13.0) · iPadOS 2.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.15) · tvOS 9.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 27.0)

Scans for an `NSDecimal` value, returning a found value by reference.

## Declaration

```swift
func scanDecimal(_ dcm: UnsafeMutablePointer<Decimal>?) -> Bool
```

## Parameters

- `dcm`: Upon return, contains the scanned value. See the [NSDecimalNumber](../nsdecimalnumber.md) class specification for more information about `NSDecimal` values.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the receiver finds a valid `NSDecimal` representation, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Invoke this method with `NULL` as `decimalValue` to simply scan past an `NSDecimal` representation.

## See Also

### Scanning Numeric Values

- [scanDouble(\_:)](scandouble%28__%29.md): Deprecated. Scans for a double value, returning a found value by reference.
- [scanFloat(\_:)](scanfloat%28__%29.md): Deprecated. Scans for a float value, returning a found value by reference.
- [scanHexDouble(\_:)](scanhexdouble%28__%29.md): Scans for a double value from a hexadecimal representation, returning a found value by reference.
- [scanHexFloat(\_:)](scanhexfloat%28__%29.md): Scans for a double value from a hexadecimal representation, returning a found value by reference.
- [scanHexInt32(\_:)](scanhexint32%28__%29.md): Deprecated. Scans for an unsigned value from a hexadecimal representation, returning a found value by reference.
- [scanHexInt64(\_:)](scanhexint64%28__%29.md): Scans for a long long value from a hexadecimal representation, returning a found value by reference.
- [scanInt(\_:)](scanint%28__%29.md): Scans for an NSInteger value from a decimal representation, returning a found value by reference
- [scanInt32(\_:)](scanint32%28__%29.md): Deprecated. Scans for an int value from a decimal representation, returning a found value by reference.
- [scanInt64(\_:)](scanint64%28__%29.md): Scans for a long long value from a decimal representation, returning a found value by reference.
- [scanUnsignedLongLong(\_:)](scanunsignedlonglong%28__%29.md): Scans for an unsigned long long value from a decimal representation, returning a found value by reference.

# scanDecimal: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Scans for an `NSDecimal` value, returning a found value by reference.

## Declaration

```objectivec
- (BOOL) scanDecimal:(NSDecimal *) dcm;
```

## Parameters

- `dcm`: Upon return, contains the scanned value. See the [NSDecimalNumber](../nsdecimalnumber.md) class specification for more information about `NSDecimal` values.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the receiver finds a valid `NSDecimal` representation, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Invoke this method with `NULL` as `decimalValue` to simply scan past an `NSDecimal` representation.

## See Also

### Scanning Numeric Values

- [scanDouble:](scandouble%28__%29.md): Deprecated. Scans for a double value, returning a found value by reference.
- [scanFloat:](scanfloat%28__%29.md): Deprecated. Scans for a float value, returning a found value by reference.
- [scanHexDouble:](scanhexdouble%28__%29.md): Scans for a double value from a hexadecimal representation, returning a found value by reference.
- [scanHexFloat:](scanhexfloat%28__%29.md): Scans for a double value from a hexadecimal representation, returning a found value by reference.
- [scanHexInt:](scanhexint32%28__%29.md): Deprecated. Scans for an unsigned value from a hexadecimal representation, returning a found value by reference.
- [scanHexLongLong:](scanhexint64%28__%29.md): Scans for a long long value from a hexadecimal representation, returning a found value by reference.
- [scanInteger:](scanint%28__%29.md): Scans for an NSInteger value from a decimal representation, returning a found value by reference
- [scanInt:](scanint32%28__%29.md): Deprecated. Scans for an int value from a decimal representation, returning a found value by reference.
- [scanLongLong:](scanint64%28__%29.md): Scans for a long long value from a decimal representation, returning a found value by reference.
- [scanUnsignedLongLong:](scanunsignedlonglong%28__%29.md): Scans for an unsigned long long value from a decimal representation, returning a found value by reference.
