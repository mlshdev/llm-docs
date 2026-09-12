> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmaudiodeviceclockcreatefromaudiodeviceid(allocator:deviceid:clockout:)](https://developer.apple.com/documentation/coremedia/cmaudiodeviceclockcreatefromaudiodeviceid(allocator:deviceid:clockout:))

# CMAudioDeviceClockCreateFromAudioDeviceID(allocator:deviceID:clockOut:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** macOS 10.8+

Creates a clock that tracks playback through a Core Audio device with the specified identifier.

## Declaration

```swift
func CMAudioDeviceClockCreateFromAudioDeviceID(allocator: CFAllocator?, deviceID: AudioDeviceID, clockOut: UnsafeMutablePointer<CMClock?>) -> OSStatus
```

## Parameters

- `allocator`: Allocator for the new clock; pass [kCFAllocatorDefault](../corefoundation/kcfallocatordefault.md) or `NULL` to use the default allocator.
- `deviceID`: The [AudioDeviceID](../coreaudio/audiodeviceid.md) of the device for which to create a clock.
- `clockOut`: Upon return, a pointer to the newly created clock.

<a id="Overview"></a>

## Overview

> **Important**

> In Objective-C, you’re responsible for calling [CFRelease](../corefoundation/cfrelease.md) to release the clock returned in `clockOut`.

## See Also

### Creating Audio Clocks

- [CMAudioClockCreate(allocator:clockOut:)](cmaudioclockcreate%28allocator_clockout_%29.md): Creates a clock that advances at the same rate as audio output.
- [CMAudioDeviceClockCreate(allocator:deviceUID:clockOut:)](cmaudiodeviceclockcreate%28allocator_deviceuid_clockout_%29.md): Creates a clock that tracks playback through a Core Audio device with the specified unique identifier.

# CMAudioDeviceClockCreateFromAudioDeviceID (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** macOS 10.8+

Creates a clock that tracks playback through a Core Audio device with the specified identifier.

## Declaration

```objectivec
extern OSStatus CMAudioDeviceClockCreateFromAudioDeviceID(CFAllocatorRef allocator, AudioDeviceID deviceID, CMClockRef*clockOut);
```

## Parameters

- `allocator`: Allocator for the new clock; pass [kCFAllocatorDefault](../corefoundation/kcfallocatordefault.md) or `NULL` to use the default allocator.
- `deviceID`: The [AudioDeviceID](../coreaudio/audiodeviceid.md) of the device for which to create a clock.
- `clockOut`: Upon return, a pointer to the newly created clock.

<a id="Overview"></a>

## Overview

> **Important**

> In Objective-C, you’re responsible for calling [CFRelease](../corefoundation/cfrelease.md) to release the clock returned in `clockOut`.

## See Also

### Creating Audio Clocks

- [CMAudioClockCreate](cmaudioclockcreate%28allocator_clockout_%29.md): Creates a clock that advances at the same rate as audio output.
- [CMAudioDeviceClockCreate](cmaudiodeviceclockcreate%28allocator_deviceuid_clockout_%29.md): Creates a clock that tracks playback through a Core Audio device with the specified unique identifier.
