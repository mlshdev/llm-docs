> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iofirewiresbp2lun/1813559-getfirewireunit](https://developer.apple.com/documentation/kernel/iofirewiresbp2lun/1813559-getfirewireunit)

# getFireWireUnit

**Interface language:** Objective-C

**Framework:** Kernel

Returns an IOFireWireUnit object.

## Declaration

```objectivec
virtual IOFireWireUnit * getFireWireUnit(
 void ); 
```

<a id="return_value"></a>

## Return Value

Returns a pointer to an IOFireWireUnit.

<a id="overview"></a>

## Overview

An IOFireWireUnit is the provider of an IOFireWireSBP2Target. In order to use the base FireWire services you will need a reference to the unit. This method returns that reference.

## See Also

### Miscellaneous

- [attach](1813520-attach.md): Attaches an IOService client to a provider in the registry.
- [createLogin](1813525-createlogin.md): Creates a new IOFireWireSBP2Login object.
- [createManagementORB](1813535-createmanagementorb.md): Creates a new IOFireWireSBP2ManagementORB object.
- [getDiagnostics](1813549-getdiagnostics.md): Debug-only method.
- [getLUNumber](1813568-getlunumber.md): Returns the LUNs number.
- [handleClose](1813576-handleclose.md): Overrideable method to control the open / close behaviour of an IOService.
- [handleOpen](1813589-handleopen.md): Overrideable method to control the open / close behaviour of an IOService.
- [matchPropertyTable](1813597-matchpropertytable.md): Implements SBP2 specific matching.
