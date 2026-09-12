> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsresponder/newwindowfortab(_:)](https://developer.apple.com/documentation/appkit/nsresponder/newwindowfortab(_:))

# newWindowForTab(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12+

Creates a new window to show as a tab in a tabbed window.

## Declaration

```swift
@IBAction func newWindowForTab(_ sender: Any?)
```

## Parameters

- `sender`: The sender of the action.

<a id="Discussion"></a>

## Discussion

The system automatically calls this method to create a window for a new tab when the user clicks the plus button in a tabbed window. The system shows a plus button on a tabbed window only if this method exists on one of the following objects:

- In an [NSDocumentController](../nsdocumentcontroller.md) subclass
- In the responder chain starting at [NSWindow](../nswindow.md), such as [NSWindow](../nswindow.md), the window delegate, the window controller, the [NSApplication](../nsapplication.md) delegate, and so on

# newWindowForTab: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12+

Creates a new window to show as a tab in a tabbed window.

## Declaration

```objectivec
- (void) newWindowForTab:(id) sender;
```

## Parameters

- `sender`: The sender of the action.

<a id="Discussion"></a>

## Discussion

The system automatically calls this method to create a window for a new tab when the user clicks the plus button in a tabbed window. The system shows a plus button on a tabbed window only if this method exists on one of the following objects:

- In an [NSDocumentController](../nsdocumentcontroller.md) subclass
- In the responder chain starting at [NSWindow](../nswindow.md), such as [NSWindow](../nswindow.md), the window delegate, the window controller, the [NSApplication](../nsapplication.md) delegate, and so on
