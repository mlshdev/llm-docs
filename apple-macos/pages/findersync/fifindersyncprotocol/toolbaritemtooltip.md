> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/findersync/fifindersyncprotocol/toolbaritemtooltip](https://developer.apple.com/documentation/findersync/fifindersyncprotocol/toolbaritemtooltip)

# toolbarItemToolTip (Swift)

**Framework:** Finder Sync  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

The tooltip text for the extension’s toolbar button.

## Declaration

```swift
optional var toolbarItemToolTip: String { get }
```

<a id="discussion"></a>

## Discussion

To add a toolbar item to the Finder, override the getter method for the toolbar image, name, and tooltip properties.

## See Also

### Managing Badges, Shortcut Menus, and Toolbar Buttons

- [beginObservingDirectory(at:)](beginobservingdirectory%28at_%29.md): Tells the extension that the user is looking at a monitored directory or at one of its subdirectories.
- [endObservingDirectory(at:)](endobservingdirectory%28at_%29.md): Tells the extension that the user has stopped looking at a monitored directory or at one of its subdirectories.
- [menu(for:)](menu%28for_%29.md): Requests a custom menu from the extension.
- [requestBadgeIdentifier(for:)](requestbadgeidentifier%28for_%29.md): Requests a badge for the given file or directory.
- [toolbarItemImage](toolbaritemimage.md): The image for the extension’s toolbar button.
- [toolbarItemName](toolbaritemname.md): The name of the extension’s toolbar button.

# toolbarItemToolTip (Objective-C)

**Framework:** Finder Sync  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

The tooltip text for the extension’s toolbar button.

## Declaration

```objectivec
@property (copy, readonly) NSString * toolbarItemToolTip;
```

<a id="discussion"></a>

## Discussion

To add a toolbar item to the Finder, override the getter method for the toolbar image, name, and tooltip properties.

## See Also

### Managing Badges, Shortcut Menus, and Toolbar Buttons

- [beginObservingDirectoryAtURL:](beginobservingdirectory%28at_%29.md): Tells the extension that the user is looking at a monitored directory or at one of its subdirectories.
- [endObservingDirectoryAtURL:](endobservingdirectory%28at_%29.md): Tells the extension that the user has stopped looking at a monitored directory or at one of its subdirectories.
- [menuForMenuKind:](menu%28for_%29.md): Requests a custom menu from the extension.
- [requestBadgeIdentifierForURL:](requestbadgeidentifier%28for_%29.md): Requests a badge for the given file or directory.
- [toolbarItemImage](toolbaritemimage.md): The image for the extension’s toolbar button.
- [toolbarItemName](toolbaritemname.md): The name of the extension’s toolbar button.
