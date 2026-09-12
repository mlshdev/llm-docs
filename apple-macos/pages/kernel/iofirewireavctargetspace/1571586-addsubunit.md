> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iofirewireavctargetspace/1571586-addsubunit](https://developer.apple.com/documentation/kernel/iofirewireavctargetspace/1571586-addsubunit)

# addSubunit

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual IOReturn addSubunit(IOFireWireAVCProtocolUserClient *userClient, IOFireWireAVCSubunitPlugHandlerCallback callBack, OSAsyncReference64 asyncRef, UInt32 subunitType, UInt32 numSourcePlugs, UInt32 numDestPlugs, uint64_t userCallBack, uint64_t userRefCon, UInt32 *subUnitID);
```
