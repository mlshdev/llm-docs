> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstoolbardelegate/toolbar(_:itemidentifier:canbeinsertedat:)](https://developer.apple.com/documentation/appkit/nstoolbardelegate/toolbar(_:itemidentifier:canbeinsertedat:))

# toolbar(\_:itemIdentifier:canBeInsertedAt:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+

Asks the delegate for a Boolean value that indicates whether the toolbar can place the item at the specified position.

## Declaration

```swift
@MainActor optional func toolbar(_ toolbar: NSToolbar, itemIdentifier: NSToolbarItem.Identifier, canBeInsertedAt index: Int) -> Bool
```

## Parameters

- `toolbar`: The toolbar that contains the items.
- `itemIdentifier`: The identifier of the toolbar item to insert at the specified index.
- `index`: The proposed index at which to place the item. If the toolbar is removing the item, this value is [NSNotFound](https://developer.apple.com/documentation/foundation/nsnotfound-4qp9h).

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) to allow the toolbar to place the item at the specified location, or [false](https://developer.apple.com/documentation/swift/false) to prevent the toolbar from placing the item in that location.

<a id="Discussion"></a>

## Discussion

Implement this method to control the placement of items in the toolbar. During a drag operation, the toolbar calls this method to determine if the specified index is an acceptable location for the item. Return a Boolean value that indicates whether the new posiition is acceptable.

Don’t use the `index` parameter to determine the final location of the toolbar item. During a drag operation, the toolbar can call this method multiple times, so the index value can change later.

## See Also

### Configuring the behavior of items

- [toolbarAllowedItemIdentifiers(\_:)](toolbaralloweditemidentifiers%28__%29.md): Asks the delegate to provide the items allowed on the toolbar.
- [toolbarDefaultItemIdentifiers(\_:)](toolbardefaultitemidentifiers%28__%29.md): Asks the delegate to provide the default items to display on the toolbar.
- [toolbarImmovableItemIdentifiers(\_:)](toolbarimmovableitemidentifiers%28__%29.md): Asks the delegate to provide the items that people can’t remove from the toolbar or rearrange during the customization process.
- [toolbarSelectableItemIdentifiers(\_:)](toolbarselectableitemidentifiers%28__%29.md): Asks the delegate to provide the set of selectable items in the toolbar.

# toolbar:itemIdentifier:canBeInsertedAtIndex: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 16.0+ · macOS 13.0+

Asks the delegate for a Boolean value that indicates whether the toolbar can place the item at the specified position.

## Declaration

```objectivec
- (BOOL) toolbar:(NSToolbar *) toolbar itemIdentifier:(NSToolbarItemIdentifier) itemIdentifier canBeInsertedAtIndex:(NSInteger) index;
```

## Parameters

- `toolbar`: The toolbar that contains the items.
- `itemIdentifier`: The identifier of the toolbar item to insert at the specified index.
- `index`: The proposed index at which to place the item. If the toolbar is removing the item, this value is [NSNotFound](https://developer.apple.com/documentation/foundation/nsnotfound-4qp9h).

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) to allow the toolbar to place the item at the specified location, or [false](https://developer.apple.com/documentation/swift/false) to prevent the toolbar from placing the item in that location.

<a id="Discussion"></a>

## Discussion

Implement this method to control the placement of items in the toolbar. During a drag operation, the toolbar calls this method to determine if the specified index is an acceptable location for the item. Return a Boolean value that indicates whether the new posiition is acceptable.

Don’t use the `index` parameter to determine the final location of the toolbar item. During a drag operation, the toolbar can call this method multiple times, so the index value can change later.

## See Also

### Configuring the behavior of items

- [toolbarAllowedItemIdentifiers:](toolbaralloweditemidentifiers%28__%29.md): Asks the delegate to provide the items allowed on the toolbar.
- [toolbarDefaultItemIdentifiers:](toolbardefaultitemidentifiers%28__%29.md): Asks the delegate to provide the default items to display on the toolbar.
- [toolbarImmovableItemIdentifiers:](toolbarimmovableitemidentifiers%28__%29.md): Asks the delegate to provide the items that people can’t remove from the toolbar or rearrange during the customization process.
- [toolbarSelectableItemIdentifiers:](toolbarselectableitemidentifiers%28__%29.md): Asks the delegate to provide the set of selectable items in the toolbar.
