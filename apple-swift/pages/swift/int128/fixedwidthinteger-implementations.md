> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/int128/fixedwidthinteger-implementations](https://developer.apple.com/documentation/swift/int128/fixedwidthinteger-implementations)

# FixedWidthInteger Implementations

**Framework:** Swift  
**Kind:** API Collection

## Topics

### Operators

- [&\*(\_:\_:)](&_%28____%29.md): Returns the product of the two given values, wrapping the result in case of any overflow.
- [&\*(\_:\_:)](&_%28____%29-ctty.md): Returns the product of the two given values, wrapping the result in case of any overflow.
- [&\*=(\_:\_:)](&_=%28____%29.md): Multiplies two values and stores the result in the left-hand-side variable, wrapping any overflow.
- [&+(\_:\_:)](&+%28____%29.md): Returns the sum of the two given values, wrapping the result in case of any overflow.
- [&+=(\_:\_:)](&+=%28____%29.md): Adds two values and stores the result in the left-hand-side variable, wrapping any overflow.
- [&-(\_:\_:)](&-%28____%29.md): Returns the difference of the two given values, wrapping the result in case of any overflow.
- [&-=(\_:\_:)](&-=%28____%29.md): Subtracts the second value from the first and stores the difference in the left-hand-side variable, wrapping any overflow.
- [&\>\>(\_:\_:)](&__%28____%29-227qu.md): Returns the result of shifting a value’s binary representation the specified number of digits to the right, masking the shift amount to the type’s bit width.
- [&\>\>(\_:\_:)](&__%28____%29-71ih1.md): Returns the result of shifting a value’s binary representation the specified number of digits to the right, masking the shift amount to the type’s bit width.
- [&\<\<(\_:\_:)](&__%28____%29-9gig.md): Returns the result of shifting a value’s binary representation the specified number of digits to the left, masking the shift amount to the type’s bit width.
- [&\<\<(\_:\_:)](&__%28____%29-lkqj.md): Returns the result of shifting a value’s binary representation the specified number of digits to the left, masking the shift amount to the type’s bit width.
- [&\<\<=(\_:\_:)](&__=%28____%29-1pdlg.md): Returns the result of shifting a value’s binary representation the specified number of digits to the left, masking the shift amount to the type’s bit width, and stores the result in the left-hand-side variable.
- [&\<\<=(\_:\_:)](&__=%28____%29-2vr5o.md): Returns the result of shifting a value’s binary representation the specified number of digits to the left, masking the shift amount to the type’s bit width, and stores the result in the left-hand-side variable.
- [&\>\>=(\_:\_:)](&__=%28____%29-5pnjk.md): Calculates the result of shifting a value’s binary representation the specified number of digits to the right, masking the shift amount to the type’s bit width, and stores the result in the left-hand-side variable.
- [&\>\>=(\_:\_:)](&__=%28____%29-69tya.md): Calculates the result of shifting a value’s binary representation the specified number of digits to the right, masking the shift amount to the type’s bit width, and stores the result in the left-hand-side variable.

### Initializers

- [init(\_:)](init%28__%29-3gl5w.md)
- [init(\_:)](init%28__%29-9xe9j.md): Creates a new integer value from the given string.
- [init(\_:radix:)](init%28__radix_%29.md): Creates a new integer value from the given string and radix.
- [init(bigEndian:)](init%28bigendian_%29.md): Creates an integer from its big-endian representation, changing the byte order if necessary.
- [init(exactly:)](init%28exactly_%29-yans.md)
- [init(littleEndian:)](init%28littleendian_%29.md): Creates an integer from its little-endian representation, changing the byte order if necessary.

### Instance Properties

- [bigEndian](bigendian.md): The big-endian representation of this integer.
- [byteSwapped](byteswapped.md): A representation of this integer with the byte order swapped.
- [leadingZeroBitCount](leadingzerobitcount.md): The number of leading zeros in this value’s binary representation.
- [littleEndian](littleendian.md): The little-endian representation of this integer.
- [nonzeroBitCount](nonzerobitcount.md): The number of bits equal to 1 in this value’s binary representation.

### Instance Methods

- [addingReportingOverflow(\_:)](addingreportingoverflow%28__%29.md): Returns the sum of this value and the given value, along with a Boolean value indicating whether overflow occurred in the operation.
- [dividedReportingOverflow(by:)](dividedreportingoverflow%28by_%29.md): Returns the quotient obtained by dividing this value by the given value, along with a Boolean value indicating whether overflow occurred in the operation.
- [multipliedFullWidth(by:)](multipliedfullwidth%28by_%29.md): Returns a tuple containing the high and low parts of the result of multiplying this value by the given value.
- [multipliedReportingOverflow(by:)](multipliedreportingoverflow%28by_%29.md): Returns the product of this value and the given value, along with a Boolean value indicating whether overflow occurred in the operation.
- [remainderReportingOverflow(dividingBy:)](remainderreportingoverflow%28dividingby_%29.md): Returns the remainder after dividing this value by the given value, along with a Boolean value indicating whether overflow occurred during division.
- [subtractingReportingOverflow(\_:)](subtractingreportingoverflow%28__%29.md): Returns the difference obtained by subtracting the given value from this value, along with a Boolean value indicating whether overflow occurred in the operation.

### Type Properties

- [bitWidth](bitwidth.md): The number of bits used for the underlying binary representation of values of this type.
- [max](max.md): The maximum representable integer in this type.
- [min](min.md): The minimum representable integer in this type.

### Type Methods

- [random(in:)](random%28in_%29-4lf3w.md): Returns a random value within the specified range.
- [random(in:)](random%28in_%29-55a79.md): Returns a random value within the specified range.
- [random(in:using:)](random%28in_using_%29-4e4vx.md): Returns a random value within the specified range, using the given generator as a source for randomness.
- [random(in:using:)](random%28in_using_%29-7t428.md): Returns a random value within the specified range, using the given generator as a source for randomness.
