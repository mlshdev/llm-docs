> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstoolbardelegate/toolbarimmovableitemidentifiers(_:)](https://developer.apple.com/documentation/appkit/nstoolbardelegate/toolbarimmovableitemidentifiers(_:))

# toolbarImmovableItemIdentifiers(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+

Asks the delegate to provide the items that people can’t remove from the toolbar or rearrange during the customization process.

## Declaration

```swift
@MainActor optional func toolbarImmovableItemIdentifiers(_ toolbar: NSToolbar) -> Set<NSToolbarItem.Identifier>
```

## Parameters

- `toolbar`: The toolbar that contains the items.

<a id="return-value"></a>

## Return Value

The set of item identifiers that people can’t remove from the toolbar or move to other locations in the toolbar. Return an empty set to let someone customize all toolbar items.

<a id="Discussion"></a>

## Discussion

Implement this method in your delegate and return any items you don’t want people to remove or rearrange. If you don’t implement this method, the toolbar lets people rearrange and remove all toolbar items.

## See Also

### Configuring the behavior of items

- [toolbarAllowedItemIdentifiers(\_:)](toolbaralloweditemidentifiers%28__%29.md): Asks the delegate to provide the items allowed on the toolbar.
- [toolbarDefaultItemIdentifiers(\_:)](toolbardefaultitemidentifiers%28__%29.md): Asks the delegate to provide the default items to display on the toolbar.
- [toolbarSelectableItemIdentifiers(\_:)](toolbarselectableitemidentifiers%28__%29.md): Asks the delegate to provide the set of selectable items in the toolbar.
- [toolbar(\_:itemIdentifier:canBeInsertedAt:)](toolbar%28__itemidentifier_canbeinsertedat_%29.md): Asks the delegate for a Boolean value that indicates whether the toolbar can place the item at the specified position.

# toolbarImmovableItemIdentifiers: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 16.0+ · macOS 13.0+

Asks the delegate to provide the items that people can’t remove from the toolbar or rearrange during the customization process.

## Declaration

```objectivec
- (NSSet<NSString *> *) toolbarImmovableItemIdentifiers:(NSToolbar *) toolbar;
```

## Parameters

- `toolbar`: The toolbar that contains the items.

<a id="return-value"></a>

## Return Value

The set of item identifiers that people can’t remove from the toolbar or move to other locations in the toolbar. Return an empty set to let someone customize all toolbar items.

<a id="Discussion"></a>

## Discussion

Implement this method in your delegate and return any items you don’t want people to remove or rearrange. If you don’t implement this method, the toolbar lets people rearrange and remove all toolbar items.

## See Also

### Configuring the behavior of items

- [toolbarAllowedItemIdentifiers:](toolbaralloweditemidentifiers%28__%29.md): Asks the delegate to provide the items allowed on the toolbar.
- [toolbarDefaultItemIdentifiers:](toolbardefaultitemidentifiers%28__%29.md): Asks the delegate to provide the default items to display on the toolbar.
- [toolbarSelectableItemIdentifiers:](toolbarselectableitemidentifiers%28__%29.md): Asks the delegate to provide the set of selectable items in the toolbar.
- [toolbar:itemIdentifier:canBeInsertedAtIndex:](toolbar%28__itemidentifier_canbeinsertedat_%29.md): Asks the delegate for a Boolean value that indicates whether the toolbar can place the item at the specified position.
