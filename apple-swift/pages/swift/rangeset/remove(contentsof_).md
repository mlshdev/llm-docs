> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/rangeset/remove(contentsof:)](https://developer.apple.com/documentation/swift/rangeset/remove(contentsof:))

# remove(contentsOf:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Removes the given range from the range set.

## Declaration

```swift
mutating func remove(contentsOf range: Range<Bound>)
```

## Parameters

- `range`: The range to remove from the set.

<a id="discussion"></a>

## Discussion

> **Complexity**

> O(*n*), where *n* is the number of ranges in the range set.
