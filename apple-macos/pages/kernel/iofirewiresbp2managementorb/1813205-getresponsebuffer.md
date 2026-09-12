> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iofirewiresbp2managementorb/1813205-getresponsebuffer](https://developer.apple.com/documentation/kernel/iofirewiresbp2managementorb/1813205-getresponsebuffer)

# getResponseBuffer

**Interface language:** Objective-C

**Framework:** Kernel

Returns the response buffer for the management ORB.

## Declaration

```objectivec
virtual void getResponseBuffer(
 void **buf,
 UInt32 *len ); 
```

## Parameters

- `desc`: memory descriptor for buffer.
- `buf`: output parameter for backing store for buffer
- `len`: output parameter for length of buffer.

<a id="overview"></a>

## Overview

Returns the response buffer set in setResponseBuffer above

## See Also

### Miscellaneous

- [getCommandFunction()](1813171-getcommandfunction.md): Returns the current function of the management ORB.
- [getCommandFunction()](1813185-getcommandfunction.md): Returns the current managee command of the management ORB.
- [getManageeCommand](1813195-getmanageecommand.md): Returns the current managee command of the management ORB.
- [release](1813216-release.md): Primary implementation of the release mechanism.
- [setCommandFunction](1813224-setcommandfunction.md): Sets the function of the management ORB.
- [setManageeCommand](1813235-setmanageecommand.md): Sets the command to be managed by the management ORB.
- [setResponseBuffer(IOMemoryDescriptor \*)](1813243-setresponsebuffer.md): Sets the response buffer for the management ORB.
- [setResponseBuffer(void \*, UInt32)](1813252-setresponsebuffer.md): Sets the response buffer for the management ORB.
