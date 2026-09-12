> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/collection/subscript(_:)-1jxub](https://developer.apple.com/documentation/swift/collection/subscript(_:)-1jxub)

# subscript(\_:)

**Framework:** Swift  
**Kind:** Instance Subscript  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Accesses a contiguous subrange of the collection’s elements.

## Declaration

```swift
subscript(bounds: Range<Self.Index>) -> Self.SubSequence { get }
```

## Parameters

- `bounds`: A range of the collection’s indices. The bounds of the range must be valid indices of the collection.

<a id="overview"></a>

## Overview

For example, using a `PartialRangeFrom` range expression with an array accesses the subrange from the start of the range expression until the end of the array.

```swift
let streets = ["Adams", "Bryant", "Channing", "Douglas", "Evarts"]
let streetsSlice = streets[2..<5]
print(streetsSlice)
// ["Channing", "Douglas", "Evarts"]
```

The accessed slice uses the same indices for the same elements as the original collection. This example searches `streetsSlice` for one of the strings in the slice, and then uses that index in the original array.

```swift
let index = streetsSlice.firstIndex(of: "Evarts")!    // 4
print(streets[index])
// "Evarts"
```

Always use the slice’s `startIndex` property instead of assuming that its indices start at a particular value. Attempting to access an element by using an index outside the bounds of the slice may result in a runtime error, even if that index is valid for the original collection.

```swift
print(streetsSlice.startIndex)
// 2
print(streetsSlice[2])
// "Channing"

print(streetsSlice[0])
// error: Index out of bounds
```

> **Complexity**

> O(1)

## Default Implementations

### Collection Implementations

- [subscript(\_:)](subscript%28__%29-2ew5d.md): Accesses the contiguous subrange of the collection’s elements specified by a range expression.
- [subscript(\_:)](subscript%28__%29-593m9.md)
- [subscript(\_:)](subscript%28__%29-6dbv1.md): Accesses a view of this collection with the elements at the given indices.
- [subscript(\_:)](subscript%28__%29-6nizk.md): Conforms when `SubSequence` is `Slice<Self>`. Accesses a contiguous subrange of the collection’s elements.

### MutableCollection Implementations

- [subscript(\_:)](../mutablecollection/subscript%28__%29-1wd4v.md)
- [subscript(\_:)](../mutablecollection/subscript%28__%29-2qem1.md): Conforms when `SubSequence` is `Slice<Self>`. Accesses a contiguous subrange of the collection’s elements.
- [subscript(\_:)](../mutablecollection/subscript%28__%29-37d4d.md)
