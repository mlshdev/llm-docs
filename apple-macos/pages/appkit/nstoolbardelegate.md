> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstoolbardelegate](https://developer.apple.com/documentation/appkit/nstoolbardelegate)

# NSToolbarDelegate (Swift)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS

A set of optional methods you use to configure the toolbar and respond to changes.

## Declaration

```swift
protocol NSToolbarDelegate : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Use the methods of [NSToolbarDelegate](nstoolbardelegate.md) to customize the behavior of your toolbars. You might use these methods to track the addition or removal of toolbar items, or use them to prevent someone from rearranging or removing specific items. Adopt this protocol in one of your custom objects and assign that object to the [delegate](nstoolbar/delegate.md) property of the [NSToolbar](nstoolbar.md) object you want to manage.

## Topics

### Adding and removing items

- [toolbar(\_:itemForItemIdentifier:willBeInsertedIntoToolbar:)](nstoolbardelegate/toolbar%28__itemforitemidentifier_willbeinsertedintotoolbar_%29.md): Asks the delegate for the toolbar item associated with the specified identifier.
- [toolbarWillAddItem(\_:)](nstoolbardelegate/toolbarwilladditem%28__%29.md): Tells the delegate that the toolbar is about to add the specified item.
- [toolbarDidRemoveItem(\_:)](nstoolbardelegate/toolbardidremoveitem%28__%29.md): Tells the delegate that the toolbar removed the specified item.
- [NSToolbar.Identifier](nstoolbar/identifier-swift.typealias.md): A string value that you use to differentiate your app’s toolbars.

### Configuring the behavior of items

- [toolbarAllowedItemIdentifiers(\_:)](nstoolbardelegate/toolbaralloweditemidentifiers%28__%29.md): Asks the delegate to provide the items allowed on the toolbar.
- [toolbarDefaultItemIdentifiers(\_:)](nstoolbardelegate/toolbardefaultitemidentifiers%28__%29.md): Asks the delegate to provide the default items to display on the toolbar.
- [toolbarImmovableItemIdentifiers(\_:)](nstoolbardelegate/toolbarimmovableitemidentifiers%28__%29.md): Asks the delegate to provide the items that people can’t remove from the toolbar or rearrange during the customization process.
- [toolbarSelectableItemIdentifiers(\_:)](nstoolbardelegate/toolbarselectableitemidentifiers%28__%29.md): Asks the delegate to provide the set of selectable items in the toolbar.
- [toolbar(\_:itemIdentifier:canBeInsertedAt:)](nstoolbardelegate/toolbar%28__itemidentifier_canbeinsertedat_%29.md): Asks the delegate for a Boolean value that indicates whether the toolbar can place the item at the specified position.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

### Conforming Types

- [NSTabViewController](nstabviewcontroller.md)

## See Also

### Configuring the toolbar contents

- [delegate](nstoolbar/delegate.md): The object you use to customize the toolbar contents and configuration.

# NSToolbarDelegate (Objective-C)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** Mac Catalyst 13.1+ · macOS

A set of optional methods you use to configure the toolbar and respond to changes.

## Declaration

```objectivec
@protocol NSToolbarDelegate <NSObject>
```

<a id="overview"></a>

## Overview

Use the methods of [NSToolbarDelegate](nstoolbardelegate.md) to customize the behavior of your toolbars. You might use these methods to track the addition or removal of toolbar items, or use them to prevent someone from rearranging or removing specific items. Adopt this protocol in one of your custom objects and assign that object to the [delegate](nstoolbar/delegate.md) property of the [NSToolbar](nstoolbar.md) object you want to manage.

## Topics

### Adding and removing items

- [toolbar:itemForItemIdentifier:willBeInsertedIntoToolbar:](nstoolbardelegate/toolbar%28__itemforitemidentifier_willbeinsertedintotoolbar_%29.md): Asks the delegate for the toolbar item associated with the specified identifier.
- [toolbarWillAddItem:](nstoolbardelegate/toolbarwilladditem%28__%29.md): Tells the delegate that the toolbar is about to add the specified item.
- [toolbarDidRemoveItem:](nstoolbardelegate/toolbardidremoveitem%28__%29.md): Tells the delegate that the toolbar removed the specified item.
- [NSToolbarIdentifier](nstoolbar/identifier-swift.typealias.md): A string value that you use to differentiate your app’s toolbars.

### Configuring the behavior of items

- [toolbarAllowedItemIdentifiers:](nstoolbardelegate/toolbaralloweditemidentifiers%28__%29.md): Asks the delegate to provide the items allowed on the toolbar.
- [toolbarDefaultItemIdentifiers:](nstoolbardelegate/toolbardefaultitemidentifiers%28__%29.md): Asks the delegate to provide the default items to display on the toolbar.
- [toolbarImmovableItemIdentifiers:](nstoolbardelegate/toolbarimmovableitemidentifiers%28__%29.md): Asks the delegate to provide the items that people can’t remove from the toolbar or rearrange during the customization process.
- [toolbarSelectableItemIdentifiers:](nstoolbardelegate/toolbarselectableitemidentifiers%28__%29.md): Asks the delegate to provide the set of selectable items in the toolbar.
- [toolbar:itemIdentifier:canBeInsertedAtIndex:](nstoolbardelegate/toolbar%28__itemidentifier_canbeinsertedat_%29.md): Asks the delegate for a Boolean value that indicates whether the toolbar can place the item at the specified position.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

### Conforming Types

- [NSTabViewController](nstabviewcontroller.md)

## See Also

### Configuring the toolbar contents

- [delegate](nstoolbar/delegate.md): The object you use to customize the toolbar contents and configuration.
