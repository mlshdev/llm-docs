> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/networkingdriverkit/iousernetworkpacketpoller/initpoller

# initPoller

**Interface language:** Objective-C

**Framework:** NetworkingDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit

## Declaration

```objectivec
bool initPoller(OSObject *target, IODispatchQueue *queue, PollAction pollAction, EventAction eventAction, IOOptionBits pollerOptions, void *refCon);
```
