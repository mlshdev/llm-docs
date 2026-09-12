> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mediaextension/merawprocessorpixelbuffermanager/pixelbufferattributes-2cki6](https://developer.apple.com/documentation/mediaextension/merawprocessorpixelbuffermanager/pixelbufferattributes-2cki6)

# pixelBufferAttributes

**Interface language:** Objective-C

**Framework:** MediaExtension  
**Kind:** Instance Property  
**Availability:** macOS 15.0+

A dictionary that contains the attributes Video Toolbox uses to create a pixel buffer for the video RAW processor.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite) NSDictionary<NSString *,id> * pixelBufferAttributes;
```

<a id="Discussion"></a>

## Discussion

The processor can update this dictionary before it requests a new pixel buffer.

## See Also

### Creating a pixel buffer

- [createPixelBufferAndReturnError:](makepixelbuffer%28%29.md): Generates a pixel buffer using the session’s pixel buffer pool.
