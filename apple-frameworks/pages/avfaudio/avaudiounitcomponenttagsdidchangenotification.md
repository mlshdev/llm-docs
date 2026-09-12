> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiounitcomponenttagsdidchangenotification](https://developer.apple.com/documentation/avfaudio/avaudiounitcomponenttagsdidchangenotification)

# AVAudioUnitComponentTagsDidChangeNotification

**Interface language:** Objective-C

**Framework:** AVFAudio  
**Kind:** Global Variable  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

A notification that indicates when component tags change.

## Declaration

```objectivec
extern NSString * const AVAudioUnitComponentTagsDidChangeNotification;
```

<a id="Discussion"></a>

## Discussion

The notification object contains the `AVAudioUnitComponent` object with the tags.
