> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/double/negate()](https://developer.apple.com/documentation/swift/double/negate())

# negate()

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Replaces this value with its additive inverse.

## Declaration

```swift
mutating func negate()
```

<a id="discussion"></a>

## Discussion

The result is always exact. This example uses the `negate()` method to negate the value of the variable `x`:

```swift
var x = 21.5
x.negate()
// x == -21.5
```

## See Also

### Performing Calculations

- [Floating-Point Operators for Double](../floating-point-operators-for-double.md): Perform arithmetic and bitwise operations or compare values.
- [addingProduct(\_:\_:)](addingproduct%28____%29.md): Returns the result of adding the product of the two given values to this value, computed without intermediate rounding.
- [addProduct(\_:\_:)](addproduct%28____%29.md): Adds the product of the two given values to this value in place, computed without intermediate rounding.
- [squareRoot()](squareroot%28%29.md): Returns the square root of the value, rounded to a representable value.
- [formSquareRoot()](formsquareroot%28%29.md): Replaces this value with its square root, rounded to a representable value.
- [remainder(dividingBy:)](remainder%28dividingby_%29.md): Returns the remainder of this value divided by the given value.
- [formRemainder(dividingBy:)](formremainder%28dividingby_%29.md): Replaces this value with the remainder of itself divided by the given value.
- [truncatingRemainder(dividingBy:)](truncatingremainder%28dividingby_%29.md): Returns the remainder of this value divided by the given value using truncating division.
- [formTruncatingRemainder(dividingBy:)](formtruncatingremainder%28dividingby_%29.md): Replaces this value with the remainder of itself divided by the given value using truncating division.
