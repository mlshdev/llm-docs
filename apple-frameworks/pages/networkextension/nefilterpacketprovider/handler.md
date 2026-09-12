> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nefilterpacketprovider/handler](https://developer.apple.com/documentation/networkextension/nefilterpacketprovider/handler)

# handler

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** macOS 15.0+

## Declaration

```swift
var handler: ((NEFilterPacketContext, NWInterface, NETrafficDirection, UnsafeRawBufferPointer) -> NEFilterPacketProvider.Verdict)? { get set }
```
