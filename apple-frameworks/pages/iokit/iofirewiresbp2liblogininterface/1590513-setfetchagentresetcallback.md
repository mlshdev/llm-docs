> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iofirewiresbp2liblogininterface/1590513-setfetchagentresetcallback](https://developer.apple.com/documentation/iokit/iofirewiresbp2liblogininterface/1590513-setfetchagentresetcallback)

# setFetchAgentResetCallback

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Sets the callback to be called when a fetch agent reset completes.

## Declaration

```objectivec
void (*setFetchAgentResetCallback)(void *self, void *refCon, IOFWSBP2StatusCallback callback);
```

## Parameters

- `self`: Pointer to IOFireWireSBP2LibLoginInterface object.
- `refCon`: refCon passed to callback.
- `callback`: address of callback method of type FWSBP2FetchAgentWriteCallback.

<a id="discussion"></a>

## Discussion

The fetch agent state machine on the device can be reset by a write to a specific register. The SBP2 services offer a utility method to reset the fetch agent. You can register a callback routine here to be notified when this rest write completes.
