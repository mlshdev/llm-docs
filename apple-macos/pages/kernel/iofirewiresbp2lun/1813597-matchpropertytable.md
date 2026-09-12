> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iofirewiresbp2lun/1813597-matchpropertytable](https://developer.apple.com/documentation/kernel/iofirewiresbp2lun/1813597-matchpropertytable)

# matchPropertyTable

**Interface language:** Objective-C

**Framework:** Kernel

Implements SBP2 specific matching.

## Declaration

```objectivec
virtual bool matchPropertyTable(
 OSDictionary *table); 
```

## Parameters

- `table`: The dictionary of properties to be matched against.

<a id="return_value"></a>

## Return Value

Returns false if the family considers the matching dictionary does not match in properties it understands, true otherwise.

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
- [handleOpen](1813589-handleopen.md): Overrideable method to control the open / close behaviour of an IOService.
