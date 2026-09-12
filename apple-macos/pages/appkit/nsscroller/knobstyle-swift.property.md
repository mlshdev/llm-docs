> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscroller/knobstyle-swift.property](https://developer.apple.com/documentation/appkit/nsscroller/knobstyle-swift.property)

# knobStyle (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

The scroller’s knob style.

## Declaration

```swift
var knobStyle: NSScroller.KnobStyle { get set }
```

<a id="Discussion"></a>

## Discussion

The value of this property does not affect legacy scrollers. [NSScroller.KnobStyle.default](knobstyle-swift.enum/default.md) is appropriate for a wide range of content, but in some cases choosing an alternative knob style may enhance visibility of the scroller knob atop some kinds of content.

For a list of possible values, see [NSScroller.KnobStyle](knobstyle-swift.enum.md).

## See Also

### Managing Presentation Style

- [preferredScrollerStyle](preferredscrollerstyle.md): Returns the style of scrollers that applications should use wherever possible.
- [scrollerStyle](scrollerstyle.md): The scroller style for this scroller.

# knobStyle (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

The scroller’s knob style.

## Declaration

```objectivec
@property NSScrollerKnobStyle knobStyle;
```

<a id="Discussion"></a>

## Discussion

The value of this property does not affect legacy scrollers. [NSScrollerKnobStyleDefault](knobstyle-swift.enum/default.md) is appropriate for a wide range of content, but in some cases choosing an alternative knob style may enhance visibility of the scroller knob atop some kinds of content.

For a list of possible values, see [NSScrollerKnobStyle](knobstyle-swift.enum.md).

## See Also

### Managing Presentation Style

- [preferredScrollerStyle](preferredscrollerstyle.md): Returns the style of scrollers that applications should use wherever possible.
- [scrollerStyle](scrollerstyle.md): The scroller style for this scroller.
