> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/string/subscript(_:)-4h7s3](https://developer.apple.com/documentation/swift/string/subscript(_:)-4h7s3)

# subscript(\_:)

**Framework:** Swift  
**Kind:** Instance Subscript  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Accesses the contiguous subrange of the collection’s elements specified by a range expression.

## Declaration

```swift
subscript<R>(r: R) -> Self.SubSequence where R : RangeExpression, Self.Index == R.Bound { get }
```

## Parameters

- `r`: A range of the collection’s indices. The bounds of the range must be valid indices of the collection.

<a id="overview"></a>

## Overview

The range expression is converted to a concrete subrange relative to this collection. For example, using a `PartialRangeFrom` range expression with an array accesses the subrange from the start of the range expression until the end of the array.

```swift
let streets = ["Adams", "Bryant", "Channing", "Douglas", "Evarts"]
let streetsSlice = streets[2...]
print(streetsSlice)
// ["Channing", "Douglas", "Evarts"]
```

The accessed slice uses the same indices for the same elements as the original collection uses. This example searches `streetsSlice` for one of the strings in the slice, and then uses that index in the original array.

```swift
let index = streetsSlice.firstIndex(of: "Evarts")    // 4
print(streets[index!])
// "Evarts"
```

Always use the slice’s `startIndex` property instead of assuming that its indices start at a particular value. Attempting to access an element by using an index outside the bounds of the slice’s indices may result in a runtime error, even if that index is valid for the original collection.

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

## See Also

### Getting Substrings

- [subscript(\_:)](subscript%28__%29-2so14.md): Accesses a contiguous subrange of the collection’s elements.
- [subscript(\_:)](subscript%28__%29-4al9c.md)
- [prefix(\_:)](prefix%28__%29.md): Returns a subsequence, up to the specified maximum length, containing the initial elements of the collection.
- [prefix(through:)](prefix%28through_%29.md): Returns a subsequence from the start of the collection through the specified position.
- [prefix(upTo:)](prefix%28upto_%29.md): Returns a subsequence from the start of the collection up to, but not including, the specified position.
- [prefix(while:)](prefix%28while_%29.md): Returns a subsequence containing the initial elements until `predicate` returns `false` and skipping the remaining elements.
- [suffix(\_:)](suffix%28__%29.md): Returns a subsequence, up to the given maximum length, containing the final elements of the collection.
- [suffix(from:)](suffix%28from_%29.md): Returns a subsequence from the specified position to the end of the collection.
