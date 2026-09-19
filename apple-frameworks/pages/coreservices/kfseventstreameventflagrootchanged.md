> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/kfseventstreameventflagrootchanged

# kFSEventStreamEventFlagRootChanged

**Framework:** Core Services  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.5+

## Declaration

```swift
var kFSEventStreamEventFlagRootChanged: Int { get }
```

<a id="discussion"></a>

## Discussion

Denotes a special event sent when there is a change to one of the directories along the path to one of the directories you asked to watch. When this flag is set, the event ID is zero and the path corresponds to one of the paths you asked to watch (specifically, the one that changed). The path may no longer exist because it or one of its parents was deleted or renamed. Events with this flag set will only be sent if you passed the flag kFSEventStreamCreateFlagWatchRoot to FSEventStreamCreate...() when you created the stream.
