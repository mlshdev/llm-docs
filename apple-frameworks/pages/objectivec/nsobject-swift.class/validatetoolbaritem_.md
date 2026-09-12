> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/validatetoolbaritem:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/validatetoolbaritem:)

# validateToolbarItem:

**Interface language:** Objective-C

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 11.0)

If this method is implemented and returns `false`, NSToolbar will disable `theItem`; returning `true` causes `theItem` to be enabled.

## Declaration

```objectivec
- (BOOL) validateToolbarItem:(NSToolbarItem *) item;
```

<a id="Discussion"></a>

## Discussion

NSToolbar only calls this method for image items.

> **Note**

>  [validateToolbarItem:](validatetoolbaritem_.md) is called very frequently, so it must be efficient.

If the receiver is the `target` for the actions of multiple toolbar items, it’s necessary to determine which toolbar item `theItem` refers to by testing the `itemIdentifier`.

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

- [validateVisibleItems](https://developer.apple.com/documentation/appkit/nstoolbar/validatevisibleitems%28%29): Validates the toolbar’s visible items during a window update.
- [action](https://developer.apple.com/documentation/appkit/nstoolbaritem/action): The action method to call when someone clicks on the toolbar item.
- [target](https://developer.apple.com/documentation/appkit/nstoolbaritem/target): The object that defines the action method the toolbar item calls when clicked.
- [Toolbar Programming Topics for Cocoa](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Toolbars/Toolbars.html#//apple_ref/doc/uid/10000109i)
- [validate](https://developer.apple.com/documentation/appkit/nstoolbaritem/validate%28%29): Validates the toolbar item’s menu and its ability to perfrom its action.
