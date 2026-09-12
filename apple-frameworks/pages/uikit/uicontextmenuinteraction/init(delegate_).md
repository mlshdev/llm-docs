> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicontextmenuinteraction/init(delegate:)](https://developer.apple.com/documentation/uikit/uicontextmenuinteraction/init(delegate:))

# init(delegate:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 17.0+ · visionOS 1.0+

Creates a context menu interaction object with the specified delegate object.

## Declaration

```swift
init(delegate: any UIContextMenuInteractionDelegate)
```

## Parameters

- `delegate`: The object that provides the contextual menu and responds to other interaction-related events. This object must adopt the [UIContextMenuInteractionDelegate](../uicontextmenuinteractiondelegate.md) protocol.

<a id="return-value"></a>

## Return Value

A new context menu interaction object with the associated delegate.

## See Also

### Creating a context menu interaction object

- [Adding context menus in your app](../adding-context-menus-in-your-app.md): Provide quick access to useful actions by adding context menus to your iOS app.
- [Adding menus and shortcuts to the menu bar and user interface](../adding-menus-and-shortcuts-to-the-menu-bar-and-user-interface.md): Provide quick access to useful actions by adding menus and keyboard shortcuts to your Mac app built with Mac Catalyst.

# initWithDelegate: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 17.0+ · visionOS 1.0+

Creates a context menu interaction object with the specified delegate object.

## Declaration

```objectivec
- (instancetype) initWithDelegate:(id<UIContextMenuInteractionDelegate>) delegate;
```

## Parameters

- `delegate`: The object that provides the contextual menu and responds to other interaction-related events. This object must adopt the [UIContextMenuInteractionDelegate](../uicontextmenuinteractiondelegate.md) protocol.

<a id="return-value"></a>

## Return Value

A new context menu interaction object with the associated delegate.

## See Also

### Creating a context menu interaction object

- [Adding context menus in your app](../adding-context-menus-in-your-app.md): Provide quick access to useful actions by adding context menus to your iOS app.
- [Adding menus and shortcuts to the menu bar and user interface](../adding-menus-and-shortcuts-to-the-menu-bar-and-user-interface.md): Provide quick access to useful actions by adding menus and keyboard shortcuts to your Mac app built with Mac Catalyst.
