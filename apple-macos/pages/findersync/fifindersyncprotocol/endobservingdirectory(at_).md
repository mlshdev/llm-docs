> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/findersync/fifindersyncprotocol/endobservingdirectory(at:)](https://developer.apple.com/documentation/findersync/fifindersyncprotocol/endobservingdirectory(at:))

# endObservingDirectory(at:) (Swift)

**Framework:** Finder Sync  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Tells the extension that the user has stopped looking at a monitored directory or at one of its subdirectories.

## Declaration

```swift
optional func endObservingDirectory(at url: URL)
```

## Parameters

- `url`: The URL of the directory.

<a id="discussion"></a>

## Discussion

Override this method to receive notifications when the user is no longer looking at the contents of the given URL. As with [beginObservingDirectory(at:)](beginobservingdirectory%28at_%29.md), the Open and Save dialogs are tracked separately from the Finder.

## See Also

### Managing Badges, Shortcut Menus, and Toolbar Buttons

- [beginObservingDirectory(at:)](beginobservingdirectory%28at_%29.md): Tells the extension that the user is looking at a monitored directory or at one of its subdirectories.
- [menu(for:)](menu%28for_%29.md): Requests a custom menu from the extension.
- [requestBadgeIdentifier(for:)](requestbadgeidentifier%28for_%29.md): Requests a badge for the given file or directory.
- [toolbarItemImage](toolbaritemimage.md): The image for the extension’s toolbar button.
- [toolbarItemName](toolbaritemname.md): The name of the extension’s toolbar button.
- [toolbarItemToolTip](toolbaritemtooltip.md): The tooltip text for the extension’s toolbar button.

# endObservingDirectoryAtURL: (Objective-C)

**Framework:** Finder Sync  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Tells the extension that the user has stopped looking at a monitored directory or at one of its subdirectories.

## Declaration

```objectivec
- (void) endObservingDirectoryAtURL:(NSURL *) url;
```

## Parameters

- `url`: The URL of the directory.

<a id="discussion"></a>

## Discussion

Override this method to receive notifications when the user is no longer looking at the contents of the given URL. As with [beginObservingDirectoryAtURL:](beginobservingdirectory%28at_%29.md), the Open and Save dialogs are tracked separately from the Finder.

## See Also

### Managing Badges, Shortcut Menus, and Toolbar Buttons

- [beginObservingDirectoryAtURL:](beginobservingdirectory%28at_%29.md): Tells the extension that the user is looking at a monitored directory or at one of its subdirectories.
- [menuForMenuKind:](menu%28for_%29.md): Requests a custom menu from the extension.
- [requestBadgeIdentifierForURL:](requestbadgeidentifier%28for_%29.md): Requests a badge for the given file or directory.
- [toolbarItemImage](toolbaritemimage.md): The image for the extension’s toolbar button.
- [toolbarItemName](toolbaritemname.md): The name of the extension’s toolbar button.
- [toolbarItemToolTip](toolbaritemtooltip.md): The tooltip text for the extension’s toolbar button.
