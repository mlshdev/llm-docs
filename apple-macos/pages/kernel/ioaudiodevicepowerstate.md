> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioaudiodevicepowerstate](https://developer.apple.com/documentation/kernel/ioaudiodevicepowerstate)

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
