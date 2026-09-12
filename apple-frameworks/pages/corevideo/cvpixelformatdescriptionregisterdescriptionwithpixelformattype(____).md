> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvpixelformatdescriptionregisterdescriptionwithpixelformattype(_:_:)](https://developer.apple.com/documentation/corevideo/cvpixelformatdescriptionregisterdescriptionwithpixelformattype(_:_:))

# CVPixelFormatDescriptionRegisterDescriptionWithPixelFormatType(\_:\_:) (Swift)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Registers a pixel format description with Core Video.

## Declaration

```swift
func CVPixelFormatDescriptionRegisterDescriptionWithPixelFormatType(_ description: CFDictionary, _ pixelFormat: OSType)
```

## Parameters

- `description`: A Core Foundation dictionary containing the pixel format description. See [Pixel Format Description Keys](pixel-format-description-keys.md) for a list of required and optional keys.
- `pixelFormat`: The four-character code (type `OSType`) identifier for this pixel format.

<a id="Discussion"></a>

## Discussion

If you are using a custom pixel format, you must register the format with Core Video using this function. See [Technical Q&A 1401: Registering Custom Pixel Formats with QuickTime and Core Video](http://developer.apple.com/qa/qa2005/qa1401.html) for more details.

## See Also

### Related Documentation

- [Core Video Programming Guide](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/CoreVideo/CVProg_Intro/CVProg_Intro.html#//apple_ref/doc/uid/TP40001536)

### Creating Format Descriptions

- [CVPixelFormatDescriptionCreateWithPixelFormatType(\_:\_:)](cvpixelformatdescriptioncreatewithpixelformattype%28____%29.md): Creates a pixel format description from a given `OSType` identifier.

# CVPixelFormatDescriptionRegisterDescriptionWithPixelFormatType (Objective-C)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Registers a pixel format description with Core Video.

## Declaration

```objectivec
extern void CVPixelFormatDescriptionRegisterDescriptionWithPixelFormatType(CFDictionaryRef description, OSType pixelFormat);
```

## Parameters

- `description`: A Core Foundation dictionary containing the pixel format description. See [Pixel Format Description Keys](pixel-format-description-keys.md) for a list of required and optional keys.
- `pixelFormat`: The four-character code (type `OSType`) identifier for this pixel format.

<a id="Discussion"></a>

## Discussion

If you are using a custom pixel format, you must register the format with Core Video using this function. See [Technical Q&A 1401: Registering Custom Pixel Formats with QuickTime and Core Video](http://developer.apple.com/qa/qa2005/qa1401.html) for more details.

## See Also

### Related Documentation

- [Core Video Programming Guide](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/CoreVideo/CVProg_Intro/CVProg_Intro.html#//apple_ref/doc/uid/TP40001536)

### Creating Format Descriptions

- [CVPixelFormatDescriptionCreateWithPixelFormatType](cvpixelformatdescriptioncreatewithpixelformattype%28____%29.md): Creates a pixel format description from a given `OSType` identifier.
