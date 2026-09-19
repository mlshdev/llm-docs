> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avsystemrouting/avsystemroutemediasession-4mo0j/datachannel

# dataChannel

**Interface language:** Objective-C

**Framework:** AVSystemRouting  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

The data channel for sending and receiving data with the remote application.

## Declaration

```objectivec
@property (readonly, nullable) AVSystemRouteDataChannel * dataChannel;
```

<a id="discussion"></a>

## Discussion

This property is always non-nil when obtained from a successful call to [start()](../avsystemroutesession-gp78/start%28%29.md).
