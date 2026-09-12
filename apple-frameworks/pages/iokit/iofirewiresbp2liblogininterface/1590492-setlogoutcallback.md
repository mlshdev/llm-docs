> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iofirewiresbp2liblogininterface/1590492-setlogoutcallback](https://developer.apple.com/documentation/iokit/iofirewiresbp2liblogininterface/1590492-setlogoutcallback)

# setLogoutCallback

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Sets the callback to be called when a logout attempt is complete.

## Declaration

```objectivec
void (*setLogoutCallback)(void *self, void *refCon, IOFWSBP2LogoutCallback callback);
```

## Parameters

- `self`: Pointer to IOFireWireSBP2LibLoginInterface object.
- `refCon`: refCon passed to callback.
- `callback`: address of callback method of type FWSBP2LogoutCallback.

<a id="discussion"></a>

## Discussion

The supplied callback is called when a logout attempt has completed. "status" in the callback's params should be checked to determine the success or failure of the logout attempt. The "refCon" field in the params will return the refcon set with setRefCon. If "statusBlock" is non-null then logout status was written and it has been supplied here. Note: all buffers supplied to callbacks are only valid for the duration of the callback. Also, you are not to modify the contents of any supplied buffer.
