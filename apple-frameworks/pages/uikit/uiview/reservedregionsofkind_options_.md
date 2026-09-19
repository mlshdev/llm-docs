> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uiview/reservedregionsofkind:options:

# reservedRegionsOfKind:options:

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta

Returns the reserved regions of a given kind and options.

## Declaration

```objectivec
- (NSArray<UIViewReservedRegion *> *) reservedRegionsOfKind:(UIViewReservedRegionKind *) kind options:(UIViewReservedRegionQueryOptions) options;
```

## See Also

### Inspecting reserved regions

- [UIViewReservedRegion](../uiviewreservedregion.md): Beta. A region within a view’s coordinate space that another entity occupies.
- [reservedRegionsOfKind:](reservedregionsofkind_.md): Beta. Returns the reserved regions of a given kind.
