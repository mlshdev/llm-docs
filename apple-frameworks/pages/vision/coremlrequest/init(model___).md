> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/vision/coremlrequest/init(model:_:)

# init(model:\_:)

**Framework:** Vision  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

Creates a Core ML request.

## Declaration

```swift
init(model: CoreMLModelContainer, _ revision: CoreMLRequest.Revision? = nil)
```

## Parameters

- `model`: The container for a Core ML model.
- `revision`: The specific algorithm or implementation that the framework uses to perform the request.
