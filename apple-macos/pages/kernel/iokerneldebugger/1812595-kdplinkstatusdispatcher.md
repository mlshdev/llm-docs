> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iokerneldebugger/1812595-kdplinkstatusdispatcher](https://developer.apple.com/documentation/kernel/iokerneldebugger/1812595-kdplinkstatusdispatcher)

# kdpLinkStatusDispatcher

**Interface language:** Objective-C

**Framework:** Kernel

The KDP link status dispatch function.

## Declaration

```objectivec
static UInt32 kdpLinkStatusDispatcher(
 void); 
```

<a id="return_value"></a>

## Return Value

Return link status.

<a id="overview"></a>

## Overview

Field KDP link status requests, then dispatches the call to the registered link up handler.

## See Also

### Miscellaneous

- [debugger](1812543-debugger.md): Factory method that performs allocation and initialization of an IOKernelDebugger object.
- [free](1812554-free.md): Frees the IOKernelDebugger instance.
- [handleClose](1812560-handleclose.md): Handles a client close.
- [handleIsOpen](1812565-handleisopen.md): Queries whether a client has an open on this object.
- [handleOpen](1812573-handleopen.md): Handles a client open.
- [init](1812584-init.md): Initializes an IOKernelDebugger instance.
- [kdpReceiveDispatcher](1812607-kdpreceivedispatcher.md): The KDP receive dispatch function.
- [kdpSetModeDispatcher](1812616-kdpsetmodedispatcher.md): The KDP set mode dispatch function.
- [kdpTransmitDispatcher](1812631-kdptransmitdispatcher.md): The KDP transmit dispatch function.
- [lock](1812643-lock.md): Takes the debugger lock conditionally.
- [nullLinkStatusHandler](1812653-nulllinkstatushandler.md): Null link status handler.
- [nullRxHandler](1812663-nullrxhandler.md): Null receive handler.
- [nullSetModeHandler](1812671-nullsetmodehandler.md): Null set mode handler.
- [nullTxHandler](1812684-nulltxhandler.md): Null transmit handler.
- [powerStateDidChangeTo](1812705-powerstatedidchangeto.md): Handles notification that the network controller did change power state.
- [powerStateWillChangeTo](1812727-powerstatewillchangeto.md): Handles notification that the network controller will change power state.
- [registerHandler](1812741-registerhandler.md): Registers the target and the handler functions.
- [signalDebugger](1812763-signaldebugger.md): Signal the kernel to enter the debugger when safe.
- [unlock](1812777-unlock.md): Releases the debugger lock.
