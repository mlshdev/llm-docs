> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstoolbardelegate/toolbarselectableitemidentifiers(_:)](https://developer.apple.com/documentation/appkit/nstoolbardelegate/toolbarselectableitemidentifiers(_:))

# toolbarSelectableItemIdentifiers(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS

Asks the delegate to provide the set of selectable items in the toolbar.

## Declaration

```swift
@MainActor optional func toolbarSelectableItemIdentifiers(_ toolbar: NSToolbar) -> [NSToolbarItem.Identifier]
```

## Parameters

- `toolbar`: The toolbar that contains the items.

<a id="return-value"></a>

## Return Value

An array of item identifiers, each of which corresponds to an [NSToolbarItem](../nstoolbaritem.md) that should display a selection indicator in the specified toolbar.

<a id="Discussion"></a>

## Discussion

Use this method to return the complete list of toolbar items that support selection. When someone selects one of the returned items, the toolbar automatically displays that item with a visual highlight. The toolbar also places the currently selected item in its [selectedItemIdentifier](../nstoolbar/selecteditemidentifier.md) property.

## See Also

### Configuring the behavior of items

- [toolbarAllowedItemIdentifiers(\_:)](toolbaralloweditemidentifiers%28__%29.md): Asks the delegate to provide the items allowed on the toolbar.
- [toolbarDefaultItemIdentifiers(\_:)](toolbardefaultitemidentifiers%28__%29.md): Asks the delegate to provide the default items to display on the toolbar.
- [toolbarImmovableItemIdentifiers(\_:)](toolbarimmovableitemidentifiers%28__%29.md): Asks the delegate to provide the items that people can’t remove from the toolbar or rearrange during the customization process.
- [toolbar(\_:itemIdentifier:canBeInsertedAt:)](toolbar%28__itemidentifier_canbeinsertedat_%29.md): Asks the delegate for a Boolean value that indicates whether the toolbar can place the item at the specified position.

# toolbarSelectableItemIdentifiers: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.1+ · macOS

Asks the delegate to provide the set of selectable items in the toolbar.

## Declaration

```objectivec
- (NSArray<NSString *> *) toolbarSelectableItemIdentifiers:(NSToolbar *) toolbar;
```

## Parameters

- `toolbar`: The toolbar that contains the items.

<a id="return-value"></a>

## Return Value

An array of item identifiers, each of which corresponds to an [NSToolbarItem](../nstoolbaritem.md) that should display a selection indicator in the specified toolbar.

<a id="Discussion"></a>

## Discussion

Use this method to return the complete list of toolbar items that support selection. When someone selects one of the returned items, the toolbar automatically displays that item with a visual highlight. The toolbar also places the currently selected item in its [selectedItemIdentifier](../nstoolbar/selecteditemidentifier.md) property.

## See Also

### Configuring the behavior of items

- [toolbarAllowedItemIdentifiers:](toolbaralloweditemidentifiers%28__%29.md): Asks the delegate to provide the items allowed on the toolbar.
- [toolbarDefaultItemIdentifiers:](toolbardefaultitemidentifiers%28__%29.md): Asks the delegate to provide the default items to display on the toolbar.
- [toolbarImmovableItemIdentifiers:](toolbarimmovableitemidentifiers%28__%29.md): Asks the delegate to provide the items that people can’t remove from the toolbar or rearrange during the customization process.
- [toolbar:itemIdentifier:canBeInsertedAtIndex:](toolbar%28__itemidentifier_canbeinsertedat_%29.md): Asks the delegate for a Boolean value that indicates whether the toolbar can place the item at the specified position.
