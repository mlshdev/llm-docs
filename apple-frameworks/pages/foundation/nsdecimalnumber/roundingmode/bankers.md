> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdecimalnumber/roundingmode/bankers](https://developer.apple.com/documentation/foundation/nsdecimalnumber/roundingmode/bankers)

# NSDecimalNumber.RoundingMode.bankers (Swift)

**Framework:** Foundation  
**Kind:** Case  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Round to the closest possible return value; when halfway between two possibilities, return the possibility whose last digit is even.

## Declaration

```swift
case bankers
```

<a id="Discussion"></a>

## Discussion

In practice, this means that, over the long run, numbers will be rounded up as often as they are rounded down; there will be no systematic bias.

## See Also

### Constants

- [NSDecimalNumber.RoundingMode.plain](plain.md): Round to the closest possible return value; when caught halfway between two positive numbers, round up; when caught between two negative numbers, round down.
- [NSDecimalNumber.RoundingMode.down](down.md): Round return values down.
- [NSDecimalNumber.RoundingMode.up](up.md): Round return values up.

# NSRoundBankers (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Round to the closest possible return value; when halfway between two possibilities, return the possibility whose last digit is even.

## Declaration

```objectivec
NSRoundBankers
```

<a id="Discussion"></a>

## Discussion

In practice, this means that, over the long run, numbers will be rounded up as often as they are rounded down; there will be no systematic bias.

## See Also

### Constants

- [NSRoundPlain](plain.md): Round to the closest possible return value; when caught halfway between two positive numbers, round up; when caught between two negative numbers, round down.
- [NSRoundDown](down.md): Round return values down.
- [NSRoundUp](up.md): Round return values up.
