> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsalignmentfeedbackfilter/update(with:)](https://developer.apple.com/documentation/appkit/nsalignmentfeedbackfilter/update(with:))

# update(with:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Informs the feedback filter about a new event.

## Declaration

```swift
func update(with event: NSEvent)
```

## Parameters

- `event`: An event ([NSEvent](../nsevent.md)) to be filtered, which matches an event type returned by the [inputEventMask](inputeventmask.md) method.

<a id="Discussion"></a>

## Discussion

This method informs the feedback filter about a new event to be filtered, which matches an event type returned by the [inputEventMask](inputeventmask.md) method. Call the `updateWithEvent:` method instead of [update(withPanRecognizer:)](update%28withpanrecognizer_%29.md) if you are using a tracking loop controller for event tracking.

## See Also

### Related Documentation

- [inputEventMask](inputeventmask.md): Retrieves the event types the filter accepts.

### Informing the Filter About Events

- [update(withPanRecognizer:)](update%28withpanrecognizer_%29.md): Informs the feedback filter about a new pan (drag) gesture recognizer event.

# updateWithEvent: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Informs the feedback filter about a new event.

## Declaration

```objectivec
- (void) updateWithEvent:(NSEvent *) event;
```

## Parameters

- `event`: An event ([NSEvent](../nsevent.md)) to be filtered, which matches an event type returned by the [inputEventMask](inputeventmask.md) method.

<a id="Discussion"></a>

## Discussion

This method informs the feedback filter about a new event to be filtered, which matches an event type returned by the [inputEventMask](inputeventmask.md) method. Call the `updateWithEvent:` method instead of [updateWithPanRecognizer:](update%28withpanrecognizer_%29.md) if you are using a tracking loop controller for event tracking.

## See Also

### Related Documentation

- [inputEventMask](inputeventmask.md): Retrieves the event types the filter accepts.

### Informing the Filter About Events

- [updateWithPanRecognizer:](update%28withpanrecognizer_%29.md): Informs the feedback filter about a new pan (drag) gesture recognizer event.
