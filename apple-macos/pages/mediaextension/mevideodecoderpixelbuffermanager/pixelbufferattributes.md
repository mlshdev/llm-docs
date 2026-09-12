> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mediaextension/mevideodecoderpixelbuffermanager/pixelbufferattributes](https://developer.apple.com/documentation/mediaextension/mevideodecoderpixelbuffermanager/pixelbufferattributes)

# pixelBufferAttributes (Swift)

**Framework:** MediaExtension  
**Kind:** Instance Property  
**Availability:** macOS 14.0+

A dictionary that contains the attributes Video Toolbox uses to create a pixel buffer for the decoder.

## Declaration

```swift
var pixelBufferAttributes: [String : Any] { get set }
```

<a id="Discussion"></a>

## Discussion

The decoder can update this dictionary before it requests a new pixel buffer.

## See Also

### Creating a pixel buffer

- [makePixelBuffer()](makepixelbuffer%28%29.md): Generates a pixel buffer using the session’s pixel buffer pool.

# pixelBufferAttributes (Objective-C)

**Framework:** MediaExtension  
**Kind:** Instance Property  
**Availability:** macOS 14.0+

A dictionary that contains the attributes Video Toolbox uses to create a pixel buffer for the decoder.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite) NSDictionary<NSString *,id> * pixelBufferAttributes;
```

<a id="Discussion"></a>

## Discussion

The decoder can update this dictionary before it requests a new pixel buffer.

## See Also

### Creating a pixel buffer

- [createPixelBufferAndReturnError:](makepixelbuffer%28%29.md): Generates a pixel buffer using the session’s pixel buffer pool.
