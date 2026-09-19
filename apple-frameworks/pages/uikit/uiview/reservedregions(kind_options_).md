> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uiview/reservedregions(kind:options:)

# reservedRegions(kind:options:)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta

Returns the reserved regions of a given kind and options.

## Declaration

```swift
@MainActor @preconcurrency func reservedRegions(kind: UIView.ReservedRegion.Kind, options: UIView.ReservedRegion.QueryOptions = []) -> [UIView.ReservedRegion]
```

## Parameters

- `kind`: The kind of the region.
- `options`: The options for querying the reserved regions.

## See Also

### Reserved regions

- [UIView.ReservedRegion](reservedregion.md): Beta. A region within a view’s coordinate space that another entity occupies.
