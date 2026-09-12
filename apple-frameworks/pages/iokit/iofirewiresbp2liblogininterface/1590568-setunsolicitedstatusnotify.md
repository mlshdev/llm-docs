> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iofirewiresbp2liblogininterface/1590568-setunsolicitedstatusnotify](https://developer.apple.com/documentation/iokit/iofirewiresbp2liblogininterface/1590568-setunsolicitedstatusnotify)

# setUnsolicitedStatusNotify

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Sets the callback to be called on normal command status.

## Declaration

```objectivec
void (*setUnsolicitedStatusNotify)(void *self, void *refCon, IOFWSBP2NotifyCallback callback);
```

## Parameters

- `self`: Pointer to IOFireWireSBP2LibLoginInterface object.
- `refCon`: refCon passed to callback.
- `callback`: address of callback method of type FWSBP2NotifyCallback.

<a id="discussion"></a>

## Discussion

The supplied callback is called when unsolicited status is recieved. "notificationEvent" in the callback's params will indicate what happened. In this case it will be set to kFWSBP2UnsolicitedStatus. If "len" is non-zero then "message" contains the data written to the status block. Note: any buffers returned by callbacks are only valid for the duration of the login and should not have their contents modified. The "refCon" field in the callback's params will return the refcon set with setRefCon.
