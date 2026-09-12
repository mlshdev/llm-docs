> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdecimalmaxsize](https://developer.apple.com/documentation/foundation/nsdecimalmaxsize)

# NSDecimalMaxSize (Swift)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The maximum size of [Decimal](decimal.md).

## Declaration

```swift
var NSDecimalMaxSize: Int32 { get }
```

<a id="Discussion"></a>

## Discussion

Gives a precision of at least 38 decimal digits, 128 binary positions.

## See Also

### Getting particular decimals

- [greatestFiniteMagnitude](decimal/greatestfinitemagnitude.md): The decimal that contains the largest possible non-infinite magnitude for the underlying representation.
- [leastFiniteMagnitude](decimal/leastfinitemagnitude.md): The decimal that contains the smallest possible non-infinite magnitude for the underlying representation.
- [leastNonzeroMagnitude](decimal/leastnonzeromagnitude.md): The decimal value that represents the smallest possible non-zero value for the underlying representation.
- [leastNormalMagnitude](decimal/leastnormalmagnitude.md): The decimal value that represents the smallest possible normal magnitude for the underlying representation.
- [pi](decimal/pi.md): The mathematical constant pi.
- [nan](decimal/nan.md): The value that represents “not a number.”
- [quietNaN](decimal/quietnan.md): A quiet representation of not-a-number.
- [radix](decimal/radix.md): The radix used by decimal numbers.
- [NSDecimalNoScale](nsdecimalnoscale.md): Specifies that the number of digits allowed after the decimal separator in a decimal number should not be limited.

# NSDecimalMaxSize (Objective-C)

**Framework:** Foundation  
**Kind:** Macro  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The maximum size of [NSDecimal](decimal.md).

## Declaration

```objectivec
#define NSDecimalMaxSize
```

<a id="Discussion"></a>

## Discussion

Gives a precision of at least 38 decimal digits, 128 binary positions.

## See Also

### Getting particular decimals

- [NSDecimalNoScale](nsdecimalnoscale.md): Specifies that the number of digits allowed after the decimal separator in a decimal number should not be limited.
