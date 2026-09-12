> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscrollview/contentsize(forframesize:horizontalscrollerclass:verticalscrollerclass:bordertype:controlsize:scrollerstyle:)](https://developer.apple.com/documentation/appkit/nsscrollview/contentsize(forframesize:horizontalscrollerclass:verticalscrollerclass:bordertype:controlsize:scrollerstyle:))

# contentSize(forFrameSize:horizontalScrollerClass:verticalScrollerClass:borderType:controlSize:scrollerStyle:) (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.7+

Returns the content size calculated from the frame size and the specified specifications.

## Declaration

```swift
class func contentSize(forFrameSize fSize: NSSize, horizontalScrollerClass: AnyClass?, verticalScrollerClass: AnyClass?, borderType type: NSBorderType, controlSize: NSControl.ControlSize, scrollerStyle: NSScroller.Style) -> NSSize
```

## Parameters

- `fSize`: The frame size in screen coordinates.
- `horizontalScrollerClass`: The class used as the horizontal scroller. A value of `nil` specifies that no horizontal scroller is used.
- `verticalScrollerClass`: The class used as the vertical scroller. A value of `nil` specifies that no horizontal scroller is used.
- `type`: Specifies the appearance of the style of the scroll view’s border. See [NSBorderType](../nsbordertype.md) for a list of possible values.
- `controlSize`: The control size. The possible values are specified in [NSControl.ControlSize](../nscontrol/controlsize-swift.enum.md). [NSMiniControlSize](../nsminicontrolsize.md) is not supported.
- `scrollerStyle`: Specifies the scroll style. See [NSScroller.Style](../nsscroller/style.md) for supported values.

<a id="return-value"></a>

## Return Value

The content view frame size.

<a id="Discussion"></a>

## Discussion

For an existing scroll view, you can simply use the [contentSize](contentsize.md) property.

## See Also

### Calculating Layout

- [frameSize(forContentSize:horizontalScrollerClass:verticalScrollerClass:borderType:controlSize:scrollerStyle:)](framesize%28forcontentsize_horizontalscrollerclass_verticalscrollerclass_bordertype_controlsize_scrollerstyle_%29.md): Returns the frame size of a scroll view that contains a content view with the specified size.

# contentSizeForFrameSize:horizontalScrollerClass:verticalScrollerClass:borderType:controlSize:scrollerStyle: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.7+

Returns the content size calculated from the frame size and the specified specifications.

## Declaration

```objectivec
+ (NSSize) contentSizeForFrameSize:(NSSize) fSize horizontalScrollerClass:(Class) horizontalScrollerClass verticalScrollerClass:(Class) verticalScrollerClass borderType:(NSBorderType) type controlSize:(NSControlSize) controlSize scrollerStyle:(NSScrollerStyle) scrollerStyle;
```

## Parameters

- `fSize`: The frame size in screen coordinates.
- `horizontalScrollerClass`: The class used as the horizontal scroller. A value of `nil` specifies that no horizontal scroller is used.
- `verticalScrollerClass`: The class used as the vertical scroller. A value of `nil` specifies that no horizontal scroller is used.
- `type`: Specifies the appearance of the style of the scroll view’s border. See [NSBorderType](../nsbordertype.md) for a list of possible values.
- `controlSize`: The control size. The possible values are specified in [NSControlSize](../nscontrol/controlsize-swift.enum.md). [NSMiniControlSize](../nsminicontrolsize.md) is not supported.
- `scrollerStyle`: Specifies the scroll style. See [NSScrollerStyle](../nsscroller/style.md) for supported values.

<a id="return-value"></a>

## Return Value

The content view frame size.

<a id="Discussion"></a>

## Discussion

For an existing scroll view, you can simply use the [contentSize](contentsize.md) property.

## See Also

### Related Documentation

- [scrollerWidth](../nsscroller/scrollerwidth.md): Deprecated. Returns the width for scrollers of the receiving class, assuming a control size [NSRegularControlSize](../nsregularcontrolsize.md), and a scroller style of [NSScrollerStyleLegacy](../nsscroller/style/legacy.md).

### Calculating Layout

- [frameSizeForContentSize:horizontalScrollerClass:verticalScrollerClass:borderType:controlSize:scrollerStyle:](framesize%28forcontentsize_horizontalscrollerclass_verticalscrollerclass_bordertype_controlsize_scrollerstyle_%29.md): Returns the frame size of a scroll view that contains a content view with the specified size.
