> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/rangereplaceablecollection/subscript(_:)-1x7vz](https://developer.apple.com/documentation/swift/rangereplaceablecollection/subscript(_:)-1x7vz)

# subscript(\_:)

**Framework:** Swift  
**Kind:** Instance Subscript  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Accesses the element at the specified position.

## Declaration

```swift
override subscript(position: Self.Index) -> Self.Element { get }
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
