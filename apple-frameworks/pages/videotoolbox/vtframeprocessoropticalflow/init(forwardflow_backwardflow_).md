> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtframeprocessoropticalflow/init(forwardflow:backwardflow:)](https://developer.apple.com/documentation/videotoolbox/vtframeprocessoropticalflow/init(forwardflow:backwardflow:))

# init(forwardFlow:backwardFlow:) (Swift)

**Framework:** Video Toolbox  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 15.4+ · tvOS 26.0+ · visionOS 26.0+

Creates an object with forward and backward optical flow pixel buffers.

## Declaration

```swift
init?(forwardFlow: CVPixelBuffer, backwardFlow: CVPixelBuffer)
```

## Parameters

- `forwardFlow`: A pixel buffer that contains forward optical flow. This value must be non-NULL and IOSurface backed.
- `backwardFlow`: A pixel buffer that contains backward optical flow. his value must be non-NULL and IOSurface backed.

<a id="discussion"></a>

## Discussion

Instances retain the buffers backing them. Returns NULL if a NULL CVPixelBuffer is provided or if CVPixelBuffers are not IOSurface backed.

# initWithForwardFlow:backwardFlow: (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 15.4+ · tvOS 26.0+ · visionOS 26.0+

Creates an object with forward and backward optical flow pixel buffers.

## Declaration

```objectivec
- (instancetype) initWithForwardFlow:(CVPixelBufferRef) forwardFlow backwardFlow:(CVPixelBufferRef) backwardFlow;
```

## Parameters

- `forwardFlow`: A pixel buffer that contains forward optical flow. This value must be non-NULL and IOSurface backed.
- `backwardFlow`: A pixel buffer that contains backward optical flow. his value must be non-NULL and IOSurface backed.

<a id="discussion"></a>

## Discussion

Instances retain the buffers backing them. Returns NULL if a NULL CVPixelBuffer is provided or if CVPixelBuffers are not IOSurface backed.
