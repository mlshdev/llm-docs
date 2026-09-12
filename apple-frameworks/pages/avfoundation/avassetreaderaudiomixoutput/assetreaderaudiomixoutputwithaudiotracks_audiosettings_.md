> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetreaderaudiomixoutput/assetreaderaudiomixoutputwithaudiotracks:audiosettings:](https://developer.apple.com/documentation/avfoundation/avassetreaderaudiomixoutput/assetreaderaudiomixoutputwithaudiotracks:audiosettings:)

# assetReaderAudioMixOutputWithAudioTracks:audioSettings:

**Interface language:** Objective-C

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

Creates an object that reads mixed audio from the specified audio tracks.

## Declaration

```objectivec
+ (instancetype) assetReaderAudioMixOutputWithAudioTracks:(NSArray<AVAssetTrack *> *) audioTracks audioSettings:(NSDictionary<NSString *,id> *) audioSettings;
```

## Parameters

- `audioTracks`: An array of track objects of type [AVMediaTypeAudio](../avmediatype/audio.md) from which to source the sample buffers to mix.
- `audioSettings`: Optional audio settings to use for audio output. Pass `nil` to receive the decoded samples in an uncompressed format. To determine the specific format, examine the value of the sample buffer’s [formatDescription](../../coremedia/cmsamplebuffer/formatdescription.md) property.

  For non-`nil` audio settings, the dictionary must contain values for the [Linear PCM format settings](../linear-pcm-format-settings.md) keys. The output doesn’t support the [AVSampleRateConverterAudioQualityKey](../../avfaudio/avsamplerateconverteraudioqualitykey.md) constant.

<a id="return-value"></a>

## Return Value

A new audio mix output, or `nil` if initialization fails.

## See Also

### Creating an audio mix output

- [initWithAudioTracks:audioSettings:](init%28audiotracks_audiosettings_%29.md): Creates an object that reads mixed audio from the specified audio tracks.
