> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimage_buffer/data](https://developer.apple.com/documentation/accelerate/vimage_buffer/data)

# data (Swift)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A pointer to the top-left pixel of the image.

## Declaration

```swift
var data: UnsafeMutableRawPointer!
```

## See Also

### Inspecting a buffer’s properties

- [height](height.md): The height of the image, in pixels.
- [width](width.md): The width of the image, in pixels.
- [size](size.md): The size of the image, in pixels.
- [rowBytes](rowbytes.md): The distance, in bytes, between the start of one pixel row and the next in an image, including any unused space between them.

# data (Objective-C)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A pointer to the top-left pixel of the image.

## Declaration

```objectivec
void * data;
```

## See Also

### Inspecting a buffer’s properties

- [height](height.md): The height of the image, in pixels.
- [width](width.md): The width of the image, in pixels.
- [rowBytes](rowbytes.md): The distance, in bytes, between the start of one pixel row and the next in an image, including any unused space between them.
