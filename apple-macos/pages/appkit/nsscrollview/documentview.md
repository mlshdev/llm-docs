> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscrollview/documentview](https://developer.apple.com/documentation/appkit/nsscrollview/documentview)

# documentView (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The view the scroll view scrolls within its content view.

## Declaration

```swift
var documentView: NSView? { get set }
```

## See Also

### Related Documentation

- [documentView](../nsclipview/documentview.md): The clip view’s document view.

### Managing the Views

- [contentView](contentview.md): The scroll view’s content view, the view that clips the document view.
- [addFloatingSubview(\_:for:)](addfloatingsubview%28__for_%29.md): Adds a floating subview to the document view.

# documentView (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The view the scroll view scrolls within its content view.

## Declaration

```objectivec
@property (strong, nullable) NSView * documentView;
```

## See Also

### Related Documentation

- [documentView](../nsclipview/documentview.md): The clip view’s document view.

### Managing the Views

- [contentView](contentview.md): The scroll view’s content view, the view that clips the document view.
- [addFloatingSubview:forAxis:](addfloatingsubview%28__for_%29.md): Adds a floating subview to the document view.
