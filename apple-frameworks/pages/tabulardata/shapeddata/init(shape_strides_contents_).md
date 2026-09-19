> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/tabulardata/shapeddata/init(shape:strides:contents:)

# init(shape:strides:contents:)

**Framework:** TabularData  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates a multidimensional shaped array from a one-dimensional array.

## Declaration

```swift
init(shape: [Int], strides: [Int], contents: [Element])
```

## Parameters

- `shape`: An integer array that stores the size of each dimension in the corresponding element.
- `strides`: An integer array that stores the number of memory locations that span the length of each dimension in the corresponding element.
- `contents`: A linear array that stores the elements of the multidimensional array.
