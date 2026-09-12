> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtrawprocessingsession](https://developer.apple.com/documentation/videotoolbox/vtrawprocessingsession)

# VTRAWProcessingSession (Swift)

**Framework:** Video Toolbox  
**Kind:** Class  
**Availability:** macOS 15.0+

An object that processes frames in camera native formats such as RAW or Bayer.

## Declaration

```swift
class VTRAWProcessingSession
```

<a id="overview"></a>

## Overview

A RAW processing session supports processing of frames that have been output from decoders in camera native formats, such as RAW or Bayer formats.

The session reference is a reference-counted CF object.

## Topics

### Configuring parameters

- [parameters()](vtrawprocessingsession/parameters%28%29.md): Returns an asynchronous sequence that provides updates to the processing Parameter array if the processing extension makes changes to the set of Parameters.
- [updateParameter(values:)](vtrawprocessingsession/updateparameter%28values_%29.md): Sets the value for one or more of the processing parameters.
- [processingParameters](vtrawprocessingsession/processingparameters.md): An array of processing parameters available for this RAW processing session.
- [VTRAWProcessingSession.Parameter](vtrawprocessingsession/parameter.md): A parameter expresses a control or a set of controls that influence frame processing.

### Processing frames

- [process(frame:)](vtrawprocessingsession/process%28frame_%29.md): Processes an input pixel buffer.

### Configuring the Metal device

- [metalDevice](vtrawprocessingsession/metaldevice.md): The preferred device to use for any Metal-based processing performed by the RAW Processing Extension.

### Initializers

- [init(referencing:)](vtrawprocessingsession/init%28referencing_%29.md)

### Type Aliases

- [VTRAWProcessingSession.T](vtrawprocessingsession/t.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# VTRAWProcessingSessionRef (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Type Alias  
**Availability:** macOS 15.0+

An object that processes frames in camera native formats such as RAW or Bayer.

## Declaration

```objectivec
typedef struct OpaqueVTRAWProcessingSession * VTRAWProcessingSessionRef;
```

<a id="overview"></a>

## Overview

A RAW processing session supports processing of frames that have been output from decoders in camera native formats, such as RAW or Bayer formats.

The session reference is a reference-counted CF object.
