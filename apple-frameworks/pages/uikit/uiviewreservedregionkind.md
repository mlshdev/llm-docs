> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uiviewreservedregionkind

# UIViewReservedRegionKind

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta

A kind of reserved region.

## Declaration

```objectivec
@interface UIViewReservedRegionKind : NSObject
```

## Topics

### Specifying a reserved region

- [divisionRegionKind](uiviewreservedregionkind/divisionregionkind.md): Beta. A region where an element should divide into two separate regions.
- [occlusionRegionKind](uiviewreservedregionkind/occlusionregionkind.md): Beta. A region that is occluded by an element.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Getting region details

- [frame](uiviewreservedregion/frame.md): Beta. The rect of the region in the view’s coordinate space, including the margins.
- [active](uiviewreservedregion/active.md): Beta. Whether the region is currently active.
- [kind](uiviewreservedregion/kind.md): Beta. The kind of the region.
- [identifier](uiviewreservedregion/identifier.md): Beta. The identifier of the region.
- [UIViewReservedRegionIdentifier](uiviewreservedregionidentifier.md): Beta. An identifier of a reserved region.
- [margins](uiviewreservedregion/margins.md): Beta. The margins included in the frame around the reserved rect for interactive content.
