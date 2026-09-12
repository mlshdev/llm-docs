> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/safariservices/sfsafariextensionhandling/popoverdidclose(in:)](https://developer.apple.com/documentation/safariservices/sfsafariextensionhandling/popoverdidclose(in:))

# popoverDidClose(in:) (Swift)

**Framework:** Safari Services  
**Kind:** Instance Method  
**Availability:** macOS 10.12+

Tells the handler that the app extension’s popover was closed.

## Declaration

```swift
optional func popoverDidClose(in window: SFSafariWindow)
```

## Parameters

- `window`: The window that displayed the popover.

## Mentioned In

- [Adjusting settings for a toolbar item](../adjusting-settings-for-a-toolbar-item.md)

## See Also

### Working with Popovers

- [popoverViewController()](popoverviewcontroller%28%29.md): Asks the handler to provide a popover view controller for display.
- [popoverWillShow(in:)](popoverwillshow%28in_%29.md): Tells the handler that the app extension’s popover is about to be opened.

# popoverDidCloseInWindow: (Objective-C)

**Framework:** Safari Services  
**Kind:** Instance Method  
**Availability:** macOS 10.12+

Tells the handler that the app extension’s popover was closed.

## Declaration

```objectivec
- (void) popoverDidCloseInWindow:(SFSafariWindow *) window;
```

## Parameters

- `window`: The window that displayed the popover.

## Mentioned In

- [Adjusting settings for a toolbar item](../adjusting-settings-for-a-toolbar-item.md)

## See Also

### Working with Popovers

- [popoverViewController](popoverviewcontroller%28%29.md): Asks the handler to provide a popover view controller for display.
- [popoverWillShowInWindow:](popoverwillshow%28in_%29.md): Tells the handler that the app extension’s popover is about to be opened.
