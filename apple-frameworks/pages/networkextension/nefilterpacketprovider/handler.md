> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-2d7a1d789740; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/networkextension/nefilterpacketprovider/handler

# handler

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** macOS 15.0+

## Declaration

```swift
var handler: ((NEFilterPacketContext, NWInterface, NETrafficDirection, UnsafeRawBufferPointer) -> NEFilterPacketProvider.Verdict)? { get set }
```
