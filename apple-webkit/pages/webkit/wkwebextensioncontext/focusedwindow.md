> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextensioncontext/focusedwindow](https://developer.apple.com/documentation/webkit/wkwebextensioncontext/focusedwindow)

# focusedWindow (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

The window that currently has focus for this extension.

## Declaration

```swift
weak var focusedWindow: (any WKWebExtensionWindow)? { get }
```

<a id="discussion"></a>

## Discussion

Provides the window that currently has focus, as set by the [didFocusWindow(\_:)](didfocuswindow%28__%29.md) method.

It will be `nil` if no window has focus or if a window has focus that is not visible to the extension. Initially populated by the window returned by the extension controller delegate method [webExtensionController(\_:focusedWindowFor:)](../wkwebextensioncontrollerdelegate/webextensioncontroller%28__focusedwindowfor_%29.md).

## See Also

### Related Documentation

- [didFocusWindow(\_:)](didfocuswindow%28__%29.md): Called by the app when a window gains focus to fire appropriate events with only this extension.

# focusedWindow (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

The window that currently has focus for this extension.

## Declaration

```objectivec
@property (nonatomic, weak, readonly, nullable) id<WKWebExtensionWindow> focusedWindow;
```

<a id="discussion"></a>

## Discussion

Provides the window that currently has focus, as set by the [didFocusWindow:](didfocuswindow%28__%29.md) method.

It will be `nil` if no window has focus or if a window has focus that is not visible to the extension. Initially populated by the window returned by the extension controller delegate method [webExtensionController:focusedWindowForExtensionContext:](../wkwebextensioncontrollerdelegate/webextensioncontroller%28__focusedwindowfor_%29.md).

## See Also

### Related Documentation

- [didFocusWindow:](didfocuswindow%28__%29.md): Called by the app when a window gains focus to fire appropriate events with only this extension.
