> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iofirewirenudclpoolinterface/1569183-getprogram](https://developer.apple.com/documentation/iokit/iofirewirenudclpoolinterface/1569183-getprogram)

# GetProgram

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.3+

Finds the first DCL in the pool not preceeded by any other DCL.

## Declaration

```objectivec
DCLCommand *(*GetProgram)(IOFireWireLibNuDCLPoolRef self);
```

## Parameters

- `self`: The NuDCL pool to use.

<a id="return_value"></a>

## Return Value

A DCLCommand pointer.

<a id="discussion"></a>

## Discussion

Returns a backwards-compatible DCL program pointer. This can be passed to IOFireWireLibDeviceRef::CreateLocalIsochPort.

## See Also

### Miscellaneous

- [AllocateReceivePacket](1569189-allocatereceivepacket.md): Allocate a ReceivePacket NuDCL and append it to the program
- [AllocateReceivePacket_v](1569299-allocatereceivepacket_v.md): Allocate a ReceivePacket NuDCL and append it to the program
- [AllocateSendPacket](1569297-allocatesendpacket.md): Allocate a SendPacket NuDCL and append it to the program.
- [AllocateSendPacket_v](1569323-allocatesendpacket_v.md): Allocate a SendPacket NuDCL and append it to the program.
- [AllocateSkipCycle](1569236-allocateskipcycle.md): Allocate a SkipCycle NuDCL and append it to the program.
- [AppendDCLRanges](1569263-appenddclranges.md): Add a memory range to the scatter gather list of a NuDCL
- [AppendDCLUpdateList](1569230-appenddclupdatelist.md)
- [CopyDCLUpdateList](1569302-copydclupdatelist.md)
- [CountDCLRanges](1569365-countdclranges.md): Returns number of buffers for a NuDCL
- [FindDCLNextDCL](1569217-finddclnextdcl.md): Get the next pointer for a NuDCL
- [GetDCLBranch](1569274-getdclbranch.md): Get the branch pointer for a NuDCL
- [GetDCLCallback](1569314-getdclcallback.md): Get callback for a NuDCL
- [GetDCLFlags](1569338-getdclflags.md)
- [GetDCLRanges](1569226-getdclranges.md): Get the scatter-gather list for a NuDCL
- [GetDCLRefcon](1569337-getdclrefcon.md)
- [GetDCLs](1569203-getdcls.md): Returns the pool's DCL program as a CFArray of NuDCLRef's.
- [GetDCLSize](1569253-getdclsize.md): Returns number of bytes to be transferred by a NuDCL
- [GetDCLSkipBranch](1569220-getdclskipbranch.md)
- [GetDCLSkipCallback](1569350-getdclskipcallback.md)
- [GetDCLSkipRefcon](1569331-getdclskiprefcon.md)
- [GetDCLSpan](1569262-getdclspan.md): Returns a virtual range spanning lowest referenced buffer address to highest
- [GetDCLStatusPtr](1569185-getdclstatusptr.md): Get the status pointer for a NuDCL.
- [GetDCLSyncBits](1569280-getdclsyncbits.md)
- [GetDCLTagBits](1569209-getdcltagbits.md)
- [GetDCLTimeStampPtr](1569218-getdcltimestampptr.md): Get the time stamp pointer for a NuDCL.
- [GetDCLUserHeaderPtr](1569294-getdcluserheaderptr.md)
- [GetUserHeaderMaskPtr](1569211-getuserheadermaskptr.md)
- [PrintDCL](1569336-printdcl.md)
- [PrintProgram](1569279-printprogram.md)
- [RemoveDCLUpdateList](1569281-removedclupdatelist.md)
- [SetCurrentTagAndSync](1569304-setcurrenttagandsync.md): Set current tag and sync bits
- [SetDCLBranch](1569290-setdclbranch.md): Set the branch pointer for a NuDCL
- [SetDCLCallback](1569248-setdclcallback.md): Set the callback for a NuDCL
- [SetDCLFlags](1569321-setdclflags.md)
- [SetDCLRanges](1569310-setdclranges.md): Set the scatter gather list for a NuDCL
- [SetDCLRefcon](1569363-setdclrefcon.md)
- [SetDCLSkipBranch](1569198-setdclskipbranch.md)
- [SetDCLSkipCallback](1569352-setdclskipcallback.md)
- [SetDCLSkipRefcon](1569313-setdclskiprefcon.md)
- [SetDCLStatusPtr](1569282-setdclstatusptr.md): Set the status pointer for a NuDCL
- [SetDCLSyncBits](1569275-setdclsyncbits.md)
- [SetDCLTagBits](1569229-setdcltagbits.md)
- [SetDCLTimeStampPtr](1569346-setdcltimestampptr.md): Set the time stamp pointer for a NuDCL
- [SetDCLUpdateList](1569340-setdclupdatelist.md)
- [SetDCLUserHeaderPtr](1569249-setdcluserheaderptr.md): Set a user specified header for a send NuDCL
- [SetDCLWaitControl](1569186-setdclwaitcontrol.md)
