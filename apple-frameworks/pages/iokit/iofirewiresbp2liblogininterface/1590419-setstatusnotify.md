> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iofirewiresbp2liblogininterface/1590419-setstatusnotify](https://developer.apple.com/documentation/iokit/iofirewiresbp2liblogininterface/1590419-setstatusnotify)

# setStatusNotify

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Sets the callback to be called on normal command status.

## Declaration

```objectivec
void (*setStatusNotify)(void *self, void *refCon, IOFWSBP2NotifyCallback callback);
```

## Parameters

- `self`: Pointer to IOFireWireSBP2LibLoginInterface object.
- `refCon`: refCon passed to callback.
- `callback`: Address of callback method of type FWSBP2NotifyCallback.

<a id="discussion"></a>

## Discussion

The supplied callback is called when normal command status is recieved, when a normal command times out, or when a normal command is aborted. "notificationEvent" in the callback's params will indicate what happened. It will be set to one of the following values: kFWSBP2NormalCommandReset, kFWSBP2NormalCommandStatus, or kFWSBP2NormalCommandTimeout. If the event type is kFWSBP2NormalCommandTimeout and "len" is non-zero then "message" contains the data written to the status block.
