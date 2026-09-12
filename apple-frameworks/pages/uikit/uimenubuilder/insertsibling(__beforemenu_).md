> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uimenubuilder/insertsibling(_:beforemenu:)](https://developer.apple.com/documentation/uikit/uimenubuilder/insertsibling(_:beforemenu:))

# insertSibling(\_:beforeMenu:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Inserts a sibling menu before the specified menu.

## Declaration

```swift
func insertSibling(_ siblingMenu: UIMenu, beforeMenu siblingIdentifier: UIMenu.Identifier)
```

## Parameters

- `siblingMenu`: The sibling menu to insert.
- `siblingIdentifier`: The identifier of the menu that comes after the inserted sibling menu.

## See Also

### Inserting sibling menus

- [insertSibling(\_:afterMenu:)](insertsibling%28__aftermenu_%29.md): Inserts a sibling menu after the specified menu.

# insertSiblingMenu:beforeMenuForIdentifier: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Inserts a sibling menu before the specified menu.

## Declaration

```objectivec
- (void) insertSiblingMenu:(UIMenu *) siblingMenu beforeMenuForIdentifier:(UIMenuIdentifier) siblingIdentifier;
```

## Parameters

- `siblingMenu`: The sibling menu to insert.
- `siblingIdentifier`: The identifier of the menu that comes after the inserted sibling menu.

## See Also

### Inserting sibling menus

- [insertSiblingMenu:afterMenuForIdentifier:](insertsibling%28__aftermenu_%29.md): Inserts a sibling menu after the specified menu.
