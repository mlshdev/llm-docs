> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnns/paddingmode](https://developer.apple.com/documentation/accelerate/bnns/paddingmode)

# BNNS.PaddingMode

**Framework:** Accelerate  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

Constants that define padding modes.

> Use the BNNSGraph API instead.

## Declaration

```swift
enum PaddingMode
```

## Topics

### Enumeration Cases

- [BNNS.PaddingMode.constantBitPattern(\_:)](paddingmode/constantbitpattern%28__%29.md): Deprecated. A constant that indicates that a padding operation fills the padded area with a specified bit pattern.
- [BNNS.PaddingMode.constantScalar(\_:)](paddingmode/constantscalar%28__%29.md): Deprecated. A constant that indicates that a padding operation fills the padded area with a specified scalar value.
- [BNNS.PaddingMode.reflect](paddingmode/reflect.md): Deprecated. A constant that indicates that a padding operation fills the padded area to form an odd-symmetric pattern.
- [BNNS.PaddingMode.symmetric](paddingmode/symmetric.md): Deprecated. A constant that indicates that a padding operation fills the padded area to form an even-symmetric pattern.

### Instance Properties

- [bnnsPaddingMode](paddingmode/bnnspaddingmode.md): Deprecated. The underlying padding mode structure.
- [paddingBitPattern](paddingmode/paddingbitpattern.md): Deprecated. The padding bit pattern.
