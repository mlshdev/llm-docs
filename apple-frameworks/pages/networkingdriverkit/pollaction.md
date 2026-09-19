> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/networkingdriverkit/pollaction

# PollAction

**Interface language:** Objective-C

**Framework:** NetworkingDriverKit  
**Kind:** Type Alias  
**Availability:** DriverKit

## Declaration

```objectivec
typedef int (*)(class OSObject *, class IOUserNetworkPacketPoller *, void *) PollAction;
```

## See Also

### Type aliases

- [DequeueAction](dequeueaction.md)
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
- [QueryFreeSpaceAction](queryfreespaceaction.md)
- [ifdrv_t](ifdrv_t.md)
