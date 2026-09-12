> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioethernetinterface/1810626-controllerdidchangepowerstate](https://developer.apple.com/documentation/kernel/ioethernetinterface/1810626-controllerdidchangepowerstate)

# controllerDidChangePowerState

**Interface language:** Objective-C

**Framework:** Kernel

Handles a notification that the network controller servicing this interface object has transitioned to a new power state.

## Declaration

```objectivec
virtual IOReturn controllerDidChangePowerState( 
 IONetworkController *controller, 
 IOPMPowerFlagsflags, 
 UInt32stateNumber, 
 IOService *policyMaker); 
```

## Parameters

- `controller`: The network controller object.
- `flags`: Flags that describe the capability of the controller in the new power state.
- `stateNumber`: An index to a state in the network controller's power state array that the controller has switched to.
- `policyMaker`: A reference to the network controller's policy-maker, and is also the originator of this notification.

<a id="return_value"></a>

## Return Value

Always returns kIOReturnSuccess.

<a id="overview"></a>

## Overview

If the controller did transition to a usable state, and it was previously disabled due to a previous power change, then it is re-enabled.

## See Also

### Miscellaneous

- [controllerDidOpen](1810636-controllerdidopen.md): A notification that the interface has opened the network controller.
- [controllerWillChangePowerState](1810670-controllerwillchangepowerstate.md): Handles a notification that the network controller servicing this interface object is about to transition to a new power state.
- [controllerWillClose](1810684-controllerwillclose.md): A notification that the interface will close the network controller.
- [free](1810696-free.md): Frees the IOEthernetInterface instance.
- [getNamePrefix](1810711-getnameprefix.md): Returns a string containing the prefix to use when creating a BSD name for this interface.
- [init](1810722-init.md): Initializes an IOEthernetInterface instance.
- [performCommand](1810736-performcommand.md): Handles an ioctl command sent to the Ethernet interface.
