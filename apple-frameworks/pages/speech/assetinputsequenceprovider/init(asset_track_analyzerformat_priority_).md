> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/assetinputsequenceprovider/init(asset:track:analyzerformat:priority:)](https://developer.apple.com/documentation/speech/assetinputsequenceprovider/init(asset:track:analyzerformat:priority:))

# init(asset:track:analyzerFormat:priority:)

**Framework:** Speech  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Creates an input sequence provider.

## Declaration

```swift
init(asset: AVAsset, track: AVAssetTrack, analyzerFormat: AVAudioFormat, priority: TaskPriority? = nil)
```

## Parameters

- `asset`: The asset to read from.
- `track`: The track to read audio samples from.
- `analyzerFormat`: The audio format to convert the audio samples to. The audio format should be one supported by the speech analyzer’s modules.
- `priority`: The desired priority of the asset-reading task.

## See Also

### Creating a provider

- [provider(from:compatibleWith:priority:)](provider%28from_compatiblewith_priority_%29.md): Returns an input sequence provider that reads from the first track of an asset or file.
- [provider(from:track:compatibleWith:priority:)](provider%28from_track_compatiblewith_priority_%29.md): Returns an input sequence provider that reads from a track of an asset.
