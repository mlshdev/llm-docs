> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetreaderaudiomixoutput/init(audiotracks:audiosettings:)](https://developer.apple.com/documentation/avfoundation/avassetreaderaudiomixoutput/init(audiotracks:audiosettings:))

# init(audioTracks:audioSettings:) (Swift)

**Framework:** AVFoundation  
**Kind:** Initializer  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

Creates an object that reads mixed audio from the specified audio tracks.

## Declaration

```swift
init(audioTracks: [AVAssetTrack], audioSettings: [String : Any]?)
```

## Parameters

- `audioTracks`: An array of track objects of type [audio](../avmediatype/audio.md) from which to source the sample buffers to mix.
- `audioSettings`: Optional audio settings to use for audio output. Pass `nil` to receive the decoded samples in an uncompressed format. To determine the specific format, examine the value of the sample buffer’s [formatDescription](../../coremedia/cmsamplebuffer/formatdescription.md) property.

  For non-`nil` audio settings, the dictionary must contain values for the [Linear PCM format settings](../linear-pcm-format-settings.md) keys. The output doesn’t support the [AVSampleRateConverterAudioQualityKey](../../avfaudio/avsamplerateconverteraudioqualitykey.md) constant.

# initWithAudioTracks:audioSettings: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

Creates an object that reads mixed audio from the specified audio tracks.

## Declaration

```objectivec
- (instancetype) initWithAudioTracks:(NSArray<AVAssetTrack *> *) audioTracks audioSettings:(NSDictionary<NSString *,id> *) audioSettings;
```

## Parameters

- `audioTracks`: An array of track objects of type [AVMediaTypeAudio](../avmediatype/audio.md) from which to source the sample buffers to mix.
- `audioSettings`: Optional audio settings to use for audio output. Pass `nil` to receive the decoded samples in an uncompressed format. To determine the specific format, examine the value of the sample buffer’s [formatDescription](../../coremedia/cmsamplebuffer/formatdescription.md) property.

  For non-`nil` audio settings, the dictionary must contain values for the [Linear PCM format settings](../linear-pcm-format-settings.md) keys. The output doesn’t support the [AVSampleRateConverterAudioQualityKey](../../avfaudio/avsamplerateconverteraudioqualitykey.md) constant.

## See Also

### Creating an audio mix output

- [assetReaderAudioMixOutputWithAudioTracks:audioSettings:](assetreaderaudiomixoutputwithaudiotracks_audiosettings_.md): Creates an object that reads mixed audio from the specified audio tracks.
