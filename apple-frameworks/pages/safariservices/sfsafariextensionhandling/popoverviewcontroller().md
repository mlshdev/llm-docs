> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/safariservices/sfsafariextensionhandling/popoverviewcontroller()](https://developer.apple.com/documentation/safariservices/sfsafariextensionhandling/popoverviewcontroller())

# popoverViewController() (Swift)

**Framework:** Safari Services  
**Kind:** Instance Method  
**Availability:** macOS 10.12+

Asks the handler to provide a popover view controller for display.

## Declaration

```swift
optional func popoverViewController() -> SFSafariExtensionViewController
```

<a id="return-value"></a>

## Return Value

The app extension’s popover view controller.

## Mentioned In

- [Adjusting settings for a toolbar item](../adjusting-settings-for-a-toolbar-item.md)

## See Also

### Working with Popovers

- [popoverWillShow(in:)](popoverwillshow%28in_%29.md): Tells the handler that the app extension’s popover is about to be opened.
- [popoverDidClose(in:)](popoverdidclose%28in_%29.md): Tells the handler that the app extension’s popover was closed.

# popoverViewController (Objective-C)

**Framework:** Safari Services  
**Kind:** Instance Method  
**Availability:** macOS 10.12+

Asks the handler to provide a popover view controller for display.

## Declaration

```objectivec
- (SFSafariExtensionViewController *) popoverViewController;
```

<a id="return-value"></a>

## Return Value

The app extension’s popover view controller.

## Mentioned In

- [Adjusting settings for a toolbar item](../adjusting-settings-for-a-toolbar-item.md)

## See Also

### Working with Popovers

- [popoverWillShowInWindow:](popoverwillshow%28in_%29.md): Tells the handler that the app extension’s popover is about to be opened.
- [popoverDidCloseInWindow:](popoverdidclose%28in_%29.md): Tells the handler that the app extension’s popover was closed.
