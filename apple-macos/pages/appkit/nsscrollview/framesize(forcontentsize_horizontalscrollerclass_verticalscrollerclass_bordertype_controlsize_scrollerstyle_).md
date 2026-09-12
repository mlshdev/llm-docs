> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscrollview/framesize(forcontentsize:horizontalscrollerclass:verticalscrollerclass:bordertype:controlsize:scrollerstyle:)](https://developer.apple.com/documentation/appkit/nsscrollview/framesize(forcontentsize:horizontalscrollerclass:verticalscrollerclass:bordertype:controlsize:scrollerstyle:))

# frameSize(forContentSize:horizontalScrollerClass:verticalScrollerClass:borderType:controlSize:scrollerStyle:) (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.7+

Returns the frame size of a scroll view that contains a content view with the specified size.

## Declaration

```swift
class func frameSize(forContentSize cSize: NSSize, horizontalScrollerClass: AnyClass?, verticalScrollerClass: AnyClass?, borderType type: NSBorderType, controlSize: NSControl.ControlSize, scrollerStyle: NSScroller.Style) -> NSSize
```

## Parameters

- `cSize`: The content size.
- `horizontalScrollerClass`: The class used as the horizontal scroller. A value of `nil` specifies that no horizontal scroller is used.
- `verticalScrollerClass`: The class used as the vertical scroller. A value of `nil` specifies that no horizontal scroller is used.
- `type`: Specifies the appearance of the style of the scroll view’s border. See [NSBorderType](../nsbordertype.md) for a list of possible values.
- `controlSize`: The control size. The possible values are specified in [NSControl.ControlSize](../nscontrol/controlsize-swift.enum.md). [NSMiniControlSize](../nsminicontrolsize.md) is not supported.
- `scrollerStyle`: Specifies the scroll style. See [NSScroller.Style](../nsscroller/style.md) for supported values.

<a id="return-value"></a>

## Return Value

The size of the frame for the specified `contentSize`.

<a id="Discussion"></a>

## Discussion

For an existing scroll view, you can simply use the `frame` method and extract its size.

## See Also

### Related Documentation

- [Scroll View Programming Guide for Mac](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/NSScrollViewGuide/Articles/Introduction.html#//apple_ref/doc/uid/TP40003221)

### Calculating Layout

- [contentSize(forFrameSize:horizontalScrollerClass:verticalScrollerClass:borderType:controlSize:scrollerStyle:)](contentsize%28forframesize_horizontalscrollerclass_verticalscrollerclass_bordertype_controlsize_scrollerstyle_%29.md): Returns the content size calculated from the frame size and the specified specifications.

# frameSizeForContentSize:horizontalScrollerClass:verticalScrollerClass:borderType:controlSize:scrollerStyle: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.7+

Returns the frame size of a scroll view that contains a content view with the specified size.

## Declaration

```objectivec
+ (NSSize) frameSizeForContentSize:(NSSize) cSize horizontalScrollerClass:(Class) horizontalScrollerClass verticalScrollerClass:(Class) verticalScrollerClass borderType:(NSBorderType) type controlSize:(NSControlSize) controlSize scrollerStyle:(NSScrollerStyle) scrollerStyle;
```

## Parameters

- `cSize`: The content size.
- `horizontalScrollerClass`: The class used as the horizontal scroller. A value of `nil` specifies that no horizontal scroller is used.
- `verticalScrollerClass`: The class used as the vertical scroller. A value of `nil` specifies that no horizontal scroller is used.
- `type`: Specifies the appearance of the style of the scroll view’s border. See [NSBorderType](../nsbordertype.md) for a list of possible values.
- `controlSize`: The control size. The possible values are specified in [NSControlSize](../nscontrol/controlsize-swift.enum.md). [NSMiniControlSize](../nsminicontrolsize.md) is not supported.
- `scrollerStyle`: Specifies the scroll style. See [NSScrollerStyle](../nsscroller/style.md) for supported values.

<a id="return-value"></a>

## Return Value

The size of the frame for the specified `contentSize`.

<a id="Discussion"></a>

## Discussion

For an existing scroll view, you can simply use the `frame` method and extract its size.

## See Also

### Related Documentation

- [Scroll View Programming Guide for Mac](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/NSScrollViewGuide/Articles/Introduction.html#//apple_ref/doc/uid/TP40003221)
- [scrollerWidth](../nsscroller/scrollerwidth.md): Deprecated. Returns the width for scrollers of the receiving class, assuming a control size [NSRegularControlSize](../nsregularcontrolsize.md), and a scroller style of [NSScrollerStyleLegacy](../nsscroller/style/legacy.md).

### Calculating Layout

- [contentSizeForFrameSize:horizontalScrollerClass:verticalScrollerClass:borderType:controlSize:scrollerStyle:](contentsize%28forframesize_horizontalscrollerclass_verticalscrollerclass_bordertype_controlsize_scrollerstyle_%29.md): Returns the content size calculated from the frame size and the specified specifications.
