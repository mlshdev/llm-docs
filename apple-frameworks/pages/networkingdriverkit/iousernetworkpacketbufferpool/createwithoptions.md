> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkingdriverkit/iousernetworkpacketbufferpool/createwithoptions](https://developer.apple.com/documentation/networkingdriverkit/iousernetworkpacketbufferpool/createwithoptions)

# CreateWithOptions

**Interface language:** Objective-C

**Framework:** NetworkingDriverKit  
**Kind:** Static Method  
**Availability:** DriverKit

## Declaration

```objectivec
static kern_return_t CreateWithOptions(IOService *device, const char name[1024], const IOUserNetworkPacketBufferPoolOptions *options, IOUserNetworkPacketBufferPool **pool);
```
