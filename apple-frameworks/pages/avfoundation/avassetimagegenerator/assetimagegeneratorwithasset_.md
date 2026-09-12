> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetimagegenerator/assetimagegeneratorwithasset:](https://developer.apple.com/documentation/avfoundation/avassetimagegenerator/assetimagegeneratorwithasset:)

# assetImageGeneratorWithAsset:

**Interface language:** Objective-C

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

Returns a new object that generates images for times within a video asset.

## Declaration

```objectivec
+ (instancetype) assetImageGeneratorWithAsset:(AVAsset *) asset;
```

## Parameters

- `asset`: A video asset from which to generate images.

<a id="return-value"></a>

## Return Value

A new image generator.

## See Also

### Creating an image generator

- [initWithAsset:](init%28asset_%29.md): Creates an object that generates images for times within a video asset.
