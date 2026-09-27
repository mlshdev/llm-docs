> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-df12c7e37114; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/networkingdriverkit/iousernetworkpacketbufferpool/createwithoptions

# CreateWithOptions

**Interface language:** Objective-C

**Framework:** NetworkingDriverKit  
**Kind:** Static Method  
**Availability:** DriverKit

## Declaration

```objectivec
static kern_return_t CreateWithOptions(IOService *device, const char name[1024], const IOUserNetworkPacketBufferPoolOptions *options, IOUserNetworkPacketBufferPool **pool);
```
