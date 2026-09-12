> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstabviewcontroller/toolbaralloweditemidentifiers(_:)](https://developer.apple.com/documentation/appkit/nstabviewcontroller/toolbaralloweditemidentifiers(_:))

# toolbarAllowedItemIdentifiers(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Returns the array of identifier strings for the allowed toolbar items.

## Declaration

```swift
@MainActor func toolbarAllowedItemIdentifiers(_ toolbar: NSToolbar) -> [NSToolbarItem.Identifier]
```

## Parameters

- `toolbar`: The toolbar making the request.

<a id="return-value"></a>

## Return Value

An array of [NSString](https://developer.apple.com/documentation/foundation/nsstring) objects, each of which contains an identifier for an available toolbar item. The array must contain all of the items returned by the [toolbarDefaultItemIdentifiers(\_:)](toolbardefaultitemidentifiers%28__%29.md) method.

<a id="Discussion"></a>

## Discussion

This method is called for tab view interfaces that use the [NSTabViewController.TabStyle.toolbar](tabstyle-swift.enum/toolbar.md) style. Use this method to specify all possible items that may be included in the toolbar. The order of the items in the array is used to set their position in the toolbar configuration palette. If you include custom identifiers in the returned array, you must also override the [toolbar(\_:itemForItemIdentifier:willBeInsertedIntoToolbar:)](toolbar%28__itemforitemidentifier_willbeinsertedintotoolbar_%29.md) method to specify the content for those toolbar items.

If you override this method, you must call `super` at some point in your implementation. The default implementation of this method returns the identifiers for all toolbar items that correspond to tabs in the tab bar interface.

## See Also

### Responding to Toolbar Events

- [toolbar(\_:itemForItemIdentifier:willBeInsertedIntoToolbar:)](toolbar%28__itemforitemidentifier_willbeinsertedintotoolbar_%29.md): Returns the toolbar item for the specified identifier.
- [toolbarDefaultItemIdentifiers(\_:)](toolbardefaultitemidentifiers%28__%29.md): Returns the array of identifier strings for the default toolbar items.
- [toolbarSelectableItemIdentifiers(\_:)](toolbarselectableitemidentifiers%28__%29.md): Returns the array of identifier strings for the selectable toolbar items

# toolbarAllowedItemIdentifiers: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Returns the array of identifier strings for the allowed toolbar items.

## Declaration

```objectivec
- (NSArray<NSString *> *) toolbarAllowedItemIdentifiers:(NSToolbar *) toolbar;
```

## Parameters

- `toolbar`: The toolbar making the request.

<a id="return-value"></a>

## Return Value

An array of [NSString](https://developer.apple.com/documentation/foundation/nsstring) objects, each of which contains an identifier for an available toolbar item. The array must contain all of the items returned by the [toolbarDefaultItemIdentifiers:](toolbardefaultitemidentifiers%28__%29.md) method.

<a id="Discussion"></a>

## Discussion

This method is called for tab view interfaces that use the [NSTabViewControllerTabStyleToolbar](tabstyle-swift.enum/toolbar.md) style. Use this method to specify all possible items that may be included in the toolbar. The order of the items in the array is used to set their position in the toolbar configuration palette. If you include custom identifiers in the returned array, you must also override the [toolbar:itemForItemIdentifier:willBeInsertedIntoToolbar:](toolbar%28__itemforitemidentifier_willbeinsertedintotoolbar_%29.md) method to specify the content for those toolbar items.

If you override this method, you must call `super` at some point in your implementation. The default implementation of this method returns the identifiers for all toolbar items that correspond to tabs in the tab bar interface.

## See Also

### Responding to Toolbar Events

- [toolbar:itemForItemIdentifier:willBeInsertedIntoToolbar:](toolbar%28__itemforitemidentifier_willbeinsertedintotoolbar_%29.md): Returns the toolbar item for the specified identifier.
- [toolbarDefaultItemIdentifiers:](toolbardefaultitemidentifiers%28__%29.md): Returns the array of identifier strings for the default toolbar items.
- [toolbarSelectableItemIdentifiers:](toolbarselectableitemidentifiers%28__%29.md): Returns the array of identifier strings for the selectable toolbar items
