> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fcpxsequence](https://developer.apple.com/documentation/professional_video_applications/fcpxsequence)

# FCPXSequence (Swift)

**Framework:** Professional Video Applications  
**Kind:** Class  
**Availability:** ProVideo Workflow Extensions 1.0+

An object that contains details of a sequence that’s open in the Final Cut Pro timeline.

## Declaration

```swift
class FCPXSequence
```

<a id="overview"></a>

## Overview

An `FCPXSequence` object contains details about a sequence open in the Final Cut Pro timeline, such as the start time, duration, frame duration, and timecode format. To get details about the container that an active sequence belongs to,  you can use the [container](fcpxobject/container.md) property of an `FCPXObject`.

## Topics

### Getting Details of an Active Sequence

- [duration](fcpxsequence/duration.md): The duration of a sequence opened in the Final Cut Pro timeline.
- [frameDuration](fcpxsequence/frameduration.md): The amount of time to play a frame in a sequence.
- [startTime](fcpxsequence/starttime.md): The start time of a sequence opened in the Final Cut Pro timeline.
- [timecodeFormat](fcpxsequence/timecodeformat.md): The timecode format of the frames in a sequence.
- [name](fcpxsequence/name.md): The name of the active sequence in the Final Cut Pro timeline.

## Relationships

### Inherits From

- [FCPXObject](fcpxobject.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### FCPX Timeline Proxy Objects

- [FCPXObject](fcpxobject.md): An abstract superclass for Final Cut Pro timeline proxy objects.
- [FCPXObjectType](fcpxobjecttype.md): The Final Cut Pro timeline object types.
- [FCPXLibrary](fcpxlibrary.md): An object that contains details of a Final Cut Pro library.
- [FCPXEvent](fcpxevent.md): An object that contains details of an event in the Final Cut Pro library.
- [FCPXProject](fcpxproject.md): An object that contains details of a project with the sequence open in the Final Cut Pro timeline.
- [FCPXSequenceTimecodeFormat](fcpxsequencetimecodeformat.md): The display format of the sequence timecode.

# FCPXSequence (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Class

An object that contains details of a sequence that’s open in the Final Cut Pro timeline.

## Declaration

```objectivec
@interface FCPXSequence : FCPXObject
```

<a id="overview"></a>

## Overview

An `FCPXSequence` object contains details about a sequence open in the Final Cut Pro timeline, such as the start time, duration, frame duration, and timecode format. To get details about the container that an active sequence belongs to,  you can use the [container](fcpxobject/container.md) property of an `FCPXObject`.

## Topics

### Getting Details of an Active Sequence

- [duration](fcpxsequence/duration.md): The duration of a sequence opened in the Final Cut Pro timeline.
- [frameDuration](fcpxsequence/frameduration.md): The amount of time to play a frame in a sequence.
- [startTime](fcpxsequence/starttime.md): The start time of a sequence opened in the Final Cut Pro timeline.
- [timecodeFormat](fcpxsequence/timecodeformat.md): The timecode format of the frames in a sequence.
- [name](fcpxsequence/name.md): The name of the active sequence in the Final Cut Pro timeline.

## Relationships

### Inherits From

- [FCPXObject](fcpxobject.md)

## See Also

### FCPX Timeline Proxy Objects

- [FCPXObject](fcpxobject.md): An abstract superclass for Final Cut Pro timeline proxy objects.
- [FCPXObjectType](fcpxobjecttype.md): The Final Cut Pro timeline object types.
- [FCPXLibrary](fcpxlibrary.md): An object that contains details of a Final Cut Pro library.
- [FCPXEvent](fcpxevent.md): An object that contains details of an event in the Final Cut Pro library.
- [FCPXProject](fcpxproject.md): An object that contains details of a project with the sequence open in the Final Cut Pro timeline.
- [FCPXSequenceTimecodeFormat](fcpxsequencetimecodeformat.md): The display format of the sequence timecode.
