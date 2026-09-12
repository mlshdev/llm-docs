> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/float/remainder(dividingby:)](https://developer.apple.com/documentation/swift/float/remainder(dividingby:))

# remainder(dividingBy:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the remainder of this value divided by the given value.

## Declaration

```swift
func remainder(dividingBy other: Self) -> Self
```

## Parameters

- `other`: The value to use when dividing this value.

<a id="return-value"></a>

## Return Value

The remainder of this value divided by `other`.

<a id="discussion"></a>

## Discussion

For two finite values `x` and `y`, the remainder `r` of dividing `x` by `y` satisfies `x == y * q + r`, where `q` is the integer nearest to `x / y`. If `x / y` is exactly halfway between two integers, `q` is chosen to be even. Note that `q` is *not* `x / y` computed in floating-point arithmetic, and that `q` may not be representable in any available integer type.

The following example calculates the remainder of dividing 8.625 by 0.75:

```swift
let x = 8.625
print(x / 0.75)
// Prints "11.5"

let q = (x / 0.75).rounded(.toNearestOrEven)
// q == 12.0
let r = x.remainder(dividingBy: 0.75)
// r == -0.375

let x1 = 0.75 * q + r
// x1 == 8.625
```

If this value and `other` are finite numbers, the remainder is in the closed range `-abs(other / 2)...abs(other / 2)`. The `remainder(dividingBy:)` method is always exact. This method implements the remainder operation defined by the [IEEE 754 specification](http://ieeexplore.ieee.org/servlet/opac?punumber=4610933).

## See Also

### Performing Calculations

- [Floating-Point Operators for Float](../floating-point-operators-for-float.md): Perform arithmetic and bitwise operations or compare values.
- [addingProduct(\_:\_:)](addingproduct%28____%29.md): Returns the result of adding the product of the two given values to this value, computed without intermediate rounding.
- [addProduct(\_:\_:)](addproduct%28____%29.md): Adds the product of the two given values to this value in place, computed without intermediate rounding.
- [squareRoot()](squareroot%28%29.md): Returns the square root of the value, rounded to a representable value.
- [formSquareRoot()](formsquareroot%28%29.md): Replaces this value with its square root, rounded to a representable value.
- [formRemainder(dividingBy:)](formremainder%28dividingby_%29.md): Replaces this value with the remainder of itself divided by the given value.
- [truncatingRemainder(dividingBy:)](truncatingremainder%28dividingby_%29.md): Returns the remainder of this value divided by the given value using truncating division.
- [formTruncatingRemainder(dividingBy:)](formtruncatingremainder%28dividingby_%29.md): Replaces this value with the remainder of itself divided by the given value using truncating division.
- [negate()](negate%28%29.md): Replaces this value with its additive inverse.
