> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscrollview/reflectscrolledclipview(_:)](https://developer.apple.com/documentation/appkit/nsscrollview/reflectscrolledclipview(_:))

# reflectScrolledClipView(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Adjusts the receiver’s scrollers to reflect the size and positioning of its content view.

## Declaration

```swift
func reflectScrolledClipView(_ cView: NSClipView)
```

## Parameters

- `cView`: The clip view being adjusted to. If `aClipView` is any view object other than the receiver’s content view, the method does nothing.

<a id="Discussion"></a>

## Discussion

This method is invoked automatically during scrolling and when an `NSClipView` object’s relationship to its document view changes; you should rarely need to invoke it yourself, but may wish to override it for custom updating or other behavior. If you override this method, be sure to call the superclass implementation. If you do not, other controls (such as the current scrollers) may not be updated properly.

## See Also

### Related Documentation

- [documentView](documentview.md): The view the scroll view scrolls within its content view.
- [contentView](contentview.md): The scroll view’s content view, the view that clips the document view.

# reflectScrolledClipView: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Adjusts the receiver’s scrollers to reflect the size and positioning of its content view.

## Declaration

```objectivec
- (void) reflectScrolledClipView:(NSClipView *) cView;
```

## Parameters

- `cView`: The clip view being adjusted to. If `aClipView` is any view object other than the receiver’s content view, the method does nothing.

<a id="Discussion"></a>

## Discussion

This method is invoked automatically during scrolling and when an `NSClipView` object’s relationship to its document view changes; you should rarely need to invoke it yourself, but may wish to override it for custom updating or other behavior. If you override this method, be sure to call the superclass implementation. If you do not, other controls (such as the current scrollers) may not be updated properly.

## See Also

### Related Documentation

- [documentView](documentview.md): The view the scroll view scrolls within its content view.
- [contentView](contentview.md): The scroll view’s content view, the view that clips the document view.
