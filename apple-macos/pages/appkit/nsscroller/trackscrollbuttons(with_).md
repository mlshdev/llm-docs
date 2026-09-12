> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscroller/trackscrollbuttons(with:)](https://developer.apple.com/documentation/appkit/nsscroller/trackscrollbuttons(with:))

# trackScrollButtons(with:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.14)

Tracks the scroll buttons and sends action messages to the receiver’s target.

> Not invoked since 10.7

## Declaration

```swift
func trackScrollButtons(with event: NSEvent)
```

<a id="Discussion"></a>

## Discussion

This method is invoked automatically when the receiver receives `theEvent` mouse-down event in a scroll button; you should not invoke this method directly.

<a id="Special-Considerations"></a>

### Special Considerations

This method is not invoked in macOS 10.7 and later.

## See Also

### Event Handling

- [hitPart](hitpart.md): A part code indicating the manner in which the scrolling should be performed.
- [trackKnob(with:)](trackknob%28with_%29.md): Tracks the knob and sends action messages to the receiver’s target.

# trackScrollButtons: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.14)

Tracks the scroll buttons and sends action messages to the receiver’s target.

> Not invoked since 10.7

## Declaration

```objectivec
- (void) trackScrollButtons:(NSEvent *) event;
```

<a id="Discussion"></a>

## Discussion

This method is invoked automatically when the receiver receives `theEvent` mouse-down event in a scroll button; you should not invoke this method directly.

<a id="Special-Considerations"></a>

### Special Considerations

This method is not invoked in macOS 10.7 and later.

## See Also

### Event Handling

- [hitPart](hitpart.md): A part code indicating the manner in which the scrolling should be performed.
- [trackKnob:](trackknob%28with_%29.md): Tracks the knob and sends action messages to the receiver’s target.
