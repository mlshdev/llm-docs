> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avsystemrouting/avsystemroute-9kkj3/routedatachannel

# routeDataChannel

**Interface language:** Objective-C

**Framework:** AVSystemRouting  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

A data channel for communicating with the extension outside of any media session.

## Declaration

```objectivec
@property (nonatomic, readonly) AVSystemRouteDataChannel * routeDataChannel;
```

<a id="discussion"></a>

## Discussion

Use this channel for control messages, state synchronization, and other bidirectional communication needs that are not tied to a specific [AVSystemRouteSession](../avsystemroutesession-5i6j6.md).
