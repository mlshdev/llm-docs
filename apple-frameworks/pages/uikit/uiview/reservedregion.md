> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uiview/reservedregion

# UIView.ReservedRegion

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta · Mac Catalyst 27.1+ beta · tvOS 27.1+ · visionOS 27.1+

A region within a view’s coordinate space that another entity occupies.

## Declaration

```swift
struct ReservedRegion
```

<a id="overview"></a>

## Overview

A reserved region indicates that another entity occupies an area within a view’s coordinate space that the view doesn’t own. Arrange your view content to account for this region. Each region describes a frame, margins, active state, and an identifier.

There are two categories of reserved regions:

- **[occlusion](reservedregion/kind-swift.struct/occlusion.md)**: An area where an element, such as the Dynamic Island, a camera, or window controls, occludes content.
- **[division](reservedregion/kind-swift.struct/division.md)**: An area where content splits into separate regions, such as at the fold of a hinge.

Read reserved regions using the [reservedRegions(kind:options:)](reservedregions%28kind_options_%29.md) method, which returns all of the reserved regions that currently intersect your view regardless of whether they are currently active.

## Topics

### Getting region details

- [frame](reservedregion/frame.md): The rectangle of the region in the view’s coordinate space, including the margins.
- [isActive](reservedregion/isactive.md): A Boolean value that indicates whether the region is currently active.
- [kind](reservedregion/kind-swift.property.md): The kind of the region.
- [UIView.ReservedRegion.Kind](reservedregion/kind-swift.struct.md): A kind of reserved region.
- [margins](reservedregion/margins.md): The margins included in the frame around the reserved region for interactive content.

### Querying reserved regions

- [UIView.ReservedRegion.QueryOptions](reservedregion/queryoptions.md): Options for querying reserved regions.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)

## See Also

### Reserved regions

- [reservedRegions(kind:options:)](reservedregions%28kind_options_%29.md): Returns the reserved regions of a given kind and options.
