> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iofirewirelocalisochportinterface/1569239-setfinalizecallback](https://developer.apple.com/documentation/iokit/iofirewirelocalisochportinterface/1569239-setfinalizecallback)

# SetFinalizeCallback

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.1+

Set the finalize callback for a local isoch port

## Declaration

```objectivec
IOReturn (*SetFinalizeCallback)(IOFireWireLibLocalIsochPortRef self, IOFireWireLibIsochPortFinalizeCallback finalizeCallback);
```

## Parameters

- `self`: The local isoch port interface to use.
- `finalizeCallback`: The finalize callback.

<a id="return_value"></a>

## Return Value

Returns true if this isoch port has no more pending callbacks and does not need any more runloop time.

<a id="discussion"></a>

## Discussion

When Stop() is called on a LocalIsochPortInterface, there may or may not be isoch callbacks still pending for this isoch port. The port must be allowed to handle any pending callbacks, so the isoch runloop should not be stopped until a port has handled all pending callbacks. The finalize callback is called after the final callback has been made on the isoch runloop. After this callback is sent, it is safe to stop the isoch runloop.

You should not access the isoch port after the finalize callback has been made; it may be released immediately after this callback is sent.

Availability: IOFireWireLocalIsochPortInterface_v4 and newer.

## See Also

### Miscellaneous

- [AllocatePort](1569283-allocateport.md): The method is called when the port should configure its associated hardware to prepare to send or receive isochronous data on the channel number and at the speed specified.
- [GetRefCon](1569219-getrefcon.md): Get reference value associated with this port.
- [GetSupported](1569242-getsupported.md): The method is called to determine which FireWire isochronous channels and speed this port supports.
- [ModifyJumpDCL](1569296-modifyjumpdcl.md): Change the jump target label of a jump DCL.
- [ModifyTransferPacketDCL](1569359-modifytransferpacketdcl.md): Modify the transfer size of a transfer packet DCL (send or receive)
- [ModifyTransferPacketDCLBuffer](1569193-modifytransferpacketdclbuffer.md): NOT IMPLEMENTED. Modify the transfer size of a transfer packet DCL (send or receive)
- [ModifyTransferPacketDCLSize](1569237-modifytransferpacketdclsize.md): Modify the transfer size of a transfer packet DCL (send or receive)
- [PrintDCLProgram](1569238-printdclprogram.md): Display the contents of a DCL program.
- [ReleasePort](1569332-releaseport.md): The method is called to release the hardware after the channel has been stopped.
- [SetRefCon](1569318-setrefcon.md): Set reference value associated with this port.
- [Start](1569339-start.md): The method is called when the port is to begin talking or listening.
- [Stop](1569247-stop.md): The method is called when the port is to stop talking or listening.
