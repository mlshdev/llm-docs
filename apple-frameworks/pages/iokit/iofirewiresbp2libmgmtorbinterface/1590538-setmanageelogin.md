> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iofirewiresbp2libmgmtorbinterface/1590538-setmanageelogin](https://developer.apple.com/documentation/iokit/iofirewiresbp2libmgmtorbinterface/1590538-setmanageelogin)

# setManageeLogin

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Sets the command to be managed by the management ORB.

## Declaration

```objectivec
IOReturn (*setManageeLogin)(void *self, void *command);
```

## Parameters

- `self`: Pointer to a IOFireWireSBP2LibMgmtORBInterface.
- `command`: a reference to an IOFireWireSBP2Login or an IOFireWireSBP2ORB.

<a id="return_value"></a>

## Return Value

Returns kIOReturnSuccess on a success.

<a id="discussion"></a>

## Discussion

All management functions except kFWSBP2QueryLogins require a reference to an ORB of some sort. kFWSBP2AbortTaskSet, kFWSBP2LogicalUnitReset, and kFWSBP2TargetReset require a reference to the login ORB. This method allows you to set the login ORB to be managed.
