> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/int/quotientandremainder(dividingby:)](https://developer.apple.com/documentation/swift/int/quotientandremainder(dividingby:))

# quotientAndRemainder(dividingBy:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the quotient and remainder of this value divided by the given value.

## Declaration

```swift
func quotientAndRemainder(dividingBy rhs: Self) -> (quotient: Self, remainder: Self)
```

## Parameters

- `rhs`: The value to divide this value by.

<a id="return-value"></a>

## Return Value

A tuple containing the quotient and remainder of this value divided by `rhs`. The remainder has the same sign as `lhs`.

<a id="discussion"></a>

## Discussion

Use this method to calculate the quotient and remainder of a division at the same time.

```swift
let x = 1_000_000
let (q, r) = x.quotientAndRemainder(dividingBy: 933)
// q == 1071
// r == 757
```

## See Also

### Performing Calculations

- [Integer Operators](../integer-operators.md): Perform arithmetic and bitwise operations or compare values.
- [negate()](negate%28%29.md): Replaces this value with its additive inverse.
- [isMultiple(of:)](ismultiple%28of_%29.md): Conforms when `Self` conforms to `FixedWidthInteger`. Returns `true` if this value is a multiple of the given value, and `false` otherwise.
