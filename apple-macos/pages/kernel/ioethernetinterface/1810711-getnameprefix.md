> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioethernetinterface/1810711-getnameprefix](https://developer.apple.com/documentation/kernel/ioethernetinterface/1810711-getnameprefix)

# getNamePrefix

**Interface language:** Objective-C

**Framework:** Kernel

Returns a string containing the prefix to use when creating a BSD name for this interface.

## Declaration

```objectivec
virtual const char * getNamePrefix() const; 
```

<a id="return_value"></a>

## Return Value

Returns a pointer to a constant C string "en". Therefore, Ethernet interfaces will be registered with BSD as en0, en1, etc.

<a id="overview"></a>

## Overview

The BSD name for each interface object is created by concatenating a string returned by this method, with an unique unit number assigned by IONetworkStack.

## See Also

### Miscellaneous

- [controllerDidChangePowerState](1810626-controllerdidchangepowerstate.md): Handles a notification that the network controller servicing this interface object has transitioned to a new power state.
- [controllerDidOpen](1810636-controllerdidopen.md): A notification that the interface has opened the network controller.
- [controllerWillChangePowerState](1810670-controllerwillchangepowerstate.md): Handles a notification that the network controller servicing this interface object is about to transition to a new power state.
- [controllerWillClose](1810684-controllerwillclose.md): A notification that the interface will close the network controller.
- [free](1810696-free.md): Frees the IOEthernetInterface instance.
- [init](1810722-init.md): Initializes an IOEthernetInterface instance.
- [performCommand](1810736-performcommand.md): Handles an ioctl command sent to the Ethernet interface.
