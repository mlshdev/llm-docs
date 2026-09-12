> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnns/paddingmode/constantbitpattern(_:)](https://developer.apple.com/documentation/accelerate/bnns/paddingmode/constantbitpattern(_:))

# BNNS.PaddingMode.constantBitPattern(\_:)

**Framework:** Accelerate  
**Kind:** Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

A constant that indicates that a padding operation fills the padded area with a specified bit pattern.

> Use the BNNSGraph API instead.

## Declaration

```swift
case constantBitPattern(UInt32)
```

## See Also

### Enumeration Cases

- [BNNS.PaddingMode.constantScalar(\_:)](constantscalar%28__%29.md): Deprecated. A constant that indicates that a padding operation fills the padded area with a specified scalar value.
- [BNNS.PaddingMode.reflect](reflect.md): Deprecated. A constant that indicates that a padding operation fills the padded area to form an odd-symmetric pattern.
- [BNNS.PaddingMode.symmetric](symmetric.md): Deprecated. A constant that indicates that a padding operation fills the padded area to form an even-symmetric pattern.
