> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/scanner/scanint(_:)](https://developer.apple.com/documentation/foundation/scanner/scanint(_:))

# scanInt(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Scans for an NSInteger value from a decimal representation, returning a found value by reference

## Declaration

```swift
func scanInt(_ result: UnsafeMutablePointer<Int>?) -> Bool
```

## Parameters

- `result`: Upon return, contains the scanned value. Contains `INT_MAX` or `INT_MIN` on overflow.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the receiver finds a valid integer representation, otherwise [false](https://developer.apple.com/documentation/swift/false). Overflow is considered a valid integer representation.

<a id="Discussion"></a>

## Discussion

Skips past excess digits in the case of overflow, so the receiver’s position is past the entire integer representation.

Invoke this method with `NULL` as `value` to simply scan past a decimal integer representation.

## See Also

### Related Documentation

- [integerValue](../nsstring/integervalue.md): The `NSInteger` value of the string.

### Scanning Numeric Values

- [scanDecimal(\_:)](scandecimal%28__%29.md): Deprecated. Scans for an `NSDecimal` value, returning a found value by reference.
- [scanDouble(\_:)](scandouble%28__%29.md): Deprecated. Scans for a double value, returning a found value by reference.
- [scanFloat(\_:)](scanfloat%28__%29.md): Deprecated. Scans for a float value, returning a found value by reference.
- [scanHexDouble(\_:)](scanhexdouble%28__%29.md): Scans for a double value from a hexadecimal representation, returning a found value by reference.
- [scanHexFloat(\_:)](scanhexfloat%28__%29.md): Scans for a double value from a hexadecimal representation, returning a found value by reference.
- [scanHexInt32(\_:)](scanhexint32%28__%29.md): Deprecated. Scans for an unsigned value from a hexadecimal representation, returning a found value by reference.
- [scanHexInt64(\_:)](scanhexint64%28__%29.md): Scans for a long long value from a hexadecimal representation, returning a found value by reference.
- [scanInt32(\_:)](scanint32%28__%29.md): Deprecated. Scans for an int value from a decimal representation, returning a found value by reference.
- [scanInt64(\_:)](scanint64%28__%29.md): Scans for a long long value from a decimal representation, returning a found value by reference.
- [scanUnsignedLongLong(\_:)](scanunsignedlonglong%28__%29.md): Scans for an unsigned long long value from a decimal representation, returning a found value by reference.

# scanInteger: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Scans for an NSInteger value from a decimal representation, returning a found value by reference

## Declaration

```objectivec
- (BOOL) scanInteger:(NSInteger *) result;
```

## Parameters

- `result`: Upon return, contains the scanned value. Contains `INT_MAX` or `INT_MIN` on overflow.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the receiver finds a valid integer representation, otherwise [false](https://developer.apple.com/documentation/swift/false). Overflow is considered a valid integer representation.

<a id="Discussion"></a>

## Discussion

Skips past excess digits in the case of overflow, so the receiver’s position is past the entire integer representation.

Invoke this method with `NULL` as `value` to simply scan past a decimal integer representation.

## See Also

### Related Documentation

- [integerValue](../nsstring/integervalue.md): The `NSInteger` value of the string.

### Scanning Numeric Values

- [scanDecimal:](scandecimal%28__%29.md): Deprecated. Scans for an `NSDecimal` value, returning a found value by reference.
- [scanDouble:](scandouble%28__%29.md): Deprecated. Scans for a double value, returning a found value by reference.
- [scanFloat:](scanfloat%28__%29.md): Deprecated. Scans for a float value, returning a found value by reference.
- [scanHexDouble:](scanhexdouble%28__%29.md): Scans for a double value from a hexadecimal representation, returning a found value by reference.
- [scanHexFloat:](scanhexfloat%28__%29.md): Scans for a double value from a hexadecimal representation, returning a found value by reference.
- [scanHexInt:](scanhexint32%28__%29.md): Deprecated. Scans for an unsigned value from a hexadecimal representation, returning a found value by reference.
- [scanHexLongLong:](scanhexint64%28__%29.md): Scans for a long long value from a hexadecimal representation, returning a found value by reference.
- [scanInt:](scanint32%28__%29.md): Deprecated. Scans for an int value from a decimal representation, returning a found value by reference.
- [scanLongLong:](scanint64%28__%29.md): Scans for a long long value from a decimal representation, returning a found value by reference.
- [scanUnsignedLongLong:](scanunsignedlonglong%28__%29.md): Scans for an unsigned long long value from a decimal representation, returning a found value by reference.
