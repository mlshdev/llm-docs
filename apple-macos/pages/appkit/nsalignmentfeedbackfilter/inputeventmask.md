> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsalignmentfeedbackfilter/inputeventmask](https://developer.apple.com/documentation/appkit/nsalignmentfeedbackfilter/inputeventmask)

# inputEventMask (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.11+

Retrieves the event types the filter accepts.

## Declaration

```swift
class var inputEventMask: NSEvent.EventTypeMask { get }
```

<a id="Discussion"></a>

## Discussion

This method retrieves the event types that the filter accepts. This information may be used by an event tracking loop to watch for events that can be passed to the filter.

## See Also

### Related Documentation

- [NSEvent](../nsevent.md): An object that contains information about an input action, such as a mouse click or a key press.

# inputEventMask (Objective-C)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.11+

Retrieves the event types the filter accepts.

## Declaration

```objectivec
@property (class, readonly) NSEventMask inputEventMask;
```

<a id="Discussion"></a>

## Discussion

This method retrieves the event types that the filter accepts. This information may be used by an event tracking loop to watch for events that can be passed to the filter.

## See Also

### Related Documentation

- [NSEvent](../nsevent.md): An object that contains information about an input action, such as a mouse click or a key press.
