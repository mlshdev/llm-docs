> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cinematic/cnassetspatialaudioinfo-7hdev](https://developer.apple.com/documentation/cinematic/cnassetspatialaudioinfo-7hdev)

# CNAssetSpatialAudioInfo

**Framework:** Cinematic  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst · macOS 26.0+ · tvOS 26.0+

## Declaration

```swift
class CNAssetSpatialAudioInfo
```

## Topics

### Initializers

- [init(asset:)](cnassetspatialaudioinfo-7hdev/init%28asset_%29.md): Initializes an instance of `CNAssetAudioInfo` for an AVAsset object asynchronously if it meets all requirements. .

### Instance Properties

- [defaultEffectIntensity](cnassetspatialaudioinfo-7hdev/defaulteffectintensity.md): default effect intensity value as provided by the system. Supported range is \[0.0-1.0\]
- [defaultRenderingStyle](cnassetspatialaudioinfo-7hdev/defaultrenderingstyle.md): default rendering style as provided by the system
- [defaultSpatialAudioTrack](cnassetspatialaudioinfo-7hdev/defaultspatialaudiotrack.md): default `AVAssetTrack` containing Spatial Audio
- [spatialAudioMixMetadata](cnassetspatialaudioinfo-7hdev/spatialaudiomixmetadata.md): The result of audio analysis during recording which contains metadata necessary to properly configure the Audio Mix feature during playback or editing. Can be used with `AUAudioUnit` instances that support AudioUnitPropertyID `kProperty_SpatialAudioMixMetadata`

### Instance Methods

- [assetReaderOutputSettings(for:)](cnassetspatialaudioinfo-7hdev/assetreaderoutputsettings%28for_%29.md): Returns a dictionary of settings and the source track that should be used to fetch LPCM samples from this track with the effect applied
- [assetWriterInputSettings(for:)](cnassetspatialaudioinfo-7hdev/assetwriterinputsettings%28for_%29.md): Returns a dictionary of settings that should be used to encode LPCM samples using `AVAssetWriterInput`
- [audioMix(effectIntensity:renderingStyle:)](cnassetspatialaudioinfo-7hdev/audiomix%28effectintensity_renderingstyle_%29.md): Returns an instance of `AVAudioMix` encapsulating all spatial audio related data with specified effect intesnsity and rendering style.

### Type Properties

- [isSupported](cnassetspatialaudioinfo-7hdev/issupported.md): Indicates whether the current device supports Audio Mix

### Type Methods

- [assetContainsSpatialAudio(asset:)](cnassetspatialaudioinfo-7hdev/assetcontainsspatialaudio%28asset_%29.md): Check if asset meets all the requirements to operate with Spatial Audio and its accompanying effects
- [checkIfContainsSpatialAudio(asset:completionHandler:)](cnassetspatialaudioinfo-7hdev/checkifcontainsspatialaudio%28asset_completionhandler_%29.md): Check if asset meets all the requirements to operate with Spatial Audio and its accompanying effects
