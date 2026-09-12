> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iofirewireavctargetspace/1571622-installavccommandhandler](https://developer.apple.com/documentation/kernel/iofirewireavctargetspace/1571622-installavccommandhandler)

# installAVCCommandHandler

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual IOReturn installAVCCommandHandler(IOFireWireAVCProtocolUserClient *userClient, IOFireWireAVCTargetCommandHandlerCallback callBack, OSAsyncReference64 asyncRef, UInt32 subUnitTypeAndID, UInt32 opCode, uint64_t userCallBack, uint64_t userRefCon);
```
