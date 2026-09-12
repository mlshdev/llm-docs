> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvpixelformatdescription/componentrange-swift.enum/video](https://developer.apple.com/documentation/corevideo/cvpixelformatdescription/componentrange-swift.enum/video)

# CVPixelFormatDescription.ComponentRange.video

**Framework:** Core Video  
**Kind:** Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Indicates that this component represents the nominal range of values in a color component using a reduced range of (usually integer) values. For example, in 8-bit YCbCr formats, video range indicates that a -1.0 to 1.0 range for chroma components is represented by the values 16 to 240, while the range of luma components is typically 16 to 235.  Values outside this range are still used for certain signaling purposes.

## Declaration

```swift
case video
```
