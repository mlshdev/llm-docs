> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiofile/init(forreading:)](https://developer.apple.com/documentation/avfaudio/avaudiofile/init(forreading:))

# init(forReading:) (Swift)

**Framework:** AVFAudio  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Opens a file for reading using the standard, deinterleaved floating point format.

## Declaration

```swift
init(forReading fileURL: URL) throws
```

## Parameters

- `fileURL`: The file to read.

<a id="return-value"></a>

## Return Value

A new `AVAudioFile` instance you use for reading.

## See Also

### Creating an Audio File

- [init(forReading:commonFormat:interleaved:)](init%28forreading_commonformat_interleaved_%29.md): Opens a file for reading using the specified processing format.
- [init(forWriting:settings:)](init%28forwriting_settings_%29.md): Opens a file for writing using the specified settings.
- [init(forWriting:settings:commonFormat:interleaved:)](init%28forwriting_settings_commonformat_interleaved_%29.md): Opens a file for writing using a specified processing format and settings.

# initForReading:error: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Opens a file for reading using the standard, deinterleaved floating point format.

## Declaration

```objectivec
- (instancetype) initForReading:(NSURL *) fileURL error:(NSError **) outError;
```

## Parameters

- `fileURL`: The file to read.
- `outError`: On input, a pointer to an error object. If an error occurs, the framework sets the pointer to an [NSError](../../foundation/nserror.md) object that describes the error. If you don’t want error information, pass in `nil`.

<a id="return-value"></a>

## Return Value

A new `AVAudioFile` instance you use for reading.

## See Also

### Creating an Audio File

- [initForReading:commonFormat:interleaved:error:](init%28forreading_commonformat_interleaved_%29.md): Opens a file for reading using the specified processing format.
- [initForWriting:settings:error:](init%28forwriting_settings_%29.md): Opens a file for writing using the specified settings.
- [initForWriting:settings:commonFormat:interleaved:error:](init%28forwriting_settings_commonformat_interleaved_%29.md): Opens a file for writing using a specified processing format and settings.
