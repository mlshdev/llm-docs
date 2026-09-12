> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/musicunderstanding/musicunderstandingsession/init(asset:)](https://developer.apple.com/documentation/musicunderstanding/musicunderstandingsession/init(asset:))

# init(asset:)

**Framework:** Music Understanding  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Creates a music understanding session from an audio asset.

## Declaration

```swift
convenience init(asset: any AVAsset & Sendable) async throws
```

## Parameters

- `asset`: An `AVAsset` containing an audio track.

<a id="Discussion"></a>

## Discussion

Use this initializer when your audio source is an `AVAsset` rather than a streaming sequence of audio buffers.

> **Throws**

>  If the asset is unreadable, does not contain valid audio tracks, or cannot be processed for analysis.

> **Note**

>  This initializer doesn’t support HTTP livestreams (HLS). The asset must represent locally available media or a complete file.

## See Also

### Creating a session

- [init(audioProvider:)](init%28audioprovider_%29.md): Creates a music understanding session that accepts streaming audio buffers.
