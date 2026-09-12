> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmaudioclock-api](https://developer.apple.com/documentation/coremedia/cmaudioclock-api)

# CMAudioClock (Swift)

**Framework:** Core Media  
**Kind:** API Collection

A specialized reference clock that synchronizes with audio sources.

<a id="overview"></a>

## Overview

An audio clock is a specialized [CMClock](cmclock.md) that you use to synchronize with audio sources. For details on clocks and synchronization, see [CMClock](cmclock.md).

## Topics

### Creating Audio Clocks

- [CMAudioClockCreate(allocator:clockOut:)](cmaudioclockcreate%28allocator_clockout_%29.md): Creates a clock that advances at the same rate as audio output.
- [CMAudioDeviceClockCreate(allocator:deviceUID:clockOut:)](cmaudiodeviceclockcreate%28allocator_deviceuid_clockout_%29.md): Creates a clock that tracks playback through a Core Audio device with the specified unique identifier.
- [CMAudioDeviceClockCreateFromAudioDeviceID(allocator:deviceID:clockOut:)](cmaudiodeviceclockcreatefromaudiodeviceid%28allocator_deviceid_clockout_%29.md): Creates a clock that tracks playback through a Core Audio device with the specified identifier.

### Configuring Audio Clocks

- [CMAudioDeviceClockGetAudioDevice(\_:deviceUIDOut:deviceIDOut:trackingDefaultDeviceOut:)](cmaudiodeviceclockgetaudiodevice%28__deviceuidout_deviceidout_trackingdefaultdeviceout_%29.md): Returns the Core Audio device the clock is tracking.
- [CMAudioDeviceClockSetAudioDeviceUID(\_:deviceUID:)](cmaudiodeviceclocksetaudiodeviceuid%28__deviceuid_%29.md): Changes the Core Audio device the clock is tracking by specifying a new device unique identifier.
- [CMAudioDeviceClockSetAudioDeviceID(\_:deviceID:)](cmaudiodeviceclocksetaudiodeviceid%28__deviceid_%29.md): Changes the Core Audio device the clock is tracking by specifying a new device identifier.

## See Also

### Media Synchronization

- [CMClock](cmclock-api.md): A reference clock you use to synchronize applications and devices.
- [CMTimebase](cmtimebase-api.md): A model of a timeline under application control.

# CMAudioClock (Objective-C)

**Framework:** Core Media  
**Kind:** API Collection

A specialized reference clock that synchronizes with audio sources.

<a id="overview"></a>

## Overview

An audio clock is a specialized [CMClockRef](cmclock.md) that you use to synchronize with audio sources. For details on clocks and synchronization, see [CMClockRef](cmclock.md).

## Topics

### Creating Audio Clocks

- [CMAudioClockCreate](cmaudioclockcreate%28allocator_clockout_%29.md): Creates a clock that advances at the same rate as audio output.
- [CMAudioDeviceClockCreate](cmaudiodeviceclockcreate%28allocator_deviceuid_clockout_%29.md): Creates a clock that tracks playback through a Core Audio device with the specified unique identifier.
- [CMAudioDeviceClockCreateFromAudioDeviceID](cmaudiodeviceclockcreatefromaudiodeviceid%28allocator_deviceid_clockout_%29.md): Creates a clock that tracks playback through a Core Audio device with the specified identifier.

### Configuring Audio Clocks

- [CMAudioDeviceClockGetAudioDevice](cmaudiodeviceclockgetaudiodevice%28__deviceuidout_deviceidout_trackingdefaultdeviceout_%29.md): Returns the Core Audio device the clock is tracking.
- [CMAudioDeviceClockSetAudioDeviceUID](cmaudiodeviceclocksetaudiodeviceuid%28__deviceuid_%29.md): Changes the Core Audio device the clock is tracking by specifying a new device unique identifier.
- [CMAudioDeviceClockSetAudioDeviceID](cmaudiodeviceclocksetaudiodeviceid%28__deviceid_%29.md): Changes the Core Audio device the clock is tracking by specifying a new device identifier.

## See Also

### Media Synchronization

- [CMClock](cmclock-api.md): A reference clock you use to synchronize applications and devices.
- [CMTimebase](cmtimebase-api.md): A model of a timeline under application control.
