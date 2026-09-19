> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/objectcapturesession/maximumnumberofinputimages

# maximumNumberOfInputImages

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+

The maximum number of images that can be used for on-device reconstruction.

## Declaration

```swift
@MainActor var maximumNumberOfInputImages: Int { get }
```

<a id="discussion"></a>

## Discussion

Note: the session will stop capturing images when this limit is reached unless [isOverCaptureEnabled](configuration-swift.struct/isovercaptureenabled.md) is true.
