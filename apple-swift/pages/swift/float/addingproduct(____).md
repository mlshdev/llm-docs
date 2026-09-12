> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/float/addingproduct(_:_:)](https://developer.apple.com/documentation/swift/float/addingproduct(_:_:))

# addingProduct(\_:\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the result of adding the product of the two given values to this value, computed without intermediate rounding.

## Declaration

```swift
func addingProduct(_ lhs: Self, _ rhs: Self) -> Self
```

## Parameters

- `lhs`: One of the values to multiply before adding to this value.
- `rhs`: The other value to multiply.

<a id="return-value"></a>

## Return Value

The product of `lhs` and `rhs`, added to this value.

<a id="discussion"></a>

## Discussion

This method is equivalent to the C `fma` function and implements the `fusedMultiplyAdd` operation defined by the [IEEE 754 specification](http://ieeexplore.ieee.org/servlet/opac?punumber=4610933).

## See Also

### Performing Calculations

- [Floating-Point Operators for Float](../floating-point-operators-for-float.md): Perform arithmetic and bitwise operations or compare values.
- [addProduct(\_:\_:)](addproduct%28____%29.md): Adds the product of the two given values to this value in place, computed without intermediate rounding.
- [squareRoot()](squareroot%28%29.md): Returns the square root of the value, rounded to a representable value.
- [formSquareRoot()](formsquareroot%28%29.md): Replaces this value with its square root, rounded to a representable value.
- [remainder(dividingBy:)](remainder%28dividingby_%29.md): Returns the remainder of this value divided by the given value.
- [formRemainder(dividingBy:)](formremainder%28dividingby_%29.md): Replaces this value with the remainder of itself divided by the given value.
- [truncatingRemainder(dividingBy:)](truncatingremainder%28dividingby_%29.md): Returns the remainder of this value divided by the given value using truncating division.
- [formTruncatingRemainder(dividingBy:)](formtruncatingremainder%28dividingby_%29.md): Replaces this value with the remainder of itself divided by the given value using truncating division.
- [negate()](negate%28%29.md): Replaces this value with its additive inverse.
