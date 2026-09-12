> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioaudiodevice/timerevent](https://developer.apple.com/documentation/kernel/ioaudiodevice/timerevent)

# TimerEvent

**Interface language:** Objective-C

**Framework:** Kernel

Generic timer event callback for IOAudioDevice timer targets

## Declaration

```objectivec
typedef void ( *TimerEvent)(
   OSObject *target,
   IOAudioDevice *audioDevice);
```

## Parameters

- `target`: The target of the timer event - passed in when the timer event was registered
- `audioDevice`: The IOAudioDevice sending the event

<a id="overview"></a>

## Overview

TimerEvent callback function takes two arguments; the target of the timer event and the IOAudioDevice sending the event.
