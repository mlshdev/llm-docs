> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/float16/radix

# radix

**Framework:** Swift  
**Kind:** Type Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The radix, or base of exponentiation, for a floating-point type.

## Declaration

```swift
static var radix: Int { get }
```

<a id="discussion"></a>

## Discussion

The magnitude of a floating-point value `x` of type `F` can be calculated by using the following formula, where `**` is exponentiation:

```swift
x.significand * (F.radix ** x.exponent)
```

A conforming type may use any integer radix, but values other than 2 (for binary floating-point types) or 10 (for decimal floating-point types) are extraordinarily rare in practice.
