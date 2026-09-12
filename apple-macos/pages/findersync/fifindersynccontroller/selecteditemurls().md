> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/findersync/fifindersynccontroller/selecteditemurls()](https://developer.apple.com/documentation/findersync/fifindersynccontroller/selecteditemurls())

# selectedItemURLs() (Swift)

**Framework:** Finder Sync  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Returns an array of selected items.

## Declaration

```swift
func selectedItemURLs() -> [URL]?
```

<a id="return-value"></a>

## Return Value

An array of items currently selected in the Finder window.

<a id="discussion"></a>

## Discussion

Use this method when creating a shortcut menu or a menu for the extension’s toolbar button. You can then modify the menu’s content based on the items currently selected.

This method returns valid values only from the Finder Sync extension’s [menu(for:)](../fifindersyncprotocol/menu%28for_%29.md) method or from one of the menu actions created in this method. If the selected items are outside the extension’s managed directories (for example, when the user clicks on the toolbar button), this method returns `nil`.

## See Also

### Managing the Finder Sync Controller

- [default()](default%28%29.md): Returns the shared Finder Sync controller object.
- [directoryURLs](directoryurls.md): The directories managed by this extension.
- [setBadgeIdentifier(\_:for:)](setbadgeidentifier%28__for_%29.md): Sets the badge for a file or directory.
- [setBadgeImage(\_:label:forBadgeIdentifier:)](setbadgeimage%28__label_forbadgeidentifier_%29.md): Sets the badge image and label for the given ID.
- [targetedURL()](targetedurl%28%29.md): Returns the URL of the Finder’s current target.

# selectedItemURLs (Objective-C)

**Framework:** Finder Sync  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Returns an array of selected items.

## Declaration

```objectivec
- (NSArray<NSURL *> *) selectedItemURLs;
```

<a id="return-value"></a>

## Return Value

An array of items currently selected in the Finder window.

<a id="discussion"></a>

## Discussion

Use this method when creating a shortcut menu or a menu for the extension’s toolbar button. You can then modify the menu’s content based on the items currently selected.

This method returns valid values only from the Finder Sync extension’s [menuForMenuKind:](../fifindersyncprotocol/menu%28for_%29.md) method or from one of the menu actions created in this method. If the selected items are outside the extension’s managed directories (for example, when the user clicks on the toolbar button), this method returns `nil`.

## See Also

### Managing the Finder Sync Controller

- [defaultController](default%28%29.md): Returns the shared Finder Sync controller object.
- [directoryURLs](directoryurls.md): The directories managed by this extension.
- [setBadgeIdentifier:forURL:](setbadgeidentifier%28__for_%29.md): Sets the badge for a file or directory.
- [setBadgeImage:label:forBadgeIdentifier:](setbadgeimage%28__label_forbadgeidentifier_%29.md): Sets the badge image and label for the given ID.
- [targetedURL](targetedurl%28%29.md): Returns the URL of the Finder’s current target.
