> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscrollview/contentsizeforframesize:hashorizontalscroller:hasverticalscroller:bordertype:](https://developer.apple.com/documentation/appkit/nsscrollview/contentsizeforframesize:hashorizontalscroller:hasverticalscroller:bordertype:)

# contentSizeForFrameSize:hasHorizontalScroller:hasVerticalScroller:borderType:

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.0+ (deprecated in 10.7)

Returns the content size calculated from the frame size and the specified specifications.

> Use [contentSizeForFrameSize:horizontalScrollerClass:verticalScrollerClass:borderType:controlSize:scrollerStyle:](contentsize%28forframesize_horizontalscrollerclass_verticalscrollerclass_bordertype_controlsize_scrollerstyle_%29.md) instead.

## Declaration

```objectivec
+ (NSSize) contentSizeForFrameSize:(NSSize) fSize hasHorizontalScroller:(BOOL) hFlag hasVerticalScroller:(BOOL) vFlag borderType:(NSBorderType) type;
```

## Parameters

- `fSize`: The frame size in the screen coordinate system
- `hFlag`: A Boolean specifying that a horizontal scroller should be included.
- `vFlag`: A Boolean specifying that a vertical scroller should be included.
- `type`: Specifies the appearance of the style of the scroll view’s border. See [NSBorderType](../nsbordertype.md) for a list of possible values.

<a id="return-value"></a>

## Return Value

The content view frame size.

<a id="Discussion"></a>

## Discussion

For an existing scroll view, you can simply use the [contentSize](contentsize.md) property.

## See Also

### Deprecated Methods

- [frameSizeForContentSize:hasHorizontalScroller:hasVerticalScroller:borderType:](framesizeforcontentsize_hashorizontalscroller_hasverticalscroller_bordertype_.md): Deprecated. Returns the frame size of an scroll view that contains a content view with the specified size.
