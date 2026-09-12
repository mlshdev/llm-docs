> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iofirewiredclcommandpoolinterface/1569277-allocatesendbufferdcl](https://developer.apple.com/documentation/iokit/iofirewiredclcommandpoolinterface/1569277-allocatesendbufferdcl)

# AllocateSendBufferDCL

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.1+

## Declaration

```objectivec
DCLCommand *(*AllocateSendBufferDCL)(IOFireWireLibDCLCommandPoolRef self, DCLCommand *inDCL, void *inBuffer, IOByteCount inSize, IOByteCount inPacketSize, UInt32 inBufferOffset);
```

<a id="discussion"></a>

## Discussion

Description forthcoming

## See Also

### Miscellaneous

- [Allocate](1569243-allocate.md)
- [AllocateCallProcDCL](1569190-allocatecallprocdcl.md)
- [AllocateJumpDCL](1569222-allocatejumpdcl.md)
- [AllocateLabelDCL](1569235-allocatelabeldcl.md)
- [AllocatePtrTimeStampDCL](1569298-allocateptrtimestampdcl.md)
- [AllocateReceiveBufferDCL](1569196-allocatereceivebufferdcl.md)
- [AllocateReceivePacketDCL](1569342-allocatereceivepacketdcl.md)
- [AllocateReceivePacketStartDCL](1569278-allocatereceivepacketstartdcl.md)
- [AllocateSendPacketDCL](1569210-allocatesendpacketdcl.md)
- [AllocateSendPacketStartDCL](1569202-allocatesendpacketstartdcl.md)
- [AllocateSendPacketWithHeaderStartDCL](1569254-allocatesendpacketwithheaderstar.md)
- [AllocateSetTagSyncBitsDCL](1569285-allocatesettagsyncbitsdcl.md)
- [AllocateTransferBufferDCL](1569188-allocatetransferbufferdcl.md)
- [AllocateTransferPacketDCL](1569214-allocatetransferpacketdcl.md)
- [AllocateUpdateDCLListDCL](1569212-allocateupdatedcllistdcl.md)
- [AllocateWithOpcode](1569333-allocatewithopcode.md)
- [Free](1569328-free.md)
- [GetBytesRemaining](1569240-getbytesremaining.md)
- [GetSize](1569354-getsize.md)
- [SetSize](1569208-setsize.md)
