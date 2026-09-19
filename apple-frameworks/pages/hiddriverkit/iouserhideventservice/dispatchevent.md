> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/hiddriverkit/iouserhideventservice/dispatchevent

# dispatchEvent

**Interface language:** Objective-C

**Framework:** HIDDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+ · macOS

Dispatches a HID event to the system.

## Declaration

```objectivec
virtual void dispatchEvent(IOHIDEvent *event);
```

## Parameters

- `event`: The event to dispatch.

<a id="Discussion"></a>

## Discussion

This method is a funnel point for dispatching events to the system’s registered clients. You can also call it directly to dispatch events for which you create an `IOHIDEvent` object.

## See Also

### Performing Private Tasks

- [createReportPool](createreportpool.md)
