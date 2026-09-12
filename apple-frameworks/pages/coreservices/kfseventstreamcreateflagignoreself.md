> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/kfseventstreamcreateflagignoreself](https://developer.apple.com/documentation/coreservices/kfseventstreamcreateflagignoreself)

# kFSEventStreamCreateFlagIgnoreSelf

**Framework:** Core Services  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.1+ · macOS 10.6+

## Declaration

```swift
var kFSEventStreamCreateFlagIgnoreSelf: Int { get }
```

<a id="discussion"></a>

## Discussion

Don't send events that were triggered by the current process. This is useful for reducing the volume of events that are sent. It is only useful if your process might modify the file system hierarchy beneath the path(s) being monitored. Note: this has no effect on historical events, i.e., those delivered before the HistoryDone sentinel event.
