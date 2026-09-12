> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/range/upperbound](https://developer.apple.com/documentation/swift/range/upperbound)

# upperBound

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The range’s upper bound.

## Declaration

```swift
let upperBound: Bound
```

<a id="discussion"></a>

## Discussion

In an empty range, `upperBound` is equal to `lowerBound`. A `Range` instance does not contain its upper bound.

## See Also

### Inspecting a Range

- [isEmpty](isempty.md): A Boolean value indicating whether the range contains no elements.
- [lowerBound](lowerbound.md): The range’s lower bound.
