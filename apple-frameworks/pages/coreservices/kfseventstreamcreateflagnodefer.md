> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/kfseventstreamcreateflagnodefer

# kFSEventStreamCreateFlagNoDefer

**Framework:** Core Services  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.5+

## Declaration

```swift
var kFSEventStreamCreateFlagNoDefer: Int { get }
```

<a id="discussion"></a>

## Discussion

Affects the meaning of the latency parameter. If you specify this flag and more than latency seconds have elapsed since the last event, your app will receive the event immediately. The delivery of the event resets the latency timer and any further events will be delivered after latency seconds have elapsed. This flag is useful for apps that are interactive and want to react immediately to changes but avoid getting swamped by notifications when changes are occurringin rapid succession. If you do not specify this flag, then when an event occurs after a period of no events, the latency timer is started. Any events that occur during the next latency seconds will be delivered as one group (including that first event). The delivery of the group of events resets the latency timer and any further events will be delivered after latency seconds. This is the default behavior and is more appropriate for background, daemon or batch processing apps.
