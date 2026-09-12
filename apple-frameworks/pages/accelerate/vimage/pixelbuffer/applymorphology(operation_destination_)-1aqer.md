> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimage/pixelbuffer/applymorphology(operation:destination:)-1aqer](https://developer.apple.com/documentation/accelerate/vimage/pixelbuffer/applymorphology(operation:destination:)-1aqer)

# applyMorphology(operation:destination:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Applies a morphology operation to the buffer.

## Declaration

```swift
func applyMorphology(operation: vImage.MorphologyOperation<Format.ComponentType>, destination: vImage.PixelBuffer<Format>)
```

## Parameters

- `operation`: The operation that the function applies.
- `destination`: The destination pixel buffer.

<a id="discussion"></a>

## Discussion

> **Precondition**

> Source and destination buffer must be the same size.

> **Precondition**

> The kernel size width and height must be positive, odd integers in the range

> **Precondition**

> `dilate` and `erode` user defined kernels must contain `width * height` elements.

> **Precondition**

> Source and destination buffers must point to different underlying memory.
