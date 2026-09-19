> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/networkingdriverkit/enqueueaction

# EnqueueAction

**Interface language:** Objective-C

**Framework:** NetworkingDriverKit  
**Kind:** Type Alias  
**Availability:** DriverKit

## Declaration

```objectivec
typedef unsigned int (*)(class OSObject *, class IOUserNetworkPacketQueue *, class IOUserNetworkPacket **, unsigned int, void *) EnqueueAction;
```

## See Also

### Type aliases

- [DequeueAction](dequeueaction.md)
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
