> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/1618727-audio-queue-hardware-codec-polic](https://developer.apple.com/documentation/audiotoolbox/1618727-audio-queue-hardware-codec-polic)

# Audio Queue Hardware Codec Policy

**Interface languages:** Swift, Objective-C

**Framework:** Audio Toolbox  
**Kind:** API Collection

## Topics

### Constants

- [kAudioQueueHardwareCodecPolicy_Default](kaudioqueuehardwarecodecpolicy_default.md): If the required codec is available in both hardware and software implementations, the audio queue will use a hardware codec if its audio session category permits; it will use a software codec otherwise. If the required codec is available in only one form, that codec implementation is used.
- [kAudioQueueHardwareCodecPolicy_PreferHardware](kaudioqueuehardwarecodecpolicy_preferhardware.md): The audio queue will use a hardware codec if one is available and if its use permitted by the audio session category that you have set; otherwise, it will use a software codec if one is available.
- [kAudioQueueHardwareCodecPolicy_PreferSoftware](kaudioqueuehardwarecodecpolicy_prefersoftware.md): The audio queue will use a software codec if one is available; if not, it will use a hardware codec if one is available and if its use is permitted by the audio session category that you have set.
- [kAudioQueueHardwareCodecPolicy_UseHardwareOnly](kaudioqueuehardwarecodecpolicy_usehardwareonly.md): The audio queue will use a hardware codec if one is available and if its use is permitted by the audio session category that you have set.
- [kAudioQueueHardwareCodecPolicy_UseSoftwareOnly](kaudioqueuehardwarecodecpolicy_usesoftwareonly.md): The audio queue will use a software codec if one is available.

## See Also

### Enumerations

- [AudioQueueProcessingTapFlags](audioqueueprocessingtapflags.md)
- [Anonymous](1552627-anonymous.md)
- [Audio Queue Time Pitch Algorithms](1552630-audio-queue-time-pitch-algorithm.md)
- [Audio Queue Property IDs](1552629-audio-queue-property-ids.md)
- [Audio Queue Property IDs](1618733-audio-queue-property-ids.md)
