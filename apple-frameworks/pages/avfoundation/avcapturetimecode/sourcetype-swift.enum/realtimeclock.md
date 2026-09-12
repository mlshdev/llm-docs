> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturetimecode/sourcetype-swift.enum/realtimeclock](https://developer.apple.com/documentation/avfoundation/avcapturetimecode/sourcetype-swift.enum/realtimeclock)

# AVCaptureTimecode.SourceType.realTimeClock (Swift)

**Framework:** AVFoundation  
**Kind:** Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

Synchronizes timecode to the system clock for real-time applications. Useful for live events or scenarios requiring alignment with the actual time of day.

## Declaration

```swift
case realTimeClock
```

## See Also

### Source types

- [AVCaptureTimecode.SourceType.external](external.md): Synchronizes timecode to an external timecode data stream. Ideal for professional audio and video synchronization with external quarter-frame MIDI or HID timecode hardware.
- [AVCaptureTimecode.SourceType.frameCount](framecount.md): No internal or external source is adopted. Timecodes are zero-based, sequentially generated frame counts.

# AVCaptureTimecodeSourceTypeRealTimeClock (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

Synchronizes timecode to the system clock for real-time applications. Useful for live events or scenarios requiring alignment with the actual time of day.

## Declaration

```objectivec
AVCaptureTimecodeSourceTypeRealTimeClock
```

## See Also

### Source types

- [AVCaptureTimecodeSourceTypeExternal](external.md): Synchronizes timecode to an external timecode data stream. Ideal for professional audio and video synchronization with external quarter-frame MIDI or HID timecode hardware.
- [AVCaptureTimecodeSourceTypeFrameCount](framecount.md): No internal or external source is adopted. Timecodes are zero-based, sequentially generated frame counts.
