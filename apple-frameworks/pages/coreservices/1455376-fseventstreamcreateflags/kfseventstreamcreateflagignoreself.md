> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1455376-fseventstreamcreateflags/kfseventstreamcreateflagignoreself](https://developer.apple.com/documentation/coreservices/1455376-fseventstreamcreateflags/kfseventstreamcreateflagignoreself)

# kFSEventStreamCreateFlagIgnoreSelf

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.1+ · macOS 10.6+

## Declaration

```objectivec
kFSEventStreamCreateFlagIgnoreSelf = 0x00000008
```

<a id="discussion"></a>

## Discussion

Don't send events that were triggered by the current process. This is useful for reducing the volume of events that are sent. It is only useful if your process might modify the file system hierarchy beneath the path(s) being monitored. Note: this has no effect on historical events, i.e., those delivered before the HistoryDone sentinel event.
