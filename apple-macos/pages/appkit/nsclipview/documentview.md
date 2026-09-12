> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsclipview/documentview](https://developer.apple.com/documentation/appkit/nsclipview/documentview)

# documentView (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The clip view’s document view.

## Declaration

```swift
var documentView: NSView? { get set }
```

<a id="Discussion"></a>

## Discussion

If the clip view is contained in an [NSScrollView](../nsscrollview.md), you should send the [NSScrollView](../nsscrollview.md) a [documentView](../nsscrollview/documentview.md) message instead, so it can perform whatever updating it needs. Setting this property to a view removes any previous document view, and sets the origin of the clip view’s bounds rectangle to the origin of the new view’s frame rectangle. Doing so also registers the clip view for the notifications [frameDidChangeNotification](../nsview/framedidchangenotification.md) and [boundsDidChangeNotification](../nsview/boundsdidchangenotification.md), adjusts the key view loop to include the new document view, and updates a parent [NSScrollView](../nsscrollview.md) display if needed using [reflectScrolledClipView(\_:)](../nsscrollview/reflectscrolledclipview%28__%29.md).

## See Also

### Related Documentation

- [NSClipView](../nsclipview.md): An object that clips a document view to a scroll view’s frame.

# documentView (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The clip view’s document view.

## Declaration

```objectivec
@property (strong, nullable) NSView * documentView;
```

<a id="Discussion"></a>

## Discussion

If the clip view is contained in an [NSScrollView](../nsscrollview.md), you should send the [NSScrollView](../nsscrollview.md) a [documentView](../nsscrollview/documentview.md) message instead, so it can perform whatever updating it needs. Setting this property to a view removes any previous document view, and sets the origin of the clip view’s bounds rectangle to the origin of the new view’s frame rectangle. Doing so also registers the clip view for the notifications [NSViewFrameDidChangeNotification](../nsview/framedidchangenotification.md) and [NSViewBoundsDidChangeNotification](../nsview/boundsdidchangenotification.md), adjusts the key view loop to include the new document view, and updates a parent [NSScrollView](../nsscrollview.md) display if needed using [reflectScrolledClipView:](../nsscrollview/reflectscrolledclipview%28__%29.md).

## See Also

### Related Documentation

- [NSClipView](../nsclipview.md): An object that clips a document view to a scroll view’s frame.
