> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iofirewiresbp2lun/1813568-getlunumber](https://developer.apple.com/documentation/kernel/iofirewiresbp2lun/1813568-getlunumber)

# getLUNumber

**Interface language:** Objective-C

**Framework:** Kernel

Returns the LUNs number.

## Declaration

```objectivec
virtual UInt32 getLUNumber(
 void ); 
```

<a id="return_value"></a>

## Return Value

Returns a UInt32 containing the Logical Unit Number.

<a id="overview"></a>

## Overview

Each LUN has a number to uniquely identify it on a device. This method returns this value in a UInt32.

## See Also

### Miscellaneous

- [attach](1813520-attach.md): Attaches an IOService client to a provider in the registry.
- [createLogin](1813525-createlogin.md): Creates a new IOFireWireSBP2Login object.
- [createManagementORB](1813535-createmanagementorb.md): Creates a new IOFireWireSBP2ManagementORB object.
- [getDiagnostics](1813549-getdiagnostics.md): Debug-only method.
- [getFireWireUnit](1813559-getfirewireunit.md): Returns an IOFireWireUnit object.
- [handleClose](1813576-handleclose.md): Overrideable method to control the open / close behaviour of an IOService.
- [handleOpen](1813589-handleopen.md): Overrideable method to control the open / close behaviour of an IOService.
- [matchPropertyTable](1813597-matchpropertytable.md): Implements SBP2 specific matching.
