> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/int32/_(_:_:)-3k2xk](https://developer.apple.com/documentation/swift/int32/_(_:_:)-3k2xk)

# \<(\_:\_:)

**Framework:** Swift  
**Kind:** Operator  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value indicating whether the value of the first argument is less than that of the second argument.

## Declaration

```swift
static func < (lhs: Int32, rhs: Int32) -> Bool
```

## Parameters

- `lhs`: A value to compare.
- `rhs`: Another value to compare.

<a id="discussion"></a>

## Discussion

This function is the only requirement of the `Comparable` protocol. The remainder of the relational operator functions are implemented by the standard library for any type that conforms to `Comparable`.
