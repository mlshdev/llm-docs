> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/range/isempty](https://developer.apple.com/documentation/swift/range/isempty)

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

An empty `Range` instance has equal lower and upper bounds.

```swift
let empty: Range = 10..<10
print(empty.isEmpty)
// Prints "true"
```

## See Also

### Inspecting a Range

- [lowerBound](lowerbound.md): The range’s lower bound.
- [upperBound](upperbound.md): The range’s upper bound.
