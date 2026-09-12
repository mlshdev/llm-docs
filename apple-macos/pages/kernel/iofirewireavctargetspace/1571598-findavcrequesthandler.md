> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iofirewireavctargetspace/1571598-findavcrequesthandler](https://developer.apple.com/documentation/kernel/iofirewireavctargetspace/1571598-findavcrequesthandler)

# findAVCRequestHandler

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual IOReturn findAVCRequestHandler(IOFireWireAVCProtocolUserClient *userClient, UInt32 generation, UInt16 nodeID, IOFWSpeed speed, UInt32 handlerSearchIndex, const char *pCmdBuf, UInt32 cmdLen);
```
