> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiofile](https://developer.apple.com/documentation/avfaudio/avaudiofile)

# AVAudioFile (Swift)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An object that represents an audio file that the system can open for reading or writing.

## Declaration

```swift
class AVAudioFile
```

<a id="overview"></a>

## Overview

Regardless of the file format, you read and write using [AVAudioPCMBuffer](avaudiopcmbuffer.md) objects. These objects contain samples as [AVAudioCommonFormat](avaudiocommonformat.md) that the framework refers to as the file’s processing format. You convert to and from using the file’s actual format.

Reads and writes are always sequential. Random access is possible by setting the [framePosition](avaudiofile/frameposition.md) property.

## Topics

### Creating an Audio File

- [init(forReading:)](avaudiofile/init%28forreading_%29.md): Opens a file for reading using the standard, deinterleaved floating point format.
- [init(forReading:commonFormat:interleaved:)](avaudiofile/init%28forreading_commonformat_interleaved_%29.md): Opens a file for reading using the specified processing format.
- [init(forWriting:settings:)](avaudiofile/init%28forwriting_settings_%29.md): Opens a file for writing using the specified settings.
- [init(forWriting:settings:commonFormat:interleaved:)](avaudiofile/init%28forwriting_settings_commonformat_interleaved_%29.md): Opens a file for writing using a specified processing format and settings.

### Reading and Writing the Audio Buffer

- [read(into:)](avaudiofile/read%28into_%29.md): Reads an entire audio buffer.
- [read(into:frameCount:)](avaudiofile/read%28into_framecount_%29.md): Reads a portion of an audio buffer using the number of frames you specify.
- [read(frameCount:)](avaudiofile/read%28framecount_%29.md)
- [close()](avaudiofile/close%28%29.md): Closes the audio file.

### Getting Audio File Properties

- [url](avaudiofile/url.md): The location of the audio file.
- [fileFormat](avaudiofile/fileformat.md): The on-disk format of the file.
- [processingFormat](avaudiofile/processingformat.md): The processing format of the file.
- [length](avaudiofile/length.md): The number of sample frames in the file.
- [AVAudioFramePosition](avaudioframeposition.md): A position in an audio file or stream.
- [framePosition](avaudiofile/frameposition.md): The position in the file where the next read or write operation occurs.
- [AVAudioFrameCount](avaudioframecount.md): A number of audio sample frames.
- [AVAudioFileTypeKey](avaudiofiletypekey.md): A string that indicates the audio file type.
- [isOpen](avaudiofile/isopen.md): A Boolean value that indicates whether the file is open.

### Initializers

- [init()](avaudiofile/init%28%29.md): Deprecated.

### Instance Methods

- [write(from:)](avaudiofile/write%28from_%29-4zfhf.md)
- [write(from:)](avaudiofile/write%28from_%29-6qgec.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Supporting data types

- [AVAudioBuffer](avaudiobuffer.md): An object that represents a buffer of audio data with a format.
- [AVAudioPCMBuffer](avaudiopcmbuffer.md): An object that represents an audio buffer you use with PCM audio formats.
- [AVReadOnlyAudioPCMBuffer](avreadonlyaudiopcmbuffer.md): A read-only, Sendable audio buffer for safe concurrent access.
- [AVAudioTime](avaudiotime.md): An object you use to represent a moment in time.
- [Audio settings](audio-settings.md): Configure audio processing settings using standard key and value constants.

# AVAudioFile (Objective-C)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An object that represents an audio file that the system can open for reading or writing.

## Declaration

```objectivec
@interface AVAudioFile : NSObject
```

<a id="overview"></a>

## Overview

Regardless of the file format, you read and write using [AVAudioPCMBuffer](avaudiopcmbuffer.md) objects. These objects contain samples as [AVAudioCommonFormat](avaudiocommonformat.md) that the framework refers to as the file’s processing format. You convert to and from using the file’s actual format.

Reads and writes are always sequential. Random access is possible by setting the [framePosition](avaudiofile/frameposition.md) property.

## Topics

### Creating an Audio File

- [initForReading:error:](avaudiofile/init%28forreading_%29.md): Opens a file for reading using the standard, deinterleaved floating point format.
- [initForReading:commonFormat:interleaved:error:](avaudiofile/init%28forreading_commonformat_interleaved_%29.md): Opens a file for reading using the specified processing format.
- [initForWriting:settings:error:](avaudiofile/init%28forwriting_settings_%29.md): Opens a file for writing using the specified settings.
- [initForWriting:settings:commonFormat:interleaved:error:](avaudiofile/init%28forwriting_settings_commonformat_interleaved_%29.md): Opens a file for writing using a specified processing format and settings.

### Reading and Writing the Audio Buffer

- [readIntoBuffer:error:](avaudiofile/read%28into_%29.md): Reads an entire audio buffer.
- [readIntoBuffer:frameCount:error:](avaudiofile/read%28into_framecount_%29.md): Reads a portion of an audio buffer using the number of frames you specify.
- [close](avaudiofile/close%28%29.md): Closes the audio file.

### Getting Audio File Properties

- [url](avaudiofile/url.md): The location of the audio file.
- [fileFormat](avaudiofile/fileformat.md): The on-disk format of the file.
- [processingFormat](avaudiofile/processingformat.md): The processing format of the file.
- [length](avaudiofile/length.md): The number of sample frames in the file.
- [AVAudioFramePosition](avaudioframeposition.md): A position in an audio file or stream.
- [framePosition](avaudiofile/frameposition.md): The position in the file where the next read or write operation occurs.
- [AVAudioFrameCount](avaudioframecount.md): A number of audio sample frames.
- [AVAudioFileTypeKey](avaudiofiletypekey.md): A string that indicates the audio file type.
- [isOpen](avaudiofile/isopen.md): A Boolean value that indicates whether the file is open.

### Instance Methods

- [init](avaudiofile/init%28%29.md): Deprecated.
- [writeFromBuffer:error:](avaudiofile/write%28from_%29-6qgec.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Supporting data types

- [AVAudioBuffer](avaudiobuffer.md): An object that represents a buffer of audio data with a format.
- [AVAudioPCMBuffer](avaudiopcmbuffer.md): An object that represents an audio buffer you use with PCM audio formats.
- [AVAudioTime](avaudiotime.md): An object you use to represent a moment in time.
- [Audio settings](audio-settings.md): Configure audio processing settings using standard key and value constants.
