> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiorecorder/init(url:settings:)-5whyq](https://developer.apple.com/documentation/avfaudio/avaudiorecorder/init(url:settings:)-5whyq)

# init(url:settings:) (Swift)

**Framework:** AVFAudio  
**Kind:** Initializer  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 4.0+

Creates an audio recorder with settings.

## Declaration

```swift
init(url: URL, settings: [String : Any]) throws
```

## Parameters

- `url`: The file system location to record to.
- `settings`: The audio settings to use for the recording.

<a id="return-value"></a>

## Return Value

A new audio recorder, or [nil](../../objectivec/nil-227m0.md) if an error occurred.

<a id="Discussion"></a>

## Discussion

The system supports the following keys when defining the format settings:

| Key | Supported Values |
| --- | --- |
| [AVFormatIDKey](../avformatidkey.md) | [kAudioFormatLinearPCM](../../coreaudiotypes/kaudioformatlinearpcm.md) ![](https://developer.apple.com/images/com.apple.avfaudio/spacer.png) [kAudioFormatMPEG4AAC](../../coreaudiotypes/kaudioformatmpeg4aac.md) ![](https://developer.apple.com/images/com.apple.avfaudio/spacer.png) [kAudioFormatAppleLossless](../../coreaudiotypes/kaudioformatapplelossless.md) ![](https://developer.apple.com/images/com.apple.avfaudio/spacer.png) [kAudioFormatAppleIMA4](../../coreaudiotypes/kaudioformatappleima4.md) ![](https://developer.apple.com/images/com.apple.avfaudio/spacer.png) [kAudioFormatiLBC](../../coreaudiotypes/kaudioformatilbc.md) ![](https://developer.apple.com/images/com.apple.avfaudio/spacer.png) [kAudioFormatULaw](../../coreaudiotypes/kaudioformatulaw.md) |
| [AVSampleRateKey](../avsampleratekey.md) | 8 kHz to 192 kHz |
| [AVNumberOfChannelsKey](../avnumberofchannelskey.md) | 1 to 64 |

The system supports additional configuration options based on your selected audio format. See [Linear PCM format settings](../../avfoundation/linear-pcm-format-settings.md) for information about customizing Linear PCM formats and [Encoder settings](../../avfoundation/encoder-settings.md) for compressed formats.

## See Also

### Creating an audio recorder

- [init(url:format:)](init%28url_format_%29-7herw.md): Creates an audio recorder with an audio format.

# initWithURL:settings:error: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 4.0+

Creates an audio recorder with settings.

## Declaration

```objectivec
- (instancetype) initWithURL:(NSURL *) url settings:(NSDictionary<NSString *,id> *) settings error:(NSError **) outError;
```

## Parameters

- `url`: The file system location to record to.
- `settings`: The audio settings to use for the recording.
- `outError`: On input, a pointer to an error object. If an error occurs, the framework sets the pointer to an [NSError](../../foundation/nserror.md) object that describes the error. If you don’t want error information, pass in `nil`.

<a id="return-value"></a>

## Return Value

A new audio recorder, or [nil](../../objectivec/nil-227m0.md) if an error occurred.

<a id="Discussion"></a>

## Discussion

The system supports the following keys when defining the format settings:

| Key | Supported Values |
| --- | --- |
| [AVFormatIDKey](../avformatidkey.md) | [kAudioFormatLinearPCM](../../coreaudiotypes/kaudioformatlinearpcm.md) ![](https://developer.apple.com/images/com.apple.avfaudio/spacer.png) [kAudioFormatMPEG4AAC](../../coreaudiotypes/kaudioformatmpeg4aac.md) ![](https://developer.apple.com/images/com.apple.avfaudio/spacer.png) [kAudioFormatAppleLossless](../../coreaudiotypes/kaudioformatapplelossless.md) ![](https://developer.apple.com/images/com.apple.avfaudio/spacer.png) [kAudioFormatAppleIMA4](../../coreaudiotypes/kaudioformatappleima4.md) ![](https://developer.apple.com/images/com.apple.avfaudio/spacer.png) [kAudioFormatiLBC](../../coreaudiotypes/kaudioformatilbc.md) ![](https://developer.apple.com/images/com.apple.avfaudio/spacer.png) [kAudioFormatULaw](../../coreaudiotypes/kaudioformatulaw.md) |
| [AVSampleRateKey](../avsampleratekey.md) | 8 kHz to 192 kHz |
| [AVNumberOfChannelsKey](../avnumberofchannelskey.md) | 1 to 64 |

The system supports additional configuration options based on your selected audio format. See [Linear PCM format settings](../../avfoundation/linear-pcm-format-settings.md) for information about customizing Linear PCM formats and [Encoder settings](../../avfoundation/encoder-settings.md) for compressed formats.

## See Also

### Creating an audio recorder

- [initWithURL:format:error:](init%28url_format_%29-7herw.md): Creates an audio recorder with an audio format.
