> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdecimalnumber/init(decimal:)](https://developer.apple.com/documentation/foundation/nsdecimalnumber/init(decimal:))

# init(decimal:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes a decimal number to represent a given decimal.

## Declaration

```swift
init(decimal dcm: Decimal)
```

## Parameters

- `dcm`: The value of the new object.

<a id="return-value"></a>

## Return Value

An `NSDecimalNumber` object initialized to represent `dcm`.

<a id="Discussion"></a>

## Discussion

This method is the designated initializer for `NSDecimalNumber`.

## See Also

### Initializing a Decimal Number

- [init(mantissa:exponent:isNegative:)](init%28mantissa_exponent_isnegative_%29.md): Initializes a decimal number using the given mantissa, exponent, and sign.
- [init(string:)](init%28string_%29.md): Initializes a decimal number so that its value is equivalent to that in a given numeric string.
- [init(string:locale:)](init%28string_locale_%29.md): Initializes a decimal number so that its value is equivalent to that in a given numeric string, interpreted using a given locale.

# initWithDecimal: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes a decimal number to represent a given decimal.

## Declaration

```objectivec
- (instancetype) initWithDecimal:(NSDecimal) dcm;
```

## Parameters

- `dcm`: The value of the new object.

<a id="return-value"></a>

## Return Value

An `NSDecimalNumber` object initialized to represent `dcm`.

<a id="Discussion"></a>

## Discussion

This method is the designated initializer for `NSDecimalNumber`.

## See Also

### Initializing a Decimal Number

- [initWithMantissa:exponent:isNegative:](init%28mantissa_exponent_isnegative_%29.md): Initializes a decimal number using the given mantissa, exponent, and sign.
- [initWithString:](init%28string_%29.md): Initializes a decimal number so that its value is equivalent to that in a given numeric string.
- [initWithString:locale:](init%28string_locale_%29.md): Initializes a decimal number so that its value is equivalent to that in a given numeric string, interpreted using a given locale.
