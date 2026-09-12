> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/kaudioqueuehardwarecodecpolicy_default](https://developer.apple.com/documentation/audiotoolbox/kaudioqueuehardwarecodecpolicy_default)

# kAudioQueueHardwareCodecPolicy_Default (Swift)

**Framework:** Audio Toolbox  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

If the required codec is available in both hardware and software implementations, the audio queue will use a hardware codec if its audio session category permits; it will use a software codec otherwise. If the required codec is available in only one form, that codec implementation is used.

## Declaration

```swift
var kAudioQueueHardwareCodecPolicy_Default: UInt32 { get }
```

## See Also

### Constants

- [kAudioQueueProperty_HardwareCodecPolicy](kaudioqueueproperty_hardwarecodecpolicy.md): The preferred codec implementation type—hardware or software—for an audio queue. Possible values for this constant are the remaining constants described in this section.
- [kAudioQueueHardwareCodecPolicy_UseSoftwareOnly](kaudioqueuehardwarecodecpolicy_usesoftwareonly.md): The audio queue will use a software codec if one is available.
- [kAudioQueueHardwareCodecPolicy_UseHardwareOnly](kaudioqueuehardwarecodecpolicy_usehardwareonly.md): The audio queue will use a hardware codec if one is available and if its use is permitted by the audio session category that you have set.
- [kAudioQueueHardwareCodecPolicy_PreferSoftware](kaudioqueuehardwarecodecpolicy_prefersoftware.md): The audio queue will use a software codec if one is available; if not, it will use a hardware codec if one is available and if its use is permitted by the audio session category that you have set.
- [kAudioQueueHardwareCodecPolicy_PreferHardware](kaudioqueuehardwarecodecpolicy_preferhardware.md): The audio queue will use a hardware codec if one is available and if its use permitted by the audio session category that you have set; otherwise, it will use a software codec if one is available.

# kAudioQueueHardwareCodecPolicy_Default (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

If the required codec is available in both hardware and software implementations, the audio queue will use a hardware codec if its audio session category permits; it will use a software codec otherwise. If the required codec is available in only one form, that codec implementation is used.

## Declaration

```objectivec
kAudioQueueHardwareCodecPolicy_Default
```

## See Also

### Constants

- [kAudioQueueProperty_HardwareCodecPolicy](kaudioqueueproperty_hardwarecodecpolicy.md): The preferred codec implementation type—hardware or software—for an audio queue. Possible values for this constant are the remaining constants described in this section.
- [kAudioQueueHardwareCodecPolicy_UseSoftwareOnly](kaudioqueuehardwarecodecpolicy_usesoftwareonly.md): The audio queue will use a software codec if one is available.
- [kAudioQueueHardwareCodecPolicy_UseHardwareOnly](kaudioqueuehardwarecodecpolicy_usehardwareonly.md): The audio queue will use a hardware codec if one is available and if its use is permitted by the audio session category that you have set.
- [kAudioQueueHardwareCodecPolicy_PreferSoftware](kaudioqueuehardwarecodecpolicy_prefersoftware.md): The audio queue will use a software codec if one is available; if not, it will use a hardware codec if one is available and if its use is permitted by the audio session category that you have set.
- [kAudioQueueHardwareCodecPolicy_PreferHardware](kaudioqueuehardwarecodecpolicy_preferhardware.md): The audio queue will use a hardware codec if one is available and if its use permitted by the audio session category that you have set; otherwise, it will use a software codec if one is available.
