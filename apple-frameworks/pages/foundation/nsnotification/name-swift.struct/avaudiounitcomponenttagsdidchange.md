> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsnotification/name-swift.struct/avaudiounitcomponenttagsdidchange](https://developer.apple.com/documentation/foundation/nsnotification/name-swift.struct/avaudiounitcomponenttagsdidchange)

# AVAudioUnitComponentTagsDidChange

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

A notification that indicates when component tags change.

## Declaration

```swift
static let AVAudioUnitComponentTagsDidChange: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

The notification object contains the `AVAudioUnitComponent` object with the tags.

## See Also

### AVFAudio

- [AVAudioEngineConfigurationChange](avaudioengineconfigurationchange.md): A notification the framework posts when the audio engine configuration changes.
- [interruptionNotification](../../../avfaudio/avaudiosession/interruptionnotification.md): Deprecated. A notification the system posts when an audio interruption occurs.
- [mediaServicesWereLostNotification](../../../avfaudio/avaudiosession/mediaserviceswerelostnotification.md): A notification the system posts when it terminates the media server.
- [mediaServicesWereResetNotification](../../../avfaudio/avaudiosession/mediaserviceswereresetnotification.md): A notification the system posts when the media server restarts.
- [routeChangeNotification](../../../avfaudio/avaudiosession/routechangenotification.md): A notification the system posts when its audio route changes.
- [silenceSecondaryAudioHintNotification](../../../avfaudio/avaudiosession/silencesecondaryaudiohintnotification.md): A notification the system posts when the primary audio from other apps starts and stops.
