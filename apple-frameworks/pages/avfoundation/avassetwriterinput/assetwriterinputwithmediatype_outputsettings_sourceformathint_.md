> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetwriterinput/assetwriterinputwithmediatype:outputsettings:sourceformathint:](https://developer.apple.com/documentation/avfoundation/avassetwriterinput/assetwriterinputwithmediatype:outputsettings:sourceformathint:)

# assetWriterInputWithMediaType:outputSettings:sourceFormatHint:

**Interface language:** Objective-C

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+

Returns a new input that appends sample buffers of the specified type and format hint to the output file.

## Declaration

```objectivec
+ (instancetype) assetWriterInputWithMediaType:(AVMediaType) mediaType outputSettings:(NSDictionary<NSString *,id> *) outputSettings sourceFormatHint:(CMFormatDescriptionRef) sourceFormatHint;
```

## Parameters

- `mediaType`: The type of media that an input accepts.
- `outputSettings`: The settings to use for encoding the media you append to the output. Create an output settings dictionary manually, or use [AVOutputSettingsAssistant](../avoutputsettingsassistant.md) to create preset-based settings.
- `sourceFormatHint`: A hint about the format of the media data to append. The input uses the source format hint to fill in missing output settings. If you specify a hint, you only need to specify [AVFormatIDKey](../../avfaudio/avformatidkey.md) for the audio output settings, and [AVVideoCodecKey](../avvideocodeckey.md) is the only required key for video output settings.

  The system raises an error if the format description isn’t valid for the indicated media type.

<a id="return-value"></a>

## Return Value

A new asset writer input.

<a id="Discussion"></a>

## Discussion

To guarantee successful file writing, ensure that sample buffers you append are of the specified format.

## See Also

### Creating an input

- [assetWriterInputWithMediaType:outputSettings:](assetwriterinputwithmediatype_outputsettings_.md): Returns a new input to append sample buffers of the specified type to the output file.
- [initWithMediaType:outputSettings:](init%28mediatype_outputsettings_%29.md): Creates an input to append sample buffers of the specified type to the output file.
- [initWithMediaType:outputSettings:sourceFormatHint:](init%28mediatype_outputsettings_sourceformathint_%29.md): Creates an input that appends sample buffers of the specified type and format hint to the output file.
