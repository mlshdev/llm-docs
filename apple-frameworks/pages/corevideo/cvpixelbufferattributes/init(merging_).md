> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corevideo/cvpixelbufferattributes/init(merging:)

# init(merging:)

**Framework:** Core Video  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Resolve multiple attribute specifications into a single instance.

## Declaration

```swift
init?(merging values: [CVPixelBufferAttributes])
```

<a id="discussion"></a>

## Discussion

This is useful when you need to resolve multiple requirements between different potential clients of a buffer.
