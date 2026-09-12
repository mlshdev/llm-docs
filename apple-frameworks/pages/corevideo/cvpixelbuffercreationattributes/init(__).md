> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvpixelbuffercreationattributes/init(_:)](https://developer.apple.com/documentation/corevideo/cvpixelbuffercreationattributes/init(_:))

# init(\_:)

**Framework:** Core Video  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Convert Attributes to CreationAttributes. This init will fail if [pixelFormatType](pixelformattype.md) or [size](size.md) properties are absent.

## Declaration

```swift
init?(_ attributes: CVPixelBufferAttributes)
```
