> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uiviewreservedregion

# UIViewReservedRegion

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta

A region within a view’s coordinate space that another entity occupies.

## Declaration

```objectivec
@interface UIViewReservedRegion : NSObject
```

<a id="overview"></a>

## Overview

A reserved region indicates that another entity occupies an area within a view’s coordinate space that the view doesn’t own. Arrange your view content to account for this region. Each region describes a frame, margins, active state, and an identifier.

There are two categories of reserved regions:

- **[occlusionRegionKind](uiviewreservedregionkind/occlusionregionkind.md)**: An area where an element, such as the Dynamic Island, a camera, or window controls, occludes content.
- **[divisionRegionKind](uiviewreservedregionkind/divisionregionkind.md)**: An area where content splits into separate regions, such as at the fold of a hinge.

Read reserved regions using the [reservedRegionsOfKind:options:](uiview/reservedregionsofkind_options_.md) method, which returns all of the reserved regions that currently intersect your view regardless of whether they are currently active.

## Topics

### Getting region details

- [frame](uiviewreservedregion/frame.md): Beta. The rect of the region in the view’s coordinate space, including the margins.
- [active](uiviewreservedregion/active.md): Beta. Whether the region is currently active.
- [kind](uiviewreservedregion/kind.md): Beta. The kind of the region.
- [UIViewReservedRegionKind](uiviewreservedregionkind.md): Beta. A kind of reserved region.
- [identifier](uiviewreservedregion/identifier.md): Beta. The identifier of the region.
- [UIViewReservedRegionIdentifier](uiviewreservedregionidentifier.md): Beta. An identifier of a reserved region.
- [margins](uiviewreservedregion/margins.md): Beta. The margins included in the frame around the reserved rect for interactive content.

### Querying reserved regions

- [UIViewReservedRegionQueryOptions](uiviewreservedregionqueryoptions.md): Beta. Options for querying reserved regions.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Inspecting reserved regions

- [reservedRegionsOfKind:](uiview/reservedregionsofkind_.md): Beta. Returns the reserved regions of a given kind.
- [reservedRegionsOfKind:options:](uiview/reservedregionsofkind_options_.md): Beta. Returns the reserved regions of a given kind and options.
