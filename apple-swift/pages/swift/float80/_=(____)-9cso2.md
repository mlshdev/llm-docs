> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/float80/_=(_:_:)-9cso2](https://developer.apple.com/documentation/swift/float80/_=(_:_:)-9cso2)

# \<=(\_:\_:)

**Framework:** Swift  
**Kind:** Operator  
**Availability:** macOS 10.10+

Returns a Boolean value indicating whether the value of the first argument is less than or equal to that of the second argument.

## Declaration

```swift
static func <= (lhs: borrowing Self, rhs: borrowing Self) -> Bool
```

## Parameters

- `lhs`: A value to compare.
- `rhs`: Another value to compare.

<a id="discussion"></a>

## Discussion

This is the default implementation of the less-than-or-equal-to operator (`<=`) for any type that conforms to `Comparable`.
