> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscroller/scrollerstyle](https://developer.apple.com/documentation/appkit/nsscroller/scrollerstyle)

# scrollerStyle (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

The scroller style for this scroller.

## Declaration

```swift
var scrollerStyle: NSScroller.Style { get set }
```

<a id="Discussion"></a>

## Discussion

For a scroller that’s managed by an [NSScrollView](../nsscrollview.md) object, the setter is automatically invoked by the scroll view with the appropriate setting, according to the user’s Appearance preference settings and possibly what pointing device(s) are present (see [preferredScrollerStyle](preferredscrollerstyle.md)).

For a list of valid scroller styles, see [NSScroller.Style](style.md).

## See Also

### Managing Presentation Style

- [preferredScrollerStyle](preferredscrollerstyle.md): Returns the style of scrollers that applications should use wherever possible.
- [knobStyle](knobstyle-swift.property.md): The scroller’s knob style.

# scrollerStyle (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

The scroller style for this scroller.

## Declaration

```objectivec
@property NSScrollerStyle scrollerStyle;
```

<a id="Discussion"></a>

## Discussion

For a scroller that’s managed by an [NSScrollView](../nsscrollview.md) object, the setter is automatically invoked by the scroll view with the appropriate setting, according to the user’s Appearance preference settings and possibly what pointing device(s) are present (see [preferredScrollerStyle](preferredscrollerstyle.md)).

For a list of valid scroller styles, see [NSScrollerStyle](style.md).

## See Also

### Managing Presentation Style

- [preferredScrollerStyle](preferredscrollerstyle.md): Returns the style of scrollers that applications should use wherever possible.
- [knobStyle](knobstyle-swift.property.md): The scroller’s knob style.
