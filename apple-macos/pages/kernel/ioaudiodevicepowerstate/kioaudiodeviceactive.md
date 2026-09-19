> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/ioaudiodevicepowerstate/kioaudiodeviceactive

# kIOAudioDeviceActive

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Enumeration Case  
**Availability:** macOS 10.1+

## Declaration

```objectivec
kIOAudioDeviceActive = 2
```

<a id="discussion"></a>

## Discussion

State when one ore more IOAudioEngines are in use. This state transition must complete before the system will begin playing audio.
