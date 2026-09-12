> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/integer-operators](https://developer.apple.com/documentation/swift/integer-operators)

# Integer Operators

**Framework:** Swift  
**Kind:** API Collection

Perform arithmetic and bitwise operations or compare values.

## Topics

### Arithmetic

- [+(\_:\_:)](int/+%28____%29.md): Adds two values and produces their sum.
- [-(\_:\_:)](int/-%28____%29.md): Subtracts one value from another and produces their difference.
- [\*(\_:\_:)](int/_%28____%29.md): Multiplies two values and produces their product.
- [/(\_:\_:)](int/_%28____%29-7j9bj.md): Returns the quotient of dividing the first value by the second.

### Arithmetic with Assignment

- [+=(\_:\_:)](int/+=%28____%29.md): Adds two values and stores the result in the left-hand-side variable.
- [\*=(\_:\_:)](int/_=%28____%29.md): Multiplies two values and stores the result in the left-hand-side variable.
- [/=(\_:\_:)](int/_=%28____%29-9lzpe.md): Divides the first value by the second and stores the quotient in the left-hand-side variable.

### Masked Arithmetic

- [&+(\_:\_:)](int/&+%28____%29.md): Returns the sum of the two given values, wrapping the result in case of any overflow.
- [&-(\_:\_:)](int/&-%28____%29.md): Returns the difference of the two given values, wrapping the result in case of any overflow.
- [&\*(\_:\_:)](int/&_%28____%29.md): Returns the product of the two given values, wrapping the result in case of any overflow.
- [&+=(\_:\_:)](int/&+=%28____%29.md): Adds two values and stores the result in the left-hand-side variable, wrapping any overflow.
- [&-=(\_:\_:)](int/&-=%28____%29.md): Subtracts the second value from the first and stores the difference in the left-hand-side variable, wrapping any overflow.
- [&\*=(\_:\_:)](int/&_=%28____%29.md): Multiplies two values and stores the result in the left-hand-side variable, wrapping any overflow.

### Bitwise Operations

- [&(\_:\_:)](int/&%28____%29.md): Returns the result of performing a bitwise AND operation on the two given values.
- [&=(\_:\_:)](int/&=%28____%29.md): Stores the result of performing a bitwise AND operation on the two given values in the left-hand-side variable.
- [~(\_:)](int/~%28__%29.md): Returns the inverse of the bits set in the argument.

### Negation

- [-(\_:)](int/-%28__%29.md): Returns the additive inverse of the specified value.
- [+(\_:)](int/+%28__%29.md): Returns the given number unchanged.

### Comparison

- [==(\_:\_:)](int/==%28____%29.md): Returns a Boolean value indicating whether two values are equal.
- [==(\_:\_:)](int/==%28____%29-1zalu.md): Returns a Boolean value indicating whether the two given values are equal.
- [!=(\_:\_:)](int/!=%28____%29-4jphg.md): Returns a Boolean value indicating whether the two given values are not equal.

### Range Expressions

- [...(\_:\_:)](int/'...%28____%29.md): Returns a closed range that contains both of its bounds.
- [...(\_:)](int/'...%28__%29-6ct66.md): Returns a partial range extending upward from a lower bound.
- [...(\_:)](int/'...%28__%29-4mm5u.md): Returns a partial range up to, and including, its upper bound.

### Deprecated

- [-=(\_:\_:)](int/-=%28____%29.md): Subtracts the second value from the first and stores the difference in the left-hand-side variable.

## See Also

### Performing Calculations

- [negate()](int/negate%28%29.md): Replaces this value with its additive inverse.
- [quotientAndRemainder(dividingBy:)](int/quotientandremainder%28dividingby_%29.md): Returns the quotient and remainder of this value divided by the given value.
- [isMultiple(of:)](int/ismultiple%28of_%29.md): Conforms when `Self` conforms to `FixedWidthInteger`. Returns `true` if this value is a multiple of the given value, and `false` otherwise.
