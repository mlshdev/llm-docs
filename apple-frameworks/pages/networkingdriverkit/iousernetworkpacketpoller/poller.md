> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-df12c7e37114; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/networkingdriverkit/iousernetworkpacketpoller/poller

# poller

**Interface language:** Objective-C

**Framework:** NetworkingDriverKit  
**Kind:** Static Method  
**Availability:** DriverKit

## Declaration

```objectivec
static IOUserNetworkPacketPoller * poller(OSObject *target, IODispatchQueue *queue, PollAction pollAction, EventAction eventAction, IOOptionBits options, void *refCon);
```
