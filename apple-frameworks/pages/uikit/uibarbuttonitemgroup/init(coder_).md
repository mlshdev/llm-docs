> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibarbuttonitemgroup/init(coder:)](https://developer.apple.com/documentation/uikit/uibarbuttonitemgroup/init(coder:))

# init(coder:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Creates a bar button item group from data in an unarchiver.

## Declaration

```swift
init?(coder: NSCoder)
```

## See Also

### Creating a group

- [fixedGroup(representativeItem:items:)](fixedgroup%28representativeitem_items_%29.md): Creates a fixed group that a person can’t move or remove from the navigation bar during layout customization.
- [movableGroup(customizationIdentifier:representativeItem:items:)](movablegroup%28customizationidentifier_representativeitem_items_%29.md): Creates a movable group that a person can move but can’t remove from the navigation bar during layout customization.
- [optionalGroup(customizationIdentifier:isInDefaultCustomization:representativeItem:items:)](optionalgroup%28customizationidentifier_isindefaultcustomization_representativeitem_items_%29.md): Creates an optional group that a person can move, add to, or remove from the navigation bar during layout customization.
- [init(barButtonItems:representativeItem:)](init%28barbuttonitems_representativeitem_%29.md): Creates a fixed group with the specified items.

# initWithCoder: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Creates a bar button item group from data in an unarchiver.

## Declaration

```objectivec
- (instancetype) initWithCoder:(NSCoder *) coder;
```

## See Also

### Creating a group

- [fixedGroupWithRepresentativeItem:items:](fixedgroupwithrepresentativeitem_items_.md): Creates a fixed group that a person can’t move or remove from the navigation bar during layout customization.
- [movableGroupWithCustomizationIdentifier:representativeItem:items:](movablegroupwithcustomizationidentifier_representativeitem_items_.md): Creates a movable group that a person can move but can’t remove from the navigation bar during layout customization.
- [optionalGroupWithCustomizationIdentifier:inDefaultCustomization:representativeItem:items:](optionalgroupwithcustomizationidentifier_indefaultcustomization_representativeitem_items_.md): Creates an optional group that a person can move, add to, or remove from the navigation bar during layout customization.
- [initWithBarButtonItems:representativeItem:](init%28barbuttonitems_representativeitem_%29.md): Creates a fixed group with the specified items.
