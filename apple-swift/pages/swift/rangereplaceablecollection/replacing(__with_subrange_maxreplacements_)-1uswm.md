> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/rangereplaceablecollection/replacing(_:with:subrange:maxreplacements:)-1uswm](https://developer.apple.com/documentation/swift/rangereplaceablecollection/replacing(_:with:subrange:maxreplacements:)-1uswm)

# replacing(\_:with:subrange:maxReplacements:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Returns a new collection in which all occurrences of a target sequence are replaced by another collection.

## Declaration

```swift
func replacing<C, Replacement>(_ other: C, with replacement: Replacement, subrange: Range<Self.Index>, maxReplacements: Int = .max) -> Self where C : Collection, Replacement : Collection, Self.Element == C.Element, C.Element == Replacement.Element
```

## Parameters

- `other`: The sequence to replace.
- `replacement`: The new elements to add to the collection.
- `subrange`: The range in the collection in which to search for `other`.
- `maxReplacements`: A number specifying how many occurrences of `other` to replace. Default is `Int.max`.

<a id="return-value"></a>

## Return Value

A new collection in which all occurrences of `other` in `subrange` of the collection are replaced by `replacement`.
