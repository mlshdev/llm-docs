> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmaudioclockcreate(allocator:clockout:)](https://developer.apple.com/documentation/coremedia/cmaudioclockcreate(allocator:clockout:))

# CMAudioClockCreate(allocator:clockOut:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a clock that advances at the same rate as audio output.

## Declaration

```swift
func CMAudioClockCreate(allocator: CFAllocator?, clockOut: UnsafeMutablePointer<CMClock?>) -> OSStatus
```

## Parameters

- `allocator`: Allocator for the new clock; pass [kCFAllocatorDefault](../corefoundation/kcfallocatordefault.md) or `nil` to use the default allocator.
- `clockOut`: Upon return, a pointer to the newly created clock.

<a id="Discussion"></a>

## Discussion

This clock doesn’t drift from audio output, but may drift from [CMClockGetHostTimeClock()](cmclockgethosttimeclock%28%29.md). When audio output is completely stopped, the clock continues to advance, tracking `CMClockGetHostTimeClock` until audio output starts up again.

> **Important**

>  In Objective-C, you’re responsible for calling [CFRelease](../corefoundation/cfrelease.md) to release the returned `clockOut`.

You can use this clock as the [sourceClock](../avfoundation/avplayer/sourceclock.md) of an [AVPlayer](../avfoundation/avplayer.md) instance when synchronizing video-only playback with audio played through other APIs or objects.

> **Note**

>  For Mac apps built with Mac Catalyst, use [CMAudioDeviceClockCreate(allocator:deviceUID:clockOut:)](cmaudiodeviceclockcreate%28allocator_deviceuid_clockout_%29.md) or [CMAudioDeviceClockCreateFromAudioDeviceID(allocator:deviceID:clockOut:)](cmaudiodeviceclockcreatefromaudiodeviceid%28allocator_deviceid_clockout_%29.md) to target a specific, nondefault audio device.

## See Also

### Creating Audio Clocks

- [CMAudioDeviceClockCreate(allocator:deviceUID:clockOut:)](cmaudiodeviceclockcreate%28allocator_deviceuid_clockout_%29.md): Creates a clock that tracks playback through a Core Audio device with the specified unique identifier.
- [CMAudioDeviceClockCreateFromAudioDeviceID(allocator:deviceID:clockOut:)](cmaudiodeviceclockcreatefromaudiodeviceid%28allocator_deviceid_clockout_%29.md): Creates a clock that tracks playback through a Core Audio device with the specified identifier.

# CMAudioClockCreate (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a clock that advances at the same rate as audio output.

## Declaration

```objectivec
extern OSStatus CMAudioClockCreate(CFAllocatorRef allocator, CMClockRef*clockOut);
```

## Parameters

- `allocator`: Allocator for the new clock; pass [kCFAllocatorDefault](../corefoundation/kcfallocatordefault.md) or `nil` to use the default allocator.
- `clockOut`: Upon return, a pointer to the newly created clock.

<a id="Discussion"></a>

## Discussion

This clock doesn’t drift from audio output, but may drift from [CMClockGetHostTimeClock](cmclockgethosttimeclock%28%29.md). When audio output is completely stopped, the clock continues to advance, tracking `CMClockGetHostTimeClock` until audio output starts up again.

> **Important**

>  In Objective-C, you’re responsible for calling [CFRelease](../corefoundation/cfrelease.md) to release the returned `clockOut`.

You can use this clock as the [sourceClock](../avfoundation/avplayer/sourceclock.md) of an [AVPlayer](../avfoundation/avplayer.md) instance when synchronizing video-only playback with audio played through other APIs or objects.

> **Note**

>  For Mac apps built with Mac Catalyst, use [CMAudioDeviceClockCreate](cmaudiodeviceclockcreate%28allocator_deviceuid_clockout_%29.md) or [CMAudioDeviceClockCreateFromAudioDeviceID](cmaudiodeviceclockcreatefromaudiodeviceid%28allocator_deviceid_clockout_%29.md) to target a specific, nondefault audio device.

## See Also

### Creating Audio Clocks

- [CMAudioDeviceClockCreate](cmaudiodeviceclockcreate%28allocator_deviceuid_clockout_%29.md): Creates a clock that tracks playback through a Core Audio device with the specified unique identifier.
- [CMAudioDeviceClockCreateFromAudioDeviceID](cmaudiodeviceclockcreatefromaudiodeviceid%28allocator_deviceid_clockout_%29.md): Creates a clock that tracks playback through a Core Audio device with the specified identifier.
