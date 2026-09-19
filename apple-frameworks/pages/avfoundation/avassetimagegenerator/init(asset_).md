> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avassetimagegenerator/init(asset:)

# init(asset:) (Swift)

**Framework:** AVFoundation  
**Kind:** Initializer  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

Creates an object that generates images for times within a video asset.

## Declaration

```swift
init(asset: AVAsset)
```

## Parameters

- `asset`: A video asset from which to generate images.

# initWithAsset: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

Creates an object that generates images for times within a video asset.

## Declaration

```objectivec
- (instancetype) initWithAsset:(AVAsset *) asset;
```

## Parameters

- `asset`: A video asset from which to generate images.

## See Also

### Creating an image generator

- [assetImageGeneratorWithAsset:](assetimagegeneratorwithasset_.md): Returns a new object that generates images for times within a video asset.
