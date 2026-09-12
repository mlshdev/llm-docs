> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phaseassetregistry/registersoundasset(data:identifier:format:normalizationmode:)](https://developer.apple.com/documentation/phase/phaseassetregistry/registersoundasset(data:identifier:format:normalizationmode:))

# registerSoundAsset(data:identifier:format:normalizationMode:) (Swift)

**Framework:** PHASE  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Loads a sound asset from memory and adds it to the engine’s list of registered assets.

## Declaration

```swift
func registerSoundAsset(data: Data, identifier: String?, format: AVAudioFormat, normalizationMode: PHASENormalizationMode) throws -> PHASESoundAsset
```

## Parameters

- `data`: A buffer containing the audio data to register. Audio data needs to be single-channel interleaved PCM, or per-channel de-interleaved PCM with buffers organized back to back.
- `identifier`: A unique name for the sound asset. If you provide `nil`, the framework determines and sets value for the asset’s identifier.
- `format`: And object that describes the audio data layout.
- `normalizationMode`: An option to calibrate the sound asset for the user’s output device.

<a id="return-value"></a>

## Return Value

A sound asset object. If an error occurs, the function returns `nil`.

## See Also

### Registering Sound Assets

- [registerSoundAsset(url:identifier:assetType:channelLayout:normalizationMode:)](registersoundasset%28url_identifier_assettype_channellayout_normalizationmode_%29.md): Loads a sound asset from the argument URL and adds it to the engine’s list of registered assets.
- [unregisterAsset(identifier:completion:)](unregisterasset%28identifier_completion_%29.md): Deallocates system memory for a given asset and removes it from the engine’s list of registered assets.

# registerSoundAssetWithData:identifier:format:normalizationMode:error: (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Loads a sound asset from memory and adds it to the engine’s list of registered assets.

## Declaration

```objectivec
- (PHASESoundAsset *) registerSoundAssetWithData:(NSData *) data identifier:(NSString *) identifier format:(AVAudioFormat *) format normalizationMode:(PHASENormalizationMode) normalizationMode error:(NSError **) error;
```

## Parameters

- `data`: A buffer containing the audio data to register. Audio data needs to be single-channel interleaved PCM, or per-channel de-interleaved PCM with buffers organized back to back.
- `identifier`: A unique name for the sound asset. If you provide `nil`, the framework determines and sets value for the asset’s identifier.
- `format`: And object that describes the audio data layout.
- `normalizationMode`: An option to calibrate the sound asset for the user’s output device.
- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

<a id="return-value"></a>

## Return Value

A sound asset object. If an error occurs, the function returns `nil`.

## See Also

### Registering Sound Assets

- [registerSoundAssetAtURL:identifier:assetType:channelLayout:normalizationMode:error:](registersoundasset%28url_identifier_assettype_channellayout_normalizationmode_%29.md): Loads a sound asset from the argument URL and adds it to the engine’s list of registered assets.
- [unregisterAssetWithIdentifier:completion:](unregisterasset%28identifier_completion_%29.md): Deallocates system memory for a given asset and removes it from the engine’s list of registered assets.
