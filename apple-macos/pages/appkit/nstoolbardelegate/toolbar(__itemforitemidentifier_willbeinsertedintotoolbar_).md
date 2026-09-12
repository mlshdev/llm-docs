> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstoolbardelegate/toolbar(_:itemforitemidentifier:willbeinsertedintotoolbar:)](https://developer.apple.com/documentation/appkit/nstoolbardelegate/toolbar(_:itemforitemidentifier:willbeinsertedintotoolbar:))

# toolbar(\_:itemForItemIdentifier:willBeInsertedIntoToolbar:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS

Asks the delegate for the toolbar item associated with the specified identifier.

## Declaration

```swift
@MainActor optional func toolbar(_ toolbar: NSToolbar, itemForItemIdentifier itemIdentifier: NSToolbarItem.Identifier, willBeInsertedIntoToolbar flag: Bool) -> NSToolbarItem?
```

## Parameters

- `toolbar`: The toolbar for which the item is being requested.
- `itemIdentifier`: The identifier for the requested item.
- `flag`: [true](https://developer.apple.com/documentation/swift/true) if the toolbar will insert the item immediately. If this parameter is [false](https://developer.apple.com/documentation/swift/false), provide a canonical representation for the item. For example, provide a version of the item suitable for display in the toolbar customization sheet.

<a id="return-value"></a>

## Return Value

A new [NSToolbarItem](../nstoolbaritem.md) object, or `nil` if no toolbar item is available for the specified identifier.

<a id="Discussion"></a>

## Discussion

Use this method to create new [NSToolbarItem](../nstoolbaritem.md) objects when the toolbar asks for them. If your toolbar item uses a custom view, make sure that view is fully configured before you return the item. The toolbar becomes the owner of the returned item, but can display the item either in the toolbar or the customization palette.

Don’t recycle toolbar items; always provide a new instance, even if the toolbar previously asked for an item with the same identifier.

> **Important**

>  Even though this is an optional method, you must implement it if you create the toolbar programatically.

## See Also

### Related Documentation

- [Integrating a Toolbar and Touch Bar into Your App](../integrating-a-toolbar-and-touch-bar-into-your-app.md): Provide users quick access to your app’s features from a toolbar and corresponding Touch Bar.

### Adding and removing items

- [toolbarWillAddItem(\_:)](toolbarwilladditem%28__%29.md): Tells the delegate that the toolbar is about to add the specified item.
- [toolbarDidRemoveItem(\_:)](toolbardidremoveitem%28__%29.md): Tells the delegate that the toolbar removed the specified item.
- [NSToolbar.Identifier](../nstoolbar/identifier-swift.typealias.md): A string value that you use to differentiate your app’s toolbars.

# toolbar:itemForItemIdentifier:willBeInsertedIntoToolbar: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.1+ · macOS

Asks the delegate for the toolbar item associated with the specified identifier.

## Declaration

```objectivec
- (NSToolbarItem *) toolbar:(NSToolbar *) toolbar itemForItemIdentifier:(NSToolbarItemIdentifier) itemIdentifier willBeInsertedIntoToolbar:(BOOL) flag;
```

## Parameters

- `toolbar`: The toolbar for which the item is being requested.
- `itemIdentifier`: The identifier for the requested item.
- `flag`: [true](https://developer.apple.com/documentation/swift/true) if the toolbar will insert the item immediately. If this parameter is [false](https://developer.apple.com/documentation/swift/false), provide a canonical representation for the item. For example, provide a version of the item suitable for display in the toolbar customization sheet.

<a id="return-value"></a>

## Return Value

A new [NSToolbarItem](../nstoolbaritem.md) object, or `nil` if no toolbar item is available for the specified identifier.

<a id="Discussion"></a>

## Discussion

Use this method to create new [NSToolbarItem](../nstoolbaritem.md) objects when the toolbar asks for them. If your toolbar item uses a custom view, make sure that view is fully configured before you return the item. The toolbar becomes the owner of the returned item, but can display the item either in the toolbar or the customization palette.

Don’t recycle toolbar items; always provide a new instance, even if the toolbar previously asked for an item with the same identifier.

> **Important**

>  Even though this is an optional method, you must implement it if you create the toolbar programatically.

## See Also

### Related Documentation

- [Integrating a Toolbar and Touch Bar into Your App](../integrating-a-toolbar-and-touch-bar-into-your-app.md): Provide users quick access to your app’s features from a toolbar and corresponding Touch Bar.

### Adding and removing items

- [toolbarWillAddItem:](toolbarwilladditem%28__%29.md): Tells the delegate that the toolbar is about to add the specified item.
- [toolbarDidRemoveItem:](toolbardidremoveitem%28__%29.md): Tells the delegate that the toolbar removed the specified item.
- [NSToolbarIdentifier](../nstoolbar/identifier-swift.typealias.md): A string value that you use to differentiate your app’s toolbars.
