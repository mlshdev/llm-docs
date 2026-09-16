> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/array/init(fromsplitcomplex:scale:count:)-5kgr3

# init(fromSplitComplex:scale:count:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a new array of single-precision values from a `DSPDoubleSplitComplex` structure.

## Declaration

```swift
init(fromSplitComplex splitComplex: DSPDoubleSplitComplex, scale: Double, count: Int)
```

## Parameters

- `scale`: A multiplier to apply during conversion.
- `count`: The length of the required resulting array (typically half the count of either the real or imaginary parts of the `DSPSplitComplex`.
