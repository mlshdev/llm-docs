> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscrollview/contentview](https://developer.apple.com/documentation/appkit/nsscrollview/contentview)

# contentView (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The scroll view’s content view, the view that clips the document view.

## Declaration

```swift
var contentView: NSClipView { get set }
```

<a id="Discussion"></a>

## Discussion

Setting the value of this property to an `NSClipView` that has a document view also sets the scroll view’s document view to be the document view of that `NSClipView`. The original content view retains its document view.

## See Also

### Managing the Views

- [documentView](documentview.md): The view the scroll view scrolls within its content view.
- [addFloatingSubview(\_:for:)](addfloatingsubview%28__for_%29.md): Adds a floating subview to the document view.

# contentView (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The scroll view’s content view, the view that clips the document view.

## Declaration

```objectivec
@property (strong) NSClipView * contentView;
```

<a id="Discussion"></a>

## Discussion

Setting the value of this property to an `NSClipView` that has a document view also sets the scroll view’s document view to be the document view of that `NSClipView`. The original content view retains its document view.

## See Also

### Managing the Views

- [documentView](documentview.md): The view the scroll view scrolls within its content view.
- [addFloatingSubview:forAxis:](addfloatingsubview%28__for_%29.md): Adds a floating subview to the document view.
