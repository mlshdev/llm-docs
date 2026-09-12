> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiorecorder/init(url:format:)-7herw](https://developer.apple.com/documentation/avfaudio/avaudiorecorder/init(url:format:)-7herw)

# init(url:format:) (Swift)

**Framework:** AVFAudio  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 4.0+

Creates an audio recorder with an audio format.

## Declaration

```swift
init(url: URL, format: AVAudioFormat) throws
```

## Parameters

- `url`: The file system location to record to.
- `format`: The audio format to use for the recording.

<a id="return-value"></a>

## Return Value

A new audio recorder, or [nil](../../objectivec/nil-227m0.md) if an error occurred.

## See Also

### Creating an audio recorder

- [init(url:settings:)](init%28url_settings_%29-5whyq.md): Creates an audio recorder with settings.

# initWithURL:format:error: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 4.0+

Creates an audio recorder with an audio format.

## Declaration

```objectivec
- (instancetype) initWithURL:(NSURL *) url format:(AVAudioFormat *) format error:(NSError **) outError;
```

## Parameters

- `url`: The file system location to record to.
- `format`: The audio format to use for the recording.
- `outError`: On input, a pointer to an error object. If an error occurs, the framework sets the pointer to an [NSError](../../foundation/nserror.md) object that describes the error. If you don’t want error information, pass in `nil`.

<a id="return-value"></a>

## Return Value

A new audio recorder, or [nil](../../objectivec/nil-227m0.md) if an error occurred.

## See Also

### Creating an audio recorder

- [initWithURL:settings:error:](init%28url_settings_%29-5whyq.md): Creates an audio recorder with settings.
