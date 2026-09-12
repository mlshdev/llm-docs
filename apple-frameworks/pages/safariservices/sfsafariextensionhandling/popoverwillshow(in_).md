> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/safariservices/sfsafariextensionhandling/popoverwillshow(in:)](https://developer.apple.com/documentation/safariservices/sfsafariextensionhandling/popoverwillshow(in:))

# popoverWillShow(in:) (Swift)

**Framework:** Safari Services  
**Kind:** Instance Method  
**Availability:** macOS 10.12+

Tells the handler that the app extension’s popover is about to be opened.

## Declaration

```swift
optional func popoverWillShow(in window: SFSafariWindow)
```

## Parameters

- `window`: The window to display the popover in.

## Mentioned In

- [Adjusting settings for a toolbar item](../adjusting-settings-for-a-toolbar-item.md)

<a id="Discussion"></a>

## Discussion

This method is called when a popover associated with the app extension is triggered.

## See Also

### Working with Popovers

- [popoverViewController()](popoverviewcontroller%28%29.md): Asks the handler to provide a popover view controller for display.
- [popoverDidClose(in:)](popoverdidclose%28in_%29.md): Tells the handler that the app extension’s popover was closed.

# popoverWillShowInWindow: (Objective-C)

**Framework:** Safari Services  
**Kind:** Instance Method  
**Availability:** macOS 10.12+

Tells the handler that the app extension’s popover is about to be opened.

## Declaration

```objectivec
- (void) popoverWillShowInWindow:(SFSafariWindow *) window;
```

## Parameters

- `window`: The window to display the popover in.

## Mentioned In

- [Adjusting settings for a toolbar item](../adjusting-settings-for-a-toolbar-item.md)

<a id="Discussion"></a>

## Discussion

This method is called when a popover associated with the app extension is triggered.

## See Also

### Working with Popovers

- [popoverViewController](popoverviewcontroller%28%29.md): Asks the handler to provide a popover view controller for display.
- [popoverDidCloseInWindow:](popoverdidclose%28in_%29.md): Tells the handler that the app extension’s popover was closed.
