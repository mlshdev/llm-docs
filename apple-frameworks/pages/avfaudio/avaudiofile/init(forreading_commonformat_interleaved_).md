> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiofile/init(forreading:commonformat:interleaved:)](https://developer.apple.com/documentation/avfaudio/avaudiofile/init(forreading:commonformat:interleaved:))

# init(forReading:commonFormat:interleaved:) (Swift)

**Framework:** AVFAudio  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Opens a file for reading using the specified processing format.

## Declaration

```swift
init(forReading fileURL: URL, commonFormat format: AVAudioCommonFormat, interleaved: Bool) throws
```

## Parameters

- `fileURL`: The file to read.
- `format`: The processing format to use when reading from the file.
- `interleaved`: The Boolean value that indicates whether to use an interleaved processing format.

<a id="return-value"></a>

## Return Value

A new `AVAudioFile` instance you use for reading.

<a id="Discussion"></a>

## Discussion

The processing format refers to the buffers it reads from the file. The system reads the content and converts from the file format to the processing format. The processing format must be at the same sample rate as the actual file contents, and must be linear PCM. The interleaved parameter determines whether the processing buffer is in an interleaved float format.

## See Also

### Creating an Audio File

- [init(forReading:)](init%28forreading_%29.md): Opens a file for reading using the standard, deinterleaved floating point format.
- [init(forWriting:settings:)](init%28forwriting_settings_%29.md): Opens a file for writing using the specified settings.
- [init(forWriting:settings:commonFormat:interleaved:)](init%28forwriting_settings_commonformat_interleaved_%29.md): Opens a file for writing using a specified processing format and settings.

# initForReading:commonFormat:interleaved:error: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Opens a file for reading using the specified processing format.

## Declaration

```objectivec
- (instancetype) initForReading:(NSURL *) fileURL commonFormat:(AVAudioCommonFormat) format interleaved:(BOOL) interleaved error:(NSError **) outError;
```

## Parameters

- `fileURL`: The file to read.
- `format`: The processing format to use when reading from the file.
- `interleaved`: The Boolean value that indicates whether to use an interleaved processing format.
- `outError`: On input, a pointer to an error object. If an error occurs, the framework sets the pointer to an [NSError](../../foundation/nserror.md) object that describes the error. If you don’t want error information, pass in `nil`.

<a id="return-value"></a>

## Return Value

A new `AVAudioFile` instance you use for reading.

<a id="Discussion"></a>

## Discussion

The processing format refers to the buffers it reads from the file. The system reads the content and converts from the file format to the processing format. The processing format must be at the same sample rate as the actual file contents, and must be linear PCM. The interleaved parameter determines whether the processing buffer is in an interleaved float format.

## See Also

### Creating an Audio File

- [initForReading:error:](init%28forreading_%29.md): Opens a file for reading using the standard, deinterleaved floating point format.
- [initForWriting:settings:error:](init%28forwriting_settings_%29.md): Opens a file for writing using the specified settings.
- [initForWriting:settings:commonFormat:interleaved:error:](init%28forwriting_settings_commonformat_interleaved_%29.md): Opens a file for writing using a specified processing format and settings.
