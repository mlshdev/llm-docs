> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioethernetinterface/1810670-controllerwillchangepowerstate](https://developer.apple.com/documentation/kernel/ioethernetinterface/1810670-controllerwillchangepowerstate)

# controllerWillChangePowerState

**Interface language:** Objective-C

**Framework:** Kernel

Handles a notification that the network controller servicing this interface object is about to transition to a new power state.

## Declaration

```objectivec
virtual IOReturn controllerWillChangePowerState( 
 IONetworkController *controller, 
 IOPMPowerFlagsflags, 
 UInt32stateNumber, 
 IOService *policyMaker); 
```

## Parameters

- `controller`: The network controller object.
- `flags`: Flags that describe the capability of the controller in the new power state.
- `stateNumber`: An index to a state in the network controller's power state array that the controller is switching to.
- `policyMaker`: A reference to the network controller's policy-maker, and is also the originator of this notification.

<a id="return_value"></a>

## Return Value

Always returns kIOReturnSuccess.

<a id="overview"></a>

## Overview

If the controller is about to transition to an unusable state, and it is currently enabled, then the disable() method on the controller is called.

## See Also

### Miscellaneous

- [controllerDidChangePowerState](1810626-controllerdidchangepowerstate.md): Handles a notification that the network controller servicing this interface object has transitioned to a new power state.
- [controllerDidOpen](1810636-controllerdidopen.md): A notification that the interface has opened the network controller.
- [controllerWillClose](1810684-controllerwillclose.md): A notification that the interface will close the network controller.
- [free](1810696-free.md): Frees the IOEthernetInterface instance.
- [getNamePrefix](1810711-getnameprefix.md): Returns a string containing the prefix to use when creating a BSD name for this interface.
- [init](1810722-init.md): Initializes an IOEthernetInterface instance.
- [performCommand](1810736-performcommand.md): Handles an ioctl command sent to the Ethernet interface.
