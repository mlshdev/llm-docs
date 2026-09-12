> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iofirewiresbp2lun/1813525-createlogin](https://developer.apple.com/documentation/kernel/iofirewiresbp2lun/1813525-createlogin)

# createLogin

**Interface language:** Objective-C

**Framework:** Kernel

Creates a new IOFireWireSBP2Login object.

## Declaration

```objectivec
virtual IOFireWireSBP2Login *createLogin(
 void ); 
```

<a id="return_value"></a>

## Return Value

Returns a pointer to a new IOFireWireSBP2Login.

<a id="overview"></a>

## Overview

Creates a new IOFireWireSBP2Login object for the LUN. Login objects supply most of the SBP2 APIs related to login maintenance and Normal Command ORB execution.

## See Also

### Miscellaneous

- [attach](1813520-attach.md): Attaches an IOService client to a provider in the registry.
- [createManagementORB](1813535-createmanagementorb.md): Creates a new IOFireWireSBP2ManagementORB object.
- [getDiagnostics](1813549-getdiagnostics.md): Debug-only method.
- [getFireWireUnit](1813559-getfirewireunit.md): Returns an IOFireWireUnit object.
- [getLUNumber](1813568-getlunumber.md): Returns the LUNs number.
- [handleClose](1813576-handleclose.md): Overrideable method to control the open / close behaviour of an IOService.
- [handleOpen](1813589-handleopen.md): Overrideable method to control the open / close behaviour of an IOService.
- [matchPropertyTable](1813597-matchpropertytable.md): Implements SBP2 specific matching.
