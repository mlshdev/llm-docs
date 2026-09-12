> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkingdriverkit/dequeueaction](https://developer.apple.com/documentation/networkingdriverkit/dequeueaction)

# DequeueAction

**Interface language:** Objective-C

**Framework:** NetworkingDriverKit  
**Kind:** Type Alias  
**Availability:** DriverKit

## Declaration

```objectivec
typedef unsigned int (*)(class OSObject *, class IOUserNetworkPacketQueue *, class IOUserNetworkPacket **, unsigned int, void *) DequeueAction;
```

## See Also

### Type aliases

- [EnqueueAction](enqueueaction.md)
- [EventAction](eventaction.md)
- [IONetworkPacketType](ionetworkpackettype.md)
- [IOUserNetworkPacketLROFlags](iousernetworkpacketlroflags.md)
- [IOUserNetworkPacketQueueId](iousernetworkpacketqueueid.md)
- [IOUserNetworkPacketRxChecksumFlags](iousernetworkpacketrxchecksumflags.md)
- [IOUserNetworkPacketTSOFlags](iousernetworkpackettsoflags.md)
- [IOUserNetworkPacketTxChecksumFlags](iousernetworkpackettxchecksumflags.md)
- [IOUserNetworkServiceClass](iousernetworkserviceclass.md)
- [LinkQuality](linkquality.md)
- [LinkStatus](linkstatus.md)
- [MediaWord](mediaword.md)
- [PollAction](pollaction.md)
- [QueryFreeSpaceAction](queryfreespaceaction.md)
- [ifdrv_t](ifdrv_t.md)
