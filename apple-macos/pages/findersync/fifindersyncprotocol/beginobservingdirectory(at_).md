> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/findersync/fifindersyncprotocol/beginobservingdirectory(at:)](https://developer.apple.com/documentation/findersync/fifindersyncprotocol/beginobservingdirectory(at:))

# beginObservingDirectory(at:) (Swift)

**Framework:** Finder Sync  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Tells the extension that the user is looking at a monitored directory or at one of its subdirectories.

## Declaration

```swift
optional func beginObservingDirectory(at url: URL)
```

## Parameters

- `url`: The URL of the directory.

<a id="discussion"></a>

## Discussion

Override this method to receive notifications when the user opens the contents of a monitored directory or one of its subdirectories in the Finder. The system calls `beginObservingDirectoryAtURL:` only once for each unique URL. As long as the content remains visible in at least one Finder window, any additional Finder windows that open to the same URL are ignored.

> **Note**

> The system creates additional instances of your extension for any Open and Save dialogs. These extensions receive their own calls to `beginObservingDirectoryAtURL:`, even if the directory is already open in a Finder window.

## See Also

### Managing Badges, Shortcut Menus, and Toolbar Buttons

- [endObservingDirectory(at:)](endobservingdirectory%28at_%29.md): Tells the extension that the user has stopped looking at a monitored directory or at one of its subdirectories.
- [menu(for:)](menu%28for_%29.md): Requests a custom menu from the extension.
- [requestBadgeIdentifier(for:)](requestbadgeidentifier%28for_%29.md): Requests a badge for the given file or directory.
- [toolbarItemImage](toolbaritemimage.md): The image for the extension’s toolbar button.
- [toolbarItemName](toolbaritemname.md): The name of the extension’s toolbar button.
- [toolbarItemToolTip](toolbaritemtooltip.md): The tooltip text for the extension’s toolbar button.

# beginObservingDirectoryAtURL: (Objective-C)

**Framework:** Finder Sync  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Tells the extension that the user is looking at a monitored directory or at one of its subdirectories.

## Declaration

```objectivec
- (void) beginObservingDirectoryAtURL:(NSURL *) url;
```

## Parameters

- `url`: The URL of the directory.

<a id="discussion"></a>

## Discussion

Override this method to receive notifications when the user opens the contents of a monitored directory or one of its subdirectories in the Finder. The system calls `beginObservingDirectoryAtURL:` only once for each unique URL. As long as the content remains visible in at least one Finder window, any additional Finder windows that open to the same URL are ignored.

> **Note**

> The system creates additional instances of your extension for any Open and Save dialogs. These extensions receive their own calls to `beginObservingDirectoryAtURL:`, even if the directory is already open in a Finder window.

## See Also

### Managing Badges, Shortcut Menus, and Toolbar Buttons

- [endObservingDirectoryAtURL:](endobservingdirectory%28at_%29.md): Tells the extension that the user has stopped looking at a monitored directory or at one of its subdirectories.
- [menuForMenuKind:](menu%28for_%29.md): Requests a custom menu from the extension.
- [requestBadgeIdentifierForURL:](requestbadgeidentifier%28for_%29.md): Requests a badge for the given file or directory.
- [toolbarItemImage](toolbaritemimage.md): The image for the extension’s toolbar button.
- [toolbarItemName](toolbaritemname.md): The name of the extension’s toolbar button.
- [toolbarItemToolTip](toolbaritemtooltip.md): The tooltip text for the extension’s toolbar button.
