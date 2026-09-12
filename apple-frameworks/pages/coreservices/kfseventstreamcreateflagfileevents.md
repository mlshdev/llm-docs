> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/kfseventstreamcreateflagfileevents](https://developer.apple.com/documentation/coreservices/kfseventstreamcreateflagfileevents)

# kFSEventStreamCreateFlagFileEvents

**Framework:** Core Services  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.1+ · macOS 10.7+

## Declaration

```swift
var kFSEventStreamCreateFlagFileEvents: Int { get }
```

<a id="discussion"></a>

## Discussion

Request file-level notifications. Your stream will receive events about individual files in the hierarchy you're watching instead of only receiving directory level notifications. Use this flag with care as it will generate significantly more events than without it.
