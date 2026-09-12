> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibarbuttonitem/creatingfixedgroup()](https://developer.apple.com/documentation/uikit/uibarbuttonitem/creatingfixedgroup())

# creatingFixedGroup() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Places the item in a fixed group that a person can’t move or remove from the navigation bar during layout customization.

## Declaration

```swift
func creatingFixedGroup() -> UIBarButtonItemGroup
```

<a id="return-value"></a>

## Return Value

A [UIBarButtonItemGroup](../uibarbuttonitemgroup.md) that contains only this bar button item.

<a id="Discussion"></a>

## Discussion

A bar button item can only belong to one [UIBarButtonItemGroup](../uibarbuttonitemgroup.md). If you add a bar button item to a new group, the system removes it from its previous group.

## See Also

### Creating groups

- [creatingOptionalGroup(customizationIdentifier:isInDefaultCustomization:)](creatingoptionalgroup%28customizationidentifier_isindefaultcustomization_%29.md): Places the item in an optional group that a person can move, add to, or remove from the navigation bar during layout customization.
- [creatingMovableGroup(customizationIdentifier:)](creatingmovablegroup%28customizationidentifier_%29.md): Places the item in a movable group that a person can move but can’t remove from the navigation bar during layout customization.

# creatingFixedGroup (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Places the item in a fixed group that a person can’t move or remove from the navigation bar during layout customization.

## Declaration

```objectivec
- (UIBarButtonItemGroup *) creatingFixedGroup;
```

<a id="return-value"></a>

## Return Value

A [UIBarButtonItemGroup](../uibarbuttonitemgroup.md) that contains only this bar button item.

<a id="Discussion"></a>

## Discussion

A bar button item can only belong to one [UIBarButtonItemGroup](../uibarbuttonitemgroup.md). If you add a bar button item to a new group, the system removes it from its previous group.

## See Also

### Creating groups

- [creatingMovableGroupWithCustomizationIdentifier:](creatingmovablegroup%28customizationidentifier_%29.md): Places the item in a movable group that a person can move but can’t remove from the navigation bar during layout customization.
- [creatingOptionalGroupWithCustomizationIdentifier:inDefaultCustomization:](creatingoptionalgroupwithcustomizationidentifier_indefaultcustomization_.md): Places the item in an optional group that a person can move, add to, or remove from the navigation bar during layout customization.
