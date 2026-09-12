> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/slice/removesubrange(_:)-7s7x9](https://developer.apple.com/documentation/swift/slice/removesubrange(_:)-7s7x9)

# removeSubrange(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Removes the specified subrange of elements from the collection.

## Declaration

```swift
mutating func removeSubrange(_ bounds: Range<Slice<Base>.Index>)
```

## Parameters

- `bounds`: The subrange of the collection to remove. The bounds of the range must be valid indices of the collection.

<a id="discussion"></a>

## Discussion

```swift
var bugs = ["Aphid", "Bumblebee", "Cicada", "Damselfly", "Earwig"]
bugs.removeSubrange(1...3)
print(bugs)
// Prints "["Aphid", "Earwig"]"
```

Calling this method may invalidate any existing indices for use with this collection.

> **Complexity**

> O(*n*), where *n* is the length of the collection.
