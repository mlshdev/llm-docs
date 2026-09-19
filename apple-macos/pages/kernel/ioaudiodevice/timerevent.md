> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/ioaudiodevice/timerevent

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
