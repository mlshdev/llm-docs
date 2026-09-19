> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corevideo/cvbuffer/creationattributes/init(_:)

# init(\_:)

**Framework:** Core Video  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Convert Attributes to CreationAttributes. This init will fail if [pixelFormatType](pixelformattype.md) or [size](size.md) properties are absent.

## Declaration

```swift
init?(_ attributes: CVBuffer.Attributes)
```
