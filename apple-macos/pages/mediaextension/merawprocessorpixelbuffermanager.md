> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mediaextension/merawprocessorpixelbuffermanager](https://developer.apple.com/documentation/mediaextension/merawprocessorpixelbuffermanager)

# MERAWProcessorPixelBufferManager (Swift)

**Framework:** MediaExtension  
**Kind:** Class  
**Availability:** macOS 15.0+

Describes pixel buffer requirements and creates new pixel buffers.

## Declaration

```swift
class MERAWProcessorPixelBufferManager
```

<a id="Discussion"></a>

## Discussion

It contains the interfaces that the [MERAWProcessor](merawprocessor.md) uses for two tasks. First, to declare its set of requirements for output [CVPixelBuffer](https://developer.apple.com/documentation/corevideo/cvpixelbuffer-q2e) in the form of a [pixelBufferAttributes](merawprocessorpixelbuffermanager/pixelbufferattributes-2cki6.md) dictionary. Second, create pixel buffers that match processor output requirements and satisfy Video Toolbox and client requirements.

## Topics

### Creating a pixel buffer

- [pixelBufferAttributes](merawprocessorpixelbuffermanager/pixelbufferattributes-4fe69.md): A dictionary that contains the attributes Video Toolbox uses to create a pixel buffer for the video RAW processor.
- [makePixelBuffer()](merawprocessorpixelbuffermanager/makepixelbuffer%28%29.md): Generates a pixel buffer using the session’s pixel buffer pool.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### RAW processors

- [MERAWProcessor](merawprocessor.md): A protocol that defines the requirements for a RAW processor.
- [MERAWProcessorExtension](merawprocessorextension.md): A protocol that defines a factory to create RAW processors for a codec type that the extension implements.
- [MERAWProcessingParameter](merawprocessingparameter.md): An object for the RAW processor to describe each processing parameter the processor exposes.
- [MERAWProcessorNotification](merawprocessornotification.md): Notifications that indicate a RAW processor state change.
- [RAW processor property list dictionary](raw-processor-property-list-dictionary.md): Include a property list dictionary to describe a RAW processor.
- [RAW processor entitlement](raw-processor-entitlement.md): Include an entitlement to indicate your extension is a MediaExtension RAW processor.

# MERAWProcessorPixelBufferManager (Objective-C)

**Framework:** MediaExtension  
**Kind:** Class  
**Availability:** macOS 15.0+

Describes pixel buffer requirements and creates new pixel buffers.

## Declaration

```objectivec
@interface MERAWProcessorPixelBufferManager : NSObject
```

<a id="Discussion"></a>

## Discussion

It contains the interfaces that the [MERAWProcessor](merawprocessor.md) uses for two tasks. First, to declare its set of requirements for output [CVPixelBuffer](https://developer.apple.com/documentation/corevideo/cvpixelbuffer-q2e) in the form of a [pixelBufferAttributes](merawprocessorpixelbuffermanager/pixelbufferattributes-2cki6.md) dictionary. Second, create pixel buffers that match processor output requirements and satisfy Video Toolbox and client requirements.

## Topics

### Creating a pixel buffer

- [pixelBufferAttributes](merawprocessorpixelbuffermanager/pixelbufferattributes-2cki6.md): A dictionary that contains the attributes Video Toolbox uses to create a pixel buffer for the video RAW processor.
- [createPixelBufferAndReturnError:](merawprocessorpixelbuffermanager/makepixelbuffer%28%29.md): Generates a pixel buffer using the session’s pixel buffer pool.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### RAW processors

- [MERAWProcessor](merawprocessor.md): A protocol that defines the requirements for a RAW processor.
- [MERAWProcessorExtension](merawprocessorextension.md): A protocol that defines a factory to create RAW processors for a codec type that the extension implements.
- [MERAWProcessingParameter](merawprocessingparameter.md): An object for the RAW processor to describe each processing parameter the processor exposes.
- [RAW processor property list dictionary](raw-processor-property-list-dictionary.md): Include a property list dictionary to describe a RAW processor.
- [RAW processor entitlement](raw-processor-entitlement.md): Include an entitlement to indicate your extension is a MediaExtension RAW processor.
