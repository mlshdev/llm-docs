> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/int/negate()](https://developer.apple.com/documentation/swift/int/negate())

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

The following example uses the `negate()` method to negate the value of an integer `x`:

```swift
var x = 21
x.negate()
// x == -21
```

The resulting value must be representable within the value’s type. In particular, negating a signed, fixed-width integer type’s minimum results in a value that cannot be represented.

```swift
var y = Int8.min
y.negate()
// Overflow error
```

## See Also

### Performing Calculations

- [Integer Operators](../integer-operators.md): Perform arithmetic and bitwise operations or compare values.
- [quotientAndRemainder(dividingBy:)](quotientandremainder%28dividingby_%29.md): Returns the quotient and remainder of this value divided by the given value.
- [isMultiple(of:)](ismultiple%28of_%29.md): Conforms when `Self` conforms to `FixedWidthInteger`. Returns `true` if this value is a multiple of the given value, and `false` otherwise.
