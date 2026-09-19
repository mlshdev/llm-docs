> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/tabulardata/discontiguouscolumnslice/hash(into:)

# hash(into:)

**Framework:** TabularData  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Hashes the essential components of the column slice by feeding them into a hasher.

## Declaration

```swift
func hash(into hasher: inout Hasher)
```

## Parameters

- `hasher`: A hasher the method uses to combine the components of the column slice.
