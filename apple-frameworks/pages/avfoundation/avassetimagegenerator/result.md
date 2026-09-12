> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetimagegenerator/result](https://developer.apple.com/documentation/avfoundation/avassetimagegenerator/result)

# AVAssetImageGenerator.Result (Swift)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Constants that indicate the result of an image generation request.

## Declaration

```swift
enum Result
```

<a id="overview"></a>

## Overview

The constants used in the block completion handler for [generateCGImagesAsynchronously(forTimes:completionHandler:)](generatecgimagesasynchronously%28fortimes_completionhandler_%29.md).

## Topics

### Results

- [AVAssetImageGenerator.Result.succeeded](result/succeeded.md): A result that indicates that image generation succeeded.
- [AVAssetImageGenerator.Result.failed](result/failed.md): A result that indicates that image generation failed.
- [AVAssetImageGenerator.Result.cancelled](result/cancelled.md): A result that indicates you canceled image generation.

### Initializers

- [init(rawValue:)](result/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Data types

- [AVAssetImageGeneratorCompletionHandler](../avassetimagegeneratorcompletionhandler.md): A type alias for a closure that provides the result of an image generation request.

# AVAssetImageGeneratorResult (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Constants that indicate the result of an image generation request.

## Declaration

```objectivec
enum AVAssetImageGeneratorResult : NSInteger;
```

<a id="overview"></a>

## Overview

The constants used in the block completion handler for [generateCGImagesAsynchronouslyForTimes:completionHandler:](generatecgimagesasynchronously%28fortimes_completionhandler_%29.md).

## Topics

### Results

- [AVAssetImageGeneratorSucceeded](result/succeeded.md): A result that indicates that image generation succeeded.
- [AVAssetImageGeneratorFailed](result/failed.md): A result that indicates that image generation failed.
- [AVAssetImageGeneratorCancelled](result/cancelled.md): A result that indicates you canceled image generation.

## See Also

### Data types

- [AVAssetImageGeneratorCompletionHandler](../avassetimagegeneratorcompletionhandler.md): A type alias for a closure that provides the result of an image generation request.
