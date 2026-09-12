> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstoolbardelegate/toolbarwilladditem(_:)](https://developer.apple.com/documentation/appkit/nstoolbardelegate/toolbarwilladditem(_:))

# toolbarWillAddItem(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.10+

Tells the delegate that the toolbar is about to add the specified item.

## Declaration

```swift
@MainActor optional func toolbarWillAddItem(_ notification: Notification)
```

## Parameters

- `notification`: A notification named [willAddItemNotification](../nstoolbar/willadditemnotification.md).

<a id="Discussion"></a>

## Discussion

Use this method to cache references to new toolbar items or perform any tasks related to the addition of those items.

## See Also

### Adding and removing items

- [toolbar(\_:itemForItemIdentifier:willBeInsertedIntoToolbar:)](toolbar%28__itemforitemidentifier_willbeinsertedintotoolbar_%29.md): Asks the delegate for the toolbar item associated with the specified identifier.
- [toolbarDidRemoveItem(\_:)](toolbardidremoveitem%28__%29.md): Tells the delegate that the toolbar removed the specified item.
- [NSToolbar.Identifier](../nstoolbar/identifier-swift.typealias.md): A string value that you use to differentiate your app’s toolbars.

# toolbarWillAddItem: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.1+ · macOS

Tells the delegate that the toolbar is about to add the specified item.

## Declaration

```objectivec
- (void) toolbarWillAddItem:(NSNotification *) notification;
```

## Parameters

- `notification`: A notification named [NSToolbarWillAddItemNotification](../nstoolbar/willadditemnotification.md).

<a id="Discussion"></a>

## Discussion

Use this method to cache references to new toolbar items or perform any tasks related to the addition of those items.

## See Also

### Adding and removing items

- [toolbar:itemForItemIdentifier:willBeInsertedIntoToolbar:](toolbar%28__itemforitemidentifier_willbeinsertedintotoolbar_%29.md): Asks the delegate for the toolbar item associated with the specified identifier.
- [toolbarDidRemoveItem:](toolbardidremoveitem%28__%29.md): Tells the delegate that the toolbar removed the specified item.
- [NSToolbarIdentifier](../nstoolbar/identifier-swift.typealias.md): A string value that you use to differentiate your app’s toolbars.
