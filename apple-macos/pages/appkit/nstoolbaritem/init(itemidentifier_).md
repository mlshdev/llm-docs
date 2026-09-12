> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstoolbaritem/init(itemidentifier:)](https://developer.apple.com/documentation/appkit/nstoolbaritem/init(itemidentifier:))

# init(itemIdentifier:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS

Creates a toolbar item with the specified identifier.

## Declaration

```swift
init(itemIdentifier: NSToolbarItem.Identifier)
```

## Parameters

- `itemIdentifier`: The identifier for the toolbar item. You use this value to identify the item within your app, so you don’t need to localize it. For example, your toolbar delegate uses this value to identify the specific toolbar item.

<a id="return-value"></a>

## Return Value

A new toolbar item.

## See Also

### Related Documentation

- [Integrating a Toolbar and Touch Bar into Your App](../integrating-a-toolbar-and-touch-bar-into-your-app.md): Provide users quick access to your app’s features from a toolbar and corresponding Touch Bar.

### Creating a toolbar item

- [init(itemIdentifier:barButtonItem:)](init%28itemidentifier_barbuttonitem_%29.md): Creates a toolbar item with property values from the specified bar button item.

# initWithItemIdentifier: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.1+ · macOS

Creates a toolbar item with the specified identifier.

## Declaration

```objectivec
- (instancetype) initWithItemIdentifier:(NSToolbarItemIdentifier) itemIdentifier;
```

## Parameters

- `itemIdentifier`: The identifier for the toolbar item. You use this value to identify the item within your app, so you don’t need to localize it. For example, your toolbar delegate uses this value to identify the specific toolbar item.

<a id="return-value"></a>

## Return Value

A new toolbar item.

## See Also

### Related Documentation

- [Integrating a Toolbar and Touch Bar into Your App](../integrating-a-toolbar-and-touch-bar-into-your-app.md): Provide users quick access to your app’s features from a toolbar and corresponding Touch Bar.

### Creating a toolbar item

- [itemWithItemIdentifier:barButtonItem:](init%28itemidentifier_barbuttonitem_%29.md): Creates a toolbar item with property values from the specified bar button item.
