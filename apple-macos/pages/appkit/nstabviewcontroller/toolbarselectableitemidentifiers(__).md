> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstabviewcontroller/toolbarselectableitemidentifiers(_:)](https://developer.apple.com/documentation/appkit/nstabviewcontroller/toolbarselectableitemidentifiers(_:))

# toolbarSelectableItemIdentifiers(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Returns the array of identifier strings for the selectable toolbar items

## Declaration

```swift
@MainActor func toolbarSelectableItemIdentifiers(_ toolbar: NSToolbar) -> [NSToolbarItem.Identifier]
```

## Parameters

- `toolbar`: The toolbar making the request.

<a id="return-value"></a>

## Return Value

An array of [NSString](https://developer.apple.com/documentation/foundation/nsstring) objects, each of which contains an identifier for a toolbar item that may be selected.

<a id="Discussion"></a>

## Discussion

This method is called for tab view interfaces that use the [NSTabViewController.TabStyle.toolbar](tabstyle-swift.enum/toolbar.md) style. Use this method to indicate which toolbar items are selectable. When an item is selected, the toolbar displays it with a visual highlight and updates the [selectedTabViewItemIndex](selectedtabviewitemindex.md) property. Typically, the toolbar items associated with tabs are selectable so that the user can tell which tab is selected.

If you override this method, you must call `super` at some point in your implementation. The default implementation of this method returns the identifiers for all toolbar items that correspond to tabs in the tab bar interface.

## See Also

### Responding to Toolbar Events

- [toolbar(\_:itemForItemIdentifier:willBeInsertedIntoToolbar:)](toolbar%28__itemforitemidentifier_willbeinsertedintotoolbar_%29.md): Returns the toolbar item for the specified identifier.
- [toolbarAllowedItemIdentifiers(\_:)](toolbaralloweditemidentifiers%28__%29.md): Returns the array of identifier strings for the allowed toolbar items.
- [toolbarDefaultItemIdentifiers(\_:)](toolbardefaultitemidentifiers%28__%29.md): Returns the array of identifier strings for the default toolbar items.

# toolbarSelectableItemIdentifiers: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Returns the array of identifier strings for the selectable toolbar items

## Declaration

```objectivec
- (NSArray<NSString *> *) toolbarSelectableItemIdentifiers:(NSToolbar *) toolbar;
```

## Parameters

- `toolbar`: The toolbar making the request.

<a id="return-value"></a>

## Return Value

An array of [NSString](https://developer.apple.com/documentation/foundation/nsstring) objects, each of which contains an identifier for a toolbar item that may be selected.

<a id="Discussion"></a>

## Discussion

This method is called for tab view interfaces that use the [NSTabViewControllerTabStyleToolbar](tabstyle-swift.enum/toolbar.md) style. Use this method to indicate which toolbar items are selectable. When an item is selected, the toolbar displays it with a visual highlight and updates the [selectedTabViewItemIndex](selectedtabviewitemindex.md) property. Typically, the toolbar items associated with tabs are selectable so that the user can tell which tab is selected.

If you override this method, you must call `super` at some point in your implementation. The default implementation of this method returns the identifiers for all toolbar items that correspond to tabs in the tab bar interface.

## See Also

### Responding to Toolbar Events

- [toolbar:itemForItemIdentifier:willBeInsertedIntoToolbar:](toolbar%28__itemforitemidentifier_willbeinsertedintotoolbar_%29.md): Returns the toolbar item for the specified identifier.
- [toolbarAllowedItemIdentifiers:](toolbaralloweditemidentifiers%28__%29.md): Returns the array of identifier strings for the allowed toolbar items.
- [toolbarDefaultItemIdentifiers:](toolbardefaultitemidentifiers%28__%29.md): Returns the array of identifier strings for the default toolbar items.
