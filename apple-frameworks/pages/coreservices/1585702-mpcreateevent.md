> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1585702-mpcreateevent](https://developer.apple.com/documentation/coreservices/1585702-mpcreateevent)

# MPCreateEvent

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

Creates an event group.

## Declaration

```objectivec
OSStatus MPCreateEvent(MPEventID *event);
```

## Parameters

- `event`: On return, `event` contains the ID of the newly created event group.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](carbon_core/multiprocessing_services.md#1663965).

<a id="discussion"></a>

## Discussion

Event groups are created from dynamically allocated internal resources. Other tasks may be competing for these resources so it is possible that this function will not be able to create an event group.

Also see the function  [MPDeleteEvent](1585691-mpdeleteevent.md).

## See Also

### Handling Event Groups

- [MPDeleteEvent](1585691-mpdeleteevent.md): Deprecated. Removes an event group.
- [MPSetEvent](1585752-mpsetevent.md): Deprecated. Merges event flags into a specified event group.
- [MPWaitForEvent](1585656-mpwaitforevent.md): Deprecated. Retrieves event flags from a specified event group.
