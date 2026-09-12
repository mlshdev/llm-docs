> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstoolbardelegate/toolbardefaultitemidentifiers(_:)](https://developer.apple.com/documentation/appkit/nstoolbardelegate/toolbardefaultitemidentifiers(_:))

# toolbarDefaultItemIdentifiers(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS

Asks the delegate to provide the default items to display on the toolbar.

## Declaration

```swift
@MainActor optional func toolbarDefaultItemIdentifiers(_ toolbar: NSToolbar) -> [NSToolbarItem.Identifier]
```

## Parameters

- `toolbar`: The toolbar whose default item identifiers are to be returned.

<a id="return-value"></a>

## Return Value

An array of toolbar item identifiers, each of which represents an item that appears in the default toolbar. Arrange the identifiers in the order you want them to appear in the toolbar, with the first item appearing on the toolbar’s leading edge.

<a id="Discussion"></a>

## Discussion

The toolbar calls this method when user settings don’t contain any custom configuration data for the toolbar. The toolbar also calls it to initialize the customization palette’s contents.

> **Important**

>  Even though this is an optional method, you must implement it if you create the toolbar programatically. If you configure your toolbar in Interface Builder, the configuration there provides the default items.

## See Also

### Configuring the behavior of items

- [toolbarAllowedItemIdentifiers(\_:)](toolbaralloweditemidentifiers%28__%29.md): Asks the delegate to provide the items allowed on the toolbar.
- [toolbarImmovableItemIdentifiers(\_:)](toolbarimmovableitemidentifiers%28__%29.md): Asks the delegate to provide the items that people can’t remove from the toolbar or rearrange during the customization process.
- [toolbarSelectableItemIdentifiers(\_:)](toolbarselectableitemidentifiers%28__%29.md): Asks the delegate to provide the set of selectable items in the toolbar.
- [toolbar(\_:itemIdentifier:canBeInsertedAt:)](toolbar%28__itemidentifier_canbeinsertedat_%29.md): Asks the delegate for a Boolean value that indicates whether the toolbar can place the item at the specified position.

# toolbarDefaultItemIdentifiers: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.1+ · macOS

Asks the delegate to provide the default items to display on the toolbar.

## Declaration

```objectivec
- (NSArray<NSString *> *) toolbarDefaultItemIdentifiers:(NSToolbar *) toolbar;
```

## Parameters

- `toolbar`: The toolbar whose default item identifiers are to be returned.

<a id="return-value"></a>

## Return Value

An array of toolbar item identifiers, each of which represents an item that appears in the default toolbar. Arrange the identifiers in the order you want them to appear in the toolbar, with the first item appearing on the toolbar’s leading edge.

<a id="Discussion"></a>

## Discussion

The toolbar calls this method when user settings don’t contain any custom configuration data for the toolbar. The toolbar also calls it to initialize the customization palette’s contents.

> **Important**

>  Even though this is an optional method, you must implement it if you create the toolbar programatically. If you configure your toolbar in Interface Builder, the configuration there provides the default items.

## See Also

### Configuring the behavior of items

- [toolbarAllowedItemIdentifiers:](toolbaralloweditemidentifiers%28__%29.md): Asks the delegate to provide the items allowed on the toolbar.
- [toolbarImmovableItemIdentifiers:](toolbarimmovableitemidentifiers%28__%29.md): Asks the delegate to provide the items that people can’t remove from the toolbar or rearrange during the customization process.
- [toolbarSelectableItemIdentifiers:](toolbarselectableitemidentifiers%28__%29.md): Asks the delegate to provide the set of selectable items in the toolbar.
- [toolbar:itemIdentifier:canBeInsertedAtIndex:](toolbar%28__itemidentifier_canbeinsertedat_%29.md): Asks the delegate for a Boolean value that indicates whether the toolbar can place the item at the specified position.
