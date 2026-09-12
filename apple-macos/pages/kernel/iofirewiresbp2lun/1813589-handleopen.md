> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iofirewiresbp2lun/1813589-handleopen](https://developer.apple.com/documentation/kernel/iofirewiresbp2lun/1813589-handleopen)

# handleOpen

**Interface language:** Objective-C

**Framework:** Kernel

Overrideable method to control the open / close behaviour of an IOService.

## Declaration

```objectivec
virtual bool handleOpen(
 IOService *forClient, 
 IOOptionBits options, 
 void *arg ); 
```

## Parameters

- `forClient`: Designates the client of the provider requesting the open.
- `options`: Options for the open, may be interpreted by the implementor of handleOpen.

<a id="return_value"></a>

## Return Value

Return true if the open was successful, false otherwise.

<a id="overview"></a>

## Overview

See IOService for discussion.

## See Also

### Miscellaneous

- [attach](1813520-attach.md): Attaches an IOService client to a provider in the registry.
- [createLogin](1813525-createlogin.md): Creates a new IOFireWireSBP2Login object.
- [createManagementORB](1813535-createmanagementorb.md): Creates a new IOFireWireSBP2ManagementORB object.
- [getDiagnostics](1813549-getdiagnostics.md): Debug-only method.
- [getFireWireUnit](1813559-getfirewireunit.md): Returns an IOFireWireUnit object.
- [getLUNumber](1813568-getlunumber.md): Returns the LUNs number.
- [handleClose](1813576-handleclose.md): Overrideable method to control the open / close behaviour of an IOService.
- [matchPropertyTable](1813597-matchpropertytable.md): Implements SBP2 specific matching.
