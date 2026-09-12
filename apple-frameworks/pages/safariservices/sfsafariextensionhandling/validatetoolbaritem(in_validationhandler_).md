> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/safariservices/sfsafariextensionhandling/validatetoolbaritem(in:validationhandler:)](https://developer.apple.com/documentation/safariservices/sfsafariextensionhandling/validatetoolbaritem(in:validationhandler:))

# validateToolbarItem(in:validationHandler:) (Swift)

**Framework:** Safari Services  
**Kind:** Instance Method  
**Availability:** macOS 10.12+

Determines if a toolbar menu item should be enabled or have badge text when browser state changes.

## Declaration

```swift
optional func validateToolbarItem(in window: SFSafariWindow, validationHandler: @escaping (Bool, String) -> Void)
```

## Parameters

- `window`: The window containing the clicked toolbar item.
- `validationHandler`: A code block used to set the state of the toolbar item.

## Mentioned In

- [Adjusting settings for a toolbar item](../adjusting-settings-for-a-toolbar-item.md)

<a id="Discussion"></a>

## Discussion

This method is called by the [setToolbarItemsNeedUpdate()](../sfsafariapplication/settoolbaritemsneedupdate%28%29.md) method or when Safari’s state changes in a way that may affect the toolbar item’s enabled or badge state. Your handler should decide whether the toolbar menu should be enabled and whether it should have any badge text, and then call the `validationHandler` block to update the toolbar item state.

## See Also

### Working with Toolbar Items

- [toolbarItemClicked(in:)](toolbaritemclicked%28in_%29.md): A method the system calls when a user clicks a toolbar item associated with the app extension.

# validateToolbarItemInWindow:validationHandler: (Objective-C)

**Framework:** Safari Services  
**Kind:** Instance Method  
**Availability:** macOS 10.12+

Determines if a toolbar menu item should be enabled or have badge text when browser state changes.

## Declaration

```objectivec
- (void) validateToolbarItemInWindow:(SFSafariWindow *) window validationHandler:(void (^)(BOOL enabled, NSString *badgeText)) validationHandler;
```

## Parameters

- `window`: The window containing the clicked toolbar item.
- `validationHandler`: A code block used to set the state of the toolbar item.

## Mentioned In

- [Adjusting settings for a toolbar item](../adjusting-settings-for-a-toolbar-item.md)

<a id="Discussion"></a>

## Discussion

This method is called by the [setToolbarItemsNeedUpdate](../sfsafariapplication/settoolbaritemsneedupdate%28%29.md) method or when Safari’s state changes in a way that may affect the toolbar item’s enabled or badge state. Your handler should decide whether the toolbar menu should be enabled and whether it should have any badge text, and then call the `validationHandler` block to update the toolbar item state.

## See Also

### Working with Toolbar Items

- [toolbarItemClickedInWindow:](toolbaritemclicked%28in_%29.md): A method the system calls when a user clicks a toolbar item associated with the app extension.
