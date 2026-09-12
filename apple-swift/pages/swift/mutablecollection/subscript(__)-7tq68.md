> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/mutablecollection/subscript(_:)-7tq68](https://developer.apple.com/documentation/swift/mutablecollection/subscript(_:)-7tq68)

# subscript(\_:)

**Framework:** Swift  
**Kind:** Instance Subscript  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Accesses the element at the specified position.

## Declaration

```swift
override subscript(position: Self.Index) -> Self.Element { get set }
```

## Parameters

- `position`: The position of the element to access. `position` must be a valid index of the collection that is not equal to the `endIndex` property.

<a id="overview"></a>

## Overview

For example, you can replace an element of an array by using its subscript.

```swift
var streets = ["Adams", "Bryant", "Channing", "Douglas", "Evarts"]
streets[1] = "Butler"
print(streets[1])
// Prints "Butler"
```

You can subscript a collection with any valid index other than the collection’s end index. The end index refers to the position one past the last element of a collection, so it doesn’t correspond with an element.

> **Complexity**

> O(1)

## Default Implementations

### MutableCollection Implementations

- [subscript(\_:)](subscript%28__%29-1wd4v.md)
- [subscript(\_:)](subscript%28__%29-2qem1.md): Conforms when `SubSequence` is `Slice<Self>`. Accesses a contiguous subrange of the collection’s elements.
- [subscript(\_:)](subscript%28__%29-37d4d.md)
