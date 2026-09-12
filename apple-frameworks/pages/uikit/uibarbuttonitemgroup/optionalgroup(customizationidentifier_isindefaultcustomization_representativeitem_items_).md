> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibarbuttonitemgroup/optionalgroup(customizationidentifier:isindefaultcustomization:representativeitem:items:)](https://developer.apple.com/documentation/uikit/uibarbuttonitemgroup/optionalgroup(customizationidentifier:isindefaultcustomization:representativeitem:items:))

# optionalGroup(customizationIdentifier:isInDefaultCustomization:representativeItem:items:)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS

Creates an optional group that a person can move, add to, or remove from the navigation bar during layout customization.

## Declaration

```swift
@MainActor @preconcurrency class func optionalGroup(customizationIdentifier: String, isInDefaultCustomization: Bool = true, representativeItem: UIBarButtonItem? = nil, items: [UIBarButtonItem]) -> UIBarButtonItemGroup
```

## Parameters

- `customizationIdentifier`: A unique string to identify the group for navigation bar layout customization.
- `isInDefaultCustomization`: A Boolean that determines whether to place the group in the navigation bar by default. Specify [false](https://developer.apple.com/documentation/swift/false) if you want the group to appear in the navigation bar customization popover by default.
- `representativeItem`: The item to display for the group when space is constrained.
- `items`: The items to include in the group.

## See Also

### Creating a group

- [fixedGroup(representativeItem:items:)](fixedgroup%28representativeitem_items_%29.md): Creates a fixed group that a person can’t move or remove from the navigation bar during layout customization.
- [movableGroup(customizationIdentifier:representativeItem:items:)](movablegroup%28customizationidentifier_representativeitem_items_%29.md): Creates a movable group that a person can move but can’t remove from the navigation bar during layout customization.
- [init(barButtonItems:representativeItem:)](init%28barbuttonitems_representativeitem_%29.md): Creates a fixed group with the specified items.
- [init(coder:)](init%28coder_%29.md): Creates a bar button item group from data in an unarchiver.
