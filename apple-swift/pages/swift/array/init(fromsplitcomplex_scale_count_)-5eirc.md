> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/array/init(fromsplitcomplex:scale:count:)-5eirc](https://developer.apple.com/documentation/swift/array/init(fromsplitcomplex:scale:count:)-5eirc)

# init(fromSplitComplex:scale:count:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a new array of single-precision values from a `DSPSplitComplex` structure.

## Declaration

```swift
init(fromSplitComplex splitComplex: DSPSplitComplex, scale: Float, count: Int)
```

## Parameters

- `scale`: A multiplier to apply during conversion.
- `count`: The length of the required resulting array (typically half the count of either the real or imaginary parts of the `DSPSplitComplex`.
