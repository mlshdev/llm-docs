> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1585752-mpsetevent](https://developer.apple.com/documentation/coreservices/1585752-mpsetevent)

# MPSetEvent

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

Merges event flags into a specified event group.

## Declaration

```objectivec
OSStatus MPSetEvent(MPEventID event, MPEventFlags flags);
```

## Parameters

- `event`: The ID of the event group you want to set.
- `flags`: The flags you want to merge into the event group.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](carbon_core/multiprocessing_services.md#1663965).

<a id="discussion"></a>

## Discussion

The flags are logically ORed with the current flags in the event group. This procedure is an atomic operation to ensure that multiple updates do not get lost. If tasks are waiting on this event group, the first waiting task is unblocked.

Note that you can call this function from an interrupt handler.

Also see the function  [MPWaitForEvent](1585656-mpwaitforevent.md).

## See Also

### Handling Event Groups

- [MPCreateEvent](1585702-mpcreateevent.md): Deprecated. Creates an event group.
- [MPDeleteEvent](1585691-mpdeleteevent.md): Deprecated. Removes an event group.
- [MPWaitForEvent](1585656-mpwaitforevent.md): Deprecated. Retrieves event flags from a specified event group.
