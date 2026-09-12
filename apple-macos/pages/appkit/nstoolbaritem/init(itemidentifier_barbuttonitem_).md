> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstoolbaritem/init(itemidentifier:barbuttonitem:)](https://developer.apple.com/documentation/appkit/nstoolbaritem/init(itemidentifier:barbuttonitem:))

# init(itemIdentifier:barButtonItem:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** Mac Catalyst 13.0+

Creates a toolbar item with property values from the specified bar button item.

## Declaration

```swift
convenience init(itemIdentifier: NSToolbarItem.Identifier, barButtonItem: UIBarButtonItem)
```

## Parameters

- `itemIdentifier`: The identifier for the toolbar item. You use this value to identify the item within your app, so you don’t need to localize it. For example, your toolbar delegate uses this value to identify the specific toolbar item.
- `barButtonItem`: The bar button item to use to create the toolbar item.

<a id="return-value"></a>

## Return Value

A new toolbar item.

<a id="Discussion"></a>

## Discussion

Use this method to create and initialize a toolbar item with property values from a [UIBarButtonItem](https://developer.apple.com/documentation/uikit/uibarbuttonitem), such as [title](title.md), [image](image.md), [action](action.md), and [target](target.md).

> **Note**

>  In macOS 12 and earlier, this method doesn’t support creating a toolbar item from a bar button item that contains a custom view.

## See Also

### Creating a toolbar item

- [init(itemIdentifier:)](init%28itemidentifier_%29.md): Creates a toolbar item with the specified identifier.

# itemWithItemIdentifier:barButtonItem: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** Mac Catalyst 13.0+

Creates a toolbar item with property values from the specified bar button item.

## Declaration

```objectivec
+ (instancetype) itemWithItemIdentifier:(NSToolbarItemIdentifier) itemIdentifier barButtonItem:(UIBarButtonItem *) barButtonItem;
```

## Parameters

- `itemIdentifier`: The identifier for the toolbar item. You use this value to identify the item within your app, so you don’t need to localize it. For example, your toolbar delegate uses this value to identify the specific toolbar item.
- `barButtonItem`: The bar button item to use to create the toolbar item.

<a id="return-value"></a>

## Return Value

A new toolbar item.

<a id="Discussion"></a>

## Discussion

Use this method to create and initialize a toolbar item with property values from a [UIBarButtonItem](https://developer.apple.com/documentation/uikit/uibarbuttonitem), such as [title](title.md), [image](image.md), [action](action.md), and [target](target.md).

> **Note**

>  In macOS 12 and earlier, this method doesn’t support creating a toolbar item from a bar button item that contains a custom view.

## See Also

### Creating a toolbar item

- [initWithItemIdentifier:](init%28itemidentifier_%29.md): Creates a toolbar item with the specified identifier.
