> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mediaextension/merawprocessor/processingparameters](https://developer.apple.com/documentation/mediaextension/merawprocessor/processingparameters)

# processingParameters (Swift)

**Framework:** MediaExtension  
**Kind:** Instance Property  
**Availability:** macOS 15.0+

Provides a list of processing parameters that can be changed by the client of Video Toolbox session to influence processing behavior.

## Declaration

```swift
var processingParameters: [MERAWProcessingParameter] { get }
```

<a id="Discussion"></a>

## Discussion

This property value is an array of [MERAWProcessingParameter](../merawprocessingparameter.md) objects, each describing the parameter and providing an interface where the processing parameter value may be modified.

## See Also

### Inspecting a RAW processor

- [metalDeviceRegistryID](metaldeviceregistryid.md): Requests the processor use the provided Metal device for processing.
- [outputColorAttachments](outputcolorattachments.md): Returns the color-related Core Video image buffer keys and values that become attachments to the output pixel buffers.
- [isReadyForMoreMediaData](isreadyformoremediadata.md): Indicates the readiness of the processor to accept more sample buffers.

# processingParameters (Objective-C)

**Framework:** MediaExtension  
**Kind:** Instance Property  
**Availability:** macOS 15.0+

Provides a list of processing parameters that can be changed by the client of Video Toolbox session to influence processing behavior.

## Declaration

```objectivec
@property (readonly) NSArray<MERAWProcessingParameter *> * processingParameters;
```

<a id="Discussion"></a>

## Discussion

This property value is an array of [MERAWProcessingParameter](../merawprocessingparameter.md) objects, each describing the parameter and providing an interface where the processing parameter value may be modified.

## See Also

### Inspecting a RAW processor

- [metalDeviceRegistryID](metaldeviceregistryid.md): Requests the processor use the provided Metal device for processing.
- [outputColorAttachments](outputcolorattachments.md): Returns the color-related Core Video image buffer keys and values that become attachments to the output pixel buffers.
- [readyForMoreMediaData](isreadyformoremediadata.md): Indicates the readiness of the processor to accept more sample buffers.
