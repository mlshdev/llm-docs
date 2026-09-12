> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioethernetinterface/1810636-controllerdidopen](https://developer.apple.com/documentation/kernel/ioethernetinterface/1810636-controllerdidopen)

# controllerDidOpen

**Interface language:** Objective-C

**Framework:** Kernel

A notification that the interface has opened the network controller.

## Declaration

```objectivec
virtual bool controllerDidOpen(
 IONetworkController *controller); 
```

## Parameters

- `controller`: The controller object that was opened.

<a id="return_value"></a>

## Return Value

Returns true on success, false otherwise. Returning false will cause the controller to be closed, and any pending client opens to be rejected.

<a id="overview"></a>

## Overview

This method will be called by IONetworkInterface after a network controller has accepted an open from this interface object. IOEthernetInterface will first call the implementation in its superclass, then inspect the controller through properties published in the registry. This method is called with the arbitration lock held.

## See Also

### Miscellaneous

- [controllerDidChangePowerState](1810626-controllerdidchangepowerstate.md): Handles a notification that the network controller servicing this interface object has transitioned to a new power state.
- [controllerWillChangePowerState](1810670-controllerwillchangepowerstate.md): Handles a notification that the network controller servicing this interface object is about to transition to a new power state.
- [controllerWillClose](1810684-controllerwillclose.md): A notification that the interface will close the network controller.
- [free](1810696-free.md): Frees the IOEthernetInterface instance.
- [getNamePrefix](1810711-getnameprefix.md): Returns a string containing the prefix to use when creating a BSD name for this interface.
- [init](1810722-init.md): Initializes an IOEthernetInterface instance.
- [performCommand](1810736-performcommand.md): Handles an ioctl command sent to the Ethernet interface.
