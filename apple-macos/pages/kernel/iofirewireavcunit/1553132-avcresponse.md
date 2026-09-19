> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iofirewireavcunit/1553132-avcresponse

# AVCResponse

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
static UInt32 AVCResponse(void *refcon, UInt16 nodeID, IOFWSpeed & speed, FWAddress addr, UInt32 len, const void *buf, IOFWRequestRefCon requestRefcon);
```
