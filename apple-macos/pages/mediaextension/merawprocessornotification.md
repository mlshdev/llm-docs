> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mediaextension/merawprocessornotification](https://developer.apple.com/documentation/mediaextension/merawprocessornotification)

# MERAWProcessorNotification

**Framework:** MediaExtension  
**Kind:** Enumeration  
**Availability:** macOS 15.0+

Notifications that indicate a RAW processor state change.

## Declaration

```swift
enum MERAWProcessorNotification
```

## Topics

### Type Properties

- [readyForMoreMediaDataDidChange](merawprocessornotification/readyformoremediadatadidchange.md): A notification that indicates a change to the object’s readiness to process additional media data.
- [valuesDidChange](merawprocessornotification/valuesdidchange.md): A notification that indicates a change to the object’s set of available processing parameters.

## See Also

### RAW processors

- [MERAWProcessor](merawprocessor.md): A protocol that defines the requirements for a RAW processor.
- [MERAWProcessorExtension](merawprocessorextension.md): A protocol that defines a factory to create RAW processors for a codec type that the extension implements.
- [MERAWProcessorPixelBufferManager](merawprocessorpixelbuffermanager.md): Describes pixel buffer requirements and creates new pixel buffers.
- [MERAWProcessingParameter](merawprocessingparameter.md): An object for the RAW processor to describe each processing parameter the processor exposes.
- [RAW processor property list dictionary](raw-processor-property-list-dictionary.md): Include a property list dictionary to describe a RAW processor.
- [RAW processor entitlement](raw-processor-entitlement.md): Include an entitlement to indicate your extension is a MediaExtension RAW processor.
