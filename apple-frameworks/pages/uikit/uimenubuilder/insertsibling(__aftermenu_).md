> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uimenubuilder/insertsibling(_:aftermenu:)](https://developer.apple.com/documentation/uikit/uimenubuilder/insertsibling(_:aftermenu:))

# insertSibling(\_:afterMenu:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Inserts a sibling menu after the specified menu.

## Declaration

```swift
func insertSibling(_ siblingMenu: UIMenu, afterMenu siblingIdentifier: UIMenu.Identifier)
```

## Parameters

- `siblingMenu`: The sibling menu to insert.
- `siblingIdentifier`: The identifier of the menu that comes before the inserted sibling menu.

## See Also

### Inserting sibling menus

- [insertSibling(\_:beforeMenu:)](insertsibling%28__beforemenu_%29.md): Inserts a sibling menu before the specified menu.

# insertSiblingMenu:afterMenuForIdentifier: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Inserts a sibling menu after the specified menu.

## Declaration

```objectivec
- (void) insertSiblingMenu:(UIMenu *) siblingMenu afterMenuForIdentifier:(UIMenuIdentifier) siblingIdentifier;
```

## Parameters

- `siblingMenu`: The sibling menu to insert.
- `siblingIdentifier`: The identifier of the menu that comes before the inserted sibling menu.

## See Also

### Inserting sibling menus

- [insertSiblingMenu:beforeMenuForIdentifier:](insertsibling%28__beforemenu_%29.md): Inserts a sibling menu before the specified menu.
