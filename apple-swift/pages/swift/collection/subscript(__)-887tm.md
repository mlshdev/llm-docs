> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/collection/subscript(_:)-887tm](https://developer.apple.com/documentation/swift/collection/subscript(_:)-887tm)

# subscript(\_:)

**Framework:** Swift  
**Kind:** Instance Subscript  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Accesses the element at the specified position.

## Declaration

```swift
subscript(position: Self.Index) -> Self.Element { get }
```

## Parameters

- `position`: The position of the element to access. `position` must be a valid index of the collection that is not equal to the `endIndex` property.

<a id="overview"></a>

## Overview

The following example accesses an element of an array through its subscript to print its value:

```swift
var streets = ["Adams", "Bryant", "Channing", "Douglas", "Evarts"]
print(streets[1])
// Prints "Bryant"
```

You can subscript a collection with any valid index other than the collection’s end index. The end index refers to the position one past the last element of a collection, so it doesn’t correspond with an element.

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
