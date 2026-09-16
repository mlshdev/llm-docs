> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/never/_=(_:_:)-7u3hd

# \<=(\_:\_:)

**Framework:** Swift  
**Kind:** Operator  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

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
