> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/column/subscript(_:)-56i2s](https://developer.apple.com/documentation/tabulardata/column/subscript(_:)-56i2s)

# subscript(\_:)

**Framework:** TabularData  
**Kind:** Instance Subscript  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Returns a column slice that includes elements that correspond to a collection of Booleans.

## Declaration

```swift
subscript<C>(mask: C) -> DiscontiguousColumnSlice<WrappedElement> where C : Collection, C.Element == Bool { get }
```

## Parameters

- `mask`: A Boolean collection. The subscript returns a slice that includes the column elements that correspond to the `true` elements in `mask`.

<a id="overview"></a>

## Overview

You can create a Boolean column for this subscript by comparing a column to a value of the column elements’ type.

```swift
let followerColumn = artists["Followers", Int.self].filled(with: 0)
let popularArtists = artists[followerColumn > 10_000_000]
```
