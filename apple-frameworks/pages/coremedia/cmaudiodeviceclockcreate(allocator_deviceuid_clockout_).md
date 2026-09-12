> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmaudiodeviceclockcreate(allocator:deviceuid:clockout:)](https://developer.apple.com/documentation/coremedia/cmaudiodeviceclockcreate(allocator:deviceuid:clockout:))

# CMAudioDeviceClockCreate(allocator:deviceUID:clockOut:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** macOS 10.8+

Creates a clock that tracks playback through a Core Audio device with the specified unique identifier.

## Declaration

```swift
func CMAudioDeviceClockCreate(allocator: CFAllocator?, deviceUID: CFString?, clockOut: UnsafeMutablePointer<CMClock?>) -> OSStatus
```

## Parameters

- `allocator`: Allocator for the new clock; pass [kCFAllocatorDefault](../corefoundation/kcfallocatordefault.md) or `NULL` to use the default allocator.
- `deviceUID`: The unique ID of the device for which to create a clock. Pass `NULL` to create a clock that tracks the default device.
- `clockOut`: Upon return, a pointer to the newly created clock.

<a id="Discussion"></a>

## Discussion

When the associated device is completely stopped, the clock continues to advance, tracking [CMClockGetHostTimeClock()](cmclockgethosttimeclock%28%29.md) until the audio device starts up again.

> **Important**

>  In Objective-C, you’re responsible for calling [CFRelease](../corefoundation/cfrelease.md) to release the returned `clockOut`.

## See Also

### Creating Audio Clocks

- [CMAudioClockCreate(allocator:clockOut:)](cmaudioclockcreate%28allocator_clockout_%29.md): Creates a clock that advances at the same rate as audio output.
- [CMAudioDeviceClockCreateFromAudioDeviceID(allocator:deviceID:clockOut:)](cmaudiodeviceclockcreatefromaudiodeviceid%28allocator_deviceid_clockout_%29.md): Creates a clock that tracks playback through a Core Audio device with the specified identifier.

# CMAudioDeviceClockCreate (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** macOS 10.8+

Creates a clock that tracks playback through a Core Audio device with the specified unique identifier.

## Declaration

```objectivec
extern OSStatus CMAudioDeviceClockCreate(CFAllocatorRef allocator, CFStringRef deviceUID, CMClockRef*clockOut);
```

## Parameters

- `allocator`: Allocator for the new clock; pass [kCFAllocatorDefault](../corefoundation/kcfallocatordefault.md) or `NULL` to use the default allocator.
- `deviceUID`: The unique ID of the device for which to create a clock. Pass `NULL` to create a clock that tracks the default device.
- `clockOut`: Upon return, a pointer to the newly created clock.

<a id="Discussion"></a>

## Discussion

When the associated device is completely stopped, the clock continues to advance, tracking [CMClockGetHostTimeClock](cmclockgethosttimeclock%28%29.md) until the audio device starts up again.

> **Important**

>  In Objective-C, you’re responsible for calling [CFRelease](../corefoundation/cfrelease.md) to release the returned `clockOut`.

## See Also

### Creating Audio Clocks

- [CMAudioClockCreate](cmaudioclockcreate%28allocator_clockout_%29.md): Creates a clock that advances at the same rate as audio output.
- [CMAudioDeviceClockCreateFromAudioDeviceID](cmaudiodeviceclockcreatefromaudiodeviceid%28allocator_deviceid_clockout_%29.md): Creates a clock that tracks playback through a Core Audio device with the specified identifier.
