> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fcpxlibrary](https://developer.apple.com/documentation/professional_video_applications/fcpxlibrary)

# FCPXLibrary (Swift)

**Framework:** Professional Video Applications  
**Kind:** Class  
**Availability:** ProVideo Workflow Extensions 1.0+

An object that contains details of a Final Cut Pro library.

## Declaration

```swift
class FCPXLibrary
```

<a id="overview"></a>

## Overview

An FCPXLibrary object contains a reference to a library that has the current project open in the Final Cut Pro timeline.

## Topics

### Identifying a Final Cut Pro Library

- [url](fcpxlibrary/url.md): The location of the library in the file system.
- [name](fcpxlibrary/name.md): The Final Cut Pro library name.

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
- [FCPXEvent](fcpxevent.md): An object that contains details of an event in the Final Cut Pro library.
- [FCPXProject](fcpxproject.md): An object that contains details of a project with the sequence open in the Final Cut Pro timeline.
- [FCPXSequence](fcpxsequence.md): An object that contains details of a sequence that’s open in the Final Cut Pro timeline.
- [FCPXSequenceTimecodeFormat](fcpxsequencetimecodeformat.md): The display format of the sequence timecode.

# FCPXLibrary (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Class

An object that contains details of a Final Cut Pro library.

## Declaration

```objectivec
@interface FCPXLibrary : FCPXObject
```

<a id="overview"></a>

## Overview

An FCPXLibrary object contains a reference to a library that has the current project open in the Final Cut Pro timeline.

## Topics

### Identifying a Final Cut Pro Library

- [url](fcpxlibrary/url.md): The location of the library in the file system.
- [name](fcpxlibrary/name.md): The Final Cut Pro library name.

## Relationships

### Inherits From

- [FCPXObject](fcpxobject.md)

## See Also

### FCPX Timeline Proxy Objects

- [FCPXObject](fcpxobject.md): An abstract superclass for Final Cut Pro timeline proxy objects.
- [FCPXObjectType](fcpxobjecttype.md): The Final Cut Pro timeline object types.
- [FCPXEvent](fcpxevent.md): An object that contains details of an event in the Final Cut Pro library.
- [FCPXProject](fcpxproject.md): An object that contains details of a project with the sequence open in the Final Cut Pro timeline.
- [FCPXSequence](fcpxsequence.md): An object that contains details of a sequence that’s open in the Final Cut Pro timeline.
- [FCPXSequenceTimecodeFormat](fcpxsequencetimecodeformat.md): The display format of the sequence timecode.
