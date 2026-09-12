> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/safariservices/sfsafariextensionhandling/toolbaritemclicked(in:)](https://developer.apple.com/documentation/safariservices/sfsafariextensionhandling/toolbaritemclicked(in:))

# toolbarItemClicked(in:) (Swift)

**Framework:** Safari Services  
**Kind:** Instance Method  
**Availability:** macOS 10.12+

A method the system calls when a user clicks a toolbar item associated with the app extension.

## Declaration

```swift
optional func toolbarItemClicked(in window: SFSafariWindow)
```

## Parameters

- `window`: The window containing the clicked toolbar item.

## Mentioned In

- [Adjusting settings for a toolbar item](../adjusting-settings-for-a-toolbar-item.md)

<a id="Discussion"></a>

## Discussion

The toolbar item can either execute a command or display a popover.

## See Also

### Working with Toolbar Items

- [validateToolbarItem(in:validationHandler:)](validatetoolbaritem%28in_validationhandler_%29.md): Determines if a toolbar menu item should be enabled or have badge text when browser state changes.

# toolbarItemClickedInWindow: (Objective-C)

**Framework:** Safari Services  
**Kind:** Instance Method  
**Availability:** macOS 10.12+

A method the system calls when a user clicks a toolbar item associated with the app extension.

## Declaration

```objectivec
- (void) toolbarItemClickedInWindow:(SFSafariWindow *) window;
```

## Parameters

- `window`: The window containing the clicked toolbar item.

## Mentioned In

- [Adjusting settings for a toolbar item](../adjusting-settings-for-a-toolbar-item.md)

<a id="Discussion"></a>

## Discussion

The toolbar item can either execute a command or display a popover.

## See Also

### Working with Toolbar Items

- [validateToolbarItemInWindow:validationHandler:](validatetoolbaritem%28in_validationhandler_%29.md): Determines if a toolbar menu item should be enabled or have badge text when browser state changes.
