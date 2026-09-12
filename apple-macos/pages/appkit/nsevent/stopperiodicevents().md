> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsevent/stopperiodicevents()](https://developer.apple.com/documentation/appkit/nsevent/stopperiodicevents())

# stopPeriodicEvents() (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Stops generating periodic events for the current thread and discards any periodic events remaining in the queue.

## Declaration

```swift
class func stopPeriodicEvents()
```

<a id="Discussion"></a>

## Discussion

This message is ignored if periodic events aren’t currently being generated.

## See Also

### Requesting and stopping periodic events

- [startPeriodicEvents(afterDelay:withPeriod:)](startperiodicevents%28afterdelay_withperiod_%29.md): Begins generating periodic events for the current thread.

# stopPeriodicEvents (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Stops generating periodic events for the current thread and discards any periodic events remaining in the queue.

## Declaration

```objectivec
+ (void) stopPeriodicEvents;
```

<a id="Discussion"></a>

## Discussion

This message is ignored if periodic events aren’t currently being generated.

## See Also

### Requesting and stopping periodic events

- [startPeriodicEventsAfterDelay:withPeriod:](startperiodicevents%28afterdelay_withperiod_%29.md): Begins generating periodic events for the current thread.
