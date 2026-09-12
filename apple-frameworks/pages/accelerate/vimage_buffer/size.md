> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimage_buffer/size](https://developer.apple.com/documentation/accelerate/vimage_buffer/size)

# size

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

The size of the image, in pixels.

## Declaration

```swift
var size: CGSize { get }
```

## See Also

### Inspecting a buffer’s properties

- [data](data.md): A pointer to the top-left pixel of the image.
- [height](height.md): The height of the image, in pixels.
- [width](width.md): The width of the image, in pixels.
- [rowBytes](rowbytes.md): The distance, in bytes, between the start of one pixel row and the next in an image, including any unused space between them.
