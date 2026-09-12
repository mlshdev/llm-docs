> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iofirewiresbp2managementorb/1813235-setmanageecommand](https://developer.apple.com/documentation/kernel/iofirewiresbp2managementorb/1813235-setmanageecommand)

# setManageeCommand

**Interface language:** Objective-C

**Framework:** Kernel

Sets the command to be managed by the management ORB.

## Declaration

```objectivec
virtual void setManageeCommand(
 OSObject *command ); 
```

## Parameters

- `command`: a reference to an IOFireWireSBP2Login or an IOFireWireSBP2ORB.

<a id="overview"></a>

## Overview

All management functions except kFWSBP2QueryLogins require a reference to an ORB of some sort. kFWSBP2AbortTaskSet, kFWSBP2LogicalUnitReset, and kFWSBP2TargetReset require a reference to the login ORB. kFWSBP2AbortTask requires a reference to the ORB to be aborted. This method allows you to set the ORB to be managed.

## See Also

### Miscellaneous

- [getCommandFunction()](1813171-getcommandfunction.md): Returns the current function of the management ORB.
- [getCommandFunction()](1813185-getcommandfunction.md): Returns the current managee command of the management ORB.
- [getManageeCommand](1813195-getmanageecommand.md): Returns the current managee command of the management ORB.
- [getResponseBuffer](1813205-getresponsebuffer.md): Returns the response buffer for the management ORB.
- [release](1813216-release.md): Primary implementation of the release mechanism.
- [setCommandFunction](1813224-setcommandfunction.md): Sets the function of the management ORB.
- [setResponseBuffer(IOMemoryDescriptor \*)](1813243-setresponsebuffer.md): Sets the response buffer for the management ORB.
- [setResponseBuffer(void \*, UInt32)](1813252-setresponsebuffer.md): Sets the response buffer for the management ORB.
