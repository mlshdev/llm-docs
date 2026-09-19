> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uiviewreservedregion/identifier

# identifier

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta

The identifier of the region.

## Declaration

```objectivec
@property (nonatomic, readonly) UIViewReservedRegionIdentifier * identifier;
```

## See Also

### Getting region details

- [frame](frame.md): Beta. The rect of the region in the view’s coordinate space, including the margins.
- [active](active.md): Beta. Whether the region is currently active.
- [kind](kind.md): Beta. The kind of the region.
- [UIViewReservedRegionKind](../uiviewreservedregionkind.md): Beta. A kind of reserved region.
- [UIViewReservedRegionIdentifier](../uiviewreservedregionidentifier.md): Beta. An identifier of a reserved region.
- [margins](margins.md): Beta. The margins included in the frame around the reserved rect for interactive content.
