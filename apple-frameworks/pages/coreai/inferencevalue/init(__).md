> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreai/inferencevalue/init(_:)

# init(\_:)

**Framework:** Core AI  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Creates an inference value that wraps the specified pixel buffer.

## Declaration

```swift
init(_ pixelBuffer: consuming CVMutablePixelBuffer)
```

## Parameters

- `pixelBuffer`: The pixel buffer to wrap.
