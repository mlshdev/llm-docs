> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/array/subsequence](https://developer.apple.com/documentation/swift/array/subsequence)

# Array.SubSequence

**Framework:** Swift  
**Kind:** Type Alias  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A collection representing a contiguous subrange of this collection’s elements. The subsequence shares indices with the original collection.

## Declaration

```swift
typealias SubSequence = ArraySlice<Element>
```

<a id="discussion"></a>

## Discussion

The default subsequence type for collections that don’t define their own is `Slice`.

## See Also

### Supporting Types

- [Array.Index](index.md): The index type for arrays, `Int`.
- [Array.Indices](indices.md): The type that represents the indices that are valid for subscripting an array, in ascending order.
- [Array.Iterator](iterator.md): The type that allows iteration over an array’s elements.
- [Array.ArrayLiteralElement](arrayliteralelement.md): The type of the elements of an array literal.
