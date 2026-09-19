> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/tabulardata/anycolumn/subscript(_:)-3658g

# subscript(\_:)

**Framework:** TabularData  
**Kind:** Instance Subscript  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Returns a slice of the column by selecting elements with a collection of Booleans.

## Declaration

```swift
subscript<C>(mask: C) -> AnyColumnSlice where C : Collection, C.Element == Bool { get }
```

## Parameters

- `mask`: A collection of Booleans. The method selects the column’s elements that correspond to the `true` elements in the collection.
