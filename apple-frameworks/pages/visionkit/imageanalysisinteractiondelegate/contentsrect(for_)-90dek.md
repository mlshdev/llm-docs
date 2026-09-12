> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/visionkit/imageanalysisinteractiondelegate/contentsrect(for:)-90dek](https://developer.apple.com/documentation/visionkit/imageanalysisinteractiondelegate/contentsrect(for:)-90dek)

# contentsRect(for:)

**Framework:** VisionKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 17.0+ · visionOS 1.0+

A default unit rectangle that represents the full size of the interaction view.

## Declaration

```swift
@MainActor func contentsRect(for interaction: ImageAnalysisInteraction) -> CGRect
```

<a id="return-value"></a>

## Return Value

A unit rectangle with origin `(0, 0)` and the same width and height as the interaction view.
