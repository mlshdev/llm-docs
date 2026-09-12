> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/findersync/fifindersynccontroller/targetedurl()](https://developer.apple.com/documentation/findersync/fifindersynccontroller/targetedurl())

# targetedURL() (Swift)

**Framework:** Finder Sync  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Returns the URL of the Finder’s current target.

## Declaration

```swift
func targetedURL() -> URL?
```

<a id="return-value"></a>

## Return Value

The URL of the Finder’s current target.

<a id="discussion"></a>

## Discussion

Use this method when creating a custom shortcut menu for the Finder. This returns the URL of the item that the user Control-clicked, letting you customize the menu for that item.

This method returns valid values only from the Finder Sync extension’s [menu(for:)](../fifindersyncprotocol/menu%28for_%29.md) method or from one of the menu actions created in this method. If the selected items are outside the extension’s managed directories (for example, when the user clicks on the toolbar button), this method returns `nil`.

## See Also

### Managing the Finder Sync Controller

- [default()](default%28%29.md): Returns the shared Finder Sync controller object.
- [directoryURLs](directoryurls.md): The directories managed by this extension.
- [selectedItemURLs()](selecteditemurls%28%29.md): Returns an array of selected items.
- [setBadgeIdentifier(\_:for:)](setbadgeidentifier%28__for_%29.md): Sets the badge for a file or directory.
- [setBadgeImage(\_:label:forBadgeIdentifier:)](setbadgeimage%28__label_forbadgeidentifier_%29.md): Sets the badge image and label for the given ID.

# targetedURL (Objective-C)

**Framework:** Finder Sync  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Returns the URL of the Finder’s current target.

## Declaration

```objectivec
- (NSURL *) targetedURL;
```

<a id="return-value"></a>

## Return Value

The URL of the Finder’s current target.

<a id="discussion"></a>

## Discussion

Use this method when creating a custom shortcut menu for the Finder. This returns the URL of the item that the user Control-clicked, letting you customize the menu for that item.

This method returns valid values only from the Finder Sync extension’s [menuForMenuKind:](../fifindersyncprotocol/menu%28for_%29.md) method or from one of the menu actions created in this method. If the selected items are outside the extension’s managed directories (for example, when the user clicks on the toolbar button), this method returns `nil`.

## See Also

### Managing the Finder Sync Controller

- [defaultController](default%28%29.md): Returns the shared Finder Sync controller object.
- [directoryURLs](directoryurls.md): The directories managed by this extension.
- [selectedItemURLs](selecteditemurls%28%29.md): Returns an array of selected items.
- [setBadgeIdentifier:forURL:](setbadgeidentifier%28__for_%29.md): Sets the badge for a file or directory.
- [setBadgeImage:label:forBadgeIdentifier:](setbadgeimage%28__label_forbadgeidentifier_%29.md): Sets the badge image and label for the given ID.
