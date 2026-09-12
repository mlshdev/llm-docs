> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstoolbardelegate/toolbaralloweditemidentifiers(_:)](https://developer.apple.com/documentation/appkit/nstoolbardelegate/toolbaralloweditemidentifiers(_:))

# toolbarAllowedItemIdentifiers(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS

Asks the delegate to provide the items allowed on the toolbar.

## Declaration

```swift
@MainActor optional func toolbarAllowedItemIdentifiers(_ toolbar: NSToolbar) -> [NSToolbarItem.Identifier]
```

## Parameters

- `toolbar`: The toolbar whose allowed item identifiers are to be returned.

<a id="return-value"></a>

## Return Value

An array of toolbar item identifiers, each of which represents an item that appears in the customization palette. Arrange the identifiers in the order you want them to appear in the palette, with the first item appearing on the palette’s leading edge.

<a id="Discussion"></a>

## Discussion

Include all of your toolbar’s items, including standard ones defined by [NSToolbar.Identifier](../nstoolbar/identifier-swift.typealias.md). The array must include all of the default menu items in your toolbar.

> **Important**

>  Even though this is an optional method, you must implement it if you create the toolbar programatically.

## See Also

### Configuring the behavior of items

- [toolbarDefaultItemIdentifiers(\_:)](toolbardefaultitemidentifiers%28__%29.md): Asks the delegate to provide the default items to display on the toolbar.
- [toolbarImmovableItemIdentifiers(\_:)](toolbarimmovableitemidentifiers%28__%29.md): Asks the delegate to provide the items that people can’t remove from the toolbar or rearrange during the customization process.
- [toolbarSelectableItemIdentifiers(\_:)](toolbarselectableitemidentifiers%28__%29.md): Asks the delegate to provide the set of selectable items in the toolbar.
- [toolbar(\_:itemIdentifier:canBeInsertedAt:)](toolbar%28__itemidentifier_canbeinsertedat_%29.md): Asks the delegate for a Boolean value that indicates whether the toolbar can place the item at the specified position.

# toolbarAllowedItemIdentifiers: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.1+ · macOS

Asks the delegate to provide the items allowed on the toolbar.

## Declaration

```objectivec
- (NSArray<NSString *> *) toolbarAllowedItemIdentifiers:(NSToolbar *) toolbar;
```

## Parameters

- `toolbar`: The toolbar whose allowed item identifiers are to be returned.

<a id="return-value"></a>

## Return Value

An array of toolbar item identifiers, each of which represents an item that appears in the customization palette. Arrange the identifiers in the order you want them to appear in the palette, with the first item appearing on the palette’s leading edge.

<a id="Discussion"></a>

## Discussion

Include all of your toolbar’s items, including standard ones defined by [NSToolbarIdentifier](../nstoolbar/identifier-swift.typealias.md). The array must include all of the default menu items in your toolbar.

> **Important**

>  Even though this is an optional method, you must implement it if you create the toolbar programatically.

## See Also

### Configuring the behavior of items

- [toolbarDefaultItemIdentifiers:](toolbardefaultitemidentifiers%28__%29.md): Asks the delegate to provide the default items to display on the toolbar.
- [toolbarImmovableItemIdentifiers:](toolbarimmovableitemidentifiers%28__%29.md): Asks the delegate to provide the items that people can’t remove from the toolbar or rearrange during the customization process.
- [toolbarSelectableItemIdentifiers:](toolbarselectableitemidentifiers%28__%29.md): Asks the delegate to provide the set of selectable items in the toolbar.
- [toolbar:itemIdentifier:canBeInsertedAtIndex:](toolbar%28__itemidentifier_canbeinsertedat_%29.md): Asks the delegate for a Boolean value that indicates whether the toolbar can place the item at the specified position.
