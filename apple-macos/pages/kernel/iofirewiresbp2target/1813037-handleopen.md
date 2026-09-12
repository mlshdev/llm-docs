> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iofirewiresbp2target/1813037-handleopen](https://developer.apple.com/documentation/kernel/iofirewiresbp2target/1813037-handleopen)

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

- [getFireWireUnit](1812999-getfirewireunit.md): Returns an IOFireWireUnit object.
- [handleClose](1813009-handleclose.md): Overrideable method to control the open / close behaviour of an IOService.
- [handleIsOpen](1813021-handleisopen.md): Overrideable method to control the open / close behaviour of an IOService.
- [matchPropertyTable](1813051-matchpropertytable.md): Implements SBP2 specific matching.
- [start](1813074-start.md): During an IOService instantiation, the start method is called when the IOService has been selected to run on the provider.
- [stop](1813099-stop.md): During an IOService termination, the stop method is called in its clients before they are detached & it is destroyed.
