> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iofirewirelocalisochportinterface/1569296-modifyjumpdcl](https://developer.apple.com/documentation/iokit/iofirewirelocalisochportinterface/1569296-modifyjumpdcl)

# ModifyJumpDCL

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.1+

Change the jump target label of a jump DCL.

## Declaration

```objectivec
IOReturn (*ModifyJumpDCL)(IOFireWireLibLocalIsochPortRef self, DCLJump *inJump, DCLLabel *inLabel);
```

## Parameters

- `self`: The local isoch port interface to use.
- `inJump`: The jump DCL to modify.
- `inLabel`: The label to jump to.

<a id="return_value"></a>

## Return Value

kIOReturnSuccess on success. Will return an error if 'inJump' does not point to a valid jump DCL or 'inLabel' does not point to a valid label DCL.

<a id="discussion"></a>

## Discussion

Use this function to change the flow of a DCL program. Works whether the DCL program is currently running or not.

## See Also

### Miscellaneous

- [AllocatePort](1569283-allocateport.md): The method is called when the port should configure its associated hardware to prepare to send or receive isochronous data on the channel number and at the speed specified.
- [GetRefCon](1569219-getrefcon.md): Get reference value associated with this port.
- [GetSupported](1569242-getsupported.md): The method is called to determine which FireWire isochronous channels and speed this port supports.
- [ModifyTransferPacketDCL](1569359-modifytransferpacketdcl.md): Modify the transfer size of a transfer packet DCL (send or receive)
- [ModifyTransferPacketDCLBuffer](1569193-modifytransferpacketdclbuffer.md): NOT IMPLEMENTED. Modify the transfer size of a transfer packet DCL (send or receive)
- [ModifyTransferPacketDCLSize](1569237-modifytransferpacketdclsize.md): Modify the transfer size of a transfer packet DCL (send or receive)
- [PrintDCLProgram](1569238-printdclprogram.md): Display the contents of a DCL program.
- [ReleasePort](1569332-releaseport.md): The method is called to release the hardware after the channel has been stopped.
- [SetFinalizeCallback](1569239-setfinalizecallback.md): Set the finalize callback for a local isoch port
- [SetRefCon](1569318-setrefcon.md): Set reference value associated with this port.
- [Start](1569339-start.md): The method is called when the port is to begin talking or listening.
- [Stop](1569247-stop.md): The method is called when the port is to stop talking or listening.
