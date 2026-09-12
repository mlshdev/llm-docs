> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdecimalnoscale](https://developer.apple.com/documentation/foundation/nsdecimalnoscale)

# NSDecimalNoScale (Swift)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Specifies that the number of digits allowed after the decimal separator in a decimal number should not be limited.

## Declaration

```swift
var NSDecimalNoScale: Int32 { get }
```

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
- [NSDecimalMaxSize](nsdecimalmaxsize.md): The maximum size of [Decimal](decimal.md).

# NSDecimalNoScale (Objective-C)

**Framework:** Foundation  
**Kind:** Macro  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Specifies that the number of digits allowed after the decimal separator in a decimal number should not be limited.

## Declaration

```objectivec
#define NSDecimalNoScale
```

## See Also

### Getting particular decimals

- [NSDecimalMaxSize](nsdecimalmaxsize.md): The maximum size of [NSDecimal](decimal.md).
