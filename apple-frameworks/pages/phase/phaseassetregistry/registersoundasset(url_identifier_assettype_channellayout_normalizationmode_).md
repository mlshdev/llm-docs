> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phaseassetregistry/registersoundasset(url:identifier:assettype:channellayout:normalizationmode:)](https://developer.apple.com/documentation/phase/phaseassetregistry/registersoundasset(url:identifier:assettype:channellayout:normalizationmode:))

# registerSoundAsset(url:identifier:assetType:channelLayout:normalizationMode:) (Swift)

**Framework:** PHASE  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Loads a sound asset from the argument URL and adds it to the engine’s list of registered assets.

## Declaration

```swift
func registerSoundAsset(url: URL, identifier: String?, assetType: PHASEAsset.AssetType, channelLayout: AVAudioChannelLayout?, normalizationMode: PHASENormalizationMode) throws -> PHASESoundAsset
```

## Parameters

- `url`: A URL to an audio file on disk. This function doesn’t support network URLs.
- `identifier`: A unique name for the sound asset. If you provide `nil`, the framework determines and sets value for the asset’s identifier.
- `assetType`: The asset’s type.
- `channelLayout`: An object that describes an audio channel layout to replace the asset’s channel layout. This channel layout needs to have the same channel count as the asset or this function returns an error. Some multichannel files—that is, files with more than two channels—don’t contain a channel layout. WAV files may not contain a channel layout, whereas CAF files normally do. This function checks if a channel layout exists in a file and if so, PHASE uses it.

  If the asset is stereo or mono, you can pass `nil` because the framework generates the channel layout for you in that case.
- `normalizationMode`: An option to calibrate the sound asset for the user’s output device.

<a id="return-value"></a>

## Return Value

A sound asset object. If an error occurs, the function returns `nil`.

<a id="Discussion"></a>

## Discussion

To expedite audio loading, run this function for multiple assets on multiple threads. This function runs synchronously. As a thread-safe function, you can run it off the main thread.

## See Also

### Registering Sound Assets

- [registerSoundAsset(data:identifier:format:normalizationMode:)](registersoundasset%28data_identifier_format_normalizationmode_%29.md): Loads a sound asset from memory and adds it to the engine’s list of registered assets.
- [unregisterAsset(identifier:completion:)](unregisterasset%28identifier_completion_%29.md): Deallocates system memory for a given asset and removes it from the engine’s list of registered assets.

# registerSoundAssetAtURL:identifier:assetType:channelLayout:normalizationMode:error: (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Loads a sound asset from the argument URL and adds it to the engine’s list of registered assets.

## Declaration

```objectivec
- (PHASESoundAsset *) registerSoundAssetAtURL:(NSURL *) url identifier:(NSString *) identifier assetType:(PHASEAssetType) assetType channelLayout:(AVAudioChannelLayout *) channelLayout normalizationMode:(PHASENormalizationMode) normalizationMode error:(NSError **) error;
```

## Parameters

- `url`: A URL to an audio file on disk. This function doesn’t support network URLs.
- `identifier`: A unique name for the sound asset. If you provide `nil`, the framework determines and sets value for the asset’s identifier.
- `assetType`: The asset’s type.
- `channelLayout`: An object that describes an audio channel layout to replace the asset’s channel layout. This channel layout needs to have the same channel count as the asset or this function returns an error. Some multichannel files—that is, files with more than two channels—don’t contain a channel layout. WAV files may not contain a channel layout, whereas CAF files normally do. This function checks if a channel layout exists in a file and if so, PHASE uses it.

  If the asset is stereo or mono, you can pass `nil` because the framework generates the channel layout for you in that case.
- `normalizationMode`: An option to calibrate the sound asset for the user’s output device.
- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

<a id="return-value"></a>

## Return Value

A sound asset object. If an error occurs, the function returns `nil`.

<a id="Discussion"></a>

## Discussion

To expedite audio loading, run this function for multiple assets on multiple threads. This function runs synchronously. As a thread-safe function, you can run it off the main thread.

## See Also

### Registering Sound Assets

- [registerSoundAssetWithData:identifier:format:normalizationMode:error:](registersoundasset%28data_identifier_format_normalizationmode_%29.md): Loads a sound asset from memory and adds it to the engine’s list of registered assets.
- [unregisterAssetWithIdentifier:completion:](unregisterasset%28identifier_completion_%29.md): Deallocates system memory for a given asset and removes it from the engine’s list of registered assets.
