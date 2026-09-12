> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/naturallanguage/nlcontextualembedding/assetsresult](https://developer.apple.com/documentation/naturallanguage/nlcontextualembedding/assetsresult)

# NLContextualEmbedding.AssetsResult (Swift)

**Framework:** Natural Language  
**Kind:** Enumeration  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

The availability of the contextual embedding model assets.

## Declaration

```swift
enum AssetsResult
```

<a id="overview"></a>

## Overview

The framework downloads models over-the-air, so check asset availability and download them if needed.

```swift
if !embeddingModel.hasAvailableAssets {
    let downloadResult = try await embeddingModel.requestAssets()
    guard downloadResult == .available else {
       print("Assets are not available locally and failed to be downloaded. Check your network connection and try again later.")
       return
   }
}
```

## Topics

### Getting the result status

- [NLContextualEmbedding.AssetsResult.available](assetsresult/available.md): A result that indicates that the assets are present on-device.
- [NLContextualEmbedding.AssetsResult.notAvailable](assetsresult/notavailable.md): A result that indicates that the assets aren’t present on-device.
- [NLContextualEmbedding.AssetsResult.error](assetsresult/error.md): A result that indicates the framework encounters an error.

### Initializers

- [init(rawValue:)](assetsresult/init%28rawvalue_%29.md): Creates an embedding key with the given string as its raw value.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Requesting assets

- [requestAssets(completionHandler:)](requestassets%28completionhandler_%29.md): Requests embedding model assets and downloads them if available.

# NLContextualEmbeddingAssetsResult (Objective-C)

**Framework:** Natural Language  
**Kind:** Enumeration  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

The availability of the contextual embedding model assets.

## Declaration

```objectivec
enum NLContextualEmbeddingAssetsResult : NSInteger;
```

<a id="overview"></a>

## Overview

The framework downloads models over-the-air, so check asset availability and download them if needed.

```swift
if !embeddingModel.hasAvailableAssets {
    let downloadResult = try await embeddingModel.requestAssets()
    guard downloadResult == .available else {
       print("Assets are not available locally and failed to be downloaded. Check your network connection and try again later.")
       return
   }
}
```

## Topics

### Getting the result status

- [NLContextualEmbeddingAssetsResultAvailable](assetsresult/available.md): A result that indicates that the assets are present on-device.
- [NLContextualEmbeddingAssetsResultNotAvailable](assetsresult/notavailable.md): A result that indicates that the assets aren’t present on-device.
- [NLContextualEmbeddingAssetsResultError](assetsresult/error.md): A result that indicates the framework encounters an error.

## See Also

### Requesting assets

- [requestEmbeddingAssetsWithCompletionHandler:](requestassets%28completionhandler_%29.md): Requests embedding model assets and downloads them if available.
