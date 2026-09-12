> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uimenubuilder/insertchild(_:atendofmenu:)](https://developer.apple.com/documentation/uikit/uimenubuilder/insertchild(_:atendofmenu:))

# insertChild(\_:atEndOfMenu:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Adds a child menu as the last element of the specified parent menu.

## Declaration

```swift
func insertChild(_ childMenu: UIMenu, atEndOfMenu parentIdentifier: UIMenu.Identifier)
```

## Parameters

- `childMenu`: The child menu to insert.
- `parentIdentifier`: The identifier of the parent menu in which to insert the child menu.

## See Also

### Inserting child menus

- [insertChild(\_:atStartOfMenu:)](insertchild%28__atstartofmenu_%29.md): Adds a child menu as the first element of the specified parent menu.

# insertChildMenu:atEndOfMenuForIdentifier: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Adds a child menu as the last element of the specified parent menu.

## Declaration

```objectivec
- (void) insertChildMenu:(UIMenu *) childMenu atEndOfMenuForIdentifier:(UIMenuIdentifier) parentIdentifier;
```

## Parameters

- `childMenu`: The child menu to insert.
- `parentIdentifier`: The identifier of the parent menu in which to insert the child menu.

## See Also

### Inserting child menus

- [insertChildMenu:atStartOfMenuForIdentifier:](insertchild%28__atstartofmenu_%29.md): Adds a child menu as the first element of the specified parent menu.
