> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/uint/_(_:_:)-3r6zk](https://developer.apple.com/documentation/swift/uint/_(_:_:)-3r6zk)

# \<(\_:\_:)

**Framework:** Swift  
**Kind:** Operator  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value indicating whether the value of the first argument is less than that of the second argument.

## Declaration

```swift
static func < <Other>(lhs: Self, rhs: Other) -> Bool where Other : BinaryInteger
```

## Parameters

- `lhs`: An integer to compare.
- `rhs`: Another integer to compare.

<a id="discussion"></a>

## Discussion

You can compare instances of any `BinaryInteger` types using the less-than operator (`<`), even if the two instances are of different types.
