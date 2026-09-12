> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedeviceinput/islockedvideoframedurationsupported](https://developer.apple.com/documentation/avfoundation/avcapturedeviceinput/islockedvideoframedurationsupported)

# isLockedVideoFrameDurationSupported (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

Indicates whether the device input supports locked frame durations.

## Declaration

```swift
var isLockedVideoFrameDurationSupported: Bool { get }
```

<a id="discussion"></a>

## Discussion

See [activeLockedVideoFrameDuration](activelockedvideoframeduration.md) for more information on video frame duration locking.

## See Also

### Locking frame duration

- [activeLockedVideoFrameDuration](activelockedvideoframeduration.md): The receiver’s locked frame duration (the reciprocal of its frame rate). Setting this property guarantees the intra-frame duration delivered by the device input is precisely the frame duration you request.

# lockedVideoFrameDurationSupported (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

Indicates whether the device input supports locked frame durations.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isLockedVideoFrameDurationSupported) BOOL lockedVideoFrameDurationSupported;
```

<a id="discussion"></a>

## Discussion

See [activeLockedVideoFrameDuration](activelockedvideoframeduration.md) for more information on video frame duration locking.

## See Also

### Locking frame duration

- [activeLockedVideoFrameDuration](activelockedvideoframeduration.md): The receiver’s locked frame duration (the reciprocal of its frame rate). Setting this property guarantees the intra-frame duration delivered by the device input is precisely the frame duration you request.
