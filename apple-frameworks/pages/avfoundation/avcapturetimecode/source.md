> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturetimecode/source](https://developer.apple.com/documentation/avfoundation/avcapturetimecode/source)

# AVCaptureTimecode.Source (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

Describes a timecode source that a timecode generator can synchronize to.

## Declaration

```swift
class Source
```

<a id="overview"></a>

## Overview

`AVCaptureTimecodeSource` provides information about a specific timecode source available for synchronization in `AVCaptureTimecodeGenerator`. It includes metadata such as the source’s name, type, and unique identifier.

## Topics

### Inspecting the source

- [displayName](source/displayname.md): The name of the timecode source.
- [type](source/type.md): The type of timecode source.
- [uuid](source/uuid.md): A unique identifier for the timecode source.

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../../foundation/nscopying.md)
- [NSObjectProtocol](../../objectivec/nsobjectprotocol.md)

## See Also

### Timecode generation

- [AVCaptureTimecodeGenerator](../avcapturetimecodegenerator.md): Generates and synchronizes timecode data from various sources for precise video and audio synchronization.
- [AVCaptureTimecodeGeneratorDelegate](../avcapturetimecodegeneratordelegate.md): A protocol for receiving real-time timecode updates and error notifications from a timecode generator.
- [AVCaptureTimecodeGenerator.SynchronizationStatus](../avcapturetimecodegenerator/synchronizationstatus.md): Constants defining the synchronization status of a timecode generator .
- [AVCaptureTimecode.SourceType](sourcetype-swift.enum.md): Defines possible sources for generating timecode in using a timecode generator.
- [AVCaptureTimecode](../avcapturetimecode.md): This structure represents a timecode, adhering to SMPTE standards, which define precise time information and associated timestamps for video or audio synchronization.
- [advanced(\_:by:)](advanced%28__by_%29.md): Generates a new timecode by adding a specified number of frames to the given timecode, handling overflow for seconds, minutes, and hours.
- [createMetadataSampleBuffer(from:associatedWithPresentationTimeStamp:)](createmetadatasamplebuffer%28from_associatedwithpresentationtimestamp_%29.md): Creates a sample buffer containing Timecode Media Description metadata for integration with a video track.
- [createMetadataSampleBuffer(from:forDuration:)](createmetadatasamplebuffer%28from_forduration_%29.md): Creates a sample buffer containing Timecode Media Description metadata for a specified duration.

# AVCaptureTimecodeSource (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

Describes a timecode source that a timecode generator can synchronize to.

## Declaration

```objectivec
@interface AVCaptureTimecodeSource : NSObject
```

<a id="overview"></a>

## Overview

`AVCaptureTimecodeSource` provides information about a specific timecode source available for synchronization in `AVCaptureTimecodeGenerator`. It includes metadata such as the source’s name, type, and unique identifier.

## Topics

### Inspecting the source

- [displayName](source/displayname.md): The name of the timecode source.
- [type](source/type.md): The type of timecode source.
- [uuid](source/uuid.md): A unique identifier for the timecode source.

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../../foundation/nscopying.md)

## See Also

### Timecode generation

- [AVCaptureTimecodeGenerator](../avcapturetimecodegenerator.md): Generates and synchronizes timecode data from various sources for precise video and audio synchronization.
- [AVCaptureTimecodeGeneratorDelegate](../avcapturetimecodegeneratordelegate.md): A protocol for receiving real-time timecode updates and error notifications from a timecode generator.
- [AVCaptureTimecodeGeneratorSynchronizationStatus](../avcapturetimecodegenerator/synchronizationstatus.md): Constants defining the synchronization status of a timecode generator .
- [AVCaptureTimecodeSourceType](sourcetype-swift.enum.md): Defines possible sources for generating timecode in using a timecode generator.
- [AVCaptureTimecode](../avcapturetimecode.md): This structure represents a timecode, adhering to SMPTE standards, which define precise time information and associated timestamps for video or audio synchronization.
- [AVCaptureTimecodeAdvancedByFrames](advanced%28__by_%29.md): Generates a new timecode by adding a specified number of frames to the given timecode, handling overflow for seconds, minutes, and hours.
- [AVCaptureTimecodeCreateMetadataSampleBufferAssociatedWithPresentationTimeStamp](createmetadatasamplebuffer%28from_associatedwithpresentationtimestamp_%29.md): Creates a sample buffer containing Timecode Media Description metadata for integration with a video track.
- [AVCaptureTimecodeCreateMetadataSampleBufferForDuration](createmetadatasamplebuffer%28from_forduration_%29.md): Creates a sample buffer containing Timecode Media Description metadata for a specified duration.
