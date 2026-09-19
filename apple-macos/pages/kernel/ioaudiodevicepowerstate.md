> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/ioaudiodevicepowerstate

# IOAudioDevicePowerState

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Enumeration  
**Availability:** macOS 10.1+

Identifies the power state of the audio device

## Declaration

```objectivec
typedef enum _IOAudioDevicePowerState : unsigned int {
    ...
} IOAudioDevicePowerState;
```

<a id="overview"></a>

## Overview

A newly created IOAudioDevices defaults to the idle state.

## Topics

### Constants

- [kIOAudioDeviceSleep](ioaudiodevicepowerstate/kioaudiodevicesleep.md)
- [kIOAudioDeviceIdle](ioaudiodevicepowerstate/kioaudiodeviceidle.md)
- [kIOAudioDeviceActive](ioaudiodevicepowerstate/kioaudiodeviceactive.md)
