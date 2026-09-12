> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ionetworkinterface/1810628-handleclientclose](https://developer.apple.com/documentation/kernel/ionetworkinterface/1810628-handleclientclose)

# handleClientClose

**Interface language:** Objective-C

**Framework:** Kernel

Handles a client close on the interface.

## Declaration

```objectivec
virtual void handleClientClose(
 IOService *client, 
 IOOptionBitsoptions ); 
```

## Parameters

- `client`: The client object requesting the close.
- `options`: Options same options passed to `handleClose()`.

<a id="overview"></a>

## Overview

This method is called by `handleClose()` to allow a subclass to handle a client close. The arbitration lock is held.

## See Also

### Miscellaneous

- [addNetworkData](1810235-addnetworkdata.md): Adds an `IONetworkData` object to the interface.
- [attachToDataLinkLayer](1810250-attachtodatalinklayer.md): Attach the network interface to the BSD data link layer.
- [clearInputQueue](1810266-clearinputqueue.md): Discards all packets in the input queue.
- [controllerDidChangePowerState](1810277-controllerdidchangepowerstate.md): Handles a notification that the network controller servicing this interface object has transitioned to a new power state.
- [controllerDidOpen](1810292-controllerdidopen.md): Sends a notification that the interface has opened the network controller.
- [controllerWillChangePowerState](1810306-controllerwillchangepowerstate.md): Handles a notification that the network controller servicing this interface object will transition to a new power state.
- [controllerWillClose](1810322-controllerwillclose.md): Sends a notification that the interface will close the network controller.
- [debuggerRegistered](1810336-debuggerregistered.md): Tells the `IONetworkData` that this interface will be used by the debugger.
- [detachFromDataLinkLayer](1810351-detachfromdatalinklayer.md): Detach the network interface from the BSD data link layer.
- [feedPacketInputTap](1810364-feedpacketinputtap.md): Feed received packets to the BPF
- [feedPacketOutputTap](1810380-feedpacketoutputtap.md): Feed output packets to the BPF
- [flushInputQueue](1810398-flushinputqueue.md): Submit all packets held in the input queue to the network stack.
- [free](1810410-free.md): Frees the `IONetworkInterface` object.
- [getController](1810426-getcontroller.md): Gets the `IONetworkController` object that created this interface.
- [getExtraFlags](1810443-getextraflags.md): Gets the current interface eflags.
- [getFlags](1810460-getflags.md): Gets the current interface flags.
- [getIfnet](1810471-getifnet.md): Returns the `ifnet_t` allocated by the interface object.
- [getInterfaceState](1810480-getinterfacestate.md): Reports the current state of the interface object.
- [getInterfaceType](1810498-getinterfacetype.md): Gets the interface type.
- [getMaxTransferUnit](1810513-getmaxtransferunit.md): Gets the maximum transfer unit for this interface.
- [getMediaAddressLength](1810531-getmediaaddresslength.md): Gets the size of the media (MAC-layer) address.
- [getMediaHeaderLength](1810551-getmediaheaderlength.md): Gets the size of the media header.
- [getNamePrefix](1810563-getnameprefix.md): Returns the BSD name prefix as a C-string.
- [getNetworkData(const char \*)](1810574-getnetworkdata.md): Gets an `IONetworkData` object from the interface.
- [getNetworkData(const OSSymbol \*)](1810596-getnetworkdata.md): Gets an `IONetworkData` object from the interface.
- [getUnitNumber](1810607-getunitnumber.md): Gets the unit number assigned to this interface object.
- [handleClientOpen](1810645-handleclientopen.md): Handles a client open on the interface.
- [init](1810663-init.md): Initializes the `IONetworkInterface` object.
- [initIfnetParams](1810678-initifnetparams.md): Allows a subclass to provide ifnet initialization parameters specific to an interface type.
- [inputEvent](1810692-inputevent.md): Sends an event to the network stack.
- [inputPacket](1810712-inputpacket.md): For drivers to submit a received packet to the network stack.
- [isPrimaryInterface](1810743-isprimaryinterface.md): Queries whether the interface is the primary network interface on the system.
- [isRegistered](1810763-isregistered.md): Queries if the interface has attached to the BSD network stack.
- [lock](1810783-lock.md): Acquires a recursive lock owned by the interface.
- [performCommand](1810800-performcommand.md): Handles an ioctl command sent to the network interface.
- [powerStateDidChangeTo](1810818-powerstatedidchangeto.md): Handles a post-change power interest notification from the network controller.
- [powerStateWillChangeTo](1810839-powerstatewillchangeto.md): Handles a pre-change power interest notification from the network controller.
- [registerOutputHandler](1810858-registeroutputhandler.md): Registers a target/action to handle outbound packets.
- [removeNetworkData(const char \*)](1810886-removenetworkdata.md): Removes an `IONetworkData` object from the interface.
- [removeNetworkData(const OSSymbol \*)](1810904-removenetworkdata.md): Removes an `IONetworkData` object from the interface.
- [setFlags](1810924-setflags.md): Performs a read-modify-write operation on the current interface flags value.
- [setInterfaceState](1810944-setinterfacestate.md): Updates the interface object state flags.
- [setInterfaceType](1810958-setinterfacetype.md): Sets the interface type.
- [setMaxTransferUnit](1810979-setmaxtransferunit.md): Sets the maximum transfer unit for this interface.
- [setMediaAddressLength](1810991-setmediaaddresslength.md): Sets the size of the media (MAC-layer) address.
- [setMediaHeaderLength](1811003-setmediaheaderlength.md): Sets the size of the media header.
- [setUnitNumber](1811014-setunitnumber.md): Assigns an unique unit number to this interface.
- [unlock](1811026-unlock.md): Releases the recursive lock owned by the interface.
