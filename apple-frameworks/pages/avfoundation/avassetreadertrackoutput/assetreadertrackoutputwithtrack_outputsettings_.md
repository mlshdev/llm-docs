> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetreadertrackoutput/assetreadertrackoutputwithtrack:outputsettings:](https://developer.apple.com/documentation/avfoundation/avassetreadertrackoutput/assetreadertrackoutputwithtrack:outputsettings:)

# assetReaderTrackOutputWithTrack:outputSettings:

**Interface language:** Objective-C

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

Returns a new object that reads media data from an asset track.

## Declaration

```objectivec
+ (instancetype) assetReaderTrackOutputWithTrack:(AVAssetTrack *) track outputSettings:(NSDictionary<NSString *,id> *) outputSettings;
```

## Parameters

- `track`: The track from which to read media samples.
- `outputSettings`: A dictionary of settings to use for sample output. Specify `nil` to receive samples in their storage format.

  You use keys and values from [Audio settings](../audio-settings.md), [Video settings](../video-settings.md), or [CVPixelBufferRef](../../corevideo/cvpixelbuffer.md), depending on the media type and the output format you require.

<a id="return-value"></a>

## Return Value

A new asset reader, or `nil` if initialization fails.

## See Also

### Creating a track output

- [initWithTrack:outputSettings:](init%28track_outputsettings_%29.md): Creates an object that reads media data from an asset track.
- [Video settings](../video-settings.md): Configure video processing settings using standard key and value constants.
