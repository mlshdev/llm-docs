> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iofirewiresbp2managementorb/1813224-setcommandfunction](https://developer.apple.com/documentation/kernel/iofirewiresbp2managementorb/1813224-setcommandfunction)

# setCommandFunction

**Interface language:** Objective-C

**Framework:** Kernel

Sets the function of the management ORB.

## Declaration

```objectivec
virtual IOReturn setCommandFunction(
 UInt32function ); 
```

## Parameters

- `function`: a value indicating the desired management function.

<a id="return_value"></a>

## Return Value

Returns kIOReturnSuccess if function was a legal function.

<a id="overview"></a>

## Overview

Sets the the function of the management ORB. Legal values are kFWSBP2QueryLogins, kFWSBP2AbortTask, kFWSBP2AbortTaskSet, kFWSBP2LogicalUnitReset, and kFWSBP2TargetReset.

## See Also

### Miscellaneous

- [getCommandFunction()](1813171-getcommandfunction.md): Returns the current function of the management ORB.
- [getCommandFunction()](1813185-getcommandfunction.md): Returns the current managee command of the management ORB.
- [getManageeCommand](1813195-getmanageecommand.md): Returns the current managee command of the management ORB.
- [getResponseBuffer](1813205-getresponsebuffer.md): Returns the response buffer for the management ORB.
- [release](1813216-release.md): Primary implementation of the release mechanism.
- [setManageeCommand](1813235-setmanageecommand.md): Sets the command to be managed by the management ORB.
- [setResponseBuffer(IOMemoryDescriptor \*)](1813243-setresponsebuffer.md): Sets the response buffer for the management ORB.
- [setResponseBuffer(void \*, UInt32)](1813252-setresponsebuffer.md): Sets the response buffer for the management ORB.
