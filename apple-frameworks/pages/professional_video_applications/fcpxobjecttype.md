> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fcpxobjecttype](https://developer.apple.com/documentation/professional_video_applications/fcpxobjecttype)

# FCPXObjectType (Swift)

**Framework:** Professional Video Applications  
**Kind:** Enumeration  
**Availability:** ProVideo Workflow Extensions 1.0+

The Final Cut Pro timeline object types.

## Declaration

```swift
enum FCPXObjectType
```

## Topics

### Final Cut Pro Timeline Object Types

- [FCPXObjectType.event](fcpxobjecttype/event.md): A Final Cut Pro timeline event.
- [FCPXObjectType.library](fcpxobjecttype/library.md): A Final Cut Pro timeline library.
- [FCPXObjectType.project](fcpxobjecttype/project.md): A Final Cut Pro timeline project.
- [FCPXObjectType.sequence](fcpxobjecttype/sequence.md): A Final Cut Pro timeline sequence.

### Initializers

- [init(rawValue:)](fcpxobjecttype/init%28rawvalue_%29.md)

### Default Implementations

- [Equatable Implementations](fcpxobjecttype/equatable-implementations.md)
- [RawRepresentable Implementations](fcpxobjecttype/rawrepresentable-implementations.md)

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
- [FCPXLibrary](fcpxlibrary.md): An object that contains details of a Final Cut Pro library.
- [FCPXEvent](fcpxevent.md): An object that contains details of an event in the Final Cut Pro library.
- [FCPXProject](fcpxproject.md): An object that contains details of a project with the sequence open in the Final Cut Pro timeline.
- [FCPXSequence](fcpxsequence.md): An object that contains details of a sequence that’s open in the Final Cut Pro timeline.
- [FCPXSequenceTimecodeFormat](fcpxsequencetimecodeformat.md): The display format of the sequence timecode.

# FCPXObjectType (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Enumeration

The Final Cut Pro timeline object types.

## Declaration

```objectivec
enum FCPXObjectType: NSInteger;
```

## Topics

### Final Cut Pro Timeline Object Types

- [kFCPXObjectType_Event](fcpxobjecttype/event.md): A Final Cut Pro timeline event.
- [kFCPXObjectType_Library](fcpxobjecttype/library.md): A Final Cut Pro timeline library.
- [kFCPXObjectType_Project](fcpxobjecttype/project.md): A Final Cut Pro timeline project.
- [kFCPXObjectType_Sequence](fcpxobjecttype/sequence.md): A Final Cut Pro timeline sequence.

## See Also

### FCPX Timeline Proxy Objects

- [FCPXObject](fcpxobject.md): An abstract superclass for Final Cut Pro timeline proxy objects.
- [FCPXLibrary](fcpxlibrary.md): An object that contains details of a Final Cut Pro library.
- [FCPXEvent](fcpxevent.md): An object that contains details of an event in the Final Cut Pro library.
- [FCPXProject](fcpxproject.md): An object that contains details of a project with the sequence open in the Final Cut Pro timeline.
- [FCPXSequence](fcpxsequence.md): An object that contains details of a sequence that’s open in the Final Cut Pro timeline.
- [FCPXSequenceTimecodeFormat](fcpxsequencetimecodeformat.md): The display format of the sequence timecode.
