> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mediaextension/mevideodecoderpixelbuffermanager/registercustompixelformat(_:)](https://developer.apple.com/documentation/mediaextension/mevideodecoderpixelbuffermanager/registercustompixelformat(_:))

# registerCustomPixelFormat(\_:) (Swift)

**Framework:** MediaExtension  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

## Declaration

```swift
func registerCustomPixelFormat(_ customPixelFormat: [String : Any])
```

## Parameters

- `customPixelFormat`: A dictionary containing a set of keys and values as described in [CVPixelFormatDescription](https://developer.apple.com/documentation/corevideo/cvpixelformatdescription) suitable for providing as the ‘description’ parameter to [CVPixelFormatDescriptionCreateWithPixelFormatType(\_:\_:)](https://developer.apple.com/documentation/corevideo/cvpixelformatdescriptioncreatewithpixelformattype%28_:_:%29).  This must contain the custom pixel format fourCC as the value for the `kCVPixelFormatCodecType` key.

<a id="Discussion"></a>

## Discussion

This property is appropriate for decoders which produce output in a custom pixel format. This will generally only be used by decoders which produce RAW output, where the decoder’s output buffers will only be consumed by an [MERAWProcessor](../merawprocessor.md) extension which registers the same pixel format. The [MERAWProcessor](../merawprocessor.md) needs to manually register the custom pixel format using [CVPixelFormatDescriptionCreateWithPixelFormatType(\_:\_:)](https://developer.apple.com/documentation/corevideo/cvpixelformatdescriptioncreatewithpixelformattype%28_:_:%29).

# registerCustomPixelFormat: (Objective-C)

**Framework:** MediaExtension  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

## Declaration

```objectivec
- (void) registerCustomPixelFormat:(NSDictionary<NSString *,id> *) customPixelFormat;
```

## Parameters

- `customPixelFormat`: A dictionary containing a set of keys and values as described in [CVPixelFormatDescription](https://developer.apple.com/documentation/corevideo/cvpixelformatdescription) suitable for providing as the ‘description’ parameter to [CVPixelFormatDescriptionCreateWithPixelFormatType](https://developer.apple.com/documentation/corevideo/cvpixelformatdescriptioncreatewithpixelformattype%28_:_:%29).  This must contain the custom pixel format fourCC as the value for the `kCVPixelFormatCodecType` key.

<a id="Discussion"></a>

## Discussion

This property is appropriate for decoders which produce output in a custom pixel format. This will generally only be used by decoders which produce RAW output, where the decoder’s output buffers will only be consumed by an [MERAWProcessor](../merawprocessor.md) extension which registers the same pixel format. The [MERAWProcessor](../merawprocessor.md) needs to manually register the custom pixel format using [CVPixelFormatDescriptionCreateWithPixelFormatType](https://developer.apple.com/documentation/corevideo/cvpixelformatdescriptioncreatewithpixelformattype%28_:_:%29).
