> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindowdelegate/window(_:shouldpopupdocumentpathmenu:)](https://developer.apple.com/documentation/appkit/nswindowdelegate/window(_:shouldpopupdocumentpathmenu:))

# window(\_:shouldPopUpDocumentPathMenu:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Asks the delegate whether the window displays the title pop-up menu in response to a Command-click or Control-click on its title.

## Declaration

```swift
@MainActor optional func window(_ window: NSWindow, shouldPopUpDocumentPathMenu menu: NSMenu) -> Bool
```

## Parameters

- `window`: The window whose title the user Command-clicked or Control-clicked.
- `menu`: The menu the window will display, if allowed. By default, its items are the path components of the file represented by `window`.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) to allow the display of the title pop-up menu; [false](https://developer.apple.com/documentation/swift/false) to prevent it.

## See Also

### Related Documentation

- [representedURL](../nswindow/representedurl.md): The URL of the file the window represents.

# window:shouldPopUpDocumentPathMenu: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Asks the delegate whether the window displays the title pop-up menu in response to a Command-click or Control-click on its title.

## Declaration

```objectivec
- (BOOL) window:(NSWindow *) window shouldPopUpDocumentPathMenu:(NSMenu *) menu;
```

## Parameters

- `window`: The window whose title the user Command-clicked or Control-clicked.
- `menu`: The menu the window will display, if allowed. By default, its items are the path components of the file represented by `window`.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) to allow the display of the title pop-up menu; [false](https://developer.apple.com/documentation/swift/false) to prevent it.

## See Also

### Related Documentation

- [representedURL](../nswindow/representedurl.md): The URL of the file the window represents.
