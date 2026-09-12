> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/float80/_(_:_:)-3kkyi](https://developer.apple.com/documentation/swift/float80/_(_:_:)-3kkyi)

# \<(\_:\_:)

**Framework:** Swift  
**Kind:** Operator  
**Availability:** macOS 10.10+

Returns a Boolean value indicating whether the value of the first argument is less than that of the second argument.

## Declaration

```swift
static func < (lhs: Self, rhs: Self) -> Bool
```

## Parameters

- `lhs`: A value to compare.
- `rhs`: Another value to compare.

<a id="discussion"></a>

## Discussion

This function is the only requirement of the `Comparable` protocol. The remainder of the relational operator functions are implemented by the standard library for any type that conforms to `Comparable`.
