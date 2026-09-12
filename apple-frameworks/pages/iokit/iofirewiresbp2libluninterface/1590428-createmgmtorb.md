> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iofirewiresbp2libluninterface/1590428-createmgmtorb](https://developer.apple.com/documentation/iokit/iofirewiresbp2libluninterface/1590428-createmgmtorb)

# createMgmtORB

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Creates a new IOFireWireSBP2LibMgmntORBInterface object.

## Declaration

```objectivec
IUnknownVTbl **(*createMgmtORB)(void *self, REFIID iid);
```

## Parameters

- `self`: Pointer to IOFireWireSBP2LibLUNInterface.
- `iid`: UUID for desired type of IOFireWireSBP2LibMgmtORBInterface.

<a id="return_value"></a>

## Return Value

Returns a pointer to a new IOFireWireSBP2Login.

<a id="discussion"></a>

## Discussion

Creates a new IOFireWireSBP2LibMgmtORBInterface object. Management objects let you execute commands like QueryLogins, LogicalUnitReset, and AbortTask. These commands are configured after they are created here. When they are done executing (after a call to submit) the supplied completion routine will be called with the supplied refcon. Usually this refCon is the "this" pointer of completion method's object.
