> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscrollview/framesizeforcontentsize:hashorizontalscroller:hasverticalscroller:bordertype:](https://developer.apple.com/documentation/appkit/nsscrollview/framesizeforcontentsize:hashorizontalscroller:hasverticalscroller:bordertype:)

# frameSizeForContentSize:hasHorizontalScroller:hasVerticalScroller:borderType:

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.0+ (deprecated in 10.7)

Returns the frame size of an scroll view that contains a content view with the specified size.

> Use [contentSizeForFrameSize:horizontalScrollerClass:verticalScrollerClass:borderType:controlSize:scrollerStyle:](contentsize%28forframesize_horizontalscrollerclass_verticalscrollerclass_bordertype_controlsize_scrollerstyle_%29.md) instead.

## Declaration

```objectivec
+ (NSSize) frameSizeForContentSize:(NSSize) cSize hasHorizontalScroller:(BOOL) hFlag hasVerticalScroller:(BOOL) vFlag borderType:(NSBorderType) type;
```

## Parameters

- `cSize`: The content size.
- `hFlag`: Specifies if the scroll view has a horizontal scroller.
- `vFlag`: Specifies if the scroll view has a vertical scroller.
- `type`: Specifies the appearance of the style of the scroll view’s border. See [NSBorderType](../nsbordertype.md) for a list of possible values.

<a id="return-value"></a>

## Return Value

Returns the frame size.

<a id="Discussion"></a>

## Discussion

For an existing scroll view, you can simply use the `frame` method and extract its size.

## See Also

### Deprecated Methods

- [contentSizeForFrameSize:hasHorizontalScroller:hasVerticalScroller:borderType:](contentsizeforframesize_hashorizontalscroller_hasverticalscroller_bordertype_.md): Deprecated. Returns the content size calculated from the frame size and the specified specifications.
