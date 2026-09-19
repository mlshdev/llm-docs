> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/tabulardata/filledcolumn/subscript(_:)

# subscript(\_:)

**Framework:** TabularData  
**Kind:** Instance Subscript  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Retrieves an element at a position in the column type.

## Declaration

```swift
subscript(position: Base.Index) -> Base.WrappedElement { get }
```

## Parameters

- `position`: A valid index in the column type.
