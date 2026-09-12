> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iofirewirelocalisochportinterface/1569193-modifytransferpacketdclbuffer](https://developer.apple.com/documentation/iokit/iofirewirelocalisochportinterface/1569193-modifytransferpacketdclbuffer)

# ModifyTransferPacketDCLBuffer

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.1+

NOT IMPLEMENTED. Modify the transfer size of a transfer packet DCL (send or receive)

## Declaration

```objectivec
IOReturn (*ModifyTransferPacketDCLBuffer)(IOFireWireLibLocalIsochPortRef self, DCLTransferPacket *inDCL, void *buffer);
```

## Parameters

- `self`: The local isoch port interface to use.
- `inDCL`: A pointer to the DCL to modify.
- `buffer`: The new buffer to or from data will be transferred.

<a id="return_value"></a>

## Return Value

Returns kIOReturnSuccess on success. Will return an error if the range specified by \[buffer, buffer+size\] is not in the range of memory locked down for this program.

<a id="discussion"></a>

## Discussion

NOT IMPLEMENTED. Allows you to modify transfer packet DCLs after they have been compiled and while the DCL program is still running. The buffer can be set to be any location within the range of buffers specified when the DCL program was compiled (including 0). Availability: IOFireWireLocalIsochPortInterface_v3 and newer.

## See Also

### Miscellaneous

- [AllocatePort](1569283-allocateport.md): The method is called when the port should configure its associated hardware to prepare to send or receive isochronous data on the channel number and at the speed specified.
- [GetRefCon](1569219-getrefcon.md): Get reference value associated with this port.
- [GetSupported](1569242-getsupported.md): The method is called to determine which FireWire isochronous channels and speed this port supports.
- [ModifyJumpDCL](1569296-modifyjumpdcl.md): Change the jump target label of a jump DCL.
- [ModifyTransferPacketDCL](1569359-modifytransferpacketdcl.md): Modify the transfer size of a transfer packet DCL (send or receive)
- [ModifyTransferPacketDCLSize](1569237-modifytransferpacketdclsize.md): Modify the transfer size of a transfer packet DCL (send or receive)
- [PrintDCLProgram](1569238-printdclprogram.md): Display the contents of a DCL program.
- [ReleasePort](1569332-releaseport.md): The method is called to release the hardware after the channel has been stopped.
- [SetFinalizeCallback](1569239-setfinalizecallback.md): Set the finalize callback for a local isoch port
- [SetRefCon](1569318-setrefcon.md): Set reference value associated with this port.
- [Start](1569339-start.md): The method is called when the port is to begin talking or listening.
- [Stop](1569247-stop.md): The method is called when the port is to stop talking or listening.
