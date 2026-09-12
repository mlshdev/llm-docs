> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioethernetinterface/1810684-controllerwillclose](https://developer.apple.com/documentation/kernel/ioethernetinterface/1810684-controllerwillclose)

# controllerWillClose

**Interface language:** Objective-C

**Framework:** Kernel

A notification that the interface will close the network controller.

## Declaration

```objectivec
virtual void controllerWillClose(
 IONetworkController *controller); 
```

## Parameters

- `controller`: The controller that is about to be closed.

<a id="overview"></a>

## Overview

This method will simply call super to propagate the method call. This method is called with the arbitration lock held.

## See Also

### Miscellaneous

- [controllerDidChangePowerState](1810626-controllerdidchangepowerstate.md): Handles a notification that the network controller servicing this interface object has transitioned to a new power state.
- [controllerDidOpen](1810636-controllerdidopen.md): A notification that the interface has opened the network controller.
- [controllerWillChangePowerState](1810670-controllerwillchangepowerstate.md): Handles a notification that the network controller servicing this interface object is about to transition to a new power state.
- [free](1810696-free.md): Frees the IOEthernetInterface instance.
- [getNamePrefix](1810711-getnameprefix.md): Returns a string containing the prefix to use when creating a BSD name for this interface.
- [init](1810722-init.md): Initializes an IOEthernetInterface instance.
- [performCommand](1810736-performcommand.md): Handles an ioctl command sent to the Ethernet interface.
