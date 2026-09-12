> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstabviewcontroller/toolbar(_:itemforitemidentifier:willbeinsertedintotoolbar:)](https://developer.apple.com/documentation/appkit/nstabviewcontroller/toolbar(_:itemforitemidentifier:willbeinsertedintotoolbar:))

# toolbar(\_:itemForItemIdentifier:willBeInsertedIntoToolbar:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Returns the toolbar item for the specified identifier.

## Declaration

```swift
@MainActor func toolbar(_ toolbar: NSToolbar, itemForItemIdentifier itemIdentifier: NSToolbarItem.Identifier, willBeInsertedIntoToolbar flag: Bool) -> NSToolbarItem?
```

## Parameters

- `toolbar`: The toolbar making the request.
- `itemIdentifier`: The identifier of the toolbar item being requested.
- `flag`: A Boolean indicating whether the item is inserted immediately into the toolbar. A value of [true](https://developer.apple.com/documentation/swift/true) means the item is inserted into the toolbar. A value of [false](https://developer.apple.com/documentation/swift/false) means the item is added to the toolbar’s configuration palette. The same item may be requested more than once with different values for this flag.

<a id="return-value"></a>

## Return Value

The requested toolbar item or `nil` to indicate that the specified item is not supported. When the same item is requested again, you may return the same [NSToolbarItem](../nstoolbaritem.md) object or a different one.

<a id="Discussion"></a>

## Discussion

This method is called for tab view interfaces that use the [NSTabViewController.TabStyle.toolbar](tabstyle-swift.enum/toolbar.md) style. Use this method to create toolbar items for any custom identifiers you specified in the [toolbarAllowedItemIdentifiers(\_:)](toolbaralloweditemidentifiers%28__%29.md) and [toolbarDefaultItemIdentifiers(\_:)](toolbardefaultitemidentifiers%28__%29.md) methods.

If you override this method, you must call `super` at some point in your implementation. The default implementation of this method returns toolbar items for the tabs in the tab bar interface. The identifier for each toolbar item is the same as the identifier for the corresponding tab view item. Similarly, the toolbar item’s [label](../nstoolbaritem/label.md), [image](../nstoolbaritem/image.md) and [toolTip](../nstoolbaritem/tooltip.md) properties are bound to those of the corresponding tab view item.

## See Also

### Responding to Toolbar Events

- [toolbarAllowedItemIdentifiers(\_:)](toolbaralloweditemidentifiers%28__%29.md): Returns the array of identifier strings for the allowed toolbar items.
- [toolbarDefaultItemIdentifiers(\_:)](toolbardefaultitemidentifiers%28__%29.md): Returns the array of identifier strings for the default toolbar items.
- [toolbarSelectableItemIdentifiers(\_:)](toolbarselectableitemidentifiers%28__%29.md): Returns the array of identifier strings for the selectable toolbar items

# toolbar:itemForItemIdentifier:willBeInsertedIntoToolbar: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Returns the toolbar item for the specified identifier.

## Declaration

```objectivec
- (NSToolbarItem *) toolbar:(NSToolbar *) toolbar itemForItemIdentifier:(NSToolbarItemIdentifier) itemIdentifier willBeInsertedIntoToolbar:(BOOL) flag;
```

## Parameters

- `toolbar`: The toolbar making the request.
- `itemIdentifier`: The identifier of the toolbar item being requested.
- `flag`: A Boolean indicating whether the item is inserted immediately into the toolbar. A value of [true](https://developer.apple.com/documentation/swift/true) means the item is inserted into the toolbar. A value of [false](https://developer.apple.com/documentation/swift/false) means the item is added to the toolbar’s configuration palette. The same item may be requested more than once with different values for this flag.

<a id="return-value"></a>

## Return Value

The requested toolbar item or `nil` to indicate that the specified item is not supported. When the same item is requested again, you may return the same [NSToolbarItem](../nstoolbaritem.md) object or a different one.

<a id="Discussion"></a>

## Discussion

This method is called for tab view interfaces that use the [NSTabViewControllerTabStyleToolbar](tabstyle-swift.enum/toolbar.md) style. Use this method to create toolbar items for any custom identifiers you specified in the [toolbarAllowedItemIdentifiers:](toolbaralloweditemidentifiers%28__%29.md) and [toolbarDefaultItemIdentifiers:](toolbardefaultitemidentifiers%28__%29.md) methods.

If you override this method, you must call `super` at some point in your implementation. The default implementation of this method returns toolbar items for the tabs in the tab bar interface. The identifier for each toolbar item is the same as the identifier for the corresponding tab view item. Similarly, the toolbar item’s [label](../nstoolbaritem/label.md), [image](../nstoolbaritem/image.md) and [toolTip](../nstoolbaritem/tooltip.md) properties are bound to those of the corresponding tab view item.

## See Also

### Responding to Toolbar Events

- [toolbarAllowedItemIdentifiers:](toolbaralloweditemidentifiers%28__%29.md): Returns the array of identifier strings for the allowed toolbar items.
- [toolbarDefaultItemIdentifiers:](toolbardefaultitemidentifiers%28__%29.md): Returns the array of identifier strings for the default toolbar items.
- [toolbarSelectableItemIdentifiers:](toolbarselectableitemidentifiers%28__%29.md): Returns the array of identifier strings for the selectable toolbar items
