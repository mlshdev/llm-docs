> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iofirewiresbp2liblogininterface/1590476-submitorb](https://developer.apple.com/documentation/iokit/iofirewiresbp2liblogininterface/1590476-submitorb)

# submitORB

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Submits the given orb

## Declaration

```objectivec
IOReturn (*submitORB)(void *self, IOFireWireSBP2LibORBInterface **orb);
```

## Parameters

- `self`: Pointer to IOFireWireSBP2LibLoginInterface object.
- `orb`: The orb to be executed.

<a id="return_value"></a>

## Return Value

Returns kIOReturnSuccess if the ORB has been started successfully.

<a id="discussion"></a>

## Discussion

Starts execution of the given ORB. If the ORB is an immediate ORB it's addresss is written to the fetch agent. If it is a non immediate orb its address is appended to the last orb of the currently processing chain. The doorbell is not rung automatically it must be run manually with the ringDoorbell command described below.
