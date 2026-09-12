> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iofirewirelocalisochportinterface/1569238-printdclprogram](https://developer.apple.com/documentation/iokit/iofirewirelocalisochportinterface/1569238-printdclprogram)

# PrintDCLProgram

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.1+

Display the contents of a DCL program.

## Declaration

```objectivec
void (*PrintDCLProgram)(IOFireWireLibLocalIsochPortRef self, const DCLCommand *inProgram, UInt32 inLength);
```

## Parameters

- `self`: The local isoch port interface to use.
- `inProgram`: A pointer to the first DCL of the program to display.
- `inLength`: The length (in DCLs) of the program.

## See Also

### Miscellaneous

- [AllocatePort](1569283-allocateport.md): The method is called when the port should configure its associated hardware to prepare to send or receive isochronous data on the channel number and at the speed specified.
- [GetRefCon](1569219-getrefcon.md): Get reference value associated with this port.
- [GetSupported](1569242-getsupported.md): The method is called to determine which FireWire isochronous channels and speed this port supports.
- [ModifyJumpDCL](1569296-modifyjumpdcl.md): Change the jump target label of a jump DCL.
- [ModifyTransferPacketDCL](1569359-modifytransferpacketdcl.md): Modify the transfer size of a transfer packet DCL (send or receive)
- [ModifyTransferPacketDCLBuffer](1569193-modifytransferpacketdclbuffer.md): NOT IMPLEMENTED. Modify the transfer size of a transfer packet DCL (send or receive)
- [ModifyTransferPacketDCLSize](1569237-modifytransferpacketdclsize.md): Modify the transfer size of a transfer packet DCL (send or receive)
- [ReleasePort](1569332-releaseport.md): The method is called to release the hardware after the channel has been stopped.
- [SetFinalizeCallback](1569239-setfinalizecallback.md): Set the finalize callback for a local isoch port
- [SetRefCon](1569318-setrefcon.md): Set reference value associated with this port.
- [Start](1569339-start.md): The method is called when the port is to begin talking or listening.
- [Stop](1569247-stop.md): The method is called when the port is to stop talking or listening.
