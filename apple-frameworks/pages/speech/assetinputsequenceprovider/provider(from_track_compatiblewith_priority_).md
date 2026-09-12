> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/assetinputsequenceprovider/provider(from:track:compatiblewith:priority:)](https://developer.apple.com/documentation/speech/assetinputsequenceprovider/provider(from:track:compatiblewith:priority:))

# provider(from:track:compatibleWith:priority:)

**Framework:** Speech  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Returns an input sequence provider that reads from a track of an asset.

## Declaration

```swift
static func provider(from asset: AVAsset, track: AVAssetTrack, compatibleWith modules: [any SpeechModule], priority: TaskPriority? = nil) async throws -> AssetInputSequenceProvider
```

## Parameters

- `asset`: The asset to read from.
- `track`: The track to read from.
- `modules`: The speech modules that will analyze the audio.
- `priority`: The desired priority of the asset-reading task.

<a id="return-value"></a>

## Return Value

An instance of this class.

## See Also

### Creating a provider

- [provider(from:compatibleWith:priority:)](provider%28from_compatiblewith_priority_%29.md): Returns an input sequence provider that reads from the first track of an asset or file.
- [init(asset:track:analyzerFormat:priority:)](init%28asset_track_analyzerformat_priority_%29.md): Creates an input sequence provider.
