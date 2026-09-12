> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdrawer/parentwindow](https://developer.apple.com/documentation/appkit/nsdrawer/parentwindow)

# parentWindow (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+ (deprecated in 10.13)

The receiver’s parent window.

> Drawers are deprecated; consider using NSSplitViewController

## Declaration

```swift
unowned(unsafe) var parentWindow: NSWindow? { get set }
```

<a id="Discussion"></a>

## Discussion

Changes in a drawer’s parent window do not take place while the drawer is onscreen; they are delayed until the drawer next closes.

## See Also

### Managing Drawer Views

- [contentView](contentview.md): Deprecated. The receiver’s content view.

# parentWindow (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+ (deprecated in 10.13)

The receiver’s parent window.

> Drawers are deprecated; consider using NSSplitViewController

## Declaration

```objectivec
@property (assign, nullable) NSWindow * parentWindow;
```

<a id="Discussion"></a>

## Discussion

Changes in a drawer’s parent window do not take place while the drawer is onscreen; they are delayed until the drawer next closes.

## See Also

### Managing Drawer Views

- [contentView](contentview.md): Deprecated. The receiver’s content view.
