> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1585691-mpdeleteevent](https://developer.apple.com/documentation/coreservices/1585691-mpdeleteevent)

# MPDeleteEvent

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

Removes an event group.

## Declaration

```objectivec
OSStatus MPDeleteEvent(MPEventID event);
```

## Parameters

- `event`: The ID of the event group you want to remove.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](carbon_core/multiprocessing_services.md#1663965).

<a id="discussion"></a>

## Discussion

After deletion, the event ID becomes invalid, and all internal resources associated with the event group are reclaimed. Calling this function unblocks all tasks waiting on the event group and their respective  [MPWaitForEvent](1585656-mpwaitforevent.md)  calls will return with the result code `kMPDeletedErr`.

Also see the function  [MPCreateEvent](1585702-mpcreateevent.md).

## See Also

### Handling Event Groups

- [MPCreateEvent](1585702-mpcreateevent.md): Deprecated. Creates an event group.
- [MPSetEvent](1585752-mpsetevent.md): Deprecated. Merges event flags into a specified event group.
- [MPWaitForEvent](1585656-mpwaitforevent.md): Deprecated. Retrieves event flags from a specified event group.
