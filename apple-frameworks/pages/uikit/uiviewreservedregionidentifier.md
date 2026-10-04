> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uiviewreservedregionidentifier

# UIViewReservedRegionIdentifier

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta · Mac Catalyst 27.1+ · tvOS 27.1+ · visionOS 27.1+

An identifier of a reserved region.

## Declaration

```objectivec
@interface UIViewReservedRegionIdentifier : NSObject
```

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Getting region details

- [frame](uiviewreservedregion/frame.md): The rect of the region in the view’s coordinate space, including the margins.
- [active](uiviewreservedregion/active.md): Whether the region is currently active.
- [kind](uiviewreservedregion/kind.md): The kind of the region.
- [UIViewReservedRegionKind](uiviewreservedregionkind.md): A kind of reserved region.
- [identifier](uiviewreservedregion/identifier.md): The identifier of the region.
- [margins](uiviewreservedregion/margins.md): The margins included in the frame around the reserved rect for interactive content.
