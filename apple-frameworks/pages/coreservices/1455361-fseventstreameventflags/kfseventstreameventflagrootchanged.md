> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1455361-fseventstreameventflags/kfseventstreameventflagrootchanged](https://developer.apple.com/documentation/coreservices/1455361-fseventstreameventflags/kfseventstreameventflagrootchanged)

# kFSEventStreamEventFlagRootChanged

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.5+

## Declaration

```objectivec
kFSEventStreamEventFlagRootChanged = 0x00000020
```

<a id="discussion"></a>

## Discussion

Denotes a special event sent when there is a change to one of the directories along the path to one of the directories you asked to watch. When this flag is set, the event ID is zero and the path corresponds to one of the paths you asked to watch (specifically, the one that changed). The path may no longer exist because it or one of its parents was deleted or renamed. Events with this flag set will only be sent if you passed the flag kFSEventStreamCreateFlagWatchRoot to FSEventStreamCreate...() when you created the stream.
