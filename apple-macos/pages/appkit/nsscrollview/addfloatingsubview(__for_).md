> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscrollview/addfloatingsubview(_:for:)](https://developer.apple.com/documentation/appkit/nsscrollview/addfloatingsubview(_:for:))

# addFloatingSubview(\_:for:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.9+

Adds a floating subview to the document view.

## Declaration

```swift
func addFloatingSubview(_ view: NSView, for axis: NSEvent.GestureAxis)
```

## Parameters

- `view`: The view that can float.
- `axis`: The event gesture axis on which the view can float. A view can float on only one axis at a time.

<a id="Discussion"></a>

## Discussion

Floating subviews of the document view do not scroll like the rest of the document. Instead these views appear to float over the document. For example, see `NSTableView` floating group rows ([floatsGroupRows](../nstableview/floatsgrouprows.md)).

`NSScrollView` ensures that any scrolling on the non-floating axis is performed visually synchronously with the document content.

> **Note**

>  You are responsible for keeping track of the floating views and removing them via [removeFromSuperview()](../nsview/removefromsuperview%28%29.md) when they should no longer float.

## See Also

### Managing the Views

- [contentView](contentview.md): The scroll view’s content view, the view that clips the document view.
- [documentView](documentview.md): The view the scroll view scrolls within its content view.

# addFloatingSubview:forAxis: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.9+

Adds a floating subview to the document view.

## Declaration

```objectivec
- (void) addFloatingSubview:(NSView *) view forAxis:(NSEventGestureAxis) axis;
```

## Parameters

- `view`: The view that can float.
- `axis`: The event gesture axis on which the view can float. A view can float on only one axis at a time.

<a id="Discussion"></a>

## Discussion

Floating subviews of the document view do not scroll like the rest of the document. Instead these views appear to float over the document. For example, see `NSTableView` floating group rows ([floatsGroupRows](../nstableview/floatsgrouprows.md)).

`NSScrollView` ensures that any scrolling on the non-floating axis is performed visually synchronously with the document content.

> **Note**

>  You are responsible for keeping track of the floating views and removing them via [removeFromSuperview](../nsview/removefromsuperview%28%29.md) when they should no longer float.

## See Also

### Managing the Views

- [contentView](contentview.md): The scroll view’s content view, the view that clips the document view.
- [documentView](documentview.md): The view the scroll view scrolls within its content view.
