> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webdocumentview/viewwillmove(tohostwindow:)](https://developer.apple.com/documentation/webkit/webdocumentview/viewwillmove(tohostwindow:))

# viewWillMove(toHostWindow:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Invoked when a web view’s host window is about to change.

## Declaration

```swift
func viewWillMove(toHostWindow hostWindow: NSWindow!)
```

## Parameters

- `hostWindow`: The new host window for the view.

## See Also

### Related Documentation

- [hostWindow](../webview-swift.class/hostwindow.md): Deprecated. The receiver’s host window.

### Attaching to a window

- [viewDidMoveToHostWindow()](viewdidmovetohostwindow%28%29.md): Deprecated. Invoked when a web view’s host window is set.

# viewWillMoveToHostWindow: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Invoked when a web view’s host window is about to change.

## Declaration

```objectivec
- (void) viewWillMoveToHostWindow:(NSWindow *) hostWindow;
```

## Parameters

- `hostWindow`: The new host window for the view.

## See Also

### Related Documentation

- [hostWindow](../webview-swift.class/hostwindow.md): Deprecated. The receiver’s host window.

### Attaching to a window

- [viewDidMoveToHostWindow](viewdidmovetohostwindow%28%29.md): Deprecated. Invoked when a web view’s host window is set.
