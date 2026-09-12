> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/contiguousarray/subscript(_:)-57hw](https://developer.apple.com/documentation/swift/contiguousarray/subscript(_:)-57hw)

# subscript(\_:)

**Framework:** Swift  
**Kind:** Instance Subscript  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Accesses a view of this collection with the elements at the given indices.

## Declaration

```swift
subscript(subranges: RangeSet<Self.Index>) -> DiscontiguousSlice<Self> { get }
```

## Parameters

- `subranges`: The indices of the elements to retrieve from this collection.

<a id="return-value"></a>

## Return Value

A collection of the elements at the positions in `subranges`.

<a id="overview"></a>

## Overview

> **Complexity**

> O(1)
