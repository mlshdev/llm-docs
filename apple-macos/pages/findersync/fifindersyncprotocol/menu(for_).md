> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/findersync/fifindersyncprotocol/menu(for:)](https://developer.apple.com/documentation/findersync/fifindersyncprotocol/menu(for:))

# menu(for:) (Swift)

**Framework:** Finder Sync  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Requests a custom menu from the extension.

## Declaration

```swift
optional func menu(for menu: FIMenuKind) -> NSMenu?
```

## Parameters

- `menu`: The type of menu being displayed. For a list of possible values, see [FIMenuKind](../fimenukind.md).

<a id="return-value"></a>

## Return Value

A custom menu.

<a id="discussion"></a>

## Discussion

Override this method to provide custom menus in the Finder. You can customize this menu based both on the menu’s kind and on the selected and targeted items (if any). You can get the selected and targeted items from the extension’s [FIFinderSyncController](../fifindersynccontroller.md).

If `kind` is `FIMenuKindToolbarItemMenu`, the system always calls this method even if the target and selection are not related to the extension.

The extension’s principal object provides a method for each menu item’s assigned action.

## See Also

### Related Documentation

- [targetedURL()](../fifindersynccontroller/targetedurl%28%29.md): Returns the URL of the Finder’s current target.
- [selectedItemURLs()](../fifindersynccontroller/selecteditemurls%28%29.md): Returns an array of selected items.

### Managing Badges, Shortcut Menus, and Toolbar Buttons

- [beginObservingDirectory(at:)](beginobservingdirectory%28at_%29.md): Tells the extension that the user is looking at a monitored directory or at one of its subdirectories.
- [endObservingDirectory(at:)](endobservingdirectory%28at_%29.md): Tells the extension that the user has stopped looking at a monitored directory or at one of its subdirectories.
- [requestBadgeIdentifier(for:)](requestbadgeidentifier%28for_%29.md): Requests a badge for the given file or directory.
- [toolbarItemImage](toolbaritemimage.md): The image for the extension’s toolbar button.
- [toolbarItemName](toolbaritemname.md): The name of the extension’s toolbar button.
- [toolbarItemToolTip](toolbaritemtooltip.md): The tooltip text for the extension’s toolbar button.

# menuForMenuKind: (Objective-C)

**Framework:** Finder Sync  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Requests a custom menu from the extension.

## Declaration

```objectivec
- (NSMenu *) menuForMenuKind:(FIMenuKind) menu;
```

## Parameters

- `menu`: The type of menu being displayed. For a list of possible values, see [FIMenuKind](../fimenukind.md).

<a id="return-value"></a>

## Return Value

A custom menu.

<a id="discussion"></a>

## Discussion

Override this method to provide custom menus in the Finder. You can customize this menu based both on the menu’s kind and on the selected and targeted items (if any). You can get the selected and targeted items from the extension’s [FIFinderSyncController](../fifindersynccontroller.md).

If `kind` is `FIMenuKindToolbarItemMenu`, the system always calls this method even if the target and selection are not related to the extension.

The extension’s principal object provides a method for each menu item’s assigned action.

## See Also

### Related Documentation

- [targetedURL](../fifindersynccontroller/targetedurl%28%29.md): Returns the URL of the Finder’s current target.
- [selectedItemURLs](../fifindersynccontroller/selecteditemurls%28%29.md): Returns an array of selected items.

### Managing Badges, Shortcut Menus, and Toolbar Buttons

- [beginObservingDirectoryAtURL:](beginobservingdirectory%28at_%29.md): Tells the extension that the user is looking at a monitored directory or at one of its subdirectories.
- [endObservingDirectoryAtURL:](endobservingdirectory%28at_%29.md): Tells the extension that the user has stopped looking at a monitored directory or at one of its subdirectories.
- [requestBadgeIdentifierForURL:](requestbadgeidentifier%28for_%29.md): Requests a badge for the given file or directory.
- [toolbarItemImage](toolbaritemimage.md): The image for the extension’s toolbar button.
- [toolbarItemName](toolbaritemname.md): The name of the extension’s toolbar button.
- [toolbarItemToolTip](toolbaritemtooltip.md): The tooltip text for the extension’s toolbar button.
