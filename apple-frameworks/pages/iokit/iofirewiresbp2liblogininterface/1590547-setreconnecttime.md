> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iofirewiresbp2liblogininterface/1590547-setreconnecttime](https://developer.apple.com/documentation/iokit/iofirewiresbp2liblogininterface/1590547-setreconnecttime)

# setReconnectTime

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Sets the desired reconnect duration.

## Declaration

```objectivec
void (*setReconnectTime)(void *self, UInt32 time);
```

## Parameters

- `self`: Pointer to IOFireWireSBP2LibLoginInterface object.
- `time`: The desired reconnect timeout encoded as 2^reconnectTime seconds.

<a id="discussion"></a>

## Discussion

The target and initiator arbitrate the duration of the reconnect timeout. Here the initiator specifies its desired timeout time in 2^reconnectTime seconds. After a successful login the device returns the actual timeout value it wishes to use. This value may be less than the reconnect timeout that the intiator specified if this is all that the device can support.
