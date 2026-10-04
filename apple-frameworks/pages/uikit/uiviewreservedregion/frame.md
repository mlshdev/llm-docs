> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uiviewreservedregion/frame

# frame

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta · Mac Catalyst 27.1+ · tvOS 27.1+ · visionOS 27.1+

The rect of the region in the view’s coordinate space, including the margins.

## Declaration

```objectivec
@property (nonatomic, readonly) CGRect frame;
```

## See Also

### Getting region details

- [active](active.md): Whether the region is currently active.
- [kind](kind.md): The kind of the region.
- [UIViewReservedRegionKind](../uiviewreservedregionkind.md): A kind of reserved region.
- [identifier](identifier.md): The identifier of the region.
- [UIViewReservedRegionIdentifier](../uiviewreservedregionidentifier.md): An identifier of a reserved region.
- [margins](margins.md): The margins included in the frame around the reserved rect for interactive content.
