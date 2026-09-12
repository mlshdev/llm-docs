> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/findersync/fifindersyncprotocol](https://developer.apple.com/documentation/findersync/fifindersyncprotocol)

# FIFinderSyncProtocol (Swift)

**Framework:** Finder Sync  
**Kind:** Protocol  
**Availability:** macOS 10.10+

The group of methods to implement for modifying the Finder user interface to express file synchronization status and control.

## Declaration

```swift
protocol FIFinderSyncProtocol
```

## Topics

### Managing Badges, Shortcut Menus, and Toolbar Buttons

- [beginObservingDirectory(at:)](fifindersyncprotocol/beginobservingdirectory%28at_%29.md): Tells the extension that the user is looking at a monitored directory or at one of its subdirectories.
- [endObservingDirectory(at:)](fifindersyncprotocol/endobservingdirectory%28at_%29.md): Tells the extension that the user has stopped looking at a monitored directory or at one of its subdirectories.
- [menu(for:)](fifindersyncprotocol/menu%28for_%29.md): Requests a custom menu from the extension.
- [requestBadgeIdentifier(for:)](fifindersyncprotocol/requestbadgeidentifier%28for_%29.md): Requests a badge for the given file or directory.
- [toolbarItemImage](fifindersyncprotocol/toolbaritemimage.md): The image for the extension’s toolbar button.
- [toolbarItemName](fifindersyncprotocol/toolbaritemname.md): The name of the extension’s toolbar button.
- [toolbarItemToolTip](fifindersyncprotocol/toolbaritemtooltip.md): The tooltip text for the extension’s toolbar button.

### Constants

- [FIMenuKind](fimenukind.md): The different kinds of custom menus that the Finder Sync extension can provide.

### Instance Methods

- [makeListenerEndpoint(forServiceName:itemURL:)](fifindersyncprotocol/makelistenerendpoint%28forservicename_itemurl_%29.md)
- [supportedServiceNamesForItem(with:)](fifindersyncprotocol/supportedservicenamesforitem%28with_%29.md)
- [values(forAttributes:forItemWith:completion:)](fifindersyncprotocol/values%28forattributes_foritemwith_completion_%29.md)

## Relationships

### Conforming Types

- [FIFinderSync](fifindersync-swift.class.md)

# FIFinderSync (Objective-C)

**Framework:** Finder Sync  
**Kind:** Protocol  
**Availability:** macOS 10.10+

The group of methods to implement for modifying the Finder user interface to express file synchronization status and control.

## Declaration

```objectivec
@protocol FIFinderSync
```

## Topics

### Managing Badges, Shortcut Menus, and Toolbar Buttons

- [beginObservingDirectoryAtURL:](fifindersyncprotocol/beginobservingdirectory%28at_%29.md): Tells the extension that the user is looking at a monitored directory or at one of its subdirectories.
- [endObservingDirectoryAtURL:](fifindersyncprotocol/endobservingdirectory%28at_%29.md): Tells the extension that the user has stopped looking at a monitored directory or at one of its subdirectories.
- [menuForMenuKind:](fifindersyncprotocol/menu%28for_%29.md): Requests a custom menu from the extension.
- [requestBadgeIdentifierForURL:](fifindersyncprotocol/requestbadgeidentifier%28for_%29.md): Requests a badge for the given file or directory.
- [toolbarItemImage](fifindersyncprotocol/toolbaritemimage.md): The image for the extension’s toolbar button.
- [toolbarItemName](fifindersyncprotocol/toolbaritemname.md): The name of the extension’s toolbar button.
- [toolbarItemToolTip](fifindersyncprotocol/toolbaritemtooltip.md): The tooltip text for the extension’s toolbar button.

### Constants

- [FIMenuKind](fimenukind.md): The different kinds of custom menus that the Finder Sync extension can provide.

### Instance Methods

- [makeListenerEndpointForServiceName:itemURL:andReturnError:](fifindersyncprotocol/makelistenerendpoint%28forservicename_itemurl_%29.md)
- [supportedServiceNamesForItemWithURL:](fifindersyncprotocol/supportedservicenamesforitem%28with_%29.md)
- [valuesForAttributes:forItemWithURL:completion:](fifindersyncprotocol/values%28forattributes_foritemwith_completion_%29.md)

## Relationships

### Conforming Types

- [FIFinderSync](fifindersync-swift.class.md)
