> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/findersync/fifindersyncprotocol/requestbadgeidentifier(for:)](https://developer.apple.com/documentation/findersync/fifindersyncprotocol/requestbadgeidentifier(for:))

# requestBadgeIdentifier(for:) (Swift)

**Framework:** Finder Sync  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Requests a badge for the given file or directory.

## Declaration

```swift
optional func requestBadgeIdentifier(for url: URL)
```

## Parameters

- `url`: The URL of a file or directory inside the extension’s monitored directories.

<a id="discussion"></a>

## Discussion

Override this method to receive notifications whenever a new item becomes visible in the Finder. Check the item’s state, and call [setBadgeIdentifier(\_:for:)](../fifindersynccontroller/setbadgeidentifier%28__for_%29.md) to set an appropriate badge.

## See Also

### Related Documentation

- [setBadgeIdentifier(\_:for:)](../fifindersynccontroller/setbadgeidentifier%28__for_%29.md): Sets the badge for a file or directory.

### Managing Badges, Shortcut Menus, and Toolbar Buttons

- [beginObservingDirectory(at:)](beginobservingdirectory%28at_%29.md): Tells the extension that the user is looking at a monitored directory or at one of its subdirectories.
- [endObservingDirectory(at:)](endobservingdirectory%28at_%29.md): Tells the extension that the user has stopped looking at a monitored directory or at one of its subdirectories.
- [menu(for:)](menu%28for_%29.md): Requests a custom menu from the extension.
- [toolbarItemImage](toolbaritemimage.md): The image for the extension’s toolbar button.
- [toolbarItemName](toolbaritemname.md): The name of the extension’s toolbar button.
- [toolbarItemToolTip](toolbaritemtooltip.md): The tooltip text for the extension’s toolbar button.

# requestBadgeIdentifierForURL: (Objective-C)

**Framework:** Finder Sync  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Requests a badge for the given file or directory.

## Declaration

```objectivec
- (void) requestBadgeIdentifierForURL:(NSURL *) url;
```

## Parameters

- `url`: The URL of a file or directory inside the extension’s monitored directories.

<a id="discussion"></a>

## Discussion

Override this method to receive notifications whenever a new item becomes visible in the Finder. Check the item’s state, and call [setBadgeIdentifier:forURL:](../fifindersynccontroller/setbadgeidentifier%28__for_%29.md) to set an appropriate badge.

## See Also

### Related Documentation

- [setBadgeIdentifier:forURL:](../fifindersynccontroller/setbadgeidentifier%28__for_%29.md): Sets the badge for a file or directory.

### Managing Badges, Shortcut Menus, and Toolbar Buttons

- [beginObservingDirectoryAtURL:](beginobservingdirectory%28at_%29.md): Tells the extension that the user is looking at a monitored directory or at one of its subdirectories.
- [endObservingDirectoryAtURL:](endobservingdirectory%28at_%29.md): Tells the extension that the user has stopped looking at a monitored directory or at one of its subdirectories.
- [menuForMenuKind:](menu%28for_%29.md): Requests a custom menu from the extension.
- [toolbarItemImage](toolbaritemimage.md): The image for the extension’s toolbar button.
- [toolbarItemName](toolbaritemname.md): The name of the extension’s toolbar button.
- [toolbarItemToolTip](toolbaritemtooltip.md): The tooltip text for the extension’s toolbar button.
