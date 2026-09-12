> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/scanner/scanhexdouble(_:)](https://developer.apple.com/documentation/foundation/scanner/scanhexdouble(_:))

# scanHexDouble(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Scans for a double value from a hexadecimal representation, returning a found value by reference.

## Declaration

```swift
func scanHexDouble(_ result: UnsafeMutablePointer<Double>?) -> Bool
```

## Parameters

- `result`: Upon return, contains the scanned value. Contains `HUGE_VAL` or `–HUGE_VAL` on overflow, or `0.0` on underflow.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the receiver finds a valid double-point representation, otherwise [false](https://developer.apple.com/documentation/swift/false). Overflow or underflow are both considered valid floating-point representations.

<a id="Discussion"></a>

## Discussion

This corresponds to `%a` or `%A` formatting. The hexadecimal double representation must be preceded by `0x` or `0X`.

Skips past excess digits in the case of overflow, so the scanner’s position is past the entire floating-point representation.

Invoke this method with `NULL` as `result` to simply scan past a hexadecimal double representation.

## See Also

### Scanning Numeric Values

- [scanDecimal(\_:)](scandecimal%28__%29.md): Deprecated. Scans for an `NSDecimal` value, returning a found value by reference.
- [scanDouble(\_:)](scandouble%28__%29.md): Deprecated. Scans for a double value, returning a found value by reference.
- [scanFloat(\_:)](scanfloat%28__%29.md): Deprecated. Scans for a float value, returning a found value by reference.
- [scanHexFloat(\_:)](scanhexfloat%28__%29.md): Scans for a double value from a hexadecimal representation, returning a found value by reference.
- [scanHexInt32(\_:)](scanhexint32%28__%29.md): Deprecated. Scans for an unsigned value from a hexadecimal representation, returning a found value by reference.
- [scanHexInt64(\_:)](scanhexint64%28__%29.md): Scans for a long long value from a hexadecimal representation, returning a found value by reference.
- [scanInt(\_:)](scanint%28__%29.md): Scans for an NSInteger value from a decimal representation, returning a found value by reference
- [scanInt32(\_:)](scanint32%28__%29.md): Deprecated. Scans for an int value from a decimal representation, returning a found value by reference.
- [scanInt64(\_:)](scanint64%28__%29.md): Scans for a long long value from a decimal representation, returning a found value by reference.
- [scanUnsignedLongLong(\_:)](scanunsignedlonglong%28__%29.md): Scans for an unsigned long long value from a decimal representation, returning a found value by reference.

# scanHexDouble: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Scans for a double value from a hexadecimal representation, returning a found value by reference.

## Declaration

```objectivec
- (BOOL) scanHexDouble:(double *) result;
```

## Parameters

- `result`: Upon return, contains the scanned value. Contains `HUGE_VAL` or `–HUGE_VAL` on overflow, or `0.0` on underflow.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the receiver finds a valid double-point representation, otherwise [false](https://developer.apple.com/documentation/swift/false). Overflow or underflow are both considered valid floating-point representations.

<a id="Discussion"></a>

## Discussion

This corresponds to `%a` or `%A` formatting. The hexadecimal double representation must be preceded by `0x` or `0X`.

Skips past excess digits in the case of overflow, so the scanner’s position is past the entire floating-point representation.

Invoke this method with `NULL` as `result` to simply scan past a hexadecimal double representation.

## See Also

### Scanning Numeric Values

- [scanDecimal:](scandecimal%28__%29.md): Deprecated. Scans for an `NSDecimal` value, returning a found value by reference.
- [scanDouble:](scandouble%28__%29.md): Deprecated. Scans for a double value, returning a found value by reference.
- [scanFloat:](scanfloat%28__%29.md): Deprecated. Scans for a float value, returning a found value by reference.
- [scanHexFloat:](scanhexfloat%28__%29.md): Scans for a double value from a hexadecimal representation, returning a found value by reference.
- [scanHexInt:](scanhexint32%28__%29.md): Deprecated. Scans for an unsigned value from a hexadecimal representation, returning a found value by reference.
- [scanHexLongLong:](scanhexint64%28__%29.md): Scans for a long long value from a hexadecimal representation, returning a found value by reference.
- [scanInteger:](scanint%28__%29.md): Scans for an NSInteger value from a decimal representation, returning a found value by reference
- [scanInt:](scanint32%28__%29.md): Deprecated. Scans for an int value from a decimal representation, returning a found value by reference.
- [scanLongLong:](scanint64%28__%29.md): Scans for a long long value from a decimal representation, returning a found value by reference.
- [scanUnsignedLongLong:](scanunsignedlonglong%28__%29.md): Scans for an unsigned long long value from a decimal representation, returning a found value by reference.
