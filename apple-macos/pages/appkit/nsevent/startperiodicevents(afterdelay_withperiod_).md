> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsevent/startperiodicevents(afterdelay:withperiod:)](https://developer.apple.com/documentation/appkit/nsevent/startperiodicevents(afterdelay:withperiod:))

# startPeriodicEvents(afterDelay:withPeriod:) (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Begins generating periodic events for the current thread.

## Declaration

```swift
class func startPeriodicEvents(afterDelay delay: TimeInterval, withPeriod period: TimeInterval)
```

## Parameters

- `delay`: The number of seconds that `NSEvent` should wait before beginning to generate periodic events.
- `period`: The period in seconds between the generated events.

<a id="Discussion"></a>

## Discussion

Raises an `NSInternalInconsistencyException` if periodic events are already being generated for the current thread. This method is typically used in a modal loop while tracking mouse-dragged events.

## See Also

### Requesting and stopping periodic events

- [stopPeriodicEvents()](stopperiodicevents%28%29.md): Stops generating periodic events for the current thread and discards any periodic events remaining in the queue.

# startPeriodicEventsAfterDelay:withPeriod: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Begins generating periodic events for the current thread.

## Declaration

```objectivec
+ (void) startPeriodicEventsAfterDelay:(NSTimeInterval) delay withPeriod:(NSTimeInterval) period;
```

## Parameters

- `delay`: The number of seconds that `NSEvent` should wait before beginning to generate periodic events.
- `period`: The period in seconds between the generated events.

<a id="Discussion"></a>

## Discussion

Raises an `NSInternalInconsistencyException` if periodic events are already being generated for the current thread. This method is typically used in a modal loop while tracking mouse-dragged events.

## See Also

### Requesting and stopping periodic events

- [stopPeriodicEvents](stopperiodicevents%28%29.md): Stops generating periodic events for the current thread and discards any periodic events remaining in the queue.
