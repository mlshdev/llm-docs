> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/defaultstringinterpolation/init(literalcapacity:interpolationcount:)](https://developer.apple.com/documentation/swift/defaultstringinterpolation/init(literalcapacity:interpolationcount:))

# init(literalCapacity:interpolationCount:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a string interpolation with storage pre-sized for a literal with the indicated attributes.

## Declaration

```swift
init(literalCapacity: Int, interpolationCount: Int)
```

<a id="discussion"></a>

## Discussion

You don’t need to call this initializer directly. It’s used by the compiler when interpreting string interpolations.
