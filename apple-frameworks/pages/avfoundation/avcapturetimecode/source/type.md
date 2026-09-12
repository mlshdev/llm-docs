> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturetimecode/source/type](https://developer.apple.com/documentation/avfoundation/avcapturetimecode/source/type)

# type (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

The type of timecode source.

## Declaration

```swift
var type: AVCaptureTimecode.SourceType { get }
```

<a id="discussion"></a>

## Discussion

Indicates the type of timecode source, represented as a value from the `AVCaptureTimecodeSynchronizationSourceType` enum. This helps you identify the source for specific synchronization use cases, such as frame counter, real-time clock, MIDI, or HID.

## See Also

### Inspecting the source

- [displayName](displayname.md): The name of the timecode source.
- [uuid](uuid.md): A unique identifier for the timecode source.

# type (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

The type of timecode source.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) AVCaptureTimecodeSourceType type;
```

<a id="discussion"></a>

## Discussion

Indicates the type of timecode source, represented as a value from the `AVCaptureTimecodeSynchronizationSourceType` enum. This helps you identify the source for specific synchronization use cases, such as frame counter, real-time clock, MIDI, or HID.

## See Also

### Inspecting the source

- [displayName](displayname.md): The name of the timecode source.
- [uuid](uuid.md): A unique identifier for the timecode source.
