> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/float/squareroot()](https://developer.apple.com/documentation/swift/float/squareroot())

# squareRoot()

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the square root of the value, rounded to a representable value.

## Declaration

```swift
func squareRoot() -> Self
```

<a id="return-value"></a>

## Return Value

The square root of the value.

<a id="discussion"></a>

## Discussion

The following example declares a function that calculates the length of the hypotenuse of a right triangle given its two perpendicular sides.

```swift
func hypotenuse(_ a: Double, _ b: Double) -> Double {
    return (a * a + b * b).squareRoot()
}

let (dx, dy) = (3.0, 4.0)
let distance = hypotenuse(dx, dy)
// distance == 5.0
```

## See Also

### Performing Calculations

- [Floating-Point Operators for Float](../floating-point-operators-for-float.md): Perform arithmetic and bitwise operations or compare values.
- [addingProduct(\_:\_:)](addingproduct%28____%29.md): Returns the result of adding the product of the two given values to this value, computed without intermediate rounding.
- [addProduct(\_:\_:)](addproduct%28____%29.md): Adds the product of the two given values to this value in place, computed without intermediate rounding.
- [formSquareRoot()](formsquareroot%28%29.md): Replaces this value with its square root, rounded to a representable value.
- [remainder(dividingBy:)](remainder%28dividingby_%29.md): Returns the remainder of this value divided by the given value.
- [formRemainder(dividingBy:)](formremainder%28dividingby_%29.md): Replaces this value with the remainder of itself divided by the given value.
- [truncatingRemainder(dividingBy:)](truncatingremainder%28dividingby_%29.md): Returns the remainder of this value divided by the given value using truncating division.
- [formTruncatingRemainder(dividingBy:)](formtruncatingremainder%28dividingby_%29.md): Replaces this value with the remainder of itself divided by the given value using truncating division.
- [negate()](negate%28%29.md): Replaces this value with its additive inverse.
