> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/kfseventstreameventflageventidswrapped](https://developer.apple.com/documentation/coreservices/kfseventstreameventflageventidswrapped)

# kFSEventStreamEventFlagEventIdsWrapped

**Framework:** Core Services  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.5+

## Declaration

```swift
var kFSEventStreamEventFlagEventIdsWrapped: Int { get }
```

<a id="discussion"></a>

## Discussion

If kFSEventStreamEventFlagEventIdsWrapped is set, it means the 64-bit event ID counter wrapped around. As a result, previously-issued event ID's are no longer valid arguments for the sinceWhen parameter of the FSEventStreamCreate...() functions.
