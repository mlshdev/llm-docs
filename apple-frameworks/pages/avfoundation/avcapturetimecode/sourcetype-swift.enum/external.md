> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturetimecode/sourcetype-swift.enum/external](https://developer.apple.com/documentation/avfoundation/avcapturetimecode/sourcetype-swift.enum/external)

# AVCaptureTimecode.SourceType.external (Swift)

**Framework:** AVFoundation  
**Kind:** Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

Synchronizes timecode to an external timecode data stream. Ideal for professional audio and video synchronization with external quarter-frame MIDI or HID timecode hardware.

## Declaration

```swift
case external
```

## See Also

### Source types

- [AVCaptureTimecode.SourceType.frameCount](framecount.md): No internal or external source is adopted. Timecodes are zero-based, sequentially generated frame counts.
- [AVCaptureTimecode.SourceType.realTimeClock](realtimeclock.md): Synchronizes timecode to the system clock for real-time applications. Useful for live events or scenarios requiring alignment with the actual time of day.

# AVCaptureTimecodeSourceTypeExternal (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

Synchronizes timecode to an external timecode data stream. Ideal for professional audio and video synchronization with external quarter-frame MIDI or HID timecode hardware.

## Declaration

```objectivec
AVCaptureTimecodeSourceTypeExternal
```

## See Also

### Source types

- [AVCaptureTimecodeSourceTypeFrameCount](framecount.md): No internal or external source is adopted. Timecodes are zero-based, sequentially generated frame counts.
- [AVCaptureTimecodeSourceTypeRealTimeClock](realtimeclock.md): Synchronizes timecode to the system clock for real-time applications. Useful for live events or scenarios requiring alignment with the actual time of day.
