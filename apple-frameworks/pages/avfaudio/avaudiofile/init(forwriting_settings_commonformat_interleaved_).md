> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiofile/init(forwriting:settings:commonformat:interleaved:)](https://developer.apple.com/documentation/avfaudio/avaudiofile/init(forwriting:settings:commonformat:interleaved:))

# init(forWriting:settings:commonFormat:interleaved:) (Swift)

**Framework:** AVFAudio  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Opens a file for writing using a specified processing format and settings.

## Declaration

```swift
init(forWriting fileURL: URL, settings: [String : Any], commonFormat format: AVAudioCommonFormat, interleaved: Bool) throws
```

## Parameters

- `fileURL`: The path at which to create the file.
- `settings`: The format of the file to create.
- `format`: The processing format to use when writing to the file.
- `interleaved`: The Boolean value that indicates whether to use an interleaved processing format.

<a id="return-value"></a>

## Return Value

A new `AVAudioFile` instance for writing.

<a id="Discussion"></a>

## Discussion

This method infers the file type to create from the file extension of `fileURL`, and overwrites a file at the specified URL if a file exists.

For more information about the `settings` parameter, see the [settings](../avaudiorecorder/settings.md) property in the [AVAudioRecorder](../avaudiorecorder.md) class.

## See Also

### Related Documentation

- [url](url.md): The location of the audio file.
- [processingFormat](processingformat.md): The processing format of the file.

### Creating an Audio File

- [init(forReading:)](init%28forreading_%29.md): Opens a file for reading using the standard, deinterleaved floating point format.
- [init(forReading:commonFormat:interleaved:)](init%28forreading_commonformat_interleaved_%29.md): Opens a file for reading using the specified processing format.
- [init(forWriting:settings:)](init%28forwriting_settings_%29.md): Opens a file for writing using the specified settings.

# initForWriting:settings:commonFormat:interleaved:error: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Opens a file for writing using a specified processing format and settings.

## Declaration

```objectivec
- (instancetype) initForWriting:(NSURL *) fileURL settings:(NSDictionary<NSString *,id> *) settings commonFormat:(AVAudioCommonFormat) format interleaved:(BOOL) interleaved error:(NSError **) outError;
```

## Parameters

- `fileURL`: The path at which to create the file.
- `settings`: The format of the file to create.
- `format`: The processing format to use when writing to the file.
- `interleaved`: The Boolean value that indicates whether to use an interleaved processing format.
- `outError`: On input, a pointer to an error object. If an error occurs, the framework sets the pointer to an [NSError](../../foundation/nserror.md) object that describes the error. If you don’t want error information, pass in `nil`.

<a id="return-value"></a>

## Return Value

A new `AVAudioFile` instance for writing.

<a id="Discussion"></a>

## Discussion

This method infers the file type to create from the file extension of `fileURL`, and overwrites a file at the specified URL if a file exists.

For more information about the `settings` parameter, see the [settings](../avaudiorecorder/settings.md) property in the [AVAudioRecorder](../avaudiorecorder.md) class.

## See Also

### Related Documentation

- [url](url.md): The location of the audio file.
- [processingFormat](processingformat.md): The processing format of the file.

### Creating an Audio File

- [initForReading:error:](init%28forreading_%29.md): Opens a file for reading using the standard, deinterleaved floating point format.
- [initForReading:commonFormat:interleaved:error:](init%28forreading_commonformat_interleaved_%29.md): Opens a file for reading using the specified processing format.
- [initForWriting:settings:error:](init%28forwriting_settings_%29.md): Opens a file for writing using the specified settings.
