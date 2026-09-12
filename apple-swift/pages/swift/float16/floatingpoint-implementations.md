> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/float16/floatingpoint-implementations](https://developer.apple.com/documentation/swift/float16/floatingpoint-implementations)

# FloatingPoint Implementations

**Framework:** Swift  
**Kind:** API Collection

## Topics

### Operators

- [\*(\_:\_:)](_%28____%29.md): Multiplies two values and produces their product, rounding to a representable value.
- [\*=(\_:\_:)](_=%28____%29.md): Multiplies two values and stores the result in the left-hand-side variable, rounding to a representable value.
- [+(\_:\_:)](+%28____%29.md): Adds two values and produces their sum, rounded to a representable value.
- [+=(\_:\_:)](+=%28____%29.md): Adds two values and stores the result in the left-hand-side variable, rounded to a representable value.
- [-(\_:)](-%28__%29.md): Calculates the additive inverse of a value.
- [-(\_:\_:)](-%28____%29.md): Subtracts one value from another and produces their difference, rounded to a representable value.
- [-=(\_:\_:)](-=%28____%29.md): Subtracts the second value from the first and stores the difference in the left-hand-side variable, rounding to a representable value.
- [/(\_:\_:)](_%28____%29~461a3170.md): Returns the quotient of dividing the first value by the second, rounded to a representable value.
- [\>(\_:\_:)](_%28____%29-9d93b.md)
- [/=(\_:\_:)](_=%28____%29~a2d87c93.md): Divides the first value by the second and stores the quotient in the left-hand-side variable, rounding to a representable value.
- [\>=(\_:\_:)](_=%28____%29-1s8n2.md)
- [\<=(\_:\_:)](_=%28____%29-4bq0a.md)

### Initializers

- [init(\_:)](init%28__%29-4iaoz.md): Creates a new value, rounded to the closest possible representation.
- [init(\_:)](init%28__%29-67cee.md): Creates a new value, rounded to the closest possible representation.
- [init(exactly:)](init%28exactly_%29-2qxl0.md): Creates a new value, if the given integer can be represented exactly.
- [init(sign:exponent:significand:)](init%28sign_exponent_significand_%29.md): Creates a new value from the given sign, exponent, and significand.
- [init(signOf:magnitudeOf:)](init%28signof_magnitudeof_%29.md): Creates a new floating-point value using the sign of one value and the magnitude of another.
- [init(signOf:magnitudeOf:)](init%28signof_magnitudeof_%29-1oylh.md): Creates a new floating-point value using the sign of one value and the magnitude of another.

### Instance Properties

- [exponent](exponent-swift.property.md): The exponent of the floating-point value.
- [floatingPointClass](floatingpointclass.md): The classification of this value.
- [isCanonical](iscanonical.md): A Boolean value indicating whether the instance’s representation is in its canonical form.
- [isFinite](isfinite.md): A Boolean value indicating whether this instance is finite.
- [isInfinite](isinfinite.md): A Boolean value indicating whether the instance is infinite.
- [isNaN](isnan.md): A Boolean value indicating whether the instance is NaN (“not a number”).
- [isNormal](isnormal.md): A Boolean value indicating whether this instance is normal.
- [isSignalingNaN](issignalingnan.md): A Boolean value indicating whether the instance is a signaling NaN.
- [isSubnormal](issubnormal.md): A Boolean value indicating whether the instance is subnormal.
- [isZero](iszero.md): A Boolean value indicating whether the instance is equal to zero.
- [nextDown](nextdown.md): The greatest representable value that compares less than this value.
- [nextUp](nextup.md): The least representable value that compares greater than this value.
- [sign](sign.md): The sign of the floating-point value.
- [significand](significand.md): The significand of the floating-point value.
- [ulp](ulp.md): The unit in the last place of this value.

### Instance Methods

- [addProduct(\_:\_:)](addproduct%28____%29.md): Adds the product of the two given values to this value in place, computed without intermediate rounding.
- [addingProduct(\_:\_:)](addingproduct%28____%29.md): Returns the result of adding the product of the two given values to this value, computed without intermediate rounding.
- [formRemainder(dividingBy:)](formremainder%28dividingby_%29.md): Replaces this value with the remainder of itself divided by the given value.
- [formSquareRoot()](formsquareroot%28%29.md): Replaces this value with its square root, rounded to a representable value.
- [formTruncatingRemainder(dividingBy:)](formtruncatingremainder%28dividingby_%29.md): Replaces this value with the remainder of itself divided by the given value using truncating division.
- [isEqual(to:)](isequal%28to_%29.md): Returns a Boolean value indicating whether this instance is equal to the given value.
- [isLess(than:)](isless%28than_%29.md): Returns a Boolean value indicating whether this instance is less than the given value.
- [isLessThanOrEqualTo(\_:)](islessthanorequalto%28__%29.md): Returns a Boolean value indicating whether this instance is less than or equal to the given value.
- [isTotallyOrdered(belowOrEqualTo:)](istotallyordered%28beloworequalto_%29.md): Returns a Boolean value indicating whether this instance should precede or tie positions with the given value in an ascending sort.
- [negate()](negate%28%29.md): Replaces this value with its additive inverse.
- [remainder(dividingBy:)](remainder%28dividingby_%29.md): Returns the remainder of this value divided by the given value.
- [round()](round%28%29.md)
- [round(\_:)](round%28__%29.md): Rounds the value to an integral value using the specified rounding rule.
- [rounded()](rounded%28%29.md)
- [rounded(\_:)](rounded%28__%29.md): Returns this value rounded to an integral value using the specified rounding rule.
- [squareRoot()](squareroot%28%29.md): Returns the square root of the value, rounded to a representable value.
- [truncatingRemainder(dividingBy:)](truncatingremainder%28dividingby_%29.md): Returns the remainder of this value divided by the given value using truncating division.

### Type Aliases

- [Float16.Exponent](exponent-swift.typealias.md): A type that can represent any written exponent.

### Type Properties

- [greatestFiniteMagnitude](greatestfinitemagnitude.md): The greatest finite number representable by this type.
- [infinity](infinity.md): Positive infinity.
- [leastNonzeroMagnitude](leastnonzeromagnitude.md): The least positive number.
- [leastNormalMagnitude](leastnormalmagnitude.md): The least positive normal number.
- [nan](nan.md): A quiet NaN (“not a number”).
- [pi](pi.md): The mathematical constant pi (π), approximately equal to 3.14159.
- [radix](radix.md): The radix, or base of exponentiation, for a floating-point type.
- [signalingNaN](signalingnan.md): A signaling NaN (“not a number”).
- [ulpOfOne](ulpofone.md): The unit in the last place of 1.0.
- [ulpOfOne](ulpofone-8wr95.md): The unit in the last place of 1.0.

### Type Methods

- [maximum(\_:\_:)](maximum%28____%29.md): Returns the greater of the two given values.
- [maximumMagnitude(\_:\_:)](maximummagnitude%28____%29.md): Returns the value with greater magnitude.
- [minimum(\_:\_:)](minimum%28____%29.md): Returns the lesser of the two given values.
- [minimumMagnitude(\_:\_:)](minimummagnitude%28____%29.md): Returns the value with lesser magnitude.
