> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscroller/trackknob(with:)](https://developer.apple.com/documentation/appkit/nsscroller/trackknob(with:))

# trackKnob(with:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Tracks the knob and sends action messages to the receiver’s target.

## Declaration

```swift
func trackKnob(with event: NSEvent)
```

<a id="Discussion"></a>

## Discussion

This method is invoked automatically when the receiver receives `theEvent` mouse-down event in the knob; you should not invoke it directly.

## See Also

### Event Handling

- [hitPart](hitpart.md): A part code indicating the manner in which the scrolling should be performed.
- [trackScrollButtons(with:)](trackscrollbuttons%28with_%29.md): Deprecated. Tracks the scroll buttons and sends action messages to the receiver’s target.

# trackKnob: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Tracks the knob and sends action messages to the receiver’s target.

## Declaration

```objectivec
- (void) trackKnob:(NSEvent *) event;
```

<a id="Discussion"></a>

## Discussion

This method is invoked automatically when the receiver receives `theEvent` mouse-down event in the knob; you should not invoke it directly.

## See Also

### Event Handling

- [hitPart](hitpart.md): A part code indicating the manner in which the scrolling should be performed.
- [trackScrollButtons:](trackscrollbuttons%28with_%29.md): Deprecated. Tracks the scroll buttons and sends action messages to the receiver’s target.
