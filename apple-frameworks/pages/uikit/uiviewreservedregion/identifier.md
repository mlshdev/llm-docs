> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uiviewreservedregion/identifier

# identifier

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta · Mac Catalyst 27.1+ · tvOS 27.1+ · visionOS 27.1+

The identifier of the region.

## Declaration

```objectivec
@property (nonatomic, readonly) UIViewReservedRegionIdentifier * identifier;
```

## See Also

### Getting region details

- [frame](frame.md): The rect of the region in the view’s coordinate space, including the margins.
- [active](active.md): Whether the region is currently active.
- [kind](kind.md): The kind of the region.
- [UIViewReservedRegionKind](../uiviewreservedregionkind.md): A kind of reserved region.
- [UIViewReservedRegionIdentifier](../uiviewreservedregionidentifier.md): An identifier of a reserved region.
- [margins](margins.md): The margins included in the frame around the reserved rect for interactive content.
