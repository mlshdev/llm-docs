> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioethernetinterface/1810736-performcommand](https://developer.apple.com/documentation/kernel/ioethernetinterface/1810736-performcommand)

# performCommand

**Interface language:** Objective-C

**Framework:** Kernel

Handles an ioctl command sent to the Ethernet interface.

## Declaration

```objectivec
virtual SInt32 performCommand(
 IONetworkController *controller, 
 unsigned longcmd, 
 void *arg0, 
 void *arg1); 
```

## Parameters

- `controller`: The controller object.
- `cmd`: The ioctl command code.
- `arg0`: Command argument 0. Generally a pointer to an ifnet structure associated with the interface.
- `arg1`: Command argument 1.

<a id="return_value"></a>

## Return Value

Returns a BSD return value defined in bsd/sys/errno.h.

<a id="overview"></a>

## Overview

This method handles socket ioctl commands sent to the Ethernet interface from DLIL. Commands recognized and processed by this method are SIOCSIFADDR, SIOCSIFFLAGS, SIOCADDMULTI, and SIOCDELMULTI. Other commands are passed to the superclass.

## See Also

### Miscellaneous

- [controllerDidChangePowerState](1810626-controllerdidchangepowerstate.md): Handles a notification that the network controller servicing this interface object has transitioned to a new power state.
- [controllerDidOpen](1810636-controllerdidopen.md): A notification that the interface has opened the network controller.
- [controllerWillChangePowerState](1810670-controllerwillchangepowerstate.md): Handles a notification that the network controller servicing this interface object is about to transition to a new power state.
- [controllerWillClose](1810684-controllerwillclose.md): A notification that the interface will close the network controller.
- [free](1810696-free.md): Frees the IOEthernetInterface instance.
- [getNamePrefix](1810711-getnameprefix.md): Returns a string containing the prefix to use when creating a BSD name for this interface.
- [init](1810722-init.md): Initializes an IOEthernetInterface instance.
