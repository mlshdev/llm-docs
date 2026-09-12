> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibarbuttonitem/creatingoptionalgroupwithcustomizationidentifier:indefaultcustomization:](https://developer.apple.com/documentation/uikit/uibarbuttonitem/creatingoptionalgroupwithcustomizationidentifier:indefaultcustomization:)

# creatingOptionalGroupWithCustomizationIdentifier:inDefaultCustomization:

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Places the item in an optional group that a person can move, add to, or remove from the navigation bar during layout customization.

## Declaration

```objectivec
- (UIBarButtonItemGroup *) creatingOptionalGroupWithCustomizationIdentifier:(NSString *) customizationIdentifier inDefaultCustomization:(BOOL) inDefaultCustomization;
```

## Parameters

- `customizationIdentifier`: A unique string to identify the group for navigation bar layout customization.
- `inDefaultCustomization`: A Boolean that determines whether to place the group in the navigation bar by default. Specify [false](https://developer.apple.com/documentation/swift/false) if you want the group to appear in the navigation bar customization popover by default.

<a id="return-value"></a>

## Return Value

A [UIBarButtonItemGroup](../uibarbuttonitemgroup.md) that contains only this bar button item.

<a id="Discussion"></a>

## Discussion

A bar button item can only belong to one [UIBarButtonItemGroup](../uibarbuttonitemgroup.md). If you add a bar button item to a new group, the system removes it from its previous group.

## See Also

### Creating groups

- [creatingFixedGroup](creatingfixedgroup%28%29.md): Places the item in a fixed group that a person can’t move or remove from the navigation bar during layout customization.
- [creatingMovableGroupWithCustomizationIdentifier:](creatingmovablegroup%28customizationidentifier_%29.md): Places the item in a movable group that a person can move but can’t remove from the navigation bar during layout customization.
