> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstabviewcontroller/toolbardefaultitemidentifiers(_:)](https://developer.apple.com/documentation/appkit/nstabviewcontroller/toolbardefaultitemidentifiers(_:))

# toolbarDefaultItemIdentifiers(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Returns the array of identifier strings for the default toolbar items.

## Declaration

```swift
@MainActor func toolbarDefaultItemIdentifiers(_ toolbar: NSToolbar) -> [NSToolbarItem.Identifier]
```

## Parameters

- `toolbar`: The toolbar making the request.

<a id="return-value"></a>

## Return Value

An array of [NSString](https://developer.apple.com/documentation/foundation/nsstring) objects, each of which contains an identifier for a toolbar item that is part of the default configuration. The order of items in the array is used to set the order of items in the toolbar.

<a id="Discussion"></a>

## Discussion

This method is called for tab view interfaces that use the [NSTabViewController.TabStyle.toolbar](tabstyle-swift.enum/toolbar.md) style. Use this method to return the default set of toolbar items, including any extra toolbar items you want included. For example, include [flexibleSpace](../nstoolbaritem/identifier/flexiblespace.md) strings as the first and last elements of the array to center the remaining toolbar items. If you add custom identifiers, you must also override the [toolbar(\_:itemForItemIdentifier:willBeInsertedIntoToolbar:)](toolbar%28__itemforitemidentifier_willbeinsertedintotoolbar_%29.md) method to specify the content for those toolbar items.

If you override this method, you must call `super` at some point in your implementation. The default implementation of this method returns the identifiers for all toolbar items that correspond to tabs in the tab bar interface.

## See Also

### Responding to Toolbar Events

- [toolbar(\_:itemForItemIdentifier:willBeInsertedIntoToolbar:)](toolbar%28__itemforitemidentifier_willbeinsertedintotoolbar_%29.md): Returns the toolbar item for the specified identifier.
- [toolbarAllowedItemIdentifiers(\_:)](toolbaralloweditemidentifiers%28__%29.md): Returns the array of identifier strings for the allowed toolbar items.
- [toolbarSelectableItemIdentifiers(\_:)](toolbarselectableitemidentifiers%28__%29.md): Returns the array of identifier strings for the selectable toolbar items

# toolbarDefaultItemIdentifiers: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Returns the array of identifier strings for the default toolbar items.

## Declaration

```objectivec
- (NSArray<NSString *> *) toolbarDefaultItemIdentifiers:(NSToolbar *) toolbar;
```

## Parameters

- `toolbar`: The toolbar making the request.

<a id="return-value"></a>

## Return Value

An array of [NSString](https://developer.apple.com/documentation/foundation/nsstring) objects, each of which contains an identifier for a toolbar item that is part of the default configuration. The order of items in the array is used to set the order of items in the toolbar.

<a id="Discussion"></a>

## Discussion

This method is called for tab view interfaces that use the [NSTabViewControllerTabStyleToolbar](tabstyle-swift.enum/toolbar.md) style. Use this method to return the default set of toolbar items, including any extra toolbar items you want included. For example, include [NSToolbarFlexibleSpaceItemIdentifier](../nstoolbaritem/identifier/flexiblespace.md) strings as the first and last elements of the array to center the remaining toolbar items. If you add custom identifiers, you must also override the [toolbar:itemForItemIdentifier:willBeInsertedIntoToolbar:](toolbar%28__itemforitemidentifier_willbeinsertedintotoolbar_%29.md) method to specify the content for those toolbar items.

If you override this method, you must call `super` at some point in your implementation. The default implementation of this method returns the identifiers for all toolbar items that correspond to tabs in the tab bar interface.

## See Also

### Responding to Toolbar Events

- [toolbar:itemForItemIdentifier:willBeInsertedIntoToolbar:](toolbar%28__itemforitemidentifier_willbeinsertedintotoolbar_%29.md): Returns the toolbar item for the specified identifier.
- [toolbarAllowedItemIdentifiers:](toolbaralloweditemidentifiers%28__%29.md): Returns the array of identifier strings for the allowed toolbar items.
- [toolbarSelectableItemIdentifiers:](toolbarselectableitemidentifiers%28__%29.md): Returns the array of identifier strings for the selectable toolbar items
