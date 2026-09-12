> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/imageprocessingrequest/perform(on:orientation:)-3f3f1](https://developer.apple.com/documentation/vision/imageprocessingrequest/perform(on:orientation:)-3f3f1)

# perform(on:orientation:)

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

Performs the request on image data and produces observations.

## Declaration

```swift
func perform(on data: Data, orientation: CGImagePropertyOrientation?) async throws -> Self.Result
```

## Parameters

- `data`: The input [Data](../../foundation/data.md) on which to perform the request.
- `orientation`: The orientation of the input image. Default is `nil`.

<a id="return-value"></a>

## Return Value

The observation — or list of observations — the request produces.

## Default Implementations

### ImageProcessingRequest Implementations

- [perform(on:orientation:)](perform%28on_orientation_%29-1mquz.md)
- [perform(on:orientation:)](perform%28on_orientation_%29-2q3hx.md)
- [perform(on:orientation:)](perform%28on_orientation_%29-6hrxe.md)
- [perform(on:orientation:)](perform%28on_orientation_%29-82mjf.md)
- [perform(on:orientation:)](perform%28on_orientation_%29-8wluq.md)
- [perform(on:orientation:)](perform%28on_orientation_%29-967mr.md)

## See Also

### Performing a request

- [perform(on:orientation:)](perform%28on_orientation_%29-80bya.md): Performs the request on an image URL and produces observations.
- [perform(on:orientation:)](perform%28on_orientation_%29-qxxx.md): Performs the request on a Core Graphics image and produces observations.
- [perform(on:orientation:)](perform%28on_orientation_%29-xspx.md): Performs the request on a pixel buffer and produces observations.
- [perform(on:orientation:)](perform%28on_orientation_%29-3hddl.md): Performs the request on a Core Media buffer and produces observations.
- [perform(on:orientation:)](perform%28on_orientation_%29-85ex1.md): Performs the request on a Core Image image and produces observations.
