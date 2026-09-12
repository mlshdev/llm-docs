> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibarbuttonitemgroup/fixedgroup(representativeitem:items:)](https://developer.apple.com/documentation/uikit/uibarbuttonitemgroup/fixedgroup(representativeitem:items:))

# fixedGroup(representativeItem:items:)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS

Creates a fixed group that a person can’t move or remove from the navigation bar during layout customization.

## Declaration

```swift
@MainActor @preconcurrency class func fixedGroup(representativeItem: UIBarButtonItem? = nil, items: [UIBarButtonItem]) -> UIBarButtonItemGroup
```

## Parameters

- `representativeItem`: The item to display for the group when space is constrained.
- `items`: The items to include in the group.

## See Also

### Creating a group

- [movableGroup(customizationIdentifier:representativeItem:items:)](movablegroup%28customizationidentifier_representativeitem_items_%29.md): Creates a movable group that a person can move but can’t remove from the navigation bar during layout customization.
- [optionalGroup(customizationIdentifier:isInDefaultCustomization:representativeItem:items:)](optionalgroup%28customizationidentifier_isindefaultcustomization_representativeitem_items_%29.md): Creates an optional group that a person can move, add to, or remove from the navigation bar during layout customization.
- [init(barButtonItems:representativeItem:)](init%28barbuttonitems_representativeitem_%29.md): Creates a fixed group with the specified items.
- [init(coder:)](init%28coder_%29.md): Creates a bar button item group from data in an unarchiver.
