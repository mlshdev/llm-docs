> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/stringinterpolationprotocol/init(literalcapacity:interpolationcount:)](https://developer.apple.com/documentation/swift/stringinterpolationprotocol/init(literalcapacity:interpolationcount:))

# init(literalCapacity:interpolationCount:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an empty instance ready to be filled with string literal content.

## Declaration

```swift
init(literalCapacity: Int, interpolationCount: Int)
```

## Parameters

- `literalCapacity`: The approximate size of all literal segments combined. This is meant to be passed to `String.reserveCapacity(_:)`; it may be slightly larger or smaller than the sum of the counts of each literal segment.
- `interpolationCount`: The number of interpolations which will be appended. Use this value to estimate how much additional capacity will be needed for the interpolated segments.

<a id="discussion"></a>

## Discussion

Don’t call this initializer directly. Instead, initialize a variable or constant using a string literal with interpolated expressions.

Swift passes this initializer a pair of arguments specifying the size of the literal segments and the number of interpolated segments. Use this information to estimate the amount of storage you will need.
