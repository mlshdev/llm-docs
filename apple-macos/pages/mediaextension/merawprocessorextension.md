> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mediaextension/merawprocessorextension](https://developer.apple.com/documentation/mediaextension/merawprocessorextension)

# MERAWProcessorExtension (Swift)

**Framework:** MediaExtension  
**Kind:** Protocol  
**Availability:** macOS 15.0+

A protocol that defines a factory to create RAW processors for a codec type that the extension implements.

## Declaration

```swift
protocol MERAWProcessorExtension : NSObjectProtocol
```

<a id="Discussion"></a>

## Discussion

This protocol provides a factory method to create a new [MERAWProcessor](merawprocessor.md) instance for a codecType implemented by the extension. The Video Toolbox instantiates a single [MERAWProcessorExtension](merawprocessorextension.md), and creates individual [MERAWProcessor](merawprocessor.md) instances as needed. If the `CMVideoFormatDescription` passed to [makeProcessor(formatDescription:pixelBufferManager:)](merawprocessorextension/makeprocessor%28formatdescription_pixelbuffermanager_%29.md) is not compatible with the [MERAWProcessor](merawprocessor.md) implementation, the factory call should fail and return [MEError.Code.unsupportedFeature](meerror-swift.struct/code/unsupportedfeature.md).

## Topics

### Creating an extension

- [init()](merawprocessorextension/init%28%29.md): Creates a video RAW processor factory.

### Creating a RAW processor

- [makeProcessor(formatDescription:pixelBufferManager:)](merawprocessorextension/makeprocessor%28formatdescription_pixelbuffermanager_%29.md): A factory method to create a video RAW processor.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### RAW processors

- [MERAWProcessor](merawprocessor.md): A protocol that defines the requirements for a RAW processor.
- [MERAWProcessorPixelBufferManager](merawprocessorpixelbuffermanager.md): Describes pixel buffer requirements and creates new pixel buffers.
- [MERAWProcessingParameter](merawprocessingparameter.md): An object for the RAW processor to describe each processing parameter the processor exposes.
- [MERAWProcessorNotification](merawprocessornotification.md): Notifications that indicate a RAW processor state change.
- [RAW processor property list dictionary](raw-processor-property-list-dictionary.md): Include a property list dictionary to describe a RAW processor.
- [RAW processor entitlement](raw-processor-entitlement.md): Include an entitlement to indicate your extension is a MediaExtension RAW processor.

# MERAWProcessorExtension (Objective-C)

**Framework:** MediaExtension  
**Kind:** Protocol  
**Availability:** macOS 15.0+

A protocol that defines a factory to create RAW processors for a codec type that the extension implements.

## Declaration

```objectivec
@protocol MERAWProcessorExtension <NSObject>
```

<a id="Discussion"></a>

## Discussion

This protocol provides a factory method to create a new [MERAWProcessor](merawprocessor.md) instance for a codecType implemented by the extension. The Video Toolbox instantiates a single [MERAWProcessorExtension](merawprocessorextension.md), and creates individual [MERAWProcessor](merawprocessor.md) instances as needed. If the `CMVideoFormatDescription` passed to [processorWithFormatDescription:extensionPixelBufferManager:error:](merawprocessorextension/makeprocessor%28formatdescription_pixelbuffermanager_%29.md) is not compatible with the [MERAWProcessor](merawprocessor.md) implementation, the factory call should fail and return [MEErrorUnsupportedFeature](meerror-swift.struct/code/unsupportedfeature.md).

## Topics

### Creating an extension

- [init](merawprocessorextension/init%28%29.md): Creates a video RAW processor factory.

### Creating a RAW processor

- [processorWithFormatDescription:extensionPixelBufferManager:error:](merawprocessorextension/makeprocessor%28formatdescription_pixelbuffermanager_%29.md): A factory method to create a video RAW processor.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### RAW processors

- [MERAWProcessor](merawprocessor.md): A protocol that defines the requirements for a RAW processor.
- [MERAWProcessorPixelBufferManager](merawprocessorpixelbuffermanager.md): Describes pixel buffer requirements and creates new pixel buffers.
- [MERAWProcessingParameter](merawprocessingparameter.md): An object for the RAW processor to describe each processing parameter the processor exposes.
- [RAW processor property list dictionary](raw-processor-property-list-dictionary.md): Include a property list dictionary to describe a RAW processor.
- [RAW processor entitlement](raw-processor-entitlement.md): Include an entitlement to indicate your extension is a MediaExtension RAW processor.
