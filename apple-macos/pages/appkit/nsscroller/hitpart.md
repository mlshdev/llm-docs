> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscroller/hitpart](https://developer.apple.com/documentation/appkit/nsscroller/hitpart)

# hitPart (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A part code indicating the manner in which the scrolling should be performed.

## Declaration

```swift
var hitPart: NSScroller.Part { get }
```

<a id="Discussion"></a>

## Discussion

This method is typically invoked by an [NSScrollView](../nsscrollview.md) object to determine how to scroll its document view when it receives an action message from the scroller.

See [NSScroller.Part](part.md) for a list of part codes. In macOS 10.7 and later, this method no longer returns [NSScroller.Part.incrementLine](part/incrementline.md) or [NSScroller.Part.decrementLine](part/decrementline.md).

## See Also

### Event Handling

- [trackKnob(with:)](trackknob%28with_%29.md): Tracks the knob and sends action messages to the receiver’s target.
- [trackScrollButtons(with:)](trackscrollbuttons%28with_%29.md): Deprecated. Tracks the scroll buttons and sends action messages to the receiver’s target.

# hitPart (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A part code indicating the manner in which the scrolling should be performed.

## Declaration

```objectivec
@property (readonly) NSScrollerPart hitPart;
```

<a id="Discussion"></a>

## Discussion

This method is typically invoked by an [NSScrollView](../nsscrollview.md) object to determine how to scroll its document view when it receives an action message from the scroller.

See [NSScrollerPart](part.md) for a list of part codes. In macOS 10.7 and later, this method no longer returns [NSScrollerIncrementLine](part/incrementline.md) or [NSScrollerDecrementLine](part/decrementline.md).

## See Also

### Event Handling

- [trackKnob:](trackknob%28with_%29.md): Tracks the knob and sends action messages to the receiver’s target.
- [trackScrollButtons:](trackscrollbuttons%28with_%29.md): Deprecated. Tracks the scroll buttons and sends action messages to the receiver’s target.
