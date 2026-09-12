> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/binaryinteger/ismultiple(of:)](https://developer.apple.com/documentation/swift/binaryinteger/ismultiple(of:))

# isMultiple(of:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns `true` if this value is a multiple of the given value, and `false` otherwise.

## Declaration

```swift
func isMultiple(of other: Self) -> Bool
```

## Parameters

- `other`: The value to test.

<a id="discussion"></a>

## Discussion

For two integers *a* and *b*, *a* is a multiple of *b* if there exists a third integer *q* such that *a = q\*b*. For example, *6* is a multiple of *3* because *6 = 2\*3*. Zero is a multiple of everything because *0 = 0\*x* for any integer *x*.

Two edge cases are worth particular attention:

- `x.isMultiple(of: 0)` is `true` if `x` is zero and `false` otherwise.
- `T.min.isMultiple(of: -1)` is `true` for signed integer `T`, even though the quotient `T.min / -1` isn’t representable in type `T`.

## Default Implementations

### BinaryInteger Implementations

- [isMultiple(of:)](ismultiple%28of_%29-3ings.md): Conforms when `Self` conforms to `FixedWidthInteger`. Returns `true` if this value is a multiple of the given value, and `false` otherwise.
- [isMultiple(of:)](ismultiple%28of_%29-8eqba.md): Returns `true` if this value is a multiple of the given value, and `false` otherwise.

## See Also

### Performing Calculations

- [Binary Integer Operators](../binary-integer-operators.md): Perform arithmetic and bitwise operations or compare values.
- [quotientAndRemainder(dividingBy:)](quotientandremainder%28dividingby_%29.md): Returns the quotient and remainder of this value divided by the given value.
