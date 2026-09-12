> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/pixelbufferobservation/cgimage](https://developer.apple.com/documentation/vision/pixelbufferobservation/cgimage)

# cgImage

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

A Core Graphics image created from the pixel buffer observation.

## Declaration

```swift
var cgImage: CGImage { get throws }
```

## See Also

### Inspecting an observation

- [RequestDescriptor](../requestdescriptor.md): A type that describes the request and revision combination.
- [pixelFormat](pixelformat.md): The four-character code that identifies the pixel format.
- [pixelBuffer](pixelbuffer.md)
- [size](size.md): The size of the image.
