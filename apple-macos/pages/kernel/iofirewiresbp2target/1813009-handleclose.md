> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iofirewiresbp2target/1813009-handleclose](https://developer.apple.com/documentation/kernel/iofirewiresbp2target/1813009-handleclose)

# handleClose

**Interface language:** Objective-C

**Framework:** Kernel

Overrideable method to control the open / close behaviour of an IOService.

## Declaration

```objectivec
virtual void handleClose(
 IOService *forClient,
 IOOptionBitsoptions ); 
```

## Parameters

- `forClient`: Designates the client of the provider requesting the close.
- `options`: Options for the close, may be interpreted by the implementor of handleOpen.

<a id="overview"></a>

## Overview

See IOService for discussion.

## See Also

### Miscellaneous

- [getFireWireUnit](1812999-getfirewireunit.md): Returns an IOFireWireUnit object.
- [handleIsOpen](1813021-handleisopen.md): Overrideable method to control the open / close behaviour of an IOService.
- [handleOpen](1813037-handleopen.md): Overrideable method to control the open / close behaviour of an IOService.
- [matchPropertyTable](1813051-matchpropertytable.md): Implements SBP2 specific matching.
- [start](1813074-start.md): During an IOService instantiation, the start method is called when the IOService has been selected to run on the provider.
- [stop](1813099-stop.md): During an IOService termination, the stop method is called in its clients before they are detached & it is destroyed.
