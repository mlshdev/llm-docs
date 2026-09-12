> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iofirewiresbp2liblogininterface/1590456-getloginid](https://developer.apple.com/documentation/iokit/iofirewiresbp2liblogininterface/1590456-getloginid)

# getLoginID

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the current login ID.

## Declaration

```objectivec
UInt32 (*getLoginID)(void *self);
```

## Parameters

- `self`: Pointer to IOFireWireSBP2LibLoginInterface object.

<a id="return_value"></a>

## Return Value

Returns a UInt32 containing the current login ID.

<a id="discussion"></a>

## Discussion

When we successfully login to a device. The device gives us a unique login id. This is used internally for reconnecting to the device after bus resets and for certain other management ORBs. Most drivers are probably not interested in this value.
