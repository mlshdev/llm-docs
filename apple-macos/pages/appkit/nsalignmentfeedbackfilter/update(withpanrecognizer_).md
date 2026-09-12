> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsalignmentfeedbackfilter/update(withpanrecognizer:)](https://developer.apple.com/documentation/appkit/nsalignmentfeedbackfilter/update(withpanrecognizer:))

# update(withPanRecognizer:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Informs the feedback filter about a new pan (drag) gesture recognizer event.

## Declaration

```swift
func update(withPanRecognizer panRecognizer: NSPanGestureRecognizer)
```

## Parameters

- `panRecognizer`: The gesture recognizer ([NSPanGestureRecognizer](../nspangesturerecognizer.md)) that produced the event.

<a id="Discussion"></a>

## Discussion

This method informs the feedback filter about a new pan (drag) gesture recognizer event. Call this method instead of [update(with:)](update%28with_%29.md) if your event tracking uses gesture recognizers.

## See Also

### Related Documentation

- [NSGestureRecognizer](../nsgesturerecognizer.md): An object that monitors events and calls its action method when a predefined sequence of events occur.
- [NSPanGestureRecognizer](../nspangesturerecognizer.md): A continuous gesture recognizer for panning gestures.

### Informing the Filter About Events

- [update(with:)](update%28with_%29.md): Informs the feedback filter about a new event.

# updateWithPanRecognizer: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Informs the feedback filter about a new pan (drag) gesture recognizer event.

## Declaration

```objectivec
- (void) updateWithPanRecognizer:(NSPanGestureRecognizer *) panRecognizer;
```

## Parameters

- `panRecognizer`: The gesture recognizer ([NSPanGestureRecognizer](../nspangesturerecognizer.md)) that produced the event.

<a id="Discussion"></a>

## Discussion

This method informs the feedback filter about a new pan (drag) gesture recognizer event. Call this method instead of [updateWithEvent:](update%28with_%29.md) if your event tracking uses gesture recognizers.

## See Also

### Related Documentation

- [NSGestureRecognizer](../nsgesturerecognizer.md): An object that monitors events and calls its action method when a predefined sequence of events occur.
- [NSPanGestureRecognizer](../nspangesturerecognizer.md): A continuous gesture recognizer for panning gestures.

### Informing the Filter About Events

- [updateWithEvent:](update%28with_%29.md): Informs the feedback filter about a new event.
