> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fcpxsequencetimecodeformat](https://developer.apple.com/documentation/professional_video_applications/fcpxsequencetimecodeformat)

# FCPXSequenceTimecodeFormat (Swift)

**Framework:** Professional Video Applications  
**Kind:** Enumeration  
**Availability:** ProVideo Workflow Extensions 1.0+

The display format of the sequence timecode.

## Declaration

```swift
enum FCPXSequenceTimecodeFormat
```

## Topics

### Sequence Timecode Formats

- [FCPXSequenceTimecodeFormat.dropFrame](fcpxsequencetimecodeformat/dropframe.md): A value that indicates drop-frame timecode format.
- [FCPXSequenceTimecodeFormat.nonDropFrame](fcpxsequencetimecodeformat/nondropframe.md): A value that indicates non-drop-frame timecode format.
- [FCPXSequenceTimecodeFormat.unspecified](fcpxsequencetimecodeformat/unspecified.md): An unspecified timecode format.

### Initializers

- [init(rawValue:)](fcpxsequencetimecodeformat/init%28rawvalue_%29.md)

### Default Implementations

- [Equatable Implementations](fcpxsequencetimecodeformat/equatable-implementations.md)
- [RawRepresentable Implementations](fcpxsequencetimecodeformat/rawrepresentable-implementations.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### FCPX Timeline Proxy Objects

- [FCPXObject](fcpxobject.md): An abstract superclass for Final Cut Pro timeline proxy objects.
- [FCPXObjectType](fcpxobjecttype.md): The Final Cut Pro timeline object types.
- [FCPXLibrary](fcpxlibrary.md): An object that contains details of a Final Cut Pro library.
- [FCPXEvent](fcpxevent.md): An object that contains details of an event in the Final Cut Pro library.
- [FCPXProject](fcpxproject.md): An object that contains details of a project with the sequence open in the Final Cut Pro timeline.
- [FCPXSequence](fcpxsequence.md): An object that contains details of a sequence that’s open in the Final Cut Pro timeline.

# FCPXSequenceTimecodeFormat (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Enumeration

The display format of the sequence timecode.

## Declaration

```objectivec
enum FCPXSequenceTimecodeFormat: NSInteger;
```

## Topics

### Sequence Timecode Formats

- [kFCPXSequenceTimecodeFormat_DropFrame](fcpxsequencetimecodeformat/dropframe.md): A value that indicates drop-frame timecode format.
- [kFCPXSequenceTimecodeFormat_NonDropFrame](fcpxsequencetimecodeformat/nondropframe.md): A value that indicates non-drop-frame timecode format.
- [kFCPXSequenceTimecodeFormat_Unspecified](fcpxsequencetimecodeformat/unspecified.md): An unspecified timecode format.

## See Also

### FCPX Timeline Proxy Objects

- [FCPXObject](fcpxobject.md): An abstract superclass for Final Cut Pro timeline proxy objects.
- [FCPXObjectType](fcpxobjecttype.md): The Final Cut Pro timeline object types.
- [FCPXLibrary](fcpxlibrary.md): An object that contains details of a Final Cut Pro library.
- [FCPXEvent](fcpxevent.md): An object that contains details of an event in the Final Cut Pro library.
- [FCPXProject](fcpxproject.md): An object that contains details of a project with the sequence open in the Final Cut Pro timeline.
- [FCPXSequence](fcpxsequence.md): An object that contains details of a sequence that’s open in the Final Cut Pro timeline.
