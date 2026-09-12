> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/rangereplaceablecollection/removefirst(_:)-6mezs](https://developer.apple.com/documentation/swift/rangereplaceablecollection/removefirst(_:)-6mezs)

# removeFirst(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Removes the specified number of elements from the beginning of the collection.

## Declaration

```swift
mutating func removeFirst(_ k: Int)
```

## Parameters

- `k`: The number of elements to remove from the collection. `k` must be greater than or equal to zero and must not exceed the number of elements in the collection.

<a id="discussion"></a>

## Discussion

```swift
var bugs = ["Aphid", "Bumblebee", "Cicada", "Damselfly", "Earwig"]
bugs.removeFirst(3)
print(bugs)
// Prints "["Damselfly", "Earwig"]"
```

Calling this method may invalidate any existing indices for use with this collection.

> **Complexity**

> O(*n*), where *n* is the length of the collection.
