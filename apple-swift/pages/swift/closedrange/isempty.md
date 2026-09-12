> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/closedrange/isempty](https://developer.apple.com/documentation/swift/closedrange/isempty)

# isEmpty

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value indicating whether the range contains no elements.

## Declaration

```swift
var isEmpty: Bool { get }
```

<a id="discussion"></a>

## Discussion

Because a closed range cannot represent an empty range, this property is always `false`.

## See Also

### Inspecting a Range

- [lowerBound](lowerbound.md): The range’s lower bound.
- [upperBound](upperbound.md): The range’s upper bound.
