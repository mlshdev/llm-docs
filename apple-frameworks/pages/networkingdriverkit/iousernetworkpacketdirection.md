> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkingdriverkit/iousernetworkpacketdirection](https://developer.apple.com/documentation/networkingdriverkit/iousernetworkpacketdirection)

# IOUserNetworkPacketDirection

**Interface language:** Objective-C

**Framework:** NetworkingDriverKit  
**Kind:** Type Alias  
**Availability:** DriverKit

The direction in which the packet moves, relative to the device.

## Declaration

```objectivec
typedef uint32_t IOUserNetworkPacketDirection;
```

## Topics

### Getting the Direction Constants

- [Direction Constants](direction-constants.md): Constants indicating package transmission direction.

## See Also

### Packet Management

- [IOUserNetworkPacketBufferPool](iousernetworkpacketbufferpool.md): An object that manages the storage space for packets coming into and out of your driver.
- [IOUserNetworkPacket](iousernetworkpacket.md): A network packet containing the data for your driver to process.
