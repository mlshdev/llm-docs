> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/array/movesubranges(_:to:)](https://developer.apple.com/documentation/swift/array/movesubranges(_:to:))

# moveSubranges(\_:to:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Moves the elements in the given subranges to just before the element at the specified index.

## Declaration

```swift
@discardableResult mutating func moveSubranges(_ subranges: RangeSet<Self.Index>, to insertionPoint: Self.Index) -> Range<Self.Index>
```

## Parameters

- `subranges`: The subranges of the elements to move.
- `insertionPoint`: The index to use as the destination of the elements.

<a id="return-value"></a>

## Return Value

The new bounds of the moved elements.

<a id="discussion"></a>

## Discussion

This example finds all the uppercase letters in the array and then moves them to between `"i"` and `"j"`.

```swift
var letters = Array("ABCdeFGhijkLMNOp")
let uppercaseRanges = letters.indices(where: { $0.isUppercase })
let rangeOfUppercase = letters.moveSubranges(uppercaseRanges, to: 10)
// String(letters) == "dehijABCFGLMNOkp"
// rangeOfUppercase == 5..<14
```

> **Complexity**

> O(*n* log *n*) where *n* is the length of the collection.
