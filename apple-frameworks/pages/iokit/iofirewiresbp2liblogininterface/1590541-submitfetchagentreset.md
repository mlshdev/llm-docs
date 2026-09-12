> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iofirewiresbp2liblogininterface/1590541-submitfetchagentreset](https://developer.apple.com/documentation/iokit/iofirewiresbp2liblogininterface/1590541-submitfetchagentreset)

# submitFetchAgentReset

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Resets the LUN's fetch agent.

## Declaration

```objectivec
IOReturn (*submitFetchAgentReset)(void *self);
```

## Parameters

- `self`: Pointer to IOFireWireSBP2LibLoginInterface object.

<a id="return_value"></a>

## Return Value

Returns kIOReturnSuccess if the reset started successfully.

<a id="discussion"></a>

## Discussion

The fetch agent state machine on the device can be reset by a write to a specific register. This reset can be intiated by a call to this method. Notification of the completion of this write can be had by registering a callback with the setFetchAgentResetCallback method.
