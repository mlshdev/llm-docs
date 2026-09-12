> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimage_buffer/init()](https://developer.apple.com/documentation/accelerate/vimage_buffer/init())

# init()

**Framework:** Accelerate  
**Kind:** Initializer  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates an empty vImage buffer.

## Declaration

```swift
init()
```

<a id="Discussion"></a>

## Discussion

Use this initializer to create an empty vImage buffer that you pass to a subsequent function that allocates and initializes the buffer’s storage and properties. For example, the following code creates an empty buffer and initializes it using the [vImageBuffer_Init(\_:\_:\_:\_:\_:)](../vimagebuffer_init%28__________%29.md) function:

```swift
var buffer = vImage_Buffer()

vImageBuffer_Init(&buffer,
                  5,    // height
                  10,   // width
                  8,    // bits per pixel
                  vImage_Flags(kvImageNoFlags))

```

## See Also

### Creating an empty vImage buffer

- [init(width:height:bitsPerPixel:)](init%28width_height_bitsperpixel_%29.md): Creates a new buffer with the specified width, height, and bits per pixel.
- [init(size:bitsPerPixel:)](init%28size_bitsperpixel_%29.md): Creates a new buffer with the specified size and bits per pixel.
