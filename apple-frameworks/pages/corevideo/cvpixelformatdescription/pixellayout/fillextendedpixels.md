> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvpixelformatdescription/pixellayout/fillextendedpixels](https://developer.apple.com/documentation/corevideo/cvpixelformatdescription/pixellayout/fillextendedpixels)

# fillExtendedPixels

**Framework:** Core Video  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Callback which can replicate edge pixels to the extended pixels.

## Declaration

```swift
var fillExtendedPixels: (@Sendable (inout CVMutablePixelBuffer) -> Void)?
```
