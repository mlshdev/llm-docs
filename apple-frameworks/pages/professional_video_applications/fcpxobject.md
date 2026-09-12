> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fcpxobject](https://developer.apple.com/documentation/professional_video_applications/fcpxobject)

# FCPXObject (Swift)

**Framework:** Professional Video Applications  
**Kind:** Class  
**Availability:** ProVideo Workflow Extensions 1.0+

An abstract superclass for Final Cut Pro timeline proxy objects.

## Declaration

```swift
class FCPXObject
```

<a id="overview"></a>

## Overview

The ProExtensionHost framework provides a few object classes that act as proxies to certain aspects of the Final Cut Pro timeline. These proxy objects include a currently active sequence in the Final Cut Pro timeline as well as its containers, such as project, event, and library.

A `FCPXObject` provides common properties of timeline proxy objects, such as the container, name, and object type. Subclasses of `FCPXObject` hold additional information specific to the timeline proxy object they represent. A workflow extension can use these properties to identify the details of the current timeline sequence opened in Final Cut Pro.

## Topics

### Getting the Final Cut Pro Object Details

- [container](fcpxobject/container.md): The container of a Final Cut Pro timeline object.
- [objectType](fcpxobject/objecttype.md): The type of a Final Cut Pro timeline proxy object, such as a sequence or project.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [FCPXEvent](fcpxevent.md)
- [FCPXLibrary](fcpxlibrary.md)
- [FCPXProject](fcpxproject.md)
- [FCPXSequence](fcpxsequence.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### FCPX Timeline Proxy Objects

- [FCPXObjectType](fcpxobjecttype.md): The Final Cut Pro timeline object types.
- [FCPXLibrary](fcpxlibrary.md): An object that contains details of a Final Cut Pro library.
- [FCPXEvent](fcpxevent.md): An object that contains details of an event in the Final Cut Pro library.
- [FCPXProject](fcpxproject.md): An object that contains details of a project with the sequence open in the Final Cut Pro timeline.
- [FCPXSequence](fcpxsequence.md): An object that contains details of a sequence that’s open in the Final Cut Pro timeline.
- [FCPXSequenceTimecodeFormat](fcpxsequencetimecodeformat.md): The display format of the sequence timecode.

# FCPXObject (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Class

An abstract superclass for Final Cut Pro timeline proxy objects.

## Declaration

```objectivec
@interface FCPXObject : NSObject
```

<a id="overview"></a>

## Overview

The ProExtensionHost framework provides a few object classes that act as proxies to certain aspects of the Final Cut Pro timeline. These proxy objects include a currently active sequence in the Final Cut Pro timeline as well as its containers, such as project, event, and library.

A `FCPXObject` provides common properties of timeline proxy objects, such as the container, name, and object type. Subclasses of `FCPXObject` hold additional information specific to the timeline proxy object they represent. A workflow extension can use these properties to identify the details of the current timeline sequence opened in Final Cut Pro.

## Topics

### Getting the Final Cut Pro Object Details

- [container](fcpxobject/container.md): The container of a Final Cut Pro timeline object.
- [objectType](fcpxobject/objecttype.md): The type of a Final Cut Pro timeline proxy object, such as a sequence or project.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [FCPXEvent](fcpxevent.md)
- [FCPXLibrary](fcpxlibrary.md)
- [FCPXProject](fcpxproject.md)
- [FCPXSequence](fcpxsequence.md)

## See Also

### FCPX Timeline Proxy Objects

- [FCPXObjectType](fcpxobjecttype.md): The Final Cut Pro timeline object types.
- [FCPXLibrary](fcpxlibrary.md): An object that contains details of a Final Cut Pro library.
- [FCPXEvent](fcpxevent.md): An object that contains details of an event in the Final Cut Pro library.
- [FCPXProject](fcpxproject.md): An object that contains details of a project with the sequence open in the Final Cut Pro timeline.
- [FCPXSequence](fcpxsequence.md): An object that contains details of a sequence that’s open in the Final Cut Pro timeline.
- [FCPXSequenceTimecodeFormat](fcpxsequencetimecodeformat.md): The display format of the sequence timecode.
