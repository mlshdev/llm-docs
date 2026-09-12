> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iofirewiresbp2lun/1813549-getdiagnostics](https://developer.apple.com/documentation/kernel/iofirewiresbp2lun/1813549-getdiagnostics)

# getDiagnostics

**Interface language:** Objective-C

**Framework:** Kernel

Debug-only method.

## Declaration

```objectivec
virtual OSObject * getDiagnostics(
 void ); 
```

<a id="return_value"></a>

## Return Value

Returns a pointer to the diagnostics object (if any).

<a id="overview"></a>

## Overview

Returns a reference to the internal diagnostics object when the services are built in debug mode. Should be a no-op in release builds.

## See Also

### Miscellaneous

- [attach](1813520-attach.md): Attaches an IOService client to a provider in the registry.
- [createLogin](1813525-createlogin.md): Creates a new IOFireWireSBP2Login object.
- [createManagementORB](1813535-createmanagementorb.md): Creates a new IOFireWireSBP2ManagementORB object.
- [getFireWireUnit](1813559-getfirewireunit.md): Returns an IOFireWireUnit object.
- [getLUNumber](1813568-getlunumber.md): Returns the LUNs number.
- [handleClose](1813576-handleclose.md): Overrideable method to control the open / close behaviour of an IOService.
- [handleOpen](1813589-handleopen.md): Overrideable method to control the open / close behaviour of an IOService.
- [matchPropertyTable](1813597-matchpropertytable.md): Implements SBP2 specific matching.
