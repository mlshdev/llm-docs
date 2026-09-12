> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstoolbaritemvalidation/validatetoolbaritem(_:)](https://developer.apple.com/documentation/appkit/nstoolbaritemvalidation/validatetoolbaritem(_:))

# validateToolbarItem(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Determines whether to enable or disable the toolbar item.

## Declaration

```swift
@MainActor func validateToolbarItem(_ item: NSToolbarItem) -> Bool
```

<a id="discussion"></a>

## Discussion

If this method is implemented and returns [false](https://developer.apple.com/documentation/swift/false), [NSToolbar](../nstoolbar.md) will disable `item`. Returning [true](https://developer.apple.com/documentation/swift/true) causes `item` to be enabled.

[NSToolbar](../nstoolbar.md) only calls this method for image items.

> **Note**

>  [validateToolbarItem:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/validatetoolbaritem:) is called very frequently, so it must be efficient.

If the receiver is the `target` for the actions of multiple toolbar items, it’s necessary to determine which toolbar item `item` refers to by testing the `itemIdentifier`.

```objc
-(BOOL)validateToolbarItem:(NSToolbarItem *)toolbarItem
{
    BOOL enable = NO;
    if ([[toolbarItem itemIdentifier] isEqual:SaveDocToolbarItemIdentifier]) {
        // We will return YES (enable the save item)
        // only when the document is dirty and needs saving
        enable = [self isDocumentEdited];
    } else if ([[toolbarItem itemIdentifier] isEqual:NSToolbarPrintItemIdentifier]) {
        // always enable print for this window
        enable = YES;
    }
    return enable;
}
```

## See Also

### Related Documentation

- [validateVisibleItems()](../nstoolbar/validatevisibleitems%28%29.md): Validates the toolbar’s visible items during a window update.
- [action](../nstoolbaritem/action.md): The action method to call when someone clicks on the toolbar item.
- [target](../nstoolbaritem/target.md): The object that defines the action method the toolbar item calls when clicked.
- [validate()](../nstoolbaritem/validate%28%29.md): Validates the toolbar item’s menu and its ability to perfrom its action.

# validateToolbarItem: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Determines whether to enable or disable the toolbar item.

## Declaration

```objectivec
- (BOOL) validateToolbarItem:(NSToolbarItem *) item;
```

<a id="discussion"></a>

## Discussion

If this method is implemented and returns [false](https://developer.apple.com/documentation/swift/false), [NSToolbar](../nstoolbar.md) will disable `item`. Returning [true](https://developer.apple.com/documentation/swift/true) causes `item` to be enabled.

[NSToolbar](../nstoolbar.md) only calls this method for image items.

> **Note**

>  [validateToolbarItem:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/validatetoolbaritem:) is called very frequently, so it must be efficient.

If the receiver is the `target` for the actions of multiple toolbar items, it’s necessary to determine which toolbar item `item` refers to by testing the `itemIdentifier`.

```objc
-(BOOL)validateToolbarItem:(NSToolbarItem *)toolbarItem
{
    BOOL enable = NO;
    if ([[toolbarItem itemIdentifier] isEqual:SaveDocToolbarItemIdentifier]) {
        // We will return YES (enable the save item)
        // only when the document is dirty and needs saving
        enable = [self isDocumentEdited];
    } else if ([[toolbarItem itemIdentifier] isEqual:NSToolbarPrintItemIdentifier]) {
        // always enable print for this window
        enable = YES;
    }
    return enable;
}
```

## See Also

### Related Documentation

- [validateVisibleItems](../nstoolbar/validatevisibleitems%28%29.md): Validates the toolbar’s visible items during a window update.
- [action](../nstoolbaritem/action.md): The action method to call when someone clicks on the toolbar item.
- [target](../nstoolbaritem/target.md): The object that defines the action method the toolbar item calls when clicked.
- [validate](../nstoolbaritem/validate%28%29.md): Validates the toolbar item’s menu and its ability to perfrom its action.
