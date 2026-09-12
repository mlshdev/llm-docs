> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibarbuttonitemgroup/fixedgroupwithrepresentativeitem:items:](https://developer.apple.com/documentation/uikit/uibarbuttonitemgroup/fixedgroupwithrepresentativeitem:items:)

# fixedGroupWithRepresentativeItem:items:

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Creates a fixed group that a person can’t move or remove from the navigation bar during layout customization.

## Declaration

```objectivec
+ (UIBarButtonItemGroup *) fixedGroupWithRepresentativeItem:(UIBarButtonItem *) representativeItem items:(NSArray<UIBarButtonItem *> *) items;
```

## Parameters

- `representativeItem`: The item to display for the group when space is constrained.
- `items`: The items to include in the group.

## See Also

### Creating a group

- [movableGroupWithCustomizationIdentifier:representativeItem:items:](movablegroupwithcustomizationidentifier_representativeitem_items_.md): Creates a movable group that a person can move but can’t remove from the navigation bar during layout customization.
- [optionalGroupWithCustomizationIdentifier:inDefaultCustomization:representativeItem:items:](optionalgroupwithcustomizationidentifier_indefaultcustomization_representativeitem_items_.md): Creates an optional group that a person can move, add to, or remove from the navigation bar during layout customization.
- [initWithBarButtonItems:representativeItem:](init%28barbuttonitems_representativeitem_%29.md): Creates a fixed group with the specified items.
- [initWithCoder:](init%28coder_%29.md): Creates a bar button item group from data in an unarchiver.
