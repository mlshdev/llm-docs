> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/uint128/_(_:_:)-1p2lq](https://developer.apple.com/documentation/swift/uint128/_(_:_:)-1p2lq)

# \<(\_:\_:)

**Framework:** Swift  
**Kind:** Operator  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Returns a Boolean value indicating whether the value of the first argument is less than that of the second argument.

## Declaration

```swift
static func < (a: UInt128, b: UInt128) -> Bool
```

<a id="discussion"></a>

## Discussion

This function is the only requirement of the `Comparable` protocol. The remainder of the relational operator functions are implemented by the standard library for any type that conforms to `Comparable`.
