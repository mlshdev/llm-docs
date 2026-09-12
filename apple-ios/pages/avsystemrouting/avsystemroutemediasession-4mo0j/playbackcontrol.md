> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/avsystemrouting/avsystemroutemediasession-4mo0j/playbackcontrol](https://developer.apple.com/documentation/avsystemrouting/avsystemroutemediasession-4mo0j/playbackcontrol)

# playbackControl

**Interface language:** Objective-C

**Framework:** AVSystemRouting  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

The playback control interface for the remote session.

## Declaration

```objectivec
@property (readonly, nullable) NSObject<AVPlaybackUserInterfaceControllable> * playbackControl;
```

<a id="discussion"></a>

## Discussion

This property is always non-nil when obtained from a successful call to [start()](../avsystemroutesession-gp78/start%28%29.md).

> **Important**

> Always update media playback state information regularly in the playbackControl object to ensure the system displays accurate information about the current media play state across a person’s devices and in system UI.
