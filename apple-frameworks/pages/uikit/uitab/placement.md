> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitab/placement](https://developer.apple.com/documentation/uikit/uitab/placement)

# UITab.Placement (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+

A tab’s placement when displayed in contexts that allow different placement.

## Declaration

```swift
enum Placement
```

## Topics

### Placement values

- [UITab.Placement.automatic](placement/automatic.md): The system adds only top-level items to the tab bar, but people can add, remove, or move this item.
- [UITab.Placement.default](placement/default.md): The item appears in the tab bar, but people can move or remove it.
- [UITab.Placement.fixed](placement/fixed.md): The item appears in the tab bar’s leading edge, and people can’t move or remove it.
- [UITab.Placement.movable](placement/movable.md): The item appears in the tab bar, people can move it but can’t remove it.
- [UITab.Placement.optional](placement/optional.md): The item doesn’t appear in the tab bar, but people can add it and move it.
- [UITab.Placement.pinned](placement/pinned.md): The item appears as a pinned tab, on the trailing edge of the tab bar.
- [UITab.Placement.sidebarOnly](placement/sidebaronly.md): The item only appears in the sidebar.

### Initializers

- [init(rawValue:)](placement/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing customization

- [isHidden](ishidden.md): A Boolean value that indicates whether an item is hidden in a sidebar.
- [isHiddenByDefault](ishiddenbydefault.md): A Boolean value that indicates whether an item is hidden by default.
- [allowsHiding](allowshiding.md): A Boolean value that indicates whether people can hide a tab in a sidebar.
- [preferredPlacement](preferredplacement.md): The preferred placement for a tab when displayed in contexts that allow different placement.

# UITabPlacement (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+

A tab’s placement when displayed in contexts that allow different placement.

## Declaration

```objectivec
enum UITabPlacement : NSInteger;
```

## Topics

### Placement values

- [UITabPlacementAutomatic](placement/automatic.md): The system adds only top-level items to the tab bar, but people can add, remove, or move this item.
- [UITabPlacementDefault](placement/default.md): The item appears in the tab bar, but people can move or remove it.
- [UITabPlacementFixed](placement/fixed.md): The item appears in the tab bar’s leading edge, and people can’t move or remove it.
- [UITabPlacementMovable](placement/movable.md): The item appears in the tab bar, people can move it but can’t remove it.
- [UITabPlacementOptional](placement/optional.md): The item doesn’t appear in the tab bar, but people can add it and move it.
- [UITabPlacementPinned](placement/pinned.md): The item appears as a pinned tab, on the trailing edge of the tab bar.
- [UITabPlacementSidebarOnly](placement/sidebaronly.md): The item only appears in the sidebar.

## See Also

### Managing customization

- [hidden](ishidden.md): A Boolean value that indicates whether an item is hidden in a sidebar.
- [hiddenByDefault](ishiddenbydefault.md): A Boolean value that indicates whether an item is hidden by default.
- [allowsHiding](allowshiding.md): A Boolean value that indicates whether people can hide a tab in a sidebar.
- [preferredPlacement](preferredplacement.md): The preferred placement for a tab when displayed in contexts that allow different placement.
