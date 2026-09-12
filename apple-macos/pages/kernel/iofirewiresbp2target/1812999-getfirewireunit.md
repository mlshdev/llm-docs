> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iofirewiresbp2target/1812999-getfirewireunit](https://developer.apple.com/documentation/kernel/iofirewiresbp2target/1812999-getfirewireunit)

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

- [handleClose](1813009-handleclose.md): Overrideable method to control the open / close behaviour of an IOService.
- [handleIsOpen](1813021-handleisopen.md): Overrideable method to control the open / close behaviour of an IOService.
- [handleOpen](1813037-handleopen.md): Overrideable method to control the open / close behaviour of an IOService.
- [matchPropertyTable](1813051-matchpropertytable.md): Implements SBP2 specific matching.
- [start](1813074-start.md): During an IOService instantiation, the start method is called when the IOService has been selected to run on the provider.
- [stop](1813099-stop.md): During an IOService termination, the stop method is called in its clients before they are detached & it is destroyed.
